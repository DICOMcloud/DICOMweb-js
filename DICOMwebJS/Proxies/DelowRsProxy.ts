class DelowRsProxy
{
   public _baseUrl: string = "";

   constructor(baseUrl: string = null) {
      this._baseUrl = baseUrl;
   }

   public get BaseUrl() {
      if (this._baseUrl === null) {
         return DICOMwebJS.ServerConfiguration.getDelowRsUrl();
      }
      else
      {
         return this._baseUrl;
      }
   }

   public set BaseUrl(value: string) {
      this._baseUrl = value;
   }

   public deleteStudy(studyUID: string): JQueryPromise<any> {
      var url = this.BaseUrl + "/studies/" + studyUID + "/"; //last part "/" is needed for proper routing  
      let settings: JQueryAjaxSettings = {
         url: url,
         type: "DELETE"
      }
      
      if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
         settings.headers = { "Authorization": DICOMwebJS.ServerConfiguration.SecurityToken };
      }

      var deffered = $.Deferred();

      $.ajax(settings).then(
         (data) => {
         return deffered.resolve(data);
      },
      (jqxhr, textStatus, error) => {
         return deffered.reject(error);
         });

      return deffered.promise();
   }
}