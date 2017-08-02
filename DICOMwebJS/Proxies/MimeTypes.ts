class MimeTypes
{
    public static DICOM : string = "application/dicom";
    public static xmlDicom : string = "application/dicom+xml";
    public static Jpeg : string = "image/jpeg";
    public static WebP : string = "image/webp";
    public static Json : string = "application/dicom+json";
    public static UncompressedData: string = "application/octet-stream";
    public static PlainText: string = "text/plain";
    public static MultipartRelated: string = "multipart/related";

    public static getMultiPartAcceptHeader(mimeType: string): string
    {
       return "multipart/related; type=\"" + mimeType + "\"";
    }
}