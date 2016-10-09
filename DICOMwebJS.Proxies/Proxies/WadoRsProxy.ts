
class WadoRsProxy{
   private _baseUrl: string;

   public get BaseUrl() {
      return this._baseUrl;
   }
   public set BaseUrl(value: string) {
      this._baseUrl = value;
   }

   public constructor(baseUrl: string) {
      this._baseUrl = baseUrl;
   }

   public getStudy
   (
      studyInstanceUid: string,
      mediaType: string,
      transferSyntax: string = null
   ): JQueryPromise<{}>
   {
      return this.getBinaryDICOMMultipart ( "/studies/" + studyInstanceUid + "/",
                                      mediaType, transferSyntax );
   }

   public getSeries
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      mediaType: string,
      transferSyntax: string = null
   ): JQueryPromise<{}>
   {
      return this.getBinaryDICOMMultipart ( "/studies/" + studyInstanceUid + "/" + "series" + "/",
                                      mediaType, transferSyntax );
   }

   public getObjectInstance
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      mediaType: string,
      transferSyntax: string = null
   ): JQueryPromise<{}>
   {
      return this.getBinaryDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/",
         mediaType, transferSyntax);
   }


   public getStudyMetadata
   (
      studyInstanceUid: string,
      mediaType: string = null,
      transferSyntax: string = null
   )
   {
      var urlParts = "/studies/" + studyInstanceUid + "/metadata";

      return this.getMetadata(urlParts, mediaType, transferSyntax);
   }

   public getSeriesMetadata
   (
      studyInstanceUid:string,
      seriesInstanceUid: string,
      mediaType: string = null,
      transferSyntax: string = null
   )
   {
      var urlParts = "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/metadata";

      return this.getMetadata(urlParts, mediaType, transferSyntax);
   }


   public getObjectInstanceMetadata
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUid: string,
      mediaType: string,
      transferSyntax: string = null
   )
   {
      var urlParts = "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUid + "/metadata";

      return this.getMetadata(urlParts, mediaType, transferSyntax);
   }


   public getMetadata
   (
      urlParts: string,
      mediaType: string = null,
      transferSyntax: string = null
   ): JQueryPromise<{}>
   {
      if (mediaType === null || typeof (mediaType) === "undefined") {
         mediaType = MimeTypes.Json;
      }


      if (mediaType == MimeTypes.Json) {

         return this.get(urlParts, mediaType, transferSyntax);
      }
      else if (mediaType == MimeTypes.xmlDicom) {
         return this.getMultipart(urlParts, mediaType, transferSyntax);
      }
      else {
         throw "Invalid mediaType for metadata request";
      }
   }

   public getFrame
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      frameList:string,
      mediaType: string,
      transferSyntax: string = null
   ): JQueryPromise<{}>
   {
      return this.getBinaryDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID +
         "/frames/" + frameList,
         mediaType);
   }

   public getBinaryDICOMMultipart
   (
      urlRsPart: string,
      acceptDataType: string,
      transferSyntax:string = null
   ): JQueryPromise<{}>
   {
      var deffered = $.Deferred();
      var url = this._baseUrl + urlRsPart;
      var xhr = new XMLHttpRequest();
      var acceptHeader = "multipart/related; type=\"" + acceptDataType + "\"";

      if (transferSyntax)
      {
         acceptHeader += ";transfer-syntax=" + transferSyntax ;
      }

      xhr.overrideMimeType("application/octet-stream");
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.setRequestHeader("accept", acceptHeader);
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            // Fire event
            //listener.onDataReceived(new Uint8Array(xhr.response));
            var buffer = new Uint8Array(xhr.response);

            deffered.resolve(buffer, xhr.statusText);
         }
      };
      xhr.onerror = function (error) {
         deffered.reject(error);
      };

      if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
         xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
      }

      xhr.send(null);

      return deffered.promise();
   }

   public getMultipart
   (
      urlRsPart: string,
      acceptDataType: string,
      transferSyntax: string = null
   ): JQueryPromise<{}>
   {
      return this.get(urlRsPart, "multipart/related; type=\"" + acceptDataType + "\"", transferSyntax);
   }

   public get
   (
      urlRsPart: string,
      acceptHeader: string,
      transferSyntax:string = null
   ): JQueryPromise<{}>
   {
      var deffered = $.Deferred();
      var url = this._baseUrl + urlRsPart;
      var xhr = new XMLHttpRequest();


      if (transferSyntax) {
         acceptHeader += ";transfer-syntax=" + transferSyntax;
      }
      
      xhr.open("GET", url, true);
      xhr.setRequestHeader("accept", acceptHeader);
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            deffered.resolve(xhr.response, xhr.statusText);
         }
      };
      xhr.onerror = function (error) {
         deffered.reject(error);
      };

      if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
         xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
      }

      xhr.send(null);

      return deffered.promise();
   }

 
}