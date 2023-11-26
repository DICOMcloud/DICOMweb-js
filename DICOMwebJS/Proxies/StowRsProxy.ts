class StowRsProxy {
   public _baseUrl: string = "";

   constructor(baseUrl: string = null) {
      this._baseUrl = baseUrl;
   }

   public get BaseUrl() {
      if (this._baseUrl === null) {
         return DICOMwebJS.ServerConfiguration.getStowUrl();
      }
      else {
         return this._baseUrl;
      }
   }

   public set BaseUrl(value: string) {
      this._baseUrl = value;
   }

   private _returnJson: boolean = true;
   public get returnJson ( ) : boolean { return this._returnJson ; }
   public set returnJson( value : boolean ) { this._returnJson = value ; }

   StoreInstance
   (
      fileBufferList: Array<ArrayBuffer>,
      studyInstanceUID: string,
      query:string
   ): JQueryPromise<{}>
   {
      var deffered = $.Deferred();
      var studyPart = (studyInstanceUID) ? "/studies/" + studyInstanceUID : "/studies/";
      var url = this.BaseUrl + studyPart + "?"+ (query||"");
      var xhr = new XMLHttpRequest();
      var boundary = 'DICOM FILE';
      var method = 'POST';
      var acceptHeader = "application/json, application/dicom+xml; q=0.9, */*; q = 0.1"; //this will let the server favor json
      var url = url;
      var request = this.gen_multipart(" ", boundary, MimeTypes.DICOM, fileBufferList);
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-Type", MimeTypes.getMultiPartAcceptHeader ( MimeTypes.DICOM ) +  '; boundary="' + boundary + '"' );
      xhr.setRequestHeader("accept", acceptHeader); //server also supports XML

      if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader)
      {
         xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken );
      }

      xhr.onreadystatechange = function (data) {
         if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
               deffered.resolve(xhr);
            }
            else {
               deffered.reject( xhr);
            }
         }
      };
      xhr.onerror = function (error) {
         deffered.reject(xhr);
      };

      xhr.send(request);

      return deffered.promise();
   }

   //
   //http://stackoverflow.com/questions/8262266/xmlhttprequest-multipart-related-post-with-xml-and-image-as-payload
   //
   private gen_multipart(title:string, boundary: string, mimetype: string, byteBufferList: Array<ArrayBuffer>) {


      var before = ["\r\n--", boundary, "\r\n", 'Content-Type:', mimetype, "\r\n\r\n"].join('');
      var after = "\r\n--" + boundary + "--" ;
      var beforeArray : Uint8Array = new Uint8Array(before.length);
      var afterArray : Uint8Array = new Uint8Array(after.length);

      // Append the string.
      for (var i = 0; i < before.length; i++) {
         beforeArray[i] = before.charCodeAt(i) & 0xff;
      }

      // Append the remaining string
      for (var j = 0; j < after.length; j++) {
         afterArray[j] = after.charCodeAt(j) & 0xff;
      }

      var size = 0

      byteBufferList.forEach((byteBuffer: ArrayBuffer) => {
         size += before.length + byteBuffer.byteLength ;
      });

      size += after.length;
      
      var uint8array = new Uint8Array(size);
      var offset = 0;

      for (var index = 0; index < byteBufferList.length; index++)
      {
         var buffer: Uint8Array = new Uint8Array(byteBufferList[index]); // Wrap in view to get data
         
         uint8array.set(beforeArray, offset)
         offset += beforeArray.byteLength;

         uint8array.set(buffer, offset);
         offset += buffer.byteLength;
      }

      uint8array.set(afterArray, offset);
      offset += afterArray.byteLength;

      return uint8array; // <-- This is an ArrayBuffer object!
   }
}