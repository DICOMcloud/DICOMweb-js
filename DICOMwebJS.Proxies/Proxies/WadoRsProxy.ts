
class WadoRsProxy{
   private _baseUrl: string;
   public constructor(baseUrl: string) {
      this._baseUrl = baseUrl;
   }

   public getObjectInstanceMetadata
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      successCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string
   )
   {
      var url = this._baseUrl + "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/metadata";
      $.get(url, successCallback, "json");
   }

   public getObjectUncompressed
   (
       studyInstanceUid: string,
       seriesInstanceUid: string,
       sopInstanceUID: string,
       successCallback: (data: any, textStatus: string) => any,
       failureCallback: (ev: Event) => void
    ) {
       var url = this._baseUrl + "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/" ;
       this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/",
                        "application/octec-stream",
                        successCallback,
                        failureCallback);
   }

   public getObjectDicom
   (
      studyInstanceUid: string,
      seriesInstanceUid: string,
      sopInstanceUID: string,
      successCallback: (data: any, textStatus: string) => any,
      failureCallback: (ev: Event) => void
   ) {
      var url = this._baseUrl + "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/";
      this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/",
         "application/dicom",
         successCallback,
         failureCallback);
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

   public getStudyDicom
   (
      studyInstanceUid: string,
      successCallback: (data: any, textStatus: string) => any,
      failureCallback: (ev: Event) => void
   ) {
      this.getDICOMMultipart("/studies/" + studyInstanceUid + "/",
         "application/dicom",
         successCallback,
         failureCallback);
   }

   public getStudyUncompressed
   (
       studyInstanceUid: string,
       successCallback: (data: any, textStatus: string) => any,
       failureCallback: (ev: Event) => void
   )
   {
      this.getDICOMMultipart("/studies/" + studyInstanceUid + "/",
         "application/octec-stream",
         successCallback,
         failureCallback);
   }

   public getDICOMMultipart
   (
      urlRsPart: string,
      acceptDataType: string,
      successCallback: (data: any, textStatus: string) => any,
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

            successCallback(buffer, xhr.statusText);
         }
      };
      xhr.onerror = function (error) {
         failureCallback(error);
      };
      xhr.send(null);

   }
}