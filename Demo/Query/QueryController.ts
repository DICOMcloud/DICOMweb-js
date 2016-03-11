class QueryController {
   _queryService: QidoRsProxy;
   _queryModel: QueryModel;


   constructor(queryModel: QueryModel, queryService: QidoRsProxy) {
      this._queryModel = queryModel ;
      this._queryService = queryService;

      queryModel.StudyQueryChangedEvent = () => {
         this.queryStudies();
      };

      queryModel.SelectedStudyChangedEvent = () => {
          this.querySeries(this._queryModel.selectedStudy());
      };
      queryModel.SelectedSeriesChangedEvent = () => {
         this.queryInstances(this._queryModel.selectedSeries());
      };
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