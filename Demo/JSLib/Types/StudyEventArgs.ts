class StudyEventArgs {
   constructor(study: StudyParams) {
      this._studyParams = study;
   }

   private _studyParams: StudyParams;

   public get StudyParams(): StudyParams{
      return this._studyParams;
   };
   public set StudyParams(instance: StudyParams) {
      this._studyParams = instance;
   };
}