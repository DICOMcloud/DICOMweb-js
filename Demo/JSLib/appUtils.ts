module appUtils
{
   export function download(data: any, filename: string)
   {
      //http://stackoverflow.com/questions/16086162/handle-file-download-from-ajax-post/23797348#23797348
      var blob = new Blob([data], { type: "application/octet-stream" });
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
               window.location.assign(downloadUrl);
            } else {
               a.href = downloadUrl;
               a.download = filename;
               document.body.appendChild(a);
               a.click();
               //TODO: this should be added, need testing
               document.body.removeChild(a);
            }
         } else {
            window.location.assign(downloadUrl);
         }
      }
   }

   export function showError(message ?:string)
   {

      alert("Error\n\n" + message);
   }

   export function showInfo(message:string) {
      alert(message);
   }
}