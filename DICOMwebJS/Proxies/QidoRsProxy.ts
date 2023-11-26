﻿/// <reference path="../types/dicommodulebase.ts" />
class QidoRsProxy
{
   public _baseUrl: string = "";

   constructor(baseUrl: string = null) {
      this._baseUrl = baseUrl;
   }

   public get BaseUrl() {
      if (this._baseUrl === null) {
         return DICOMwebJS.ServerConfiguration.getQidoUrl();
      }
      else {
         return this._baseUrl;
      }
   }

   public set BaseUrl(value: string) {
      this._baseUrl = value;
   }

   findStudies(query: queryParams): JQueryPromise<XMLHttpRequest> {
      return this.DoQuery(query, "/studies");
    }

   findSeries(query: queryParams): JQueryPromise<XMLHttpRequest> {
      return this.DoQuery(query, "/series");
    }

   findInstances(query: queryParams): JQueryPromise<XMLHttpRequest> {
       return this.DoQuery(query, "/instances");
    }

   private DoQuery(query: queryParams, path: string): JQueryPromise<any> {
      var $deffered = $.Deferred();
       var xhr = new XMLHttpRequest();
       var elements = query.query.DicomSourceProvider.getElements();
       var length = elements.length;
       var matches: string[] = [];
       var includes: string[] = [];
       var queryString = "";
       var methodUrl = this.BaseUrl + path;
       var acceptHeader = "";


       if (query.acceptType != null && query.acceptType.trim() !== "")
       {
          if (query.acceptType.trim() == MimeTypes.Json) {
             acceptHeader = MimeTypes.Json;
          }
          else
          {
             //default by standard is multi-part XML
             acceptHeader = MimeTypes.getMultiPartAcceptHeader(MimeTypes.xmlDicom);
          }
       }

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

       if (query.options && query.options.limit > 0)
       {
          queryString += "&limit=" + query.options.limit + "&offset=" + query.options.offset;
       }

       methodUrl += "?" + queryString;

       xhr.open("GET", methodUrl, true);
       xhr.setRequestHeader("accept", acceptHeader);
       xhr.timeout = 20000;

       xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
             if (xhr.status == 200) {
                var data = xhr.response;
                if (acceptHeader === MimeTypes.Json) {
                   data = JSON.parse(data);
                }

                if (query.success) {
                   query.success(data);
                }

                $deffered.resolve(xhr, data);
             }
             else
             {
                if (query.error) {
                   query.error(xhr.statusText, xhr.responseText);
                }

                $deffered.reject(xhr);
             }
          }

       };

       if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
          xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
       }

       xhr.send(null);

       return $deffered.promise();
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
   public error: Function;
   public acceptType: string 
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