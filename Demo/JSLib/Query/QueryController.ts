class QueryController {
   _queryService: QidoRsProxy;
   _queryModel: QueryModel;
   _queryView: QueryView;
   _retrieveService: RetrieveService;
   _wadoUriService: WadoUriProxy;
   _delowRsProxy: DelowRsProxy;

   constructor
   (
      queryView: QueryView,
      queryModel: QueryModel,
      queryService: QidoRsProxy,
      retrieveService: RetrieveService,
      wadoUriService: WadoUriProxy,
      delowRsProxy: DelowRsProxy
   ) {
      this._queryView = queryView;
      this._queryModel = queryModel;
      this._queryService = queryService;
      this._retrieveService = retrieveService;
      this._wadoUriService = wadoUriService;
      this._delowRsProxy = delowRsProxy;

      this.registerEvents();
   }

   private registerEvents()
   {
      this._queryView.qidoStudy.on((args:QidoRsEventArgs) => {
         var query = new StudyParams();
         var request = this.getQidoQueryParam(query, args.MediaType, "QIDO-RS Study");

         query.StudyInstanceUid = args.StudyInstanceUID;

         this._queryService.findStudies(request);
      });

      this._queryView.qidoSeries.on((args: QidoRsEventArgs) => {
         var query = new SeriesParams();
         var request = this.getQidoQueryParam(query, args.MediaType, "QIDO-RS Series");

         query.StudyInstanceUid  = args.StudyInstanceUID;
         query.SeriesInstanceUID = args.SeriesInstanceUID;

         this._queryService.findSeries(request);
      });

      this._queryView.qidoInstance.on((args: QidoRsEventArgs) => {
         var query = new InstanceParams();
         var request = this.getQidoQueryParam(query, args.MediaType, "QIDO-RS Instance");

         query.StudyInstanceUid  = args.StudyInstanceUID;
         query.SeriesInstanceUID = args.SeriesInstanceUID;
         query.SopInstanceUid    = args.SopInstanceUID;

         this._queryService.findInstances(request);
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
               appUtils.showError();
            });
      });

      this._queryView.wadoUriRequest.on((args) => {
         let instance: CommonDicomInstanceParams = {
            studyUID: args.InstanceParams.StudyInstanceUid,
            seriesUID: args.InstanceParams.SeriesInstanceUID,
            instanceUID: args.InstanceParams.SopInstanceUid
         };

         let imageParam: WadoImageParams = { frameNumber: args.Frame, transferSyntax:null };
         this._wadoUriService.getDicomInstance(instance, false, imageParam,
            (data) => {
               appUtils.download(data,"dicom.dcm");
            },
            (err) => {
               appUtils.showError();
            }
         );
      });
   
      this._queryView.deleteStudyRequest.on((args) => {
         this._delowRsProxy.deleteStudy(args.StudyParams.StudyInstanceUid)
            .done ( (response) => {
               appUtils.showInfo("Success");
         })
            .fail( (error) => {
               appUtils.showError(error);
         });
      });

      this._queryModel.StudyQueryChangedEvent = () => {
         this.queryStudies();
      };

      this._queryModel.SelectedStudyChangedEvent.on ( () => {
         this.querySeries(this._queryModel.selectedStudy());
      });

      this._queryModel.SelectedSeriesChangedEvent.on ( () => {
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
         success: (data: any) => {
            this.onQueryStudies(data);
         },
         error: this.onQueryError
      };
      this._queryService.findStudies(params);
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
         success: (data: any) => {
            this.onQuerySeries(data);
         },
         error: this.onQueryError
      };
      this._queryService.findSeries(params);
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
         success: (data: any) => {
            this.onQueryInstances(data);
         },
         error: this.onQueryError
      };
      this._queryService.findInstances(params);
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

   private getQidoQueryParam(query:DicomModuleBase, mediaType: string, operation:string) : queryParams
   {
      var request: queryParams = {
         query: query,
         returnValues: [],
         options: null,
         acceptType: mediaType,
         success : (data: any) => {
            this.showDialog(operation, mediaType, data);
         },
         error : () => {
            alert(operation + " Failed");
         }
      };

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

   onQueryError(textStatus: string, errorThrown: string)
   {
      alert(textStatus + " : " + errorThrown);
   }
} 