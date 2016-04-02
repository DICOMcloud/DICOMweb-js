class RetrieveService {
   _retrieveService: WadoRsProxy;
   //_queryModel: QueryModel;


   constructor(retrieveServic: WadoRsProxy) {
      this._retrieveService = retrieveServic ;
      
      
   }

   getObjectAsJson(instance:InstanceParams, successCallback: ( data: JSON ) => void ): void {
       
      this._retrieveService.getObjectInstanceMetadata(instance.StudyInstanceUid,
         instance.SeriesInstanceUID,
         instance.SopInstanceUid,
         MimeTypes.Json,
         (data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(data);
         });
      
   }

   getObjectAsXml(instance: InstanceParams, successCallback: (data: JSON) => void): void {

      this._retrieveService.getObjectInstanceMetadata(instance.StudyInstanceUid,
         instance.SeriesInstanceUID,
         instance.SopInstanceUid,
         MimeTypes.xmlDicom,
         (data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(data);
         }
      );
   }

   getStudyAsJson(study: StudyParams, successCallback: (data: JSON) => void): void {

      this._retrieveService.getStudyMetadata(study.StudyInstanceUid,
         (data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(data);
         }, (ev: Event)=>{
            console.error("getStudyMetadata failed");
         });

   }

   getFrameUncompressed
   (
      instance: InstanceParams,
      frameList: string,
      successCallback: (data: JSON) => void,
      failureCallback: (ev: Event) => void
   ) : void       
   {
      this._retrieveService.getFrameUncompressed(instance.StudyInstanceUid, instance.SeriesInstanceUID,
         instance.SopInstanceUid, frameList, successCallback, failureCallback);
   }

   DownloadObject(instance: InstanceParams, successCallback: (data: JSON) => void): void {

      this._retrieveService.getObjectDicom(instance.StudyInstanceUid,
         instance.SeriesInstanceUID,
         instance.SopInstanceUid,
         (data: any, textStatus: string) => {
            successCallback(data);
         },
         (ev: Event) => {
            alert("failed: " + ev);//TODO: move to view
         });
   }

   DownloadStudy(instance: StudyParams, successCallback: (data: JSON) => void): void {

      this._retrieveService.getStudyDicom(instance.StudyInstanceUid,
         (data: any, textStatus: string) => {
            successCallback(data);
         },
         (ev: Event) => {
            alert("failed: " + ev);//TODO: move to view
         });
   }
   
} 