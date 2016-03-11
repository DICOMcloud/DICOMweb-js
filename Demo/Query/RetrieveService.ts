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
         (data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(data);
         });
      
   }

   getStudyAsJson(study: StudyParams, successCallback: (data: JSON) => void): void {

      this._retrieveService.getStudyMetadata(study.StudyInstanceUid,
         (data: any, textStatus: string, jqXHR: JQueryXHR) => {
            successCallback(data);
         }, (ev: Event)=>{
            console.error("getStudyMetadata failed");
         });

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