class WadoUriProxy
{
    private _xhr: XMLHttpRequest;
    private static _QueryParamsFormatted: string = "?RequestType=wado&studyUID={0}&seriesUID={1}&objectUID={2}"
    private _baseUrl: string = "";

    constructor(baseUrl: string = null) {
       this._baseUrl = baseUrl;
    }

    public get BaseUrl() {
       if (this._baseUrl === null) {
          return DICOMwebJS.ServerConfiguration.getWadoUriUrl();
       }
       else {
          return this._baseUrl;
       }
    }

    public set BaseUrl(value: string)
    {
       this._baseUrl = value;
    }

    //returns the DICOM DS 
    getDicomInstance(instanceData: CommonDicomInstanceParams, anonymize: boolean, imageParams: WadoImageParams): JQueryPromise<any> { 
       return this.getObjectInstance(this.createUrl(instanceData, MimeTypes.DICOM, imageParams));
    } 

     //returns a jpeg image reprenstation of the DICOM image
    getJpegImage(instanceData: CommonDicomInstanceParams, imageParams: WadoImageParams): JQueryPromise<any>
    {
       return this.getObjectInstance(this.createUrl(instanceData, MimeTypes.Jpeg, imageParams));
    }

    //returns the image data after being decoded
    getUncompressedImage(instanceData: CommonDicomInstanceParams, imageParams: WadoImageParams): JQueryPromise<any>
   {
        return this.getObjectInstance (this.createUrl(instanceData, MimeTypes.UncompressedData, imageParams))
   }

   getObjectInstance
   (
      url: string,
   ) :JQueryPromise<any>
   {
      var deffered = $.Deferred();
      var xhr = new XMLHttpRequest();

      xhr.overrideMimeType("application/octet-stream");
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            var buffer = new Uint8Array(xhr.response);

            deffered.resolve(buffer);
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

   public createUrl(instanceData: CommonDicomInstanceParams,mimeType: string,imageParams: WadoImageParams): string {
      var url = this.BaseUrl;

       url += WadoUriProxy._QueryParamsFormatted.format(instanceData.studyUID, instanceData.seriesUID, instanceData.instanceUID);

       if (mimeType)
       {
           url += "&contentType=" + mimeType;
       }

       if (imageParams )
       {
          if (imageParams.frameNumber) {
             url += "&frameNumber=" + imageParams.frameNumber;
          }

          if (imageParams.transferSyntax)
          {
             url += "&transferSyntax=" + imageParams.transferSyntax;
          }
       }

       //TODO: implement all other parameters....
       
       return url;
   }
}

class CommonDicomInstanceParams
{
   studyUID: string;
   seriesUID: string;
   instanceUID: string;
}
class WadoImageParams
{
   //IWadoBurnAnnotation? BurnAnnotation { get; set; }

   //int? Rows    { get; set; }
   //int? Columns { get; set; }
   frameNumber: string;
   //int? ImageQuality { get; set; }

   //string Region                { get; set; }
   //string WindowCenter          { get; set; }
   //string WindowWidth           { get; set; }
   //string PresentationUID       { get; set; }
   //string presentationSeriesUID { get; set; }
   transferSyntax: string;
}