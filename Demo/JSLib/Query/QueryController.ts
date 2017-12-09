class QueryController {
   _queryService: QidoRsProxy;
   _queryModel: QueryModel;
   _queryView: QueryView;
   _retrieveService: RetrieveService;
   _wadoUriService: WadoUriProxy;
   _delowRsProxy: DelowRsProxy;
   _viewer: WadoViewer;
   constructor
   (
      queryView: QueryView,
      queryModel: QueryModel,
      queryService: QidoRsProxy,
      retrieveService: RetrieveService,
      wadoUriService: WadoUriProxy,
      delowRsProxy: DelowRsProxy,
      viewer: WadoViewer
   ) {
      this._queryView = queryView;
      this._queryModel = queryModel;
      this._queryService = queryService;
      this._retrieveService = retrieveService;
      this._wadoUriService = wadoUriService;
      this._delowRsProxy = delowRsProxy;
      this._viewer = viewer;
      this.registerEvents();
   }

   private registerEvents()
   {
      this._queryView.instanceViewRequest.on((args) => {
         let dicomInstance: CommonDicomInstanceParams = {
            studyUID: args.InstanceParams.StudyInstanceUid,
            seriesUID: args.InstanceParams.SeriesInstanceUID,
            instanceUID: args.InstanceParams.SopInstanceUid
         };

         this._viewer.loadInstance(dicomInstance);
      });

      this._queryView.previewStudy.on((args) => {
         var query = new StudyParams();

         query.StudyInstanceUid = args.StudyParams.StudyInstanceUid;

         this._viewer.loadStudy(query);
      });

      this._queryView.qidoStudy.on((args:QidoRsEventArgs) => {
         var query = new StudyParams();

         query.StudyInstanceUid = args.StudyInstanceUID;

         var request = this.getQidoQueryParam(query, args.MediaType);

         this._queryService.findInstances(request)
            .done((xhr: XMLHttpRequest, data: any) => {
               this.showDialog("QIDO-RS Study", args.MediaType, data);

            }).fail((xhr: XMLHttpRequest) => {
               new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")" , xhr.responseText);
            });
      });

      this._queryView.qidoSeries.on((args: QidoRsEventArgs) => {
         var query = new SeriesParams();
         var request = this.getQidoQueryParam(query, args.MediaType);

         query.StudyInstanceUid  = args.StudyInstanceUID;
         query.SeriesInstanceUID = args.SeriesInstanceUID;

         this._queryService.findInstances(request)
            .done((xhr: XMLHttpRequest, data: any) => {
               this.showDialog("QIDO-RS Series", args.MediaType, data);
            })
            .fail((xhr: XMLHttpRequest) => {
               new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
      });

      this._queryView.qidoInstance.on((args: QidoRsEventArgs) => {
         var query = new InstanceParams();
         var request = this.getQidoQueryParam(query, args.MediaType);

         query.StudyInstanceUid  = args.StudyInstanceUID;
         query.SeriesInstanceUID = args.SeriesInstanceUID;
         query.SopInstanceUid    = args.SopInstanceUID;

         this._queryService.findInstances(request)
            .done((xhr: XMLHttpRequest, data: any) => {
               this.showDialog("QIDO-RS Instance", args.MediaType, data);
            })
            .fail((xhr: XMLHttpRequest) => {
               new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
      });

      this._queryView.instanceMetaDataRequest.on((args) => {
         this._retrieveService.getObjectInstanceMetadata(args.InstanceParams,
            (data: any) => {
               this._queryView.showInstanceMetadata(data, args);
            }, args.MediaType);
      });

      this._queryView.instanceRequest.on((args) => {
         this._retrieveService.getObjectInstance(args.InstanceParams,  args.MediaType,
            (data: any) => {
               appUtils.download(data, "wado-rs.txt");
            });
      });

      this._queryView.framesRequest.on((args) => {
         this._retrieveService.getFrameUncompressed(args.InstanceParams, args.FrameList,
            (data ) => {
               appUtils.download(data,"wado-rs.frm");
            },
            (ev)=>{
               new ModalDialog().showError("Error", "");
            });
      });

      this._queryView.wadoUriRequest.on((args) => {
         let instance: CommonDicomInstanceParams = {
            studyUID: args.InstanceParams.StudyInstanceUid,
            seriesUID: args.InstanceParams.SeriesInstanceUID,
            instanceUID: args.InstanceParams.SopInstanceUid
         };

         let imageParam: WadoImageParams = { frameNumber: args.Frame, transferSyntax:null };
         this._wadoUriService.getDicomInstance(instance, false, imageParam).done(
            (data) => {
               appUtils.download(data,"dicom.dcm");
            }).fail(
            (err) => {
               new ModalDialog().showError("Error", err);
            }
         );
      });
   
      this._queryView.deleteStudyRequest.on((args) => {
         this._delowRsProxy.deleteStudy(args.StudyParams.StudyInstanceUid)
            .done ( (response) => {
               new ModalDialog().show("Success");
         })
            .fail( (error) => {
               new ModalDialog().showError("Error", error);
         });
      });

      this._queryView.showStudyViewer.on((args) => {
         var studyUid = args.StudyParams.StudyInstanceUid;

         var viewerUrl = DICOMwebJS.ServerConfiguration.getOhifViewerUrl(studyUid);
         this._queryModel.selectedStudy()
         window.open(viewerUrl, "ohifViewer");
      });

      this._queryModel.StudyQueryChangedEvent = () => {
         this.queryStudies();
      };

      this._queryView.querySeries.on(() => {
         this.querySeries(this._queryModel.selectedStudy());
      });

      this._queryView.queryInstances.on(() => {
         this.queryInstances(this._queryModel.selectedSeries());
      });
   }

   queryStudies(): any {
       if (!this._queryModel.StudyQueryParams){
           return;
       }

      var params: queryParams = {
         query: this._queryModel.StudyQueryParams,
         returnValues: [],
         options: null,
         acceptType: MimeTypes.Json,
         success: null,
         error: null 
      };

      this._queryService.findStudies(params)
         .done((xhr: XMLHttpRequest, data: any) => {
            this.onQueryStudies(data);

         }).fail((xhr: XMLHttpRequest) => {
            this.onQueryError(xhr.status, xhr.responseText);
         });
   }

   querySeries(study: DicomModuleBase):any {

       if (!study) {
           return;
       }

       var params: queryParams = {
         query: study,
         returnValues: [],
         options: null,
         acceptType: MimeTypes.Json,
         success: null,
         error: null
      };

       this._queryService.findSeries(params)
         .done((xhr: XMLHttpRequest, data: any) => {
            this.onQuerySeries(data);

         }).fail((xhr: XMLHttpRequest) => {
            this.onQueryError(xhr.statusText, xhr.responseText);
         });
   }
   
   queryInstances(series: DicomModuleBase) {
       if (!series) {
           return;
       }

       var params: queryParams = {
         query: series,
         returnValues: [],
         options: null,
         acceptType: MimeTypes.Json,
         success: null,
         error: null
      };
       this._queryService.findInstances(params)
         .done((xhr: XMLHttpRequest, data: any) => {
            this.onQueryInstances(data);

       }).fail((xhr: XMLHttpRequest) => {
          this.onQueryError(xhr.statusText, xhr.responseText);
       });
   }

   onQueryStudies(data: any): any   {
      //TODO: use a model service for getting 
      //the response data and converting it
      var length:number = data.length;
      var studies: StudyParams[]= [];


      while (length--) {
         var dsService = new JsonDicomDatasetService();
         dsService.setModel(data[length]);
         studies[length] = new StudyParams(dsService);
      }

      this._queryModel.Studies = studies;
   }

   onQuerySeries(data: any): any   {
      var length: number = data.length;
      var series: SeriesParams[] = [];

      while (length--) {
         var dsService = new JsonDicomDatasetService();
         dsService.setModel(data[length]);
         series[length] = new SeriesParams(dsService);
      }
      
      this._queryModel.Series = series ;
   }

   onQueryInstances(data: any): any {
      var length: number = data.length;
      var instances: InstanceParams[] = [];

      while (length--) {
         var dsService = new JsonDicomDatasetService();
         dsService.setModel(data[length]);
         instances[length] = new InstanceParams(dsService);
      }

      this._queryModel.Instances = instances;      
   }

   private getQidoQueryParam(query:DicomModuleBase, mediaType:string) : queryParams
   {
      var request: queryParams = {
         query: query,
         returnValues: [],
         options: null,
         acceptType: mediaType,
         success : null,
         error : null
      };

      request.returnValues.push(new DicomTag(DicomTags.StudyInstanceUid));
      request.returnValues.push(new DicomTag(DicomTags.SeriesInstanceUid));
      request.returnValues.push(new DicomTag(DicomTags.SopInstanceUid));

      return request;
   }

   private showDialog(title: string, mediaType: string, data: any)
   {
      var title = title + " (" + mediaType + ")";
      var dlg = new ModalDialog("#modal-alert");


      if (mediaType == MimeTypes.Json) {
         dlg.showJson(title, data)
      }
      else {
         dlg.showXml(title, data);
      }
   }

   onQueryError(status: any, errorThrown: string)
   {
      new ModalDialog().showError("Error (HTTP Status: " + status + ")", errorThrown);
   }
} 