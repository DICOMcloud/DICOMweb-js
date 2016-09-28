window.onload = () => {
   new app();
};

declare var serverUrl: string;

class app {

   constructor() {
      this.init();
   }

   private init(): void {
      if (typeof(serverUrl) != "undefined") {
         DICOMwebJS.ServerConfiguration.BaseServerUrl = serverUrl;
      }
      else {
         DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
      }
      
      var model = new QueryModel();
      var rsProxy = new WadoRsProxy(DICOMwebJS.ServerConfiguration.getWadoRsUrl());
      var uriProxy = new WadoUriProxy(DICOMwebJS.ServerConfiguration.getWadoUriUrl());
      var qidoProxy = new QidoRsProxy(DICOMwebJS.ServerConfiguration.getQidoUrl());
      var rsService = new RetrieveService(rsProxy);
      var queryView = new QueryView(document.getElementById("#content"), model, rsService );
      var queryController = new QueryController(queryView, model, qidoProxy, rsService, uriProxy);
      //var viewer = this.initViewer();


      queryView.instanceViewRequest.on((args) => {
         let instance: CommonDicomInstanceParams = {
            studyUID: args.InstanceParams.StudyInstanceUid,
            seriesUID: args.InstanceParams.SeriesInstanceUID,
            instanceUID: args.InstanceParams.SopInstanceUid
         };

         let imageParam: WadoImageParams = { frameNumber: args.Frame };
         var instanceUrl = uriProxy.createUrl(instance, args.MediaType, imageParam);
         var dlg = new ModalDialog("#image-viewer");

         dlg.dilaogClosed.on((dlgName) => {
            //viewer.reset();
         });
         //dlg.show(args.InstanceParams.PatientName.Alphabetic);
         // load dicom data
         //$('#wadoURL').val(instanceUrl);
         //viewer.loadURLs([instanceUrl]);

         $('.nav-tabs a[href="#_ViewerView"]').tab('show');

         var element = $('#dicomImage').get(0);

         cornerstone.enable(element);

         cornerstone.resize(element, true);

         $(window).resize(function () {
            cornerstone.resize(element, true);
         })
         loadAndViewImage(instanceUrl);
      });


      this.initStore();
      window.onerror = function (message, url, lineNumber) {
         //save error and send to server for example.
         alert(message + "\n" + url + "\n" + lineNumber);
         return true;
      };  

      $($("#serverList")).change(function () {
         DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
         rsProxy.BaseUrl =  DICOMwebJS.ServerConfiguration.getWadoRsUrl();
         uriProxy.BaseUrl = DICOMwebJS.ServerConfiguration.getWadoUriUrl();
         qidoProxy.BaseUrl = DICOMwebJS.ServerConfiguration.getQidoUrl();
      });
   }

   //public initViewer() {
   //   // base function to get elements
   //   dwv.gui.getElement = dwv.gui.base.getElement;
   //   dwv.gui.displayProgress = function (percent) { };

   //   // create the dwv app
   //   var viewer = new dwv.App();
   //   // initialise with the id of the container div
   //   viewer.init({
   //      "containerDivId": "dwv",
   //      "tools": ["WindowLevel"], // or try "ZoomAndPan"
   //   });

   //   return viewer;
   //}

   public initStore() {

      $("#addFileButton").click((e) => {
         e.preventDefault();
         var newName = jQuery('#displayName').val();

         // Initiate method calls using jQuery promises.
         // Get the local file as an array buffer.
         var getFile = this.getFileBuffer();
         var url = DICOMwebJS.ServerConfiguration.getStowUrl();
         getFile.done(function (arrayBuffer: ArrayBuffer) {
            var proxy = new StowRsProxy(url);

            proxy.StoreInstance(arrayBuffer, (xhr: XMLHttpRequest) => {
               var dlg = new ModalDialog("#modal-alert");
               
               if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                  dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
               }
               else {
                  dlg.showXml("XML Store Response", xhr.response);
               }
            },
               (error: ErrorEvent) => {
                  alert(error.message);
               });
         });
      });
   }

   // Get the local file as an array buffer.
   private getFileBuffer() {
      var fileInput: any = $('#getFile');
      var deferred = jQuery.Deferred();
      var reader = new FileReader();

      reader.onloadend = function (e: any) {
         deferred.resolve(e.target.result);
      }

      reader.onerror = function (e: any) {
         deferred.reject(e.target.error);
      }

      reader.readAsArrayBuffer(fileInput[0].files[0]);

      return deferred.promise();
   }
}

$(document).on('change', '.btn-file :file', function () {
   var input: any = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
   input.trigger('fileselect', [numFiles, label]);
});

$(document).ready(function () {
   $('.btn-file :file').on('fileselect', function (event, numFiles, label) {

      var input = $(this).parents('.input-group').find(':text'),
         log = numFiles > 1 ? numFiles + ' files selected' : label;

      if (input.length) {
         input.val(log);
      } else {
         if (log) alert(log);
      }

   });
});