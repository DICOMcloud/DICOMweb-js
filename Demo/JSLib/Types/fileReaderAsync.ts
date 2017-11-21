class fileReaderAsync {
   public read(file: any): JQueryPromise<any> {
      var deferred = $.Deferred();
      var reader = new FileReader();


      reader.onloadend = function (e: any) {
         deferred.resolve(e.target.result);
      }

      reader.onerror = function (e: any) {
         deferred.reject(e.target.error);
      }

      reader.readAsArrayBuffer(file);

      return deferred.promise();
   }
}