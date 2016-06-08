class StowRsProxy {
   public BaseUrl: string = "";
   constructor(baseUrl: string) {
      this.BaseUrl = baseUrl;
   }

   private _returnJson: boolean = true;
   public get returnJson ( ) : boolean { return this._returnJson ; }
   public set returnJson( value : boolean ) { this._returnJson = value ; }

   StoreInstance
   (
      fileBuffer: ArrayBuffer,
      successCallback: (xhr: XMLHttpRequest) => void,
      failureCallback: (error: Event) => void
   )
   {
      var url = this.BaseUrl + "/studies/1234";
      var xhr = new XMLHttpRequest();
      var boundary = 'DICOM FILE';
      var method = 'POST';
      var acceptHeader = "application/json, application/dicom+xml; q=0.9, */*; q = 0.1"; //this will let the server favor json
      var url = url;
      var request = this.gen_multipart(" ",boundary, MimeTypes.DICOM, fileBuffer);
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-Type", 'multipart/related; boundary="' + boundary + '";type="' + MimeTypes.DICOM + '"' );
      xhr.setRequestHeader("accept", acceptHeader); //server also supports XML

      xhr.onreadystatechange = function (data) {
         if (xhr.readyState == 4) {
            successCallback(xhr)
         }
      };
      xhr.onerror = function (error) {
         failureCallback(error);
      };

      xhr.send(request);}

   //
   //http://stackoverflow.com/questions/8262266/xmlhttprequest-multipart-related-post-with-xml-and-image-as-payload
   //
   private gen_multipart(title:string, boundary: string, mimetype: string, byteBuffer: ArrayBuffer) {
      var buffer: Uint8Array = new Uint8Array(byteBuffer); // Wrap in view to get data

      var before = [title, "\r\n--", boundary, "\r\n", 'Content-Type:', mimetype, "\r\n\r\n"].join('');
      var after = "\r\n--" + boundary + "--" ;
      var size = before.length + buffer.byteLength + after.length;
      var uint8array = new Uint8Array(size);
      var i = 0;

      // Append the string.
      for (; i < before.length; i++) {
         uint8array[i] = before.charCodeAt(i) & 0xff;
      }

      // Append the binary data.
      for (var j = 0; j < buffer.byteLength; i++ , j++) {
         uint8array[i] = buffer[j];
      }

      // Append the remaining string
      for (var j = 0; j < after.length; i++ , j++) {
         uint8array[i] = after.charCodeAt(j) & 0xff;
      }
      return uint8array; // <-- This is an ArrayBuffer object!
   }
}