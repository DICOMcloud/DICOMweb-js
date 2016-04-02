class QueryController {
   _queryService: QidoRsProxy;
   _queryModel: QueryModel;
   _queryView: QueryView;
   _retrieveService: WadoRsProxy;
   _wadoUriService : WadoUriProxy;

   constructor
   (
      queryView: QueryView,
      queryModel: QueryModel,
      queryService: QidoRsProxy,
      retrieveService: WadoRsProxy,
      wadoUriService: WadoUriProxy
   ) {
      this._queryView = queryView;
      this._queryModel = queryModel;
      this._queryService = queryService;
      this._retrieveService = retrieveService;
      this._wadoUriService = wadoUriService;
      this.registerEvents();
   }

   private registerEvents()
   {
      this._queryView.instanceMetaDataRequest.on((args) => {
         this._retrieveService.getObjectInstanceMetadata(args.InstanceParams.StudyInstanceUid,
            args.InstanceParams.SeriesInstanceUID,
            args.InstanceParams.SopInstanceUid,
            args.MediaType,
            (data: any, textStatus: string, jqXHR: JQueryXHR) => {
               this._queryView.showInstanceMetadata(data, args);
            });
      });

      this._queryView.instanceRequest.on((args) => {
         this._retrieveService.getObjectInstance(args.InstanceParams.StudyInstanceUid,
            args.InstanceParams.SeriesInstanceUID,
            args.InstanceParams.SopInstanceUid,
            args.MediaType,
            (data: any, textStatus: string, jqXHR: JQueryXHR) => {
               this._queryView.download(data);
            },
            (ev) => {
               this._queryView.showError();
            });
      });

      this._queryView.framesRequest.on((args) => {
         this._retrieveService.getFrame(args.InstanceParams.StudyInstanceUid,
            args.InstanceParams.SeriesInstanceUID,
            args.InstanceParams.SopInstanceUid,
            args.FrameList,
            args.MediaType,
            (data, textStatus, xhr) => {
               this._queryView.download(data);
            },
            (ev)=>{
               this._queryView.showError();
            });
      });

      this._queryView.wadoUriRequest.on((args) => {
         let instance: CommonDicomInstanceParams = {
            studyUID: args.InstanceParams.StudyInstanceUid,
            seriesUID: args.InstanceParams.SeriesInstanceUID,
            instanceUID: args.InstanceParams.SopInstanceUid
         };

         let imageParam: WadoImageParams = { frameNumber: args.Frame };
         this._wadoUriService.getDicomInstance(instance, false, imageParam,
            (data) => {
               this._queryView.download(data);
            },
            (err) => {
               this._queryView.showError();
            }
         );
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

   onQueryError(textStatus: string, errorThrown: string)
   {
      alert(textStatus + " : " + errorThrown);
   }
} 