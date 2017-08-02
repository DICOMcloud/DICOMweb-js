class RetrieveService {
   _retrieveService: WadoRsProxy;
   //_queryModel: QueryModel;


   constructor(retrieveServic: WadoRsProxy) {
      this._retrieveService = retrieveServic ;
      
      
   }


   getObjectInstance(instance: InstanceParams, mediaType: string, successCallback: (data: any) => void): void {

      this._retrieveService.getObjectInstance(instance.StudyInstanceUid,
         instance.SeriesInstanceUID,
         instance.SopInstanceUid,
         mediaType)
         .done((data: any ) => {
            successCallback(data);
         })
         .fail((ev: Event) => {
            console.error("getObject failed");
         });

   }

   getObjectInstanceMetadata(instance: InstanceParams, successCallback: (data: any) => void, mediaType: string ): void {
       
      this._retrieveService.getObjectInstanceMetadata(instance.StudyInstanceUid,
         instance.SeriesInstanceUID,
         instance.SopInstanceUid,
         mediaType)
         .done((data: any) => {
            if (mediaType == MimeTypes.Json)
            {
               data = JSON.parse(data);
            }

            successCallback(data);
            //TODO: if XML then parse multipart and return the raw XML
         })
         .fail ( (ev: Event) => {
            console.error("getObjectMetadata failed");
         });
      
   }

   getStudyAsJson(study: StudyParams, successCallback: (data: JSON) => void): void {

      this._retrieveService.getStudyMetadata(study.StudyInstanceUid, MimeTypes.Json)
         .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(JSON.parse(data));
         })
         .fail( (ev: Event) => {
            console.error("getStudyMetadata failed");
         });

   }

   getStudyAsXml(study: StudyParams, successCallback: (data: any) => void): void {

      this._retrieveService.getStudyMetadata(study.StudyInstanceUid, MimeTypes.xmlDicom)
         .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(data);
         })
         .fail ( (ev: Event) => {
            console.error("getStudyMetadata failed");
         });

   }

   getSeries(series: SeriesParams, successCallback: (data: any) => void, mediaType: string = null): void {

      if (null === mediaType) {
         mediaType = MimeTypes.Json;
      }

      this._retrieveService.getSeriesMetadata(series.StudyInstanceUid, series.SeriesInstanceUID, mediaType)
         .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {
            if (mediaType == MimeTypes.Json)
            {
               data = JSON.parse(data);
            }

            successCallback(data);
         })
         .fail ( (ev: Event) => {
            console.error("getStudyMetadata failed");
         });

   }

   getFrameUncompressed
   (
      instance: InstanceParams,
      frameList: string,
      successCallback: (data: any) => void,
      failureCallback: (ev: Event) => void
   ) : void       
   {
      this._retrieveService.getFrame(instance.StudyInstanceUid, instance.SeriesInstanceUID,
         instance.SopInstanceUid, frameList, MimeTypes.UncompressedData)
         .done(successCallback)
         .fail (failureCallback);
   }

   DownloadObject(instance: InstanceParams, successCallback: (data: any) => void): void {

      this._retrieveService.getObjectInstance(instance.StudyInstanceUid,
                                             instance.SeriesInstanceUID,
                                             instance.SopInstanceUid,
                                             MimeTypes.DICOM)
         .done(
         (data: any, textStatus: string) => {
            successCallback(data);
         })
         .fail(
         (ev: Event) => {
            alert("failed: " + ev);//TODO: move to view
         });
   }

   DownloadStudy(instance: StudyParams, successCallback: (data: any) => void): void {

      this._retrieveService.getStudy(instance.StudyInstanceUid, MimeTypes.DICOM)
         .done(
         (data: any, textStatus: string) => {
            successCallback(data);
         })
         .fail(
         (ev: Event) => {
            alert("failed: " + ev);//TODO: move to view
         });
   }
   
} 