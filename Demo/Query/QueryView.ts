
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
   private _onInstanceMetadata = new LiteEvent<RsInstanceEventArgs> ();
   private _onInstance = new LiteEvent<RsInstanceEventArgs>();
   private _onFrames = new LiteEvent<RsFramesEventArgs>();
   private _onWadoUri = new LiteEvent<WadoUriEventArgs>();

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

   public get instanceMetaDataRequest() { return this._onInstanceMetadata; }
   public get instanceRequest() { return this._onInstance; }
   public get framesRequest() { return this._onFrames; }
   public get wadoUriRequest() { return this._onWadoUri;}
   
   public showError()
   {
      alert("error");
   }

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
      //$(".pacs-metadata-viewer").text(JSON.stringify(objectInstance, null, "\t"));

      if (args.MediaType == MimeTypes.Json) { this.renderJson($(".pacs-metadata-viewer"), data); }
      if (args.MediaType == MimeTypes.xmlDicom) { this.renderXml($(".pacs-metadata-viewer"), this.bin2String(data)); }
   }

   public download(data: any) {
      //http://stackoverflow.com/questions/16086162/handle-file-download-from-ajax-post/23797348#23797348
      var filename = "dicom.txt";
      var blob = new Blob([data], { type: "application/octec-stream" });
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
         // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
         window.navigator.msSaveBlob(blob, filename);
      }
      else {
         var URL = window.URL || window.webkitURL;
         var downloadUrl = URL.createObjectURL(blob);

         if (filename) {
            // use HTML5 a[download] attribute to specify filename
            var a = document.createElement("a");
            // safari doesn't support this yet
            if (typeof a.download === 'undefined') {
               window.location = downloadUrl;
            } else {
               a.href = downloadUrl;
               a.download = filename;
               document.body.appendChild(a);
               a.click();
               //TODO: this should be added, need testing
               //document.body.removeChild(a);
            }
         } else {
            window.location = downloadUrl;
         }
      }
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

         this._$studiesView.children(".thumbnail").removeClass("selected");

         if (index != -1) {
            this._$studiesView.children(".thumbnail").eq(index).addClass("selected");
         }
      });

      this._model.SelectedSeriesChangedEvent.on(() => {
         var index = this._model.SelectedSeriesIndex;


         this._$seriesView.children(".thumbnail").removeClass("selected");

         if (index != -1) {
            this._$seriesView.children(".thumbnail").eq(index).addClass("selected");
         }
      });

      this._model.SelectedInstanceChangedEvent.on(() => {
         var index = this._model.SelectedInstanceIndex;
         this._$instanceView.children(".thumbnail").removeClass("selected");
         this.clearInstanceMetadata();
         if (index == -1) {
            $(".instance-details").hide();
         }
         else {
            this._$instanceView.children(".thumbnail").eq(index).addClass("selected");

            $(".instance-details").show();
         }
      });

      $("*[data-rs-xml]").on("click", (ev:JQueryEventObject) => {
         this._retrieveService.getObjectAsXml(this._model.selectedInstance(), (objectInstance: any) => {
            //$(".pacs-metadata-viewer").text(JSON.stringify(objectInstance, null, "\t"));
            this.renderXml($(".pacs-metadata-viewer"), this.bin2String(objectInstance));
         });
         ev.preventDefault();
         return false;
      });

      $("*[data-rs-metadata]").on("click", (ev: JQueryEventObject) => {
         var instance = this._model.selectedInstance();

         if (instance) {
            var args = new RsInstanceEventArgs(instance, $(ev.target).attr("data-pacs-args"));
            this._onInstanceMetadata.trigger(args);
         }

         ev.preventDefault();
         return false;
      });

      $("*[data-rs-instance]").on("click", (ev: JQueryEventObject) => {
         var instance = this._model.selectedInstance();

         if (instance) {
            var args = new RsInstanceEventArgs(instance, $(ev.target).attr("data-pacs-args"));
            this._onInstance.trigger(args);
         }

         ev.preventDefault();
         return false;
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

         //TODO: a hack, needs to be designed in the UI
         if ($(this._ViewClassName.$StudyQuery).children(".col-sm-4").length % 3 == 0)
         {
            $("<div class='clearfix visible-sm-block' ></div>").appendTo($(this._ViewClassName.$StudyQuery));
         }
      });

      if (!$("#studyCollapse").hasClass("in")) {
         $("#studyCollapse").collapse("show");
      }
   }

   private renderSeries() {
      this._$seriesView.html("");

      this._model.Series.forEach((value: SeriesParams, index: number, array: SeriesParams[]) => {
         var $seriesItem: JQuery = this.createSeriesItem(value, index);

         $seriesItem.appendTo(this._$seriesView);
      });

      $("#seriesCollapse").collapse("show");
   }

   private renderInstances() {
      this._$instanceView.html("");
      this.renderJson($(".pacs-metadata-viewer"), "");

       this._model.Instances.forEach((value: InstanceParams, index: number, array: InstanceParams[]) => {
           var $instanceItem: JQuery = this.createInstanceItem(value, index);

           $instanceItem.appendTo(this._$instanceView);
      });

       $("#instanceCollapse").collapse("show");

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

      ajaxSettings.url = "/Demo/_StudyItem/";
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
      $.get("/Demo/_SeriesItem/", (data: any, textStatus: string, jqXHR: JQueryXHR) => {
         this._$seriesItemTemplate = $(data);
      }, "html");
   }

   private createInstanceTemplate() {
      $.get("/Demo/_InstanceItem/", (data: any, textStatus: string, jqXHR: JQueryXHR) => {
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
      $item.find("*[data-pacs-SopInstanceUid]").text(instance.SopInstanceUid);

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
      $item.on("click", (ev: JQueryEventObject) => {
         this._model.SelectedStudyIndex = index;

         $("#studyCollapse").collapse("hide");

         ev.preventDefault();

         return false;
      });

      $item.find("*[data-pacs-studyJson]").on("click", (ev: JQueryEventObject) => {

         this._retrieveService.getStudyAsJson(study, (studyInstances: any) => {
            this.ViewJsonDlg(studyInstances, "(" + studyInstances.length + ") Study Instances Response");
         });

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-viewQidoStudy]").on("click", (ev: JQueryEventObject) => {
         this.ViewJsonDlg(study.DicomSourceProvider.getSourceDataset(), "Study QIDO Response");


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

      $item.find("*[data-pacs-seriesJson]").on("click", (ev: JQueryEventObject) => {
         this._retrieveService.getStudyAsJson(series, (seriesInstances: any) => {
            this.ViewJsonDlg(seriesInstances, "(" + seriesInstances.length + ") Series Instances Response");
         });

         ev.preventDefault();
         return false;
      });

      $item.find("*[data-pacs-viewQidoSeries]").on("click", (ev: JQueryEventObject) => {
         this.ViewJsonDlg(series.DicomSourceProvider.getSourceDataset(), "Series QIDO Response");
         
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

      $item.find("*[data-pacs-viewQidoInstance]").on("click", (ev: JQueryEventObject) => {
         this.ViewJsonDlg(instance.DicomSourceProvider.getSourceDataset(), "Qido Instance ");

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

   private ViewJsonDlg(data: any, caption: string) {
      var dlg = new ModalDialog("#modal-alert");

      dlg.showJson(caption, data);
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
