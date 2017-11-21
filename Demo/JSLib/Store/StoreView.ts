declare var dcloudMaxUpload: number;

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
      //https://stackoverflow.com/questions/15854946/how-do-i-limit-the-number-of-file-upload-in-html

      if (typeof (dcloudMaxUpload) !== "undefined" && dcloudMaxUpload > 0) {
         $('#getFile').change(function () {
            if (this.files.length > dcloudMaxUpload) {
               new ModalDialog().showError("Too many files", "Please select no more than " + dcloudMaxUpload + " files");
               this.value = '';
            }
         });
      }

      $(this._parent).find("#addFileButton").click((e) => {
         e.preventDefault();
         var newName = jQuery('#displayName').val();

         // Initiate method calls using jQuery promises.
         // Get the local file as an array buffer.
         var getFile = this.getFileBuffer();
         var url = DICOMwebJS.ServerConfiguration.getStowUrl();
         var anonymizedElementsQuery = this.getAnonymizedElementsQuery();


         getFile.done((arrayBufferList: Array<ArrayBuffer>) => {
            var proxy = new StowRsProxy(url);
            var dlg = new ModalDialog("#modal-alert");

            this._resultView.show();
            this._resultView.showProgress();
            proxy.StoreInstance(arrayBufferList, null, anonymizedElementsQuery).done ( (xhr: XMLHttpRequest) => {

               if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                  dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
               }
               else {
                  this._resultView.showSuccess(xhr.responseXML);
               }
            })
            .fail((xhr: XMLHttpRequest) => {
               if (xhr.status === 202) //Accepted
               {
                  this._resultView.showWarning(xhr.responseXML, "Some Errors during store  - " + xhr.statusText);
               }
               else
               {
                  this._resultView.showError(xhr.responseXML, "Error Storing Dataset - " + xhr.statusText);
               }
            });
         });
      });
   }

   // Get the local file as an array buffer.
   private getFileBuffer() {
      var results: Array<ArrayBuffer> = [];
      var fileInput: HTMLInputElement = <HTMLInputElement>$('#getFile')[0];
      var promises: Array<JQueryPromise<ArrayBuffer>> = [];
      var deferred = jQuery.Deferred();
      var files = fileInput.files;

      for (var index = 0; index < files.length; index++)
      {
         var reader = new fileReaderAsync();

         promises.push(reader.read(files[index]).done((result) => { results.push(result);}));
      }

      $.when.apply($, promises).then(() => {
         deferred.resolve(results);
      });

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