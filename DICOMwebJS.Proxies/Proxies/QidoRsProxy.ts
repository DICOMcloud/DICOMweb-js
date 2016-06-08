class QidoRsProxy
{
    public BaseUrl: string = "";
    constructor(baseUrl: string)
    {
        this.BaseUrl = baseUrl;
    }

    //findPatients(query: PatientParams, options: QueryOptions) {
    //    //there is no qido patient 
    //}

    findStudies(query: queryParams) {
       this.DoQuery(query, "/studies");
    }

    findSeries(query: queryParams) {
       this.DoQuery(query, "/series");
    }

    findInstances(query: queryParams) {
       this.DoQuery(query, "/instances");
    }

    private DoQuery(query: queryParams, path: string) {
       var ajaxSettings: JQueryAjaxSettings = {};
       var elements = query.query.DicomSourceProvider.getElements();
       var length = elements.length;
       var matches: string[] = [];
       var includes: string[] = [];
       var queryString = "";
       var methodUrl = this.BaseUrl + path;


       while (length--) {
          var element = elements[length];

          matches.push(element.Tag.StringValue + "=" + encodeURIComponent(element.toString()) ) ;
       }

       length = query.returnValues.length;

       while (length--) {
          includes.push("includefield=" + query.returnValues[length].StringValue);
       }

       queryString += matches.join("&") ;

       if (matches.length != 0 && includes.length != 0)
       {
          queryString += "&";
       }

       queryString += includes.join("&");
       
       methodUrl += "?" + queryString;

       ajaxSettings.url = methodUrl;
       ajaxSettings.timeout = 20000;
       ajaxSettings.success = (data: any, textStatus: string, jqXHR: JQueryXHR) => {
          if (query.success)
          {
             query.success(data);
          }
       };
       ajaxSettings.error = (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => {
          if (query.error)
          {
             query.error(textStatus, errorThrown);
          }
       };

       $.ajax(ajaxSettings);
    }
}

class QueryOptions
{
   private _fuzzy: boolean = false;
   public get fuzzyMatching(): boolean
   {
      return this._fuzzy;
   }
   public set fuzzyMatching(value: boolean)
   {
      this._fuzzy = value;
   }

   private _limit: number = -1;
   public get limit(): number {
      return this._limit;
   }
   public set limit(value: number) {
      this._limit = value;
   }

   private _offset: number = -1;
   public get offset(): number {
      return this._offset;
   }
   public set offset(value: number) {
      this._offset = value;
   }
}

class queryParams
{
   public query: DicomModuleBase;
   public returnValues: DicomTag[];
   public options: QueryOptions;
   public success:Function;
   public error: Function
}


class PatientParams extends DicomModuleBase
{
    constructor(elementsProvider?: any)
    {
        super(elementsProvider);
    }

    public get PatientId(): string {
        return super.getString(DicomTags.PatientId);
    }
    public set PatientId(value: string) {
        super.setString(DicomTags.PatientId, value);
    }
    
    public get PatientName(): PersonName
    {
        return super.getValue(DicomTags.PatientsName);
    }
    public set PatientName(value:PersonName) {
        super.setValue(DicomTags.PatientsName, value);
    }
}

class StudyParams extends PatientParams
{
    constructor(elementsProvider?: DicomDatasetService) {
        super(elementsProvider);
    }

    public get StudyInstanceUid(): string {
        return super.getString(DicomTags.StudyInstanceUid);
    }
    public set StudyInstanceUid(value: string) {
        super.setString(DicomTags.StudyInstanceUid, value);
    }    
    
    public get StudyDate(): string {

        return super.getString(DicomTags.StudyDate);

        //return DicomDatasetService.fromDateString(dateString);
    }
    public set StudyDate(value: string) {
        //var dateString = DicomDatasetService.fromDate(value);

        super.setString(DicomTags.StudyDate, value);
    }    

    public get StudyID(): string {

       return super.getString(DicomTags.StudyId);

    }
    public set StudyID(value: string) {
       super.setString(DicomTags.StudyId, value);
    }
   
    public get AccessionNumber(): string {
       return super.getString(DicomTags.AccessionNumber);
    }
    public set AccessionNumber(value: string) {
       super.setString(DicomTags.AccessionNumber, value);
    }

    public get StudyDescription(): string
    {
       return super.getString(DicomTags.StudyDescription);
    }
    public set StudyDescription(value: string)
    {
       super.setString(DicomTags.StudyDescription, value);
    }
}

class SeriesParams extends StudyParams {
    public get Modality(): string {
        return super.getString(DicomTags.Modality);
    }
    public set Modality(value: string) {
        super.setString(DicomTags.Modality, value);
    }
    
    public get SeriesNumber(): string{
       return super.getString(DicomTags.SeriesNumber);
    }
    public set SeriesNumber(value: string) {
       super.setString(DicomTags.SeriesNumber, value);
    }

    public get SeriesInstanceUID(): string {
        return super.getString(DicomTags.SeriesInstanceUid);
    }
    public set SeriesInstanceUID(value: string) {
        super.setString(DicomTags.SeriesInstanceUid, value);
    }
    
    public get SeriesDescription(): string {
       return super.getString(DicomTags.SeriesDescription);
    }
    public set SeriesDescription(value: string) {
       super.setString(DicomTags.SeriesDescription, value);
    }

    public get SeriesDate(): string {
       return super.getString(DicomTags.SeriesDate);
    }
    public set SeriesDate(value: string) {
       super.setString(DicomTags.SeriesDate, value);
    }
    
    
}

class InstanceParams extends SeriesParams
{
    public get SopInstanceUid(): string {
        return super.getString(DicomTags.SopInstanceUid);
    }
    public set SopInstanceUid(value: string) {
        super.setString(DicomTags.SopInstanceUid, value);
    }

    public get InstanceNumber(): string {
        return super.getString(DicomTags.InstanceNumber);
    }
    public set InstanceNumber(value: string) {
        super.setString(DicomTags.InstanceNumber, value);
    }
}