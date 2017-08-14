/// <reference path="../../scripts/typings/libs/ace.d.ts" />
/// <reference path="../../scripts/typings/libs/html.ts" />

class QueryView
{
   //these will be replaced by some event dispatcher, 
   //keep it simple for now
   public RetrieveInstanceEvent: (mediaType:string) => any = null;


   private _parent: HTMLElement;
   private _model: QueryModel;
   private _retrieveService : RetrieveService;
   private _$studyItemTemplate: JQuery; 
   private _$seriesItemTemplate: JQuery; 
   private _$instanceItemTemplate: JQuery; 
   private _$selectedStudyView: JQuery;
   private _$studiesView: JQuery;
   private _$seriesView: JQuery;
   private _$instanceView: JQuery;

   //EVENTS
   private _onQidoStudy = new LiteEvent<QidoRsEventArgs>();
   private _onQidoSeries = new LiteEvent<QidoRsEventArgs>();
   private _onQidoInstance = new LiteEvent<QidoRsEventArgs>();
   private _onInstanceMetadata = new LiteEvent<RsInstanceEventArgs>();
   private _onInstance = new LiteEvent<RsInstanceEventArgs>();
   private _onFrames = new LiteEvent<RsFramesEventArgs>();
   private _onWadoUri = new LiteEvent<WadoUriEventArgs>();
   private _onDeleteStudy = new LiteEvent<StudyEventArgs>();

   private _onViewInstance = new LiteEvent<WadoUriEventArgs>();

   private _ViewClassName = {
      $SeriesQuery: ".series-query", $StudyQuery: ".studies-query", $InstanceQuery: ".instance-query",
      SeriesQuery: "series-query", StudyQuery: "studies-query", InstanceQuery: "instance-query" };

   constructor(parentElement: HTMLElement, model: QueryModel, retrieveService: RetrieveService) {
      this._parent = parentElement;
      this._model = model;
      this._retrieveService = retrieveService;
      this._$studiesView = $(this._ViewClassName.$StudyQuery);
      this._$seriesView = $(this._ViewClassName.$SeriesQuery);
      this._$instanceView = $(this._ViewClassName.$InstanceQuery);
      this.buildQueryControl();
      this.createViewTemplates();

      $(".instance-details").hide();

      this.registerEvents();
   }

   public get qidoStudy() { return this._onQidoStudy; }
   public get qidoSeries() { return this._onQidoSeries; }
   public get qidoInstance() { return this._onQidoInstance; }
   public get instanceMetaDataRequest() { return this._onInstanceMetadata; }
   public get instanceRequest() { return this._onInstance; }
   public get framesRequest() { return this._onFrames; }
   public get wadoUriRequest() { return this._onWadoUri; }

   public get deleteStudyRequest() { return this._onDeleteStudy; }

   public get instanceViewRequest() { return this._onViewInstance; }
   
   public clearInstanceMetadata()
   {
      var editor;
      var editorSession;


      editor = ace.edit($(".pacs-metadata-viewer")[0]);

      editorSession = editor.getSession();
      editorSession.setValue("");
   }
   public showInstanceMetadata(data: any, args: RsInstanceEventArgs)
   {
      if (args.MediaType == MimeTypes.Json) { this.renderJson($(".pacs-metadata-viewer"), data); }
      if (args.MediaType == MimeTypes.xmlDicom) { this.renderXml($(".pacs-metadata-viewer"), data); }
   }

   private bin2String(array: any) {
      return String.fromCharCode.apply(String, array);
   }

   private registerEvents()
   {
      this._model.StudiesChangedEvent = () => {
         this.renderStudies();
      };

      this._model.SeriesChangedEvent = () => {
         this.renderSeries();
      };


      this._model.InstancesChangedEvent = () => {
         this.renderInstances();
      };

      this._model.SelectedStudyChangedEvent.on(() => {
         var index = this._model.SelectedStudyIndex;

         this._$studiesView.find(".thumbnail").removeClass("selected");

         if (index != -1) {
            this._$studiesView.find(".thumbnail").eq(index).addClass("selected");
            $(".study-overview").text("| (Patient: " + this._model.Studies[index].PatientName.Alphabetic + ")");
         }
         else
         {
            $(".study-overview").text("");
         }
      });

      this._model.SelectedSeriesChangedEvent.on(() => {
         var index = this._model.SelectedSeriesIndex;


         this._$seriesView.find(".thumbnail").removeClass("selected");

         if (index != -1) {
            this._$seriesView.find(".thumbnail").eq(index).addClass("selected");
         }
      });

      this._model.SelectedInstanceChangedEvent.on(() => {
         var index = this._model.SelectedInstanceIndex;
         this._$instanceView.find(".thumbnail").removeClass("selected");
         this.clearInstanceMetadata();
         if (index == -1) {
            $(".instance-details").hide();
         }
         else {
            this._$instanceView.find(".thumbnail").eq(index).addClass("selected");

            $(".instance-details").show();
         }
      });

      $("*[data-rs-frames]").on("click", (ev: JQueryEventObject) => {
         var instance = this._model.selectedInstance();

         if (instance) {
            var frameList = this.geFramsList();
            var args = new RsFramesEventArgs(instance, $(ev.target).attr("data-pacs-args"), frameList);

            this._onFrames.trigger(args);
         }

         ev.preventDefault();
         return false;
      });

      $("*[data-uri-instance]").on("click", (ev: JQueryEventObject) => {
         var instance = this._model.selectedInstance();

         if (instance) {
            var frame = this.geUriFrame();
            var args = new WadoUriEventArgs(instance, $(ev.target).attr("data-pacs-args"), frame);

            this._onWadoUri.trigger(args);
         }

         ev.preventDefault();
         return false;
      });
      
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
         var $studyItem :JQuery = this.createStudyItem(value,index);
         
         $studyItem.appendTo($(this._ViewClassName.$StudyQuery));

      });

      if (!$("#studyCollapse").hasClass("in")) {
         $("#studyCollapse").collapse("show");
      }

      $("*[data-pacs-study-count]").text(this._model.Studies.length);

   }

   private renderSeries() {
      this._$seriesView.html("");

      this._model.Series.forEach((value: SeriesParams, index: number, array: SeriesParams[]) => {
         var $seriesItem: JQuery = this.createSeriesItem(value, index);

         $seriesItem.appendTo(this._$seriesView);
      });

      $("#seriesCollapse").collapse("show");

      $("*[data-pacs-series-count]").text(this._model.Series.length);
   }

   private renderInstances() {
      this._$instanceView.html("");
      this.renderJson($(".pacs-metadata-viewer"), "");

       this._model.Instances.forEach((value: InstanceParams, index: number, array: InstanceParams[]) => {
           var $instanceItem: JQuery = this.createInstanceItem(value, index);

           $instanceItem.appendTo(this._$instanceView);
      });

       $("#instanceCollapse").collapse("show");

       $("*[data-pacs-instance-count]").text(this._model.Instances.length);
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

   //TODO: zaid-move this to the app
   private createViewTemplates()
   {
      this.createStudyTemplate();
      this.createSeriesTemplate();
      this.createInstanceTemplate();
   }

   private getTemplateRelativePath(templatePath: string): string
   {
      //take the relative path name and remove / if exists
      return window.location.pathname.replace(/\/$/, "") + templatePath;
   }

   private createStudyTemplate()
   {
      var ajaxSettings: JQueryAjaxSettings = {};


      ajaxSettings.url     = this.getTemplateRelativePath("/_StudyItem/");
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
      $.get(this.getTemplateRelativePath("/_SeriesItem/"), (data: any, textStatus: string, jqXHR: JQueryXHR) => {
         this._$seriesItemTemplate = $(data);
      }, "html");
   }

   private createInstanceTemplate() {
      $.get(this.getTemplateRelativePath("/_InstanceItem/"), (data: any, textStatus: string, jqXHR: JQueryXHR) => {
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

   private createStudyItem(study: StudyParams, index: number): JQuery
   {
      var $item = this._$studyItemTemplate.clone();
      var patientName = "";
      
               
      if (study.PatientName)
      {
         patientName = study.PatientName.Alphabetic;
      }

      $item.find("*[data-pacs-patientName]").text(patientName);
      $item.find("*[data-pacs-patientId]").text(study.PatientId);
      $item.find("*[data-pacs-accessionNumber]").text(study.AccessionNumber);
      $item.find("*[data-pacs-studyDate]").text(study.StudyDate);
      $item.find("*[data-pacs-studyID]").text(study.StudyID);
      $item.find("*[data-pacs-studyDesc]").text(study.StudyDescription);

      this.registerStudyEvents(study, $item, index);
      
      return $item;
   }
   
   private createSeriesItem(series: SeriesParams, index: number): JQuery {
      var $item = this._$seriesItemTemplate.clone();

      this.updateSeriesItem(series, $item);

      this.registerSeriesEvents(series, $item, index);

      return $item;
   }
   
   private createInstanceItem(instance: InstanceParams, index: number): JQuery{
      var $item = this._$instanceItemTemplate.clone();

      $item.find("*[data-pacs-InstanceNum]").text(instance.InstanceNumber);
      //$item.find("*[data-pacs-SopInstanceUid]").text(instance.SopInstanceUid);

      this.registerInstanceEvents(instance, $item, index);

      return $item;
   }
   
   private updateSeriesItem(series: SeriesParams, $item: JQuery)
   {
      $item.find("*[data-pacs-seriesNum]").text(series.SeriesNumber);
      $item.find("*[data-pacs-modality]").text(series.Modality);
      $item.find("*[data-pacs-seriesDesc]").text(series.SeriesDescription);
      $item.find("*[data-pacs-seriesDate]").text(series.SeriesDate);      
   }

   private registerStudyEvents(study: StudyParams, $item: JQuery, index: number)
   {
      $item.find(".thumbnail").on("click", (ev: JQueryEventObject) => {
         this._model.SelectedStudyIndex = index;

         $("#studyCollapse").collapse("hide");

         ev.preventDefault();

         return false;
      });

      $item.find("*[data-pacs-study-json]").on("click", (ev: JQueryEventObject) => {

         this._retrieveService.getStudyAsJson(study, (studyInstances: any) => {
            this.ViewJsonDlg(studyInstances, "(" + studyInstances.length + ") Study Instances Response");
         });

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-study-xml]").on("click", (ev: JQueryEventObject) => {

         this._retrieveService.getStudyAsXml(study, (studyInstances: any) => {
            this.ViewXmlDlg(studyInstances, "Multipart DICOM+XML Study Instances Response");
         });

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-viewQidoStudy="json"]').on("click", (ev: JQueryEventObject) => {
         var args = new QidoRsEventArgs(MimeTypes.Json, study.StudyInstanceUid);

         this._onQidoStudy.trigger(args);

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-viewQidoStudy="xml"]').on("click", (ev: JQueryEventObject) => {
         var args = new QidoRsEventArgs(MimeTypes.xmlDicom, study.StudyInstanceUid);

         this._onQidoStudy.trigger(args);

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-deletestudy="true"]').on("click", (ev: JQueryEventObject) => {
         var args = new StudyEventArgs(study);

         this._onDeleteStudy.trigger(args);

         ev.preventDefault();
         return false;
      });

   }

   private registerSeriesEvents(series: SeriesParams, $item: JQuery, index:number) {
      $item.find(".panel-body").on("click", (ev: Event) => {
         this._model.SelectedSeriesIndex = index;

         $("#seriesCollapse").collapse("hide");

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-series-json]").on("click", (ev: JQueryEventObject) => {
         this._retrieveService.getSeries(series, (seriesInstances: any) => {
            this.ViewJsonDlg(seriesInstances, "(" + seriesInstances.length + ") Series Instances Response");
         }, MimeTypes.Json);

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-series-xml]").on("click", (ev: JQueryEventObject) => {

         this._retrieveService.getSeries(series, (seriesInstances: any) => {
            this.ViewXmlDlg(seriesInstances, "Multipart DICOM+XML Study Instances Response");
         }, MimeTypes.xmlDicom);

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-viewQidoSeries="json"]').on("click", (ev: JQueryEventObject) => {
         var args = new QidoRsEventArgs(MimeTypes.Json, series.StudyInstanceUid, series.SeriesInstanceUID);

         this._onQidoSeries.trigger(args);

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-viewQidoSeries="xml"]').on("click", (ev: JQueryEventObject) => {
         var args = new QidoRsEventArgs(MimeTypes.xmlDicom, series.StudyInstanceUid, series.SeriesInstanceUID);

         this._onQidoSeries.trigger(args);

         ev.preventDefault();
         return false;
      });
   }

   private registerInstanceEvents(instance: InstanceParams, $item: JQuery, index: number) {

      $item.find(".panel-body").on("click", (ev: JQueryEventObject) => {
         this._model.SelectedInstanceIndex = index;

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-viewQidoInstance="json"]').on("click", (ev: JQueryEventObject) => {
         var args = new QidoRsEventArgs(MimeTypes.Json, instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid);

         this._onQidoInstance.trigger(args);

         ev.preventDefault();
         return false;
      });

      $item.find('*[data-pacs-viewQidoInstance="xml"]').on("click", (ev: JQueryEventObject) => {
         var args = new QidoRsEventArgs(MimeTypes.xmlDicom, instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid);

         this._onQidoInstance.trigger(args);

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-instance-json]").on("click", (ev: JQueryEventObject) => {
         this._retrieveService.getObjectInstanceMetadata(instance, (instanceJson: any) => {
            this.ViewJsonDlg(instanceJson, "Instance Response");
         }, MimeTypes.Json );

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-instance-xml]").on("click", (ev: JQueryEventObject) => {

         this._retrieveService.getObjectInstanceMetadata(instance, (instanceXml: any) => {
            this.ViewXmlDlg(instanceXml, "Multipart DICOM+XML Instance Response");
         }, MimeTypes.xmlDicom);

         ev.preventDefault();
         return false;
      });


      $item.find("*[data-pacs-viewInstanceViewer]").on("click", (ev: JQueryEventObject) => {
         this._onViewInstance.trigger(new WadoUriEventArgs(instance, MimeTypes.DICOM, ""));
         ev.preventDefault();
         return false;
      });

      $item.find("*[data-rs-instance]").on("click", (ev: JQueryEventObject) => {
         var args = new RsInstanceEventArgs(instance, $(ev.target).attr("data-pacs-args"));
         this._onInstance.trigger(args);

         ev.preventDefault();
         return false;
      });
  }

   private geFramsList() : string
   {
      var frameNumber: string;

      frameNumber = $("*[data-rs-frames-input]").val();

      if (frameNumber)
      {
         return frameNumber ;
      }

      return "1";
   }

   private geUriFrame(): string
   {
      return $("*[data-uri-frame-input]").val();
   }

   public ViewJsonDlg(data: any, caption: string) {
      var dlg = new ModalDialog("#modal-alert");

      dlg.showJson(caption, data);
   }

   public ViewXmlDlg(data: any, caption: string)
   {
      var dlg = new ModalDialog("#modal-alert");

      dlg.showXml(caption, data);
   }


   private renderJson($contentElement: JQuery, data: any) {
      var editor;
      var editorSession;


      editor = ace.edit($contentElement[0]);

      editorSession = editor.getSession();
      editorSession.setValue(JSON.stringify(data, null, '\t'));
      editorSession.setMode("ace/mode/json");

      editor.resize();

   }

   private renderXml($contentElement: JQuery, data: any) {
      var editor;
      var editorSession;


      editor = ace.edit($contentElement[0]);

      editorSession = editor.getSession();
      editorSession.setValue(data);
      editorSession.setMode("ace/mode/html");

      editor.resize();
   }

}
