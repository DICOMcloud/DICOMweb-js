//TODO: update events with real listenr, currently they are just callbacks to one function

class QueryModel
{
   public StudyQueryChangedEvent: () => any = null;
   public StudiesChangedEvent: () => any = null;
   public SeriesChangedEvent: () => any = null;
   public InstancesChangedEvent: () =>  any = null;

   private _onSelectedStudyChanged = new LiteEvent();
   private _onSelectedSeriesChanged = new LiteEvent();
   private _onSelectedInstanceChanged = new LiteEvent();

   public get SelectedStudyChangedEvent ( ) { return this._onSelectedStudyChanged ; } 
   public get SelectedSeriesChangedEvent() { return this._onSelectedSeriesChanged; }
   public get SelectedInstanceChangedEvent() { return this._onSelectedInstanceChanged; }


   private _studyQueryParams: StudyParams = new StudyParams(new JsonDicomDatasetService());
   private _studies: StudyParams[] = [];
   private _series: SeriesParams[] = [];
   private _instances: InstanceParams[] = [];
   
   private __NOT_SELECTED: number = -1;
   private _selectedStudyIndex: number = this.__NOT_SELECTED;
   private _selectedSeriesIndex: number = this.__NOT_SELECTED ;
   private _selectedInstancesIndex: number = this.__NOT_SELECTED;

   constructor()
   { }

   public get StudyQueryParams() : StudyParams
   {
      return this._studyQueryParams;
   }

   public set StudyQueryParams(value: StudyParams)
   {
      this._studyQueryParams = value;
      this.onStudyQueryChanged();
   }

   public get Studies(): StudyParams[] {
      return this._studies;
   }
   public set Studies(value: StudyParams[]) {
      if (value != this._studies) 
      {
         this._studies = value;
         this.onStudiesChanged();
      }
   }

   public get Series(): SeriesParams[] {
      return this._series;
   }
   public set Series(value: SeriesParams[]) {
      if (value != this._studies)
      {
         this._series = value;
         this.onSeriesChanged();
      }
   }

   public get Instances(): InstanceParams[]
   {
      return this._instances;
   }
   public set Instances(value: InstanceParams[])
   {
      if (value != this._instances)
      {
         this._instances = value ;

         this.onInstancesChanged();
      }
   }

   public get SelectedStudyIndex(): number {
      return this._selectedStudyIndex;
   }
   public set SelectedStudyIndex(value: number) {
      //if (this._selectedStudyIndex != value) 
      {
         if (this._studies.length <= value || value < this.__NOT_SELECTED)
         {
            throw new RangeError();
         }

         this._selectedStudyIndex = value;
         this.onSelectedStudyChanged();
         this.Series = [];
      }
   }

   public get SelectedSeriesIndex(): number {
      return this._selectedSeriesIndex;
   }
   public set SelectedSeriesIndex(value: number) {
      //if (this._selectedSeriesIndex != value)
      {
          if (this._series.length <= value || value < this.__NOT_SELECTED) {
             throw new RangeError();
         }

         this._selectedSeriesIndex = value;
         this.onSelectedSeriesChanged();
         this.Instances = [];
      }
   }

   public get SelectedInstanceIndex(): number {
      return this._selectedInstancesIndex;
   }
   public set SelectedInstanceIndex(value: number) {
      //if (this._selectedInstancesIndex != value) 
      {
          if (this._instances.length <= value || value < this.__NOT_SELECTED) {
             throw new RangeError();
         }

         this._selectedInstancesIndex = value;
         this.onSelectedInstanceChanged();
      }
   }

   
   public selectedStudy() : StudyParams
   {
      if (this._studies.length > 0) {
         return this._studies[this._selectedStudyIndex];
       }

      return null;
   }

   public selectedSeries(): SeriesParams
   {
      if (this._series.length > 0) {
         return this._series[this._selectedSeriesIndex];
       }

      return null;
   }

   public selectedInstance(): InstanceParams {
       if (this._instances.length > 0) {
           return this._instances[this._selectedInstancesIndex];
       }

       return null;
   }

   protected onStudyQueryChanged()
   {
      if (this.StudyQueryChangedEvent)
      {
         this.StudyQueryChangedEvent();
      }
   }

   protected onSelectedStudyChanged()
   {
      this._onSelectedStudyChanged.trigger();
   }

   protected onSelectedSeriesChanged() {
      this._onSelectedSeriesChanged.trigger();
   }

   protected onSelectedInstanceChanged() {
      this._onSelectedInstanceChanged.trigger();
   }

   protected onStudiesChanged() {
       //calling props to fire events
       this.SelectedStudyIndex = this.__NOT_SELECTED;
       this.SelectedSeriesIndex = this.__NOT_SELECTED;
       this.SelectedInstanceIndex = this.__NOT_SELECTED;

       if (this.StudiesChangedEvent) {
         this.StudiesChangedEvent();
       }
   }

   protected onSeriesChanged() {
      this.SelectedSeriesIndex = this.__NOT_SELECTED;
      this.SelectedInstanceIndex = this.__NOT_SELECTED;

      if (this.SeriesChangedEvent) {
         this.SeriesChangedEvent();
      }
   }

   protected onInstancesChanged()
   {
      this._selectedInstancesIndex = this.__NOT_SELECTED;

      if (this.InstancesChangedEvent)
      {
         this.InstancesChangedEvent();
      }
   }
} 