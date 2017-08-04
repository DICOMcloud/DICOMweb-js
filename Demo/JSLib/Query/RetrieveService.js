var RetrieveService = (function () {
    //_queryModel: QueryModel;
    function RetrieveService(retrieveServic) {
        this._retrieveService = retrieveServic;
    }
    RetrieveService.prototype.getObjectInstance = function (instance, mediaType, successCallback) {
        this._retrieveService.getObjectInstance(instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid, mediaType)
            .done(function (data) {
            successCallback(data);
        })
            .fail(function (ev) {
            console.error("getObject failed");
        });
    };
    RetrieveService.prototype.getObjectInstanceMetadata = function (instance, successCallback, mediaType) {
        this._retrieveService.getObjectInstanceMetadata(instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid, mediaType)
            .done(function (data) {
            if (mediaType == MimeTypes.Json) {
                data = JSON.parse(data);
            }
            successCallback(data);
            //TODO: if XML then parse multipart and return the raw XML
        })
            .fail(function (ev) {
            console.error("getObjectMetadata failed");
        });
    };
    RetrieveService.prototype.getStudyAsJson = function (study, successCallback) {
        this._retrieveService.getStudyMetadata(study.StudyInstanceUid, MimeTypes.Json)
            .done(function (data, textStatus, jqXHR) {
            successCallback(JSON.parse(data));
        })
            .fail(function (ev) {
            console.error("getStudyMetadata failed");
        });
    };
    RetrieveService.prototype.getStudyAsXml = function (study, successCallback) {
        this._retrieveService.getStudyMetadata(study.StudyInstanceUid, MimeTypes.xmlDicom)
            .done(function (data, textStatus, jqXHR) {
            successCallback(data);
        })
            .fail(function (ev) {
            console.error("getStudyMetadata failed");
        });
    };
    RetrieveService.prototype.getSeries = function (series, successCallback, mediaType) {
        if (mediaType === void 0) { mediaType = null; }
        if (null === mediaType) {
            mediaType = MimeTypes.Json;
        }
        this._retrieveService.getSeriesMetadata(series.StudyInstanceUid, series.SeriesInstanceUID, mediaType)
            .done(function (data, textStatus, jqXHR) {
            if (mediaType == MimeTypes.Json) {
                data = JSON.parse(data);
            }
            successCallback(data);
        })
            .fail(function (ev) {
            console.error("getStudyMetadata failed");
        });
    };
    RetrieveService.prototype.getFrameUncompressed = function (instance, frameList, successCallback, failureCallback) {
        this._retrieveService.getFrame(instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid, frameList, MimeTypes.UncompressedData)
            .done(successCallback)
            .fail(failureCallback);
    };
    RetrieveService.prototype.DownloadObject = function (instance, successCallback) {
        this._retrieveService.getObjectInstance(instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid, MimeTypes.DICOM)
            .done(function (data, textStatus) {
            successCallback(data);
        })
            .fail(function (ev) {
            alert("failed: " + ev); //TODO: move to view
        });
    };
    RetrieveService.prototype.DownloadStudy = function (instance, successCallback) {
        this._retrieveService.getStudy(instance.StudyInstanceUid, MimeTypes.DICOM)
            .done(function (data, textStatus) {
            successCallback(data);
        })
            .fail(function (ev) {
            alert("failed: " + ev); //TODO: move to view
        });
    };
    return RetrieveService;
}());
//# sourceMappingURL=RetrieveService.js.map