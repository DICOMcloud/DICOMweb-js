
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

   public getStudyMetadata
   (
      studyInstanceUid: string,
      successCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   )
   {
      var url = this._baseUrl + "/studies/" + studyInstanceUid + "/metadata";
      $.get(url, successCallback, "json");
   }

   public getStudy
   (
      studyInstanceUid: string,
      mediaType: string,
      successCallback: (data: any, textStatus: string) => any,
      failureCallback: (ev: Event) => void
   )
   {
      this.getDICOMMultipart("/studies/" + studyInstanceUid + "/",
         mediaType,
         successCallback,
         failureCallback);
   }

   public getObjectInstanceMetadata
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      mediaType:string,
      successCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
      failureCallback?: (ev: Event) => void
   )
   {
      var url = this._baseUrl + "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/metadata";
      if (!mediaType || mediaType == MimeTypes.Json) {
         $.get(url, successCallback, "json");
      }
      else if (mediaType==MimeTypes.xmlDicom)
      {
         this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/",
            mediaType,
            successCallback,
            failureCallback);
      }
   }


   public getObjectInstance
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      mediaType: string,
      successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   )
   {
      this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/",
         mediaType,
         successCallback,
         failureCallback);
   }

   public getFrame
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      frameList:string,
      mediaType: string,
      successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   )
   {
      this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID +
         "/frames/" + frameList,
         mediaType,
         successCallback,
         failureCallback);
   }

   public getFrameUncompressed
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      frameList: string,
      successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   ) {
      this.getFrame(studyInstanceUid, seriesInstanceUid, sopInstanceUID, frameList, "application/octec-stream",
         successCallback,
         failureCallback);
   }

   public getObjectUncompressed
   (
       studyInstanceUid: string,
       seriesInstanceUid: string,
       sopInstanceUID: string,
       successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
       failureCallback: (ev: Event) => void
   )
   {
      this.getObjectInstance(studyInstanceUid, seriesInstanceUid, sopInstanceUID,
                             "application/octec-stream", successCallback, failureCallback);
   }

   public getObjectDicom
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   ) {
      this.getObjectInstance(studyInstanceUid, seriesInstanceUid, sopInstanceUID,
         "application/dicom",
         successCallback,
         failureCallback);
   }



   public getStudyDicom
   (
      studyInstanceUid: string,
      successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   ) {
      this.getStudy( studyInstanceUid,
         "application/dicom",
         successCallback,
         failureCallback);
   }

   public getStudyUncompressed
   (
       studyInstanceUid: string,
       successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
       failureCallback: (ev: Event) => void
   )
   {
      this.getStudy(studyInstanceUid,
         "application/octec-stream",
         successCallback,
         failureCallback);
   }

   public getDICOMMultipart
   (
      urlRsPart: string,
      acceptDataType: string,
      successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any,
      failureCallback: (ev: Event) => void
   )
   {
      var url = this._baseUrl + urlRsPart;
      var xhr = new XMLHttpRequest();

      xhr.overrideMimeType("application/octet-stream");
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.setRequestHeader("accept", "multipart/related; type=\"" + acceptDataType + "\"");
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            // Fire event
            //listener.onDataReceived(new Uint8Array(xhr.response));
            var buffer = new Uint8Array(xhr.response);

            successCallback(buffer, xhr.statusText );
         }
      };
      xhr.onerror = function (error) {
         failureCallback(error);
      };
      xhr.send(null);

   }
}