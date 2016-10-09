window.onload = () => {
   new app();
};

declare var serverUrl: string;

class app {

   private __AUTHENTICATION_COOKIE:string = "__dicomwebclient"

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
      var element = $('#dicomImage').get(0);
      var viewer = new WadoViewer(element, uriProxy);


      this.initAuthentication();

      queryView.instanceViewRequest.on((args) => {
         
         $('.nav-tabs a[href="#_ViewerView"]').tab('show') ;

         viewer.loadInstance(args.InstanceParams);
      });


      $("#SelectedTransferSyntax").change(function () {
         var loadedInstance = viewer.loadedInstance();

         if (null != loadedInstance)
         {
            viewer.loadInstance(loadedInstance, $("#SelectedTransferSyntax").val());
         }

      });

      this.initStore();
      window.onerror = function (message, url, lineNumber) {
         //save error and send to server for example.
         alert(message + "\n" + url + "\n" + lineNumber);
         return true;
      };  

      $("#serverList").change(function () {
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

   private initAuthentication() {
      var token = this.getAuthenticationToken();


      if (token)
      {
         DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader = true;

         DICOMwebJS.ServerConfiguration.SecurityToken = token;
      }
   }

   private getAuthenticationToken()
   {
      var name = this.__AUTHENTICATION_COOKIE;

      //http://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
      //function readCookie(name) {
         var nameEQ = name + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
         }
         return null;
      //}
   }
   private initStore() {

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