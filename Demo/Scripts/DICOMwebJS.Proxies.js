var DICOMwebJS;
(function (DICOMwebJS) {
    var ServerConfiguration;
    (function (ServerConfiguration) {
        ServerConfiguration.BaseServerUrl;
        ServerConfiguration.WadoUriPart = "api/wadouri";
        ServerConfiguration.WadoRsPart = "wadors";
        ServerConfiguration.StowPart = "stowrs";
        ServerConfiguration.QidoPart = "qidors";
        function getWadoUriUrl() {
            return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.WadoUriPart;
        }
        ServerConfiguration.getWadoUriUrl = getWadoUriUrl;
        function getWadoRsUrl() {
            return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.WadoRsPart;
        }
        ServerConfiguration.getWadoRsUrl = getWadoRsUrl;
        function getStowUrl() {
            return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.StowPart;
        }
        ServerConfiguration.getStowUrl = getStowUrl;
        function getQidoUrl() {
            return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.QidoPart;
        }
        ServerConfiguration.getQidoUrl = getQidoUrl;
    })(ServerConfiguration = DICOMwebJS.ServerConfiguration || (DICOMwebJS.ServerConfiguration = {}));
})(DICOMwebJS || (DICOMwebJS = {}));
var MimeTypes = (function () {
    function MimeTypes() {
    }
    MimeTypes.DICOM = "application/dicom";
    MimeTypes.xmlDicom = "application/dicom+xml";
    MimeTypes.Jpeg = "image/jpeg";
    MimeTypes.WebP = "image/webp";
    MimeTypes.Json = "application/json";
    MimeTypes.UncompressedData = "application/octec-stream";
    MimeTypes.PlainText = "text/plain";
    MimeTypes.MultipartRelated = "multipart/related";
    return MimeTypes;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var QidoRsProxy = (function () {
    function QidoRsProxy(baseUrl) {
        this.BaseUrl = "";
        this.BaseUrl = baseUrl;
    }
    QidoRsProxy.prototype.findStudies = function (query) {
        this.DoQuery(query, "/studies");
    };
    QidoRsProxy.prototype.findSeries = function (query) {
        this.DoQuery(query, "/series");
    };
    QidoRsProxy.prototype.findInstances = function (query) {
        this.DoQuery(query, "/instances");
    };
    QidoRsProxy.prototype.DoQuery = function (query, path) {
        var ajaxSettings = {};
        var elements = query.query.DicomSourceProvider.getElements();
        var length = elements.length;
        var matches = [];
        var includes = [];
        var queryString = "";
        var methodUrl = this.BaseUrl + path;
        while (length--) {
            var element = elements[length];
            matches.push(element.Tag.StringValue + "=" + encodeURIComponent(element.toString()));
        }
        length = query.returnValues.length;
        while (length--) {
            includes.push("includefield=" + query.returnValues[length].StringValue);
        }
        queryString += matches.join("&");
        if (matches.length != 0 && includes.length != 0) {
            queryString += "&";
        }
        queryString += includes.join("&");
        methodUrl += "?" + queryString;
        ajaxSettings.url = methodUrl;
        ajaxSettings.timeout = 20000;
        ajaxSettings.success = function (data, textStatus, jqXHR) {
            if (query.success) {
                query.success(data);
            }
        };
        ajaxSettings.error = function (jqXHR, textStatus, errorThrown) {
            if (query.error) {
                query.error(textStatus, errorThrown);
            }
        };
        $.ajax(ajaxSettings);
    };
    return QidoRsProxy;
})();
var QueryOptions = (function () {
    function QueryOptions() {
        this._fuzzy = false;
        this._limit = -1;
        this._offset = -1;
    }
    Object.defineProperty(QueryOptions.prototype, "fuzzyMatching", {
        get: function () {
            return this._fuzzy;
        },
        set: function (value) {
            this._fuzzy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryOptions.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryOptions.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    return QueryOptions;
})();
var queryParams = (function () {
    function queryParams() {
    }
    return queryParams;
})();
var PatientParams = (function (_super) {
    __extends(PatientParams, _super);
    function PatientParams(elementsProvider) {
        _super.call(this, elementsProvider);
    }
    Object.defineProperty(PatientParams.prototype, "PatientId", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.PatientId);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.PatientId, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientParams.prototype, "PatientName", {
        get: function () {
            return _super.prototype.getValue.call(this, DicomTags.PatientsName);
        },
        set: function (value) {
            _super.prototype.setValue.call(this, DicomTags.PatientsName, value);
        },
        enumerable: true,
        configurable: true
    });
    return PatientParams;
})(DicomModuleBase);
var StudyParams = (function (_super) {
    __extends(StudyParams, _super);
    function StudyParams(elementsProvider) {
        _super.call(this, elementsProvider);
    }
    Object.defineProperty(StudyParams.prototype, "StudyInstanceUid", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.StudyInstanceUid);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.StudyInstanceUid, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyParams.prototype, "StudyDate", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.StudyDate);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.StudyDate, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyParams.prototype, "StudyID", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.StudyId);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.StudyId, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyParams.prototype, "AccessionNumber", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.AccessionNumber);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.AccessionNumber, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyParams.prototype, "StudyDescription", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.StudyDescription);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.StudyDescription, value);
        },
        enumerable: true,
        configurable: true
    });
    return StudyParams;
})(PatientParams);
var SeriesParams = (function (_super) {
    __extends(SeriesParams, _super);
    function SeriesParams() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(SeriesParams.prototype, "Modality", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.Modality);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.Modality, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesParams.prototype, "SeriesNumber", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.SeriesNumber);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.SeriesNumber, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesParams.prototype, "SeriesInstanceUID", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.SeriesInstanceUid);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.SeriesInstanceUid, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesParams.prototype, "SeriesDescription", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.SeriesDescription);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.SeriesDescription, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesParams.prototype, "SeriesDate", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.SeriesDate);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.SeriesDate, value);
        },
        enumerable: true,
        configurable: true
    });
    return SeriesParams;
})(StudyParams);
var InstanceParams = (function (_super) {
    __extends(InstanceParams, _super);
    function InstanceParams() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(InstanceParams.prototype, "SopInstanceUid", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.SopInstanceUid);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.SopInstanceUid, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstanceParams.prototype, "InstanceNumber", {
        get: function () {
            return _super.prototype.getString.call(this, DicomTags.InstanceNumber);
        },
        set: function (value) {
            _super.prototype.setString.call(this, DicomTags.InstanceNumber, value);
        },
        enumerable: true,
        configurable: true
    });
    return InstanceParams;
})(SeriesParams);
var StowRsProxy = (function () {
    function StowRsProxy(baseUrl) {
        this.BaseUrl = "";
        this._returnJson = true;
        this.BaseUrl = baseUrl;
    }
    Object.defineProperty(StowRsProxy.prototype, "returnJson", {
        get: function () {
            return this._returnJson;
        },
        set: function (value) {
            this._returnJson = value;
        },
        enumerable: true,
        configurable: true
    });
    StowRsProxy.prototype.StoreInstance = function (fileBuffer, successCallback, failureCallback) {
        var url = this.BaseUrl + "/studies/1234";
        var xhr = new XMLHttpRequest();
        var boundary = 'DICOM FILE';
        var method = 'POST';
        var acceptHeader = "application/json, application/dicom+xml; q=0.9, */*; q = 0.1";
        var url = url;
        var request = this.gen_multipart(" ", boundary, MimeTypes.DICOM, fileBuffer);
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", 'multipart/related; boundary="' + boundary + '";type="' + MimeTypes.DICOM + '"');
        xhr.setRequestHeader("accept", acceptHeader);
        xhr.onreadystatechange = function (data) {
            if (xhr.readyState == 4) {
                successCallback(xhr);
            }
        };
        xhr.onerror = function (error) {
            failureCallback(error);
        };
        xhr.send(request);
    };
    StowRsProxy.prototype.gen_multipart = function (title, boundary, mimetype, byteBuffer) {
        var buffer = new Uint8Array(byteBuffer);
        var before = [title, "\r\n--", boundary, "\r\n", 'Content-Type:', mimetype, "\r\n\r\n"].join('');
        var after = "\r\n--" + boundary + "--";
        var size = before.length + buffer.byteLength + after.length;
        var uint8array = new Uint8Array(size);
        var i = 0;
        for (; i < before.length; i++) {
            uint8array[i] = before.charCodeAt(i) & 0xff;
        }
        for (var j = 0; j < buffer.byteLength; i++, j++) {
            uint8array[i] = buffer[j];
        }
        for (var j = 0; j < after.length; i++, j++) {
            uint8array[i] = after.charCodeAt(j) & 0xff;
        }
        return uint8array;
    };
    return StowRsProxy;
})();
var WadoUriProxy = (function () {
    function WadoUriProxy(baseUrl) {
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(WadoUriProxy.prototype, "BaseUrl", {
        get: function () {
            return this._baseUrl;
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    WadoUriProxy.prototype.getDicomInstance = function (instanceData, anonymize, imageParams, successCallback, failureCallback) {
        this.getObjectInstance(instanceData, MimeTypes.DICOM, imageParams, successCallback, failureCallback);
    };
    WadoUriProxy.prototype.getJpegImage = function (instanceData, imageParams, successCallback, failureCallback) {
        this.getObjectInstance(instanceData, MimeTypes.Jpeg, imageParams, successCallback, failureCallback);
    };
    WadoUriProxy.prototype.getUncompressedImage = function (instanceData, imageParams, successCallback, failureCallback) {
        this.getObjectInstance(instanceData, MimeTypes.UncompressedData, imageParams, successCallback, failureCallback);
    };
    WadoUriProxy.prototype.getObjectInstance = function (instanceData, mimeType, imageParams, successCallback, failureCallback) {
        var url = this.createUrl(instanceData, mimeType, imageParams);
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/octet-stream");
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var buffer = new Uint8Array(xhr.response);
                successCallback(buffer);
            }
        };
        xhr.onerror = function (error) {
            failureCallback(error);
        };
        xhr.send(null);
    };
    WadoUriProxy.prototype.createUrl = function (instanceData, mimeType, imageParams) {
        var url = this.BaseUrl;
        url += WadoUriProxy._QueryParamsFormatted.format(instanceData.studyUID, instanceData.seriesUID, instanceData.instanceUID);
        if (mimeType) {
            url += "&contentType=" + mimeType;
        }
        if (imageParams.frameNumber) {
            url += "&frameNumber=" + imageParams.frameNumber;
        }
        return url;
    };
    WadoUriProxy._QueryParamsFormatted = "?RequestType=wado&studyUID={0}&seriesUID={1}&objectUID={2}";
    return WadoUriProxy;
})();
var CommonDicomInstanceParams = (function () {
    function CommonDicomInstanceParams() {
    }
    return CommonDicomInstanceParams;
})();
var WadoImageParams = (function () {
    function WadoImageParams() {
    }
    return WadoImageParams;
})();
var WadoRsProxy = (function () {
    function WadoRsProxy(baseUrl) {
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(WadoRsProxy.prototype, "BaseUrl", {
        get: function () {
            return this._baseUrl;
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    WadoRsProxy.prototype.getStudyMetadata = function (studyInstanceUid, successCallback, failureCallback) {
        var url = this._baseUrl + "/studies/" + studyInstanceUid + "/metadata";
        $.get(url, successCallback, "json");
    };
    WadoRsProxy.prototype.getStudy = function (studyInstanceUid, mediaType, successCallback, failureCallback) {
        this.getDICOMMultipart("/studies/" + studyInstanceUid + "/", mediaType, successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getObjectInstanceMetadata = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, mediaType, successCallback, failureCallback) {
        var url = this._baseUrl + "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/metadata";
        if (!mediaType || mediaType == MimeTypes.Json) {
            $.get(url, successCallback, "json");
        }
        else if (mediaType == MimeTypes.xmlDicom) {
            this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/", mediaType, successCallback, failureCallback);
        }
    };
    WadoRsProxy.prototype.getObjectInstance = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, mediaType, successCallback, failureCallback) {
        this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/", mediaType, successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getFrame = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, frameList, mediaType, successCallback, failureCallback) {
        this.getDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/frames/" + frameList, mediaType, successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getFrameUncompressed = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, frameList, successCallback, failureCallback) {
        this.getFrame(studyInstanceUid, seriesInstanceUid, sopInstanceUID, frameList, "application/octec-stream", successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getObjectUncompressed = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, successCallback, failureCallback) {
        this.getObjectInstance(studyInstanceUid, seriesInstanceUid, sopInstanceUID, "application/octec-stream", successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getObjectDicom = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, successCallback, failureCallback) {
        this.getObjectInstance(studyInstanceUid, seriesInstanceUid, sopInstanceUID, "application/dicom", successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getStudyDicom = function (studyInstanceUid, successCallback, failureCallback) {
        this.getStudy(studyInstanceUid, "application/dicom", successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getStudyUncompressed = function (studyInstanceUid, successCallback, failureCallback) {
        this.getStudy(studyInstanceUid, "application/octec-stream", successCallback, failureCallback);
    };
    WadoRsProxy.prototype.getDICOMMultipart = function (urlRsPart, acceptDataType, successCallback, failureCallback) {
        var url = this._baseUrl + urlRsPart;
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/octet-stream");
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.setRequestHeader("accept", "multipart/related; type=\"" + acceptDataType + "\"");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var buffer = new Uint8Array(xhr.response);
                successCallback(buffer, xhr.statusText);
            }
        };
        xhr.onerror = function (error) {
            failureCallback(error);
        };
        xhr.send(null);
    };
    return WadoRsProxy;
})();
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        if (m == "{{") {
            return "{";
        }
        if (m == "}}") {
            return "}";
        }
        return args[n];
    });
};
//# sourceMappingURL=DICOMwebJS.Proxies.js.map