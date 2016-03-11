class QueryView
{
   //these will be replaced by some event dispatcher, 
   //keep it simple for now

   private _parent: HTMLElement;
   private _model: QueryModel;
   private _retrieveService : RetrieveService;
   private _$studyItemTemplate: JQuery; 
   private _$seriesItemTemplate: JQuery; 
   private _$instanceItemTemplate: JQuery; 
   private _$selectedStudyView: JQuery;
   private _$selectedSeriesView: JQuery;
   private _$selectedInstanceView: JQuery;

   private _ViewClassName = {
      $SeriesQuery: ".series-query", $StudyQuery: ".studies-query", $InstanceQuery: ".instance-query",
      SeriesQuery: "series-query", StudyQuery: "studies-query", InstanceQuery: "instance-query" };

   constructor(parentElement: HTMLElement, model: QueryModel, retrieveService: RetrieveService) {
      this._parent = parentElement;
      this._model = model;
      this._retrieveService = retrieveService;
      this._$selectedSeriesView = $(this._ViewClassName.$SeriesQuery);
      this._$selectedInstanceView = $(this._ViewClassName.$InstanceQuery);
      this.buildQueryControl();
      this.createViewTemplates();

      model.StudiesChangedEvent = () => {
         this.renderStudies();
      };

      model.SeriesChangedEvent = () => {
         this.renderSeries();
      };


      model.InstancesChangedEvent = () => {
          this.renderInstances();
      };
   }
    
   private StudiesChangedHandler(){
      this.renderStudies();
   }

   public SeriesChangedHandler() {
      this.renderSeries();
   }

   public render() {
      this.renderStudies();
      this.renderSeries();
      this.renderInstances();
   }

   private renderStudies()
   {
      $(this._ViewClassName.$StudyQuery).html("");

      this._model.Studies.forEach((value: StudyParams, index: number, array: StudyParams[]) => {
         var $studyItem :JQuery = this.getStudyItem(value,index);
         
         $studyItem.appendTo($(this._ViewClassName.$StudyQuery));

         //TODO: a hack, needs to be designed in the UI
         if ($(this._ViewClassName.$StudyQuery).children(".col-sm-4").length % 3 == 0)
         {
            $("<div class='clearfix visible-sm-block' ></div>").appendTo($(this._ViewClassName.$StudyQuery));
         }
      });
   }

   private renderSeries() {
      this._$selectedSeriesView.html("");

      this._model.Series.forEach((value: SeriesParams, index: number, array: SeriesParams[]) => {
         var $seriesItem: JQuery = this.getSeriesItem(value, index);

         $seriesItem.appendTo(this._$selectedSeriesView);
      });
   }

   private renderInstances() {
      this._$selectedInstanceView.html("");

       this._model.Instances.forEach((value: InstanceParams, index: number, array: InstanceParams[]) => {
           var $instanceItem: JQuery = this.getInstanceItem(value, index);

           $instanceItem.appendTo(this._$selectedInstanceView);
       });
   }

   private buildQueryControl()
   {
      $("#searchButton").click((args: JQueryEventObject) => {
         args.preventDefault();
         var queryModel :StudyParams = this._model.StudyQueryParams;
         queryModel.PatientId = $("#patientIdInput").val();
         queryModel.PatientName = $("#patientNameInput").val();
         queryModel.StudyDate = $("#studyDateInput").val();
         queryModel.StudyID = $("#studyIdInput").val();
         
         this._model.StudyQueryParams = queryModel;

         return false;

      });
   }

   private createViewTemplates()
   {
      this.createStudyTemplate();
      this.createSeriesTemplate();
      this.createInstanceTemplate();
   }

   private createStudyTemplate()
   {
      var ajaxSettings: JQueryAjaxSettings = {};

      ajaxSettings.url = "/Home/_StudyItem/";
      ajaxSettings.success = (data: any, textStatus: string, jqXHR: JQueryXHR) => {
         this._$studyItemTemplate = $(data);
      };

      ajaxSettings.error = (jsXHR: JQueryXHR, testStatus: string, errorThrown: string) => {
         alert("error getting study item");
      };

      $.ajax(ajaxSettings);
   }

   private createSeriesTemplate()
   {
      $.get("/Home/_SeriesItem/", (data: any, textStatus: string, jqXHR: JQueryXHR) => {
         this._$seriesItemTemplate = $(data);
      }, "html");
   }

   private createInstanceTemplate() {
      $.get("/Home/_InstanceItem/", (data: any, textStatus: string, jqXHR: JQueryXHR) => {
         this._$instanceItemTemplate = $(data);
      }, "html");
   }
   
   private getContentView ( $parentView :JQuery, viewId:string ):JQuery
   {
      var targetItemId = $parentView.find("*[data-target]").attr("data-target");
      
      if (targetItemId) {
         var $seriesView: JQuery;

         $parentView.find("*[data-target]").attr("data-target", "#" + viewId );

         $seriesView = $parentView.find(targetItemId);

         $seriesView.attr("id", viewId);

         return $seriesView;
      }

      return null;
   }

   private getStudyItem(study: StudyParams, index: number): JQuery
   {
      var $item = this._$studyItemTemplate.clone();
      var patientName = "";
      
               
      $item.on("click", (ev: JQueryEventObject) => {
         
         this._model.SelectedStudyIndex = index;
         ev.preventDefault();
         return false;
      });
      

      if (study.PatientName)
      {
         patientName = study.PatientName.Alphabetic;
      }

      $item.find("*[data-pacs-patientName]").text(patientName);
      $item.find("*[data-pacs-accessionNumber]").text(study.AccessionNumber);
      $item.find("*[data-pacs-studyDate]").text(study.StudyDate);
      $item.find("*[data-pacs-studyID]").text(study.StudyID);
      $item.find("*[data-pacs-studyDesc]").text(study.StudyDescription);

      $item.find("*[data-pacs-studyJson]").on("click", (ev: JQueryEventObject) => {
         this._retrieveService.getStudyAsJson(study, (studyMetadata: any) => {
            var $dlg: any = $("#modal-alert");

            $dlg.find(".modal-title").text("JSON Study Response");
            $dlg.modal("show");
            $dlg.find(".modal-body").jJsonViewer(studyMetadata);

         });

         ev.preventDefault();
         return false;
      });
      
      return $item;
   }

   private getSeriesItem(series: SeriesParams, index: number): JQuery {
      var $item = this._$seriesItemTemplate.clone();

      $item.find("*[data-pacs-seriesNum]").text(series.SeriesNumber);
      $item.find("*[data-pacs-modality]").text(series.Modality);
      $item.find("*[data-pacs-seriesDesc]").text(series.SeriesDescription);
      $item.find("*[data-pacs-seriesDate]").text(series.SeriesDate);      

      $item.on("click", (ev: Event) => {

         this._model.SelectedSeriesIndex = index;

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-seriesJson]").on("click", (ev: JQueryEventObject) => {
         var $dlg: any = $("#modal-alert");

         $dlg.find(".modal-title").text("JSON Series Response");
         $dlg.find(".modal-body").text(JSON.stringify(series.DicomSourceProvider));

         $dlg.modal("show");

         ev.preventDefault();
         return false;
      });

      return $item;
   }
   
   private getInstanceItem(instance: InstanceParams, index: number): JQuery{
      var $item = this._$instanceItemTemplate.clone();

      $item.find("*[data-pacs-InstanceNum]").text(instance.InstanceNumber);
      $item.find("*[data-pacs-SopInstanceUid]").text(instance.SopInstanceUid);

      $item.find("*[data-pacs-metadata]").on("click", (ev: JQueryEventObject) => {
          this._retrieveService.getObjectAsJson(instance, (data: any) => {
             var $dlg :any= $("#modal-alert");

             $dlg.find(".modal-title").text("JSON metadata");
             $dlg.find(".modal-body").text(JSON.stringify(data));

             $dlg.modal("show");
         });

          ev.preventDefault();
          return false;
      });

      $item.find("*[data-pacs-dicom]").on("click", (ev: JQueryEventObject) => {
          this._retrieveService.DownloadObject(instance, (data: any) => {
             var $dlg: any = $("#modal-alert");

             $dlg.find(".modal-title").text("DICOM");
             $dlg.find(".modal-body").text(data);

             $dlg.modal("show");
         });
          ev.preventDefault();
          return false;
       });

       return $item;
   }
} 