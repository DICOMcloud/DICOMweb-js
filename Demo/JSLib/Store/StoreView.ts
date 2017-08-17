class StoreView
{
   private _parent: HTMLElement;
   private _resultView: StoreResultView;


   constructor(parentElement: HTMLElement) {
      this._parent = parentElement;
      this._resultView = new StoreResultView($(".store-result-view"),
         new WadoUriProxy(DICOMwebJS.ServerConfiguration.getWadoRsUrl()));

      this._resultView.hide();

      this.registerEvents();
   }

   private registerEvents()
   {
      $(this._parent).find("#addFileButton").click((e) => {
         e.preventDefault();
         var newName = jQuery('#displayName').val();

         // Initiate method calls using jQuery promises.
         // Get the local file as an array buffer.
         var getFile = this.getFileBuffer();
         var url = DICOMwebJS.ServerConfiguration.getStowUrl();
         var anonymizedElementsQuery = this.getAnonymizedElementsQuery();


         getFile.done((arrayBuffer: ArrayBuffer) => {
            var proxy = new StowRsProxy(url);
            var dlg = new ModalDialog("#modal-alert");

            this._resultView.show();
            this._resultView.showProgress();
            proxy.StoreInstance(arrayBuffer, null, anonymizedElementsQuery).done ( (xhr: XMLHttpRequest) => {

               if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                  dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
               }
               else {
                  this._resultView.showSuccess(xhr.responseXML);
               }
            })
            .fail((xhr: XMLHttpRequest) => {
               //dlg.showText("Error Storing Dataset", xhr.response);
               this._resultView.showError(xhr.responseXML, "Error Storing Dataset");
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

   private getAnonymizedElementsQuery() {
      var anonyElementsQuery = "";

      $(this._parent).find(".app-anonymizer-field").each((index, element) => {
         var tagKey = $(element).attr("data-app-tag");
         var tagValue = $(element).val();

         if (tagValue !== "") {
            anonyElementsQuery += tagKey + "=" + tagValue + "&";
         }
      });

      return anonyElementsQuery;
   }



}