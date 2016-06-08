declare module DICOMwebJS {
    module ServerConfiguration {
        var BaseServerUrl: string;
        var WadoUriPart: string;
        var WadoRsPart: string;
        var StowPart: string;
        var QidoPart: string;
        function getWadoUriUrl(): string;
        function getWadoRsUrl(): string;
        function getStowUrl(): string;
        function getQidoUrl(): string;
    }
}
declare class MimeTypes {
    static DICOM: string;
    static xmlDicom: string;
    static Jpeg: string;
    static WebP: string;
    static Json: string;
    static UncompressedData: string;
    static PlainText: string;
    static MultipartRelated: string;
}
declare class QidoRsProxy {
    BaseUrl: string;
    constructor(baseUrl: string);
    findStudies(query: queryParams): void;
    findSeries(query: queryParams): void;
    findInstances(query: queryParams): void;
    private DoQuery(query, path);
}
declare class QueryOptions {
    private _fuzzy;
    fuzzyMatching: boolean;
    private _limit;
    limit: number;
    private _offset;
    offset: number;
}
declare class queryParams {
    query: DicomModuleBase;
    returnValues: DicomTag[];
    options: QueryOptions;
    success: Function;
    error: Function;
}
declare class PatientParams extends DicomModuleBase {
    constructor(elementsProvider?: any);
    PatientId: string;
    PatientName: PersonName;
}
declare class StudyParams extends PatientParams {
    constructor(elementsProvider?: DicomDatasetService);
    StudyInstanceUid: string;
    StudyDate: string;
    StudyID: string;
    AccessionNumber: string;
    StudyDescription: string;
}
declare class SeriesParams extends StudyParams {
    Modality: string;
    SeriesNumber: string;
    SeriesInstanceUID: string;
    SeriesDescription: string;
    SeriesDate: string;
}
declare class InstanceParams extends SeriesParams {
    SopInstanceUid: string;
    InstanceNumber: string;
}
declare class StowRsProxy {
    BaseUrl: string;
    constructor(baseUrl: string);
    private _returnJson;
    returnJson: boolean;
    StoreInstance(fileBuffer: ArrayBuffer, successCallback: (xhr: XMLHttpRequest) => void, failureCallback: (error: Event) => void): void;
    private gen_multipart(title, boundary, mimetype, byteBuffer);
}
declare class WadoUriProxy {
    private _xhr;
    private static _QueryParamsFormatted;
    private _baseUrl;
    constructor(baseUrl: string);
    BaseUrl: string;
    getDicomInstance(instanceData: CommonDicomInstanceParams, anonymize: boolean, imageParams: WadoImageParams, successCallback: (buffer: any) => void, failureCallback: (error: ErrorEvent) => void): void;
    getJpegImage(instanceData: CommonDicomInstanceParams, imageParams: WadoImageParams, successCallback: (buffer: any) => void, failureCallback: (error: ErrorEvent) => void): void;
    getUncompressedImage(instanceData: CommonDicomInstanceParams, imageParams: WadoImageParams, successCallback: (buffer: ArrayBuffer) => void, failureCallback: (error: ErrorEvent) => void): void;
    getObjectInstance(instanceData: CommonDicomInstanceParams, mimeType: string, imageParams: WadoImageParams, successCallback: (buffer: any) => void, failureCallback: (error: Event) => void): void;
    private createUrl(instanceData, mimeType, imageParams);
}
declare class CommonDicomInstanceParams {
    studyUID: string;
    seriesUID: string;
    instanceUID: string;
}
declare class WadoImageParams {
    frameNumber: string;
}
declare class WadoRsProxy {
    private _baseUrl;
    BaseUrl: string;
    constructor(baseUrl: string);
    getStudyMetadata(studyInstanceUid: string, successCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getStudy(studyInstanceUid: string, mediaType: string, successCallback: (data: any, textStatus: string) => any, failureCallback: (ev: Event) => void): void;
    getObjectInstanceMetadata(studyInstanceUid: string, seriesInstanceUid: string, sopInstanceUID: string, mediaType: string, successCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, failureCallback?: (ev: Event) => void): void;
    getObjectInstance(studyInstanceUid: string, seriesInstanceUid: string, sopInstanceUID: string, mediaType: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getFrame(studyInstanceUid: string, seriesInstanceUid: string, sopInstanceUID: string, frameList: string, mediaType: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getFrameUncompressed(studyInstanceUid: string, seriesInstanceUid: string, sopInstanceUID: string, frameList: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getObjectUncompressed(studyInstanceUid: string, seriesInstanceUid: string, sopInstanceUID: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getObjectDicom(studyInstanceUid: string, seriesInstanceUid: string, sopInstanceUID: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getStudyDicom(studyInstanceUid: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getStudyUncompressed(studyInstanceUid: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
    getDICOMMultipart(urlRsPart: string, acceptDataType: string, successCallback: (data: any, textStatus?: string, jqXHR?: JQueryXHR) => any, failureCallback: (ev: Event) => void): void;
}
interface String {
    format(...arguments: string[]): string;
}
