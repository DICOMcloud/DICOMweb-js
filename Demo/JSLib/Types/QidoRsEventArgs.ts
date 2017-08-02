class QidoRsEventArgs
{
   private _studyInstanceUid: string;
   private _seriesInstanceUid: string;
   private _sopInstanceUid: string;
   private _mediaType: string;

   constructor(mediaType: string, studyInstanceUid?: string, seriesInstanceUid?: string, sopInstanceUid?: string )
   {
      this.StudyInstanceUID = studyInstanceUid;
      this.SeriesInstanceUID = seriesInstanceUid;
      this.SopInstanceUID = sopInstanceUid;
      this.MediaType        = mediaType ;
   }

   public get StudyInstanceUID()
   {
      return this._studyInstanceUid;
   }

   public set StudyInstanceUID(studyInstanceUID: string)
   {
      this._studyInstanceUid = studyInstanceUID;
   }

   public get SeriesInstanceUID() {
      return this._seriesInstanceUid;
   }

   public set SeriesInstanceUID(seriesInstanceUID: string) {
      this._seriesInstanceUid = seriesInstanceUID;
   }

   public get SopInstanceUID() {
      return this._sopInstanceUid;
   }

   public set SopInstanceUID(sopInstanceUID: string) {
      this._sopInstanceUid = sopInstanceUID;
   }

   public get MediaType() {
      return this._mediaType;
   }

   public set MediaType(mediaType: string) {
      this._mediaType = mediaType;
   }

}