var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DelowRsProxy = (function () {
    function DelowRsProxy(baseUrl) {
        if (baseUrl === void 0) { baseUrl = null; }
        this._baseUrl = "";
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(DelowRsProxy.prototype, "BaseUrl", {
        get: function () {
            if (this._baseUrl === null) {
                return DICOMwebJS.ServerConfiguration.getDelowRsUrl();
            }
            else {
                return this._baseUrl;
            }
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    DelowRsProxy.prototype.deleteStudy = function (studyUID) {
        var url = this.BaseUrl + "/studies/" + studyUID + "/";
        var settings = {
            url: url,
            type: "DELETE"
        };
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            settings.headers = { "Authorization": DICOMwebJS.ServerConfiguration.SecurityToken };
        }
        var deffered = $.Deferred();
        $.ajax(settings).then(function (data) {
            return deffered.resolve(data);
        }, function (jqxhr, textStatus, error) {
            return deffered.reject(error);
        });
        return deffered.promise();
    };
    return DelowRsProxy;
}());
var MimeTypes = (function () {
    function MimeTypes() {
    }
    MimeTypes.getMultiPartAcceptHeader = function (mimeType) {
        return "multipart/related; type=\"" + mimeType + "\"";
    };
    MimeTypes.DICOM = "application/dicom";
    MimeTypes.xmlDicom = "application/dicom+xml";
    MimeTypes.Jpeg = "image/jpeg";
    MimeTypes.WebP = "image/webp";
    MimeTypes.Json = "application/dicom+json";
    MimeTypes.UncompressedData = "application/octet-stream";
    MimeTypes.PlainText = "text/plain";
    MimeTypes.MultipartRelated = "multipart/related";
    return MimeTypes;
}());
var DicomModuleBase = (function () {
    function DicomModuleBase(dicomProvider) {
        if (dicomProvider) {
            this.DicomSourceProvider = dicomProvider;
        }
        else {
            this.DicomSourceProvider = new JsonDicomDatasetService();
        }
    }
    DicomModuleBase.prototype.getUInt16 = function (tagValue, valueIndex, defaultValue) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        if (!defaultValue) {
            defaultValue = 0;
        }
        return this.DicomSourceProvider.getElement(tagValue).GetUInt16(valueIndex, defaultValue);
    };
    DicomModuleBase.prototype.setUInt16 = function (tagValue, value, valueIndex) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        this.DicomSourceProvider.getElement(tagValue).SetUInt16(valueIndex, value);
    };
    DicomModuleBase.prototype.setString = function (tagValue, value, valueIndex) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        this.DicomSourceProvider.getElement(tagValue).SetString(valueIndex, value);
    };
    DicomModuleBase.prototype.getString = function (tagValue, valueIndex, defaultValue) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        if (!defaultValue) {
            defaultValue = "";
        }
        return this.DicomSourceProvider.getElement(tagValue).GetString(valueIndex, defaultValue);
    };
    DicomModuleBase.prototype.setValue = function (tagValue, value, valueIndex) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        this.DicomSourceProvider.getElement(tagValue).SetValue(valueIndex, value);
    };
    DicomModuleBase.prototype.getValue = function (tagValue, valueIndex, defaultValue) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        if (!defaultValue) {
            defaultValue = "";
        }
        return this.DicomSourceProvider.getElement(tagValue).GetValue(valueIndex, defaultValue);
    };
    return DicomModuleBase;
}());
var QidoRsProxy = (function () {
    function QidoRsProxy(baseUrl) {
        if (baseUrl === void 0) { baseUrl = null; }
        this._baseUrl = "";
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(QidoRsProxy.prototype, "BaseUrl", {
        get: function () {
            if (this._baseUrl === null) {
                return DICOMwebJS.ServerConfiguration.getQidoUrl();
            }
            else {
                return this._baseUrl;
            }
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    QidoRsProxy.prototype.findStudies = function (query) {
        return this.DoQuery(query, "/studies");
    };
    QidoRsProxy.prototype.findSeries = function (query) {
        return this.DoQuery(query, "/series");
    };
    QidoRsProxy.prototype.findInstances = function (query) {
        return this.DoQuery(query, "/instances");
    };
    QidoRsProxy.prototype.DoQuery = function (query, path) {
        var $deffered = $.Deferred();
        var xhr = new XMLHttpRequest();
        var elements = query.query.DicomSourceProvider.getElements();
        var length = elements.length;
        var matches = [];
        var includes = [];
        var queryString = "";
        var methodUrl = this.BaseUrl + path;
        var acceptHeader = "";
        if (query.acceptType != null && query.acceptType.trim() !== "") {
            if (query.acceptType.trim() == MimeTypes.Json) {
                acceptHeader = MimeTypes.Json;
            }
            else {
                acceptHeader = MimeTypes.getMultiPartAcceptHeader(MimeTypes.xmlDicom);
            }
        }
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
        if (query.options && query.options.limit > 0) {
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
                else {
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
    };
    return QidoRsProxy;
}());
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
}());
var queryParams = (function () {
    function queryParams() {
    }
    return queryParams;
}());
var PatientParams = (function (_super) {
    __extends(PatientParams, _super);
    function PatientParams(elementsProvider) {
        return _super.call(this, elementsProvider) || this;
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
}(DicomModuleBase));
var StudyParams = (function (_super) {
    __extends(StudyParams, _super);
    function StudyParams(elementsProvider) {
        return _super.call(this, elementsProvider) || this;
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
}(PatientParams));
var SeriesParams = (function (_super) {
    __extends(SeriesParams, _super);
    function SeriesParams() {
        return _super !== null && _super.apply(this, arguments) || this;
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
}(StudyParams));
var InstanceParams = (function (_super) {
    __extends(InstanceParams, _super);
    function InstanceParams() {
        return _super !== null && _super.apply(this, arguments) || this;
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
}(SeriesParams));
var DICOMwebJS;
(function (DICOMwebJS) {
    var ServerConfiguration;
    (function (ServerConfiguration) {
        ServerConfiguration.WadoUriPart = "wadouri";
        ServerConfiguration.WadoRsPart = "api";
        ServerConfiguration.StowPart = "api";
        ServerConfiguration.QidoPart = "api";
        ServerConfiguration.DelowRsPart = "api";
        ServerConfiguration.IncludeAuthorizationHeader = false;
        ServerConfiguration.SecurityToken = "";
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
        function getDelowRsUrl() {
            return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.DelowRsPart;
        }
        ServerConfiguration.getDelowRsUrl = getDelowRsUrl;
        function getOhifJsonEndpoint(studyInstanceUid) {
            return DICOMwebJS.ServerConfiguration.BaseServerUrl + "/ohif/study/" + studyInstanceUid + "/series";
        }
        ServerConfiguration.getOhifJsonEndpoint = getOhifJsonEndpoint;
        function getOhifViewerUrl(studyInstanceUid) {
            return DICOMwebJS.ServerConfiguration.OhifViewerUrl + "?url=" +
                DICOMwebJS.ServerConfiguration.getOhifJsonEndpoint(studyInstanceUid);
        }
        ServerConfiguration.getOhifViewerUrl = getOhifViewerUrl;
    })(ServerConfiguration = DICOMwebJS.ServerConfiguration || (DICOMwebJS.ServerConfiguration = {}));
})(DICOMwebJS || (DICOMwebJS = {}));
var StowRsProxy = (function () {
    function StowRsProxy(baseUrl) {
        if (baseUrl === void 0) { baseUrl = null; }
        this._baseUrl = "";
        this._returnJson = true;
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(StowRsProxy.prototype, "BaseUrl", {
        get: function () {
            if (this._baseUrl === null) {
                return DICOMwebJS.ServerConfiguration.getStowUrl();
            }
            else {
                return this._baseUrl;
            }
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StowRsProxy.prototype, "returnJson", {
        get: function () { return this._returnJson; },
        set: function (value) { this._returnJson = value; },
        enumerable: true,
        configurable: true
    });
    StowRsProxy.prototype.StoreInstance = function (fileBufferList, studyInstanceUID, query) {
        var deffered = $.Deferred();
        var studyPart = (studyInstanceUID) ? "/studies/" + studyInstanceUID : "/studies/";
        var url = this.BaseUrl + studyPart + "?" + (query || "");
        var xhr = new XMLHttpRequest();
        var boundary = 'DICOM FILE';
        var method = 'POST';
        var acceptHeader = "application/json, application/dicom+xml; q=0.9, */*; q = 0.1";
        var url = url;
        var request = this.gen_multipart(" ", boundary, MimeTypes.DICOM, fileBufferList);
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", MimeTypes.getMultiPartAcceptHeader(MimeTypes.DICOM) + '; boundary="' + boundary + '"');
        xhr.setRequestHeader("accept", acceptHeader);
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
        xhr.onreadystatechange = function (data) {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    deffered.resolve(xhr);
                }
                else {
                    deffered.reject(xhr);
                }
            }
        };
        xhr.onerror = function (error) {
            deffered.reject(xhr);
        };
        xhr.send(request);
        return deffered.promise();
    };
    StowRsProxy.prototype.gen_multipart = function (title, boundary, mimetype, byteBufferList) {
        var before = ["\r\n--", boundary, "\r\n", 'Content-Type:', mimetype, "\r\n\r\n"].join('');
        var after = "\r\n--" + boundary + "--";
        var beforeArray = new Uint8Array(before.length);
        var afterArray = new Uint8Array(after.length);
        for (var i = 0; i < before.length; i++) {
            beforeArray[i] = before.charCodeAt(i) & 0xff;
        }
        for (var j = 0; j < after.length; j++) {
            afterArray[j] = after.charCodeAt(j) & 0xff;
        }
        var size = 0;
        byteBufferList.forEach(function (byteBuffer) {
            size += before.length + byteBuffer.byteLength;
        });
        size += after.length;
        var uint8array = new Uint8Array(size);
        var offset = 0;
        for (var index = 0; index < byteBufferList.length; index++) {
            var buffer = new Uint8Array(byteBufferList[index]);
            uint8array.set(beforeArray, offset);
            offset += beforeArray.byteLength;
            uint8array.set(buffer, offset);
            offset += buffer.byteLength;
        }
        uint8array.set(afterArray, offset);
        offset += afterArray.byteLength;
        return uint8array;
    };
    return StowRsProxy;
}());
var WadoRsProxy = (function () {
    function WadoRsProxy(baseUrl) {
        if (baseUrl === void 0) { baseUrl = null; }
        this._baseUrl = "";
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(WadoRsProxy.prototype, "BaseUrl", {
        get: function () {
            if (this._baseUrl === null) {
                return DICOMwebJS.ServerConfiguration.getWadoRsUrl();
            }
            else {
                return this._baseUrl;
            }
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    WadoRsProxy.prototype.getStudy = function (studyInstanceUid, mediaType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        return this.getBinaryDICOMMultipart("/studies/" + studyInstanceUid + "/", mediaType, transferSyntax);
    };
    WadoRsProxy.prototype.getSeries = function (studyInstanceUid, seriesInstanceUid, mediaType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        return this.getBinaryDICOMMultipart("/studies/" + studyInstanceUid + "/" + "series" + "/", mediaType, transferSyntax);
    };
    WadoRsProxy.prototype.getObjectInstance = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, mediaType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        return this.getBinaryDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID + "/", mediaType, transferSyntax);
    };
    WadoRsProxy.prototype.getStudyMetadata = function (studyInstanceUid, mediaType, transferSyntax) {
        if (mediaType === void 0) { mediaType = null; }
        if (transferSyntax === void 0) { transferSyntax = null; }
        var urlParts = "/studies/" + studyInstanceUid + "/metadata";
        return this.getMetadata(urlParts, mediaType, transferSyntax);
    };
    WadoRsProxy.prototype.getSeriesMetadata = function (studyInstanceUid, seriesInstanceUid, mediaType, transferSyntax) {
        if (mediaType === void 0) { mediaType = null; }
        if (transferSyntax === void 0) { transferSyntax = null; }
        var urlParts = "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/metadata";
        return this.getMetadata(urlParts, mediaType, transferSyntax);
    };
    WadoRsProxy.prototype.getObjectInstanceMetadata = function (studyInstanceUid, seriesInstanceUid, sopInstanceUid, mediaType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var urlParts = "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUid + "/metadata";
        return this.getMetadata(urlParts, mediaType, transferSyntax);
    };
    WadoRsProxy.prototype.getMetadata = function (urlParts, mediaType, transferSyntax) {
        if (mediaType === void 0) { mediaType = null; }
        if (transferSyntax === void 0) { transferSyntax = null; }
        if (mediaType === null || typeof (mediaType) === "undefined") {
            mediaType = MimeTypes.Json;
        }
        if (mediaType == MimeTypes.Json) {
            return this.get(urlParts, mediaType, transferSyntax);
        }
        else if (mediaType == MimeTypes.xmlDicom) {
            return this.getMultipart(urlParts, mediaType, transferSyntax);
        }
        else {
            throw "Invalid mediaType for metadata request";
        }
    };
    WadoRsProxy.prototype.getFrame = function (studyInstanceUid, seriesInstanceUid, sopInstanceUID, frameList, mediaType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        return this.getBinaryDICOMMultipart("/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUID +
            "/frames/" + frameList, mediaType);
    };
    WadoRsProxy.prototype.getBinaryDICOMMultipart = function (urlRsPart, acceptDataType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var deffered = $.Deferred();
        var url = this.BaseUrl + urlRsPart;
        var xhr = new XMLHttpRequest();
        var acceptHeader = MimeTypes.getMultiPartAcceptHeader(acceptDataType);
        if (transferSyntax) {
            acceptHeader += ";transfer-syntax=" + transferSyntax;
        }
        xhr.overrideMimeType("application/octet-stream");
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.setRequestHeader("accept", acceptHeader);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var buffer = new Uint8Array(xhr.response);
                deffered.resolve(buffer, xhr.statusText);
            }
        };
        xhr.onerror = function (error) {
            deffered.reject(error);
        };
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
        xhr.send(null);
        return deffered.promise();
    };
    WadoRsProxy.prototype.getMultipart = function (urlRsPart, acceptDataType, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        return this.get(urlRsPart, MimeTypes.getMultiPartAcceptHeader(acceptDataType), transferSyntax);
    };
    WadoRsProxy.prototype.get = function (urlRsPart, acceptHeader, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var deffered = $.Deferred();
        var url = this.BaseUrl + urlRsPart;
        var xhr = new XMLHttpRequest();
        if (transferSyntax) {
            acceptHeader += ";transfer-syntax=" + transferSyntax;
        }
        xhr.open("GET", url, true);
        xhr.setRequestHeader("accept", acceptHeader);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                deffered.resolve(xhr.response, xhr.statusText);
            }
        };
        xhr.onerror = function (error) {
            deffered.reject(error);
        };
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
        xhr.send(null);
        return deffered.promise();
    };
    return WadoRsProxy;
}());
var WadoUriProxy = (function () {
    function WadoUriProxy(baseUrl) {
        if (baseUrl === void 0) { baseUrl = null; }
        this._baseUrl = "";
        this._baseUrl = baseUrl;
    }
    Object.defineProperty(WadoUriProxy.prototype, "BaseUrl", {
        get: function () {
            if (this._baseUrl === null) {
                return DICOMwebJS.ServerConfiguration.getWadoUriUrl();
            }
            else {
                return this._baseUrl;
            }
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    WadoUriProxy.prototype.getDicomInstance = function (instanceData, anonymize, imageParams) {
        return this.getObjectInstance(this.createUrl(instanceData, MimeTypes.DICOM, imageParams));
    };
    WadoUriProxy.prototype.getJpegImage = function (instanceData, imageParams) {
        return this.getObjectInstance(this.createUrl(instanceData, MimeTypes.Jpeg, imageParams));
    };
    WadoUriProxy.prototype.getUncompressedImage = function (instanceData, imageParams) {
        return this.getObjectInstance(this.createUrl(instanceData, MimeTypes.UncompressedData, imageParams));
    };
    WadoUriProxy.prototype.getObjectInstance = function (url) {
        var deffered = $.Deferred();
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/octet-stream");
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var buffer = new Uint8Array(xhr.response);
                deffered.resolve(buffer);
            }
        };
        xhr.onerror = function (error) {
            deffered.reject(error);
        };
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
        xhr.send(null);
        return deffered.promise();
    };
    WadoUriProxy.prototype.createUrl = function (instanceData, mimeType, imageParams) {
        var url = this.BaseUrl;
        url += WadoUriProxy._QueryParamsFormatted.format(instanceData.studyUID, instanceData.seriesUID, instanceData.instanceUID);
        if (mimeType) {
            url += "&contentType=" + mimeType;
        }
        if (imageParams) {
            if (imageParams.frameNumber) {
                url += "&frameNumber=" + imageParams.frameNumber;
            }
            if (imageParams.transferSyntax) {
                url += "&transferSyntax=" + imageParams.transferSyntax;
            }
        }
        return url;
    };
    WadoUriProxy._QueryParamsFormatted = "?RequestType=wado&studyUID={0}&seriesUID={1}&objectUID={2}";
    return WadoUriProxy;
}());
var CommonDicomInstanceParams = (function () {
    function CommonDicomInstanceParams() {
    }
    return CommonDicomInstanceParams;
}());
var WadoImageParams = (function () {
    function WadoImageParams() {
    }
    return WadoImageParams;
}());
var DicomElement = (function () {
    function DicomElement() {
        this.Value = [];
    }
    DicomElement.prototype.SetUInt16 = function (index, value) {
        this.Value[index] = value;
    };
    DicomElement.prototype.GetUInt16 = function (index, defaultValue) {
        return parseInt(this.get(index, defaultValue));
    };
    DicomElement.prototype.SetString = function (index, value) {
        this.Value[index] = value;
    };
    DicomElement.prototype.GetString = function (index, defaultValue) {
        return this.get(index, defaultValue) + "";
    };
    DicomElement.prototype.SetValue = function (index, value) {
        this.Value[index] = value;
    };
    DicomElement.prototype.GetValue = function (index, defaultValue) {
        return this.get(index, defaultValue);
    };
    DicomElement.prototype.toString = function () {
        if (this.Value && this.Value.length > 0) {
            return this.getStringValue();
        }
        else {
            return "";
        }
    };
    DicomElement.prototype.get = function (index, defaultValue) {
        if (this.Value && this.Value.length > 0) {
            if (index >= this.Value.length) {
                throw "Invalid index";
            }
            return this.Value[index];
        }
        return defaultValue;
    };
    DicomElement.prototype.getStringValue = function () {
        if (this.VR == "PN") {
            var pName = this.Value[0];
            if (pName) {
                return pName.Alphabetic + "";
            }
        }
        return this.Value[0].toString();
    };
    return DicomElement;
}());
var DicomElementsCache = (function () {
    function DicomElementsCache() {
        this.elementsArray = {};
        this.elements = [];
    }
    DicomElementsCache.prototype.addElement = function (element) {
        this.elementsArray[element.Tag.StringValue] = element;
    };
    DicomElementsCache.prototype.getElement = function (tagValue) {
        var element = this.elementsArray[DicomTag.getStringValue(tagValue)];
        if (element) {
            return element;
        }
        return null;
    };
    DicomElementsCache.prototype.getAllElements = function () {
        var _this = this;
        var vals = Object.keys(this.elementsArray).map(function (key) {
            return _this.elementsArray[key];
        });
        return vals;
    };
    return DicomElementsCache;
}());
var DicomDatasetService = (function () {
    function DicomDatasetService() {
    }
    DicomDatasetService.fromDateString = function (dateString) {
        return new Date(dateString);
    };
    DicomDatasetService.fromDate = function (date) {
        return date.toString();
    };
    return DicomDatasetService;
}());
var JsonDicomDatasetService = (function (_super) {
    __extends(JsonDicomDatasetService, _super);
    function JsonDicomDatasetService() {
        var _this = _super.call(this) || this;
        _this._dataSource = {};
        _this._cache = new DicomElementsCache();
        return _this;
    }
    JsonDicomDatasetService.prototype.setModel = function (jsonDicom) {
        this._dataSource = jsonDicom;
    };
    JsonDicomDatasetService.prototype.getElement = function (tagValue) {
        var element;
        if ((element = this._cache.getElement(tagValue)) != null) {
            return element;
        }
        else {
            var dicomTag = new DicomTag(tagValue);
            var jsonElement = this._dataSource[dicomTag.StringValue];
            element = new DicomElement();
            if (jsonElement) {
                element.Value = jsonElement.Value;
                element.VR = jsonElement.vr;
            }
            element.Tag = dicomTag;
            this._cache.addElement(element);
            return element;
        }
    };
    JsonDicomDatasetService.prototype.getElements = function () {
        for (var tagValue in this._dataSource) {
            if (!this._cache[tagValue]) {
                this._cache.addElement(this.getElement(parseInt(tagValue, 16)));
            }
        }
        return this._cache.getAllElements();
    };
    JsonDicomDatasetService.prototype.getSourceDataset = function () {
        return this._dataSource;
    };
    return JsonDicomDatasetService;
}(DicomDatasetService));
var DicomTag = (function () {
    function DicomTag(tagValue) {
        this.Value = tagValue;
        this.StringValue = DicomTag.getStringValue(tagValue);
        this.Group = ((tagValue & 0xffff0000) >> 16);
        this.Element = (tagValue & 0x0000ffff);
    }
    DicomTag.prototype.toString = function () {
        return "(" + ("0000" + this.Group.toString(8)).substr(-4) + "," + ("0000" + this.Element.toString(8)).substr(-4) + ")";
    };
    DicomTag.getStringValue = function (tagValue) {
        return ("00000000" + tagValue.toString(16).toUpperCase()).substr(-8);
    };
    return DicomTag;
}());
var DicomTags = (function () {
    function DicomTags() {
    }
    DicomTags.AffectedSopClassUid = 2;
    DicomTags.RequestedSopClassUid = 3;
    DicomTags.CommandField = 256;
    DicomTags.MessageId = 272;
    DicomTags.MessageIdBeingRespondedTo = 288;
    DicomTags.MoveDestination = 1536;
    DicomTags.Priority = 1792;
    DicomTags.DataSetType = 2048;
    DicomTags.Status = 2304;
    DicomTags.OffendingElement = 2305;
    DicomTags.ErrorComment = 2306;
    DicomTags.ErrorId = 2307;
    DicomTags.AffectedSopInstanceUid = 4096;
    DicomTags.RequestedSopInstanceUid = 4097;
    DicomTags.EventTypeId = 4098;
    DicomTags.AttributeIdentifierList = 4101;
    DicomTags.ActionTypeId = 4104;
    DicomTags.NumberOfRemainingSubOperations = 4128;
    DicomTags.NumberOfCompletedSubOperations = 4129;
    DicomTags.NumberOfFailedSubOperations = 4130;
    DicomTags.NumberOfWarningSubOperations = 4131;
    DicomTags.MoveOriginatorApplicationEntityTitle = 4144;
    DicomTags.MoveOriginatorMessageId = 4145;
    DicomTags.FileMetaInformationGroupLength = 131072;
    DicomTags.FileMetaInformationVersion = 131073;
    DicomTags.MediaStorageSopClassUid = 131074;
    DicomTags.MediaStorageSopInstanceUid = 131075;
    DicomTags.TransferSyntaxUid = 131088;
    DicomTags.ImplementationClassUid = 131090;
    DicomTags.ImplementationVersionName = 131091;
    DicomTags.SourceApplicationEntityTitle = 131094;
    DicomTags.PrivateInformationCreatorUid = 131328;
    DicomTags.PrivateInformation = 131330;
    DicomTags.FileSetId = 266544;
    DicomTags.FileSetDescriptorFileId = 266561;
    DicomTags.SpecificCharacterSetOfFileSetDescriptorFile = 266562;
    DicomTags.OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity = 266752;
    DicomTags.OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity = 266754;
    DicomTags.FileSetConsistencyFlag = 266770;
    DicomTags.DirectoryRecordSequence = 266784;
    DicomTags.OffsetOfTheNextDirectoryRecord = 267264;
    DicomTags.RecordInUseFlag = 267280;
    DicomTags.OffsetOfReferencedLowerLevelDirectoryEntity = 267296;
    DicomTags.DirectoryRecordType = 267312;
    DicomTags.PrivateRecordUid = 267314;
    DicomTags.ReferencedFileId = 267520;
    DicomTags.MrdrDirectoryRecordOffsetRetired = 267524;
    DicomTags.ReferencedSopClassUidInFile = 267536;
    DicomTags.ReferencedSopInstanceUidInFile = 267537;
    DicomTags.ReferencedTransferSyntaxUidInFile = 267538;
    DicomTags.ReferencedRelatedGeneralSopClassUidInFile = 267546;
    DicomTags.NumberOfReferencesRetired = 267776;
    DicomTags.LengthToEndRetired = 524289;
    DicomTags.SpecificCharacterSet = 524293;
    DicomTags.LanguageCodeSequence = 524294;
    DicomTags.ImageType = 524296;
    DicomTags.RecognitionCodeRetired = 524304;
    DicomTags.InstanceCreationDate = 524306;
    DicomTags.InstanceCreationTime = 524307;
    DicomTags.InstanceCreatorUid = 524308;
    DicomTags.SopClassUid = 524310;
    DicomTags.SopInstanceUid = 524312;
    DicomTags.RelatedGeneralSopClassUid = 524314;
    DicomTags.OriginalSpecializedSopClassUid = 524315;
    DicomTags.StudyDate = 524320;
    DicomTags.SeriesDate = 524321;
    DicomTags.AcquisitionDate = 524322;
    DicomTags.ContentDate = 524323;
    DicomTags.OverlayDateRetired = 524324;
    DicomTags.CurveDateRetired = 524325;
    DicomTags.AcquisitionDatetime = 524330;
    DicomTags.StudyTime = 524336;
    DicomTags.SeriesTime = 524337;
    DicomTags.AcquisitionTime = 524338;
    DicomTags.ContentTime = 524339;
    DicomTags.OverlayTimeRetired = 524340;
    DicomTags.CurveTimeRetired = 524341;
    DicomTags.DataSetTypeRetired = 524352;
    DicomTags.DataSetSubtypeRetired = 524353;
    DicomTags.NuclearMedicineSeriesTypeRetired = 524354;
    DicomTags.AccessionNumber = 524368;
    DicomTags.IssuerOfAccessionNumberSequence = 524369;
    DicomTags.QueryRetrieveLevel = 524370;
    DicomTags.RetrieveAeTitle = 524372;
    DicomTags.InstanceAvailability = 524374;
    DicomTags.FailedSopInstanceUidList = 524376;
    DicomTags.Modality = 524384;
    DicomTags.ModalitiesInStudy = 524385;
    DicomTags.SopClassesInStudy = 524386;
    DicomTags.ConversionType = 524388;
    DicomTags.PresentationIntentType = 524392;
    DicomTags.Manufacturer = 524400;
    DicomTags.InstitutionName = 524416;
    DicomTags.InstitutionAddress = 524417;
    DicomTags.InstitutionCodeSequence = 524418;
    DicomTags.ReferringPhysiciansName = 524432;
    DicomTags.ReferringPhysiciansAddress = 524434;
    DicomTags.ReferringPhysiciansTelephoneNumbers = 524436;
    DicomTags.ReferringPhysicianIdentificationSequence = 524438;
    DicomTags.CodeValue = 524544;
    DicomTags.CodingSchemeDesignator = 524546;
    DicomTags.CodingSchemeVersion = 524547;
    DicomTags.CodeMeaning = 524548;
    DicomTags.MappingResource = 524549;
    DicomTags.ContextGroupVersion = 524550;
    DicomTags.ContextGroupLocalVersion = 524551;
    DicomTags.ContextGroupExtensionFlag = 524555;
    DicomTags.CodingSchemeUid = 524556;
    DicomTags.ContextGroupExtensionCreatorUid = 524557;
    DicomTags.ContextIdentifier = 524559;
    DicomTags.CodingSchemeIdentificationSequence = 524560;
    DicomTags.CodingSchemeRegistry = 524562;
    DicomTags.CodingSchemeExternalId = 524564;
    DicomTags.CodingSchemeName = 524565;
    DicomTags.CodingSchemeResponsibleOrganization = 524566;
    DicomTags.ContextUid = 524567;
    DicomTags.TimezoneOffsetFromUtc = 524801;
    DicomTags.NetworkIdRetired = 528384;
    DicomTags.StationName = 528400;
    DicomTags.StudyDescription = 528432;
    DicomTags.ProcedureCodeSequence = 528434;
    DicomTags.SeriesDescription = 528446;
    DicomTags.SeriesDescriptionCodeSequence = 528447;
    DicomTags.InstitutionalDepartmentName = 528448;
    DicomTags.PhysiciansOfRecord = 528456;
    DicomTags.PhysiciansOfRecordIdentificationSequence = 528457;
    DicomTags.PerformingPhysiciansName = 528464;
    DicomTags.PerformingPhysicianIdentificationSequence = 528466;
    DicomTags.NameOfPhysiciansReadingStudy = 528480;
    DicomTags.PhysiciansReadingStudyIdentificationSequence = 528482;
    DicomTags.OperatorsName = 528496;
    DicomTags.OperatorIdentificationSequence = 528498;
    DicomTags.AdmittingDiagnosesDescription = 528512;
    DicomTags.AdmittingDiagnosesCodeSequence = 528516;
    DicomTags.ManufacturersModelName = 528528;
    DicomTags.ReferencedResultsSequenceRetired = 528640;
    DicomTags.ReferencedStudySequence = 528656;
    DicomTags.ReferencedPerformedProcedureStepSequence = 528657;
    DicomTags.ReferencedSeriesSequence = 528661;
    DicomTags.ReferencedPatientSequence = 528672;
    DicomTags.ReferencedVisitSequence = 528677;
    DicomTags.ReferencedOverlaySequenceRetired = 528688;
    DicomTags.ReferencedStereometricInstanceSequence = 528692;
    DicomTags.ReferencedWaveformSequence = 528698;
    DicomTags.ReferencedImageSequence = 528704;
    DicomTags.ReferencedCurveSequenceRetired = 528709;
    DicomTags.ReferencedInstanceSequence = 528714;
    DicomTags.ReferencedRealWorldValueMappingInstanceSequence = 528715;
    DicomTags.ReferencedSopClassUid = 528720;
    DicomTags.ReferencedSopInstanceUid = 528725;
    DicomTags.SopClassesSupported = 528730;
    DicomTags.ReferencedFrameNumber = 528736;
    DicomTags.SimpleFrameList = 528737;
    DicomTags.CalculatedFrameList = 528738;
    DicomTags.TimeRange = 528739;
    DicomTags.FrameExtractionSequence = 528740;
    DicomTags.MultiFrameSourceSopInstanceUid = 528743;
    DicomTags.TransactionUid = 528789;
    DicomTags.FailureReason = 528791;
    DicomTags.FailedSopSequence = 528792;
    DicomTags.ReferencedSopSequence = 528793;
    DicomTags.StudiesContainingOtherReferencedInstancesSequence = 528896;
    DicomTags.RelatedSeriesSequence = 528976;
    DicomTags.LossyImageCompressionRetired = 532752;
    DicomTags.DerivationDescription = 532753;
    DicomTags.SourceImageSequence = 532754;
    DicomTags.StageName = 532768;
    DicomTags.StageNumber = 532770;
    DicomTags.NumberOfStages = 532772;
    DicomTags.ViewName = 532775;
    DicomTags.ViewNumber = 532776;
    DicomTags.NumberOfEventTimers = 532777;
    DicomTags.NumberOfViewsInStage = 532778;
    DicomTags.EventElapsedTimes = 532784;
    DicomTags.EventTimerNames = 532786;
    DicomTags.EventTimerSequence = 532787;
    DicomTags.EventTimeOffset = 532788;
    DicomTags.EventCodeSequence = 532789;
    DicomTags.StartTrim = 532802;
    DicomTags.StopTrim = 532803;
    DicomTags.RecommendedDisplayFrameRate = 532804;
    DicomTags.TransducerPositionRetired = 532992;
    DicomTags.TransducerOrientationRetired = 532996;
    DicomTags.AnatomicStructureRetired = 533000;
    DicomTags.AnatomicRegionSequence = 533016;
    DicomTags.AnatomicRegionModifierSequence = 533024;
    DicomTags.PrimaryAnatomicStructureSequence = 533032;
    DicomTags.AnatomicStructureSpaceOrRegionSequence = 533033;
    DicomTags.PrimaryAnatomicStructureModifierSequence = 533040;
    DicomTags.TransducerPositionSequenceRetired = 533056;
    DicomTags.TransducerPositionModifierSequenceRetired = 533058;
    DicomTags.TransducerOrientationSequenceRetired = 533060;
    DicomTags.TransducerOrientationModifierSequenceRetired = 533062;
    DicomTags.AnatomicStructureSpaceOrRegionCodeSequenceTrialRetired = 533073;
    DicomTags.AnatomicPortalOfEntranceCodeSequenceTrialRetired = 533075;
    DicomTags.AnatomicApproachDirectionCodeSequenceTrialRetired = 533077;
    DicomTags.AnatomicPerspectiveDescriptionTrialRetired = 533078;
    DicomTags.AnatomicPerspectiveCodeSequenceTrialRetired = 533079;
    DicomTags.AnatomicLocationOfExaminingInstrumentDescriptionTrialRetired = 533080;
    DicomTags.AnatomicLocationOfExaminingInstrumentCodeSequenceTrialRetired = 533081;
    DicomTags.AnatomicStructureSpaceOrRegionModifierCodeSequenceTrialRetired = 533082;
    DicomTags.OnaxisBackgroundAnatomicStructureCodeSequenceTrialRetired = 533084;
    DicomTags.AlternateRepresentationSequence = 536577;
    DicomTags.IrradiationEventUid = 536592;
    DicomTags.IdentifyingCommentsRetired = 540672;
    DicomTags.FrameType = 561159;
    DicomTags.ReferencedImageEvidenceSequence = 561298;
    DicomTags.ReferencedRawDataSequence = 561441;
    DicomTags.CreatorVersionUid = 561443;
    DicomTags.DerivationImageSequence = 561444;
    DicomTags.SourceImageEvidenceSequence = 561492;
    DicomTags.PixelPresentation = 561669;
    DicomTags.VolumetricProperties = 561670;
    DicomTags.VolumeBasedCalculationTechnique = 561671;
    DicomTags.ComplexImageComponent = 561672;
    DicomTags.AcquisitionContrast = 561673;
    DicomTags.DerivationCodeSequence = 561685;
    DicomTags.ReferencedPresentationStateSequence = 561719;
    DicomTags.ReferencedOtherPlaneSequence = 562192;
    DicomTags.FrameDisplaySequence = 562264;
    DicomTags.RecommendedDisplayFrameRateInFloat = 562265;
    DicomTags.SkipFrameRangeFlag = 562272;
    DicomTags.PatientsName = 1048592;
    DicomTags.PatientId = 1048608;
    DicomTags.IssuerOfPatientId = 1048609;
    DicomTags.TypeOfPatientId = 1048610;
    DicomTags.IssuerOfPatientIdQualifiersSequence = 1048612;
    DicomTags.PatientsBirthDate = 1048624;
    DicomTags.PatientsBirthTime = 1048626;
    DicomTags.PatientsSex = 1048640;
    DicomTags.PatientsInsurancePlanCodeSequence = 1048656;
    DicomTags.PatientsPrimaryLanguageCodeSequence = 1048833;
    DicomTags.PatientsPrimaryLanguageModifierCodeSequence = 1048834;
    DicomTags.OtherPatientIds = 1052672;
    DicomTags.OtherPatientNames = 1052673;
    DicomTags.OtherPatientIdsSequence = 1052674;
    DicomTags.PatientsBirthName = 1052677;
    DicomTags.PatientsAge = 1052688;
    DicomTags.PatientsSize = 1052704;
    DicomTags.PatientsSizeCodeSequence = 1052705;
    DicomTags.PatientsWeight = 1052720;
    DicomTags.PatientsAddress = 1052736;
    DicomTags.InsurancePlanIdentificationRetired = 1052752;
    DicomTags.PatientsMothersBirthName = 1052768;
    DicomTags.MilitaryRank = 1052800;
    DicomTags.BranchOfService = 1052801;
    DicomTags.MedicalRecordLocator = 1052816;
    DicomTags.MedicalAlerts = 1056768;
    DicomTags.Allergies = 1057040;
    DicomTags.CountryOfResidence = 1057104;
    DicomTags.RegionOfResidence = 1057106;
    DicomTags.PatientsTelephoneNumbers = 1057108;
    DicomTags.EthnicGroup = 1057120;
    DicomTags.Occupation = 1057152;
    DicomTags.SmokingStatus = 1057184;
    DicomTags.AdditionalPatientHistory = 1057200;
    DicomTags.PregnancyStatus = 1057216;
    DicomTags.LastMenstrualDate = 1057232;
    DicomTags.PatientsReligiousPreference = 1057264;
    DicomTags.PatientSpeciesDescription = 1057281;
    DicomTags.PatientSpeciesCodeSequence = 1057282;
    DicomTags.PatientsSexNeutered = 1057283;
    DicomTags.AnatomicalOrientationType = 1057296;
    DicomTags.PatientBreedDescription = 1057426;
    DicomTags.PatientBreedCodeSequence = 1057427;
    DicomTags.BreedRegistrationSequence = 1057428;
    DicomTags.BreedRegistrationNumber = 1057429;
    DicomTags.BreedRegistryCodeSequence = 1057430;
    DicomTags.ResponsiblePerson = 1057431;
    DicomTags.ResponsiblePersonRole = 1057432;
    DicomTags.ResponsibleOrganization = 1057433;
    DicomTags.PatientComments = 1064960;
    DicomTags.ExaminedBodyThickness = 1086513;
    DicomTags.ClinicalTrialSponsorName = 1179664;
    DicomTags.ClinicalTrialProtocolId = 1179680;
    DicomTags.ClinicalTrialProtocolName = 1179681;
    DicomTags.ClinicalTrialSiteId = 1179696;
    DicomTags.ClinicalTrialSiteName = 1179697;
    DicomTags.ClinicalTrialSubjectId = 1179712;
    DicomTags.ClinicalTrialSubjectReadingId = 1179714;
    DicomTags.ClinicalTrialTimePointId = 1179728;
    DicomTags.ClinicalTrialTimePointDescription = 1179729;
    DicomTags.ClinicalTrialCoordinatingCenterName = 1179744;
    DicomTags.PatientIdentityRemoved = 1179746;
    DicomTags.DeIdentificationMethod = 1179747;
    DicomTags.DeIdentificationMethodCodeSequence = 1179748;
    DicomTags.ClinicalTrialSeriesId = 1179761;
    DicomTags.ClinicalTrialSeriesDescription = 1179762;
    DicomTags.ClinicalTrialProtocolEthicsCommitteeName = 1179777;
    DicomTags.ClinicalTrialProtocolEthicsCommitteeApprovalNumber = 1179778;
    DicomTags.ConsentForClinicalTrialUseSequence = 1179779;
    DicomTags.DistributionType = 1179780;
    DicomTags.ConsentForDistributionFlag = 1179781;
    DicomTags.CadFileFormat = 1310755;
    DicomTags.ComponentReferenceSystem = 1310756;
    DicomTags.ComponentManufacturingProcedure = 1310757;
    DicomTags.ComponentManufacturer = 1310760;
    DicomTags.MaterialThickness = 1310768;
    DicomTags.MaterialPipeDiameter = 1310770;
    DicomTags.MaterialIsolationDiameter = 1310772;
    DicomTags.MaterialGrade = 1310786;
    DicomTags.MaterialPropertiesFileId = 1310788;
    DicomTags.MaterialPropertiesFileFormat = 1310789;
    DicomTags.MaterialNotes = 1310790;
    DicomTags.ComponentShape = 1310800;
    DicomTags.CurvatureType = 1310802;
    DicomTags.OuterDiameter = 1310804;
    DicomTags.InnerDiameter = 1310806;
    DicomTags.ActualEnvironmentalConditions = 1314832;
    DicomTags.ExpiryDate = 1314848;
    DicomTags.EnvironmentalConditions = 1314880;
    DicomTags.EvaluatorSequence = 1318914;
    DicomTags.EvaluatorNumber = 1318916;
    DicomTags.EvaluatorName = 1318918;
    DicomTags.EvaluationAttempt = 1318920;
    DicomTags.IndicationSequence = 1318930;
    DicomTags.IndicationNumber = 1318932;
    DicomTags.IndicationLabel = 1318934;
    DicomTags.IndicationDescription = 1318936;
    DicomTags.IndicationType = 1318938;
    DicomTags.IndicationDisposition = 1318940;
    DicomTags.IndicationRoiSequence = 1318942;
    DicomTags.IndicationPhysicalPropertySequence = 1318960;
    DicomTags.PropertyLabel = 1318962;
    DicomTags.CoordinateSystemNumberOfAxes = 1319426;
    DicomTags.CoordinateSystemAxesSequence = 1319428;
    DicomTags.CoordinateSystemAxisDescription = 1319430;
    DicomTags.CoordinateSystemDataSetMapping = 1319432;
    DicomTags.CoordinateSystemAxisNumber = 1319434;
    DicomTags.CoordinateSystemAxisType = 1319436;
    DicomTags.CoordinateSystemAxisUnits = 1319438;
    DicomTags.CoordinateSystemAxisValues = 1319440;
    DicomTags.CoordinateSystemTransformSequence = 1319456;
    DicomTags.TransformDescription = 1319458;
    DicomTags.TransformNumberOfAxes = 1319460;
    DicomTags.TransformOrderOfAxes = 1319462;
    DicomTags.TransformedAxisUnits = 1319464;
    DicomTags.CoordinateSystemTransformRotationAndScaleMatrix = 1319466;
    DicomTags.CoordinateSystemTransformTranslationMatrix = 1319468;
    DicomTags.InternalDetectorFrameTime = 1323025;
    DicomTags.NumberOfFramesIntegrated = 1323026;
    DicomTags.DetectorTemperatureSequence = 1323040;
    DicomTags.SensorName = 1323042;
    DicomTags.HorizontalOffsetOfSensor = 1323044;
    DicomTags.VerticalOffsetOfSensor = 1323046;
    DicomTags.SensorTemperature = 1323048;
    DicomTags.DarkCurrentSequence = 1323072;
    DicomTags.DarkCurrentCounts = 1323088;
    DicomTags.GainCorrectionReferenceSequence = 1323104;
    DicomTags.AirCounts = 1323120;
    DicomTags.KvUsedInGainCalibration = 1323121;
    DicomTags.MaUsedInGainCalibration = 1323122;
    DicomTags.NumberOfFramesUsedForIntegration = 1323123;
    DicomTags.FilterMaterialUsedInGainCalibration = 1323124;
    DicomTags.FilterThicknessUsedInGainCalibration = 1323125;
    DicomTags.DateOfGainCalibration = 1323126;
    DicomTags.TimeOfGainCalibration = 1323127;
    DicomTags.BadPixelImage = 1323136;
    DicomTags.CalibrationNotes = 1323161;
    DicomTags.PulserEquipmentSequence = 1327106;
    DicomTags.PulserType = 1327108;
    DicomTags.PulserNotes = 1327110;
    DicomTags.ReceiverEquipmentSequence = 1327112;
    DicomTags.AmplifierType = 1327114;
    DicomTags.ReceiverNotes = 1327116;
    DicomTags.PreAmplifierEquipmentSequence = 1327118;
    DicomTags.PreAmplifierNotes = 1327119;
    DicomTags.TransmitTransducerSequence = 1327120;
    DicomTags.ReceiveTransducerSequence = 1327121;
    DicomTags.NumberOfElements = 1327122;
    DicomTags.ElementShape = 1327123;
    DicomTags.ElementDimensionA = 1327124;
    DicomTags.ElementDimensionB = 1327125;
    DicomTags.ElementPitch = 1327126;
    DicomTags.MeasuredBeamDimensionA = 1327127;
    DicomTags.MeasuredBeamDimensionB = 1327128;
    DicomTags.LocationOfMeasuredBeamDiameter = 1327129;
    DicomTags.NominalFrequency = 1327130;
    DicomTags.MeasuredCenterFrequency = 1327131;
    DicomTags.MeasuredBandwidth = 1327132;
    DicomTags.PulserSettingsSequence = 1327136;
    DicomTags.PulseWidth = 1327138;
    DicomTags.ExcitationFrequency = 1327140;
    DicomTags.ModulationType = 1327142;
    DicomTags.Damping = 1327144;
    DicomTags.ReceiverSettingsSequence = 1327152;
    DicomTags.AcquiredSoundpathLength = 1327153;
    DicomTags.AcquisitionCompressionType = 1327154;
    DicomTags.AcquisitionSampleSize = 1327155;
    DicomTags.RectifierSmoothing = 1327156;
    DicomTags.DacSequence = 1327157;
    DicomTags.DacType = 1327158;
    DicomTags.DacGainPoints = 1327160;
    DicomTags.DacTimePoints = 1327162;
    DicomTags.DacAmplitude = 1327164;
    DicomTags.PreAmplifierSettingsSequence = 1327168;
    DicomTags.TransmitTransducerSettingsSequence = 1327184;
    DicomTags.ReceiveTransducerSettingsSequence = 1327185;
    DicomTags.IncidentAngle = 1327186;
    DicomTags.CouplingTechnique = 1327188;
    DicomTags.CouplingMedium = 1327190;
    DicomTags.CouplingVelocity = 1327191;
    DicomTags.CrystalCenterLocationX = 1327192;
    DicomTags.CrystalCenterLocationZ = 1327193;
    DicomTags.SoundPathLength = 1327194;
    DicomTags.DelayLawIdentifier = 1327196;
    DicomTags.GateSettingsSequence = 1327200;
    DicomTags.GateThreshold = 1327202;
    DicomTags.VelocityOfSound = 1327204;
    DicomTags.CalibrationSettingsSequence = 1327216;
    DicomTags.CalibrationProcedure = 1327218;
    DicomTags.ProcedureVersion = 1327220;
    DicomTags.ProcedureCreationDate = 1327222;
    DicomTags.ProcedureExpirationDate = 1327224;
    DicomTags.ProcedureLastModifiedDate = 1327226;
    DicomTags.CalibrationTime = 1327228;
    DicomTags.CalibrationDate = 1327230;
    DicomTags.LinacEnergy = 1331202;
    DicomTags.LinacOutput = 1331204;
    DicomTags.ContrastBolusAgent = 1572880;
    DicomTags.ContrastBolusAgentSequence = 1572882;
    DicomTags.ContrastBolusAdministrationRouteSequence = 1572884;
    DicomTags.BodyPartExamined = 1572885;
    DicomTags.ScanningSequence = 1572896;
    DicomTags.SequenceVariant = 1572897;
    DicomTags.ScanOptions = 1572898;
    DicomTags.MrAcquisitionType = 1572899;
    DicomTags.SequenceName = 1572900;
    DicomTags.AngioFlag = 1572901;
    DicomTags.InterventionDrugInformationSequence = 1572902;
    DicomTags.InterventionDrugStopTime = 1572903;
    DicomTags.InterventionDrugDose = 1572904;
    DicomTags.InterventionDrugCodeSequence = 1572905;
    DicomTags.AdditionalDrugSequence = 1572906;
    DicomTags.RadionuclideRetired = 1572912;
    DicomTags.Radiopharmaceutical = 1572913;
    DicomTags.EnergyWindowCenterlineRetired = 1572914;
    DicomTags.EnergyWindowTotalWidthRetired = 1572915;
    DicomTags.InterventionDrugName = 1572916;
    DicomTags.InterventionDrugStartTime = 1572917;
    DicomTags.InterventionSequence = 1572918;
    DicomTags.TherapyTypeRetired = 1572919;
    DicomTags.InterventionStatus = 1572920;
    DicomTags.TherapyDescriptionRetired = 1572921;
    DicomTags.InterventionDescription = 1572922;
    DicomTags.CineRate = 1572928;
    DicomTags.InitialCineRunState = 1572930;
    DicomTags.SliceThickness = 1572944;
    DicomTags.Kvp = 1572960;
    DicomTags.CountsAccumulated = 1572976;
    DicomTags.AcquisitionTerminationCondition = 1572977;
    DicomTags.EffectiveDuration = 1572978;
    DicomTags.AcquisitionStartCondition = 1572979;
    DicomTags.AcquisitionStartConditionData = 1572980;
    DicomTags.AcquisitionTerminationConditionData = 1572981;
    DicomTags.RepetitionTime = 1572992;
    DicomTags.EchoTime = 1572993;
    DicomTags.InversionTime = 1572994;
    DicomTags.NumberOfAverages = 1572995;
    DicomTags.ImagingFrequency = 1572996;
    DicomTags.ImagedNucleus = 1572997;
    DicomTags.EchoNumbers = 1572998;
    DicomTags.MagneticFieldStrength = 1572999;
    DicomTags.SpacingBetweenSlices = 1573000;
    DicomTags.NumberOfPhaseEncodingSteps = 1573001;
    DicomTags.DataCollectionDiameter = 1573008;
    DicomTags.EchoTrainLength = 1573009;
    DicomTags.PercentSampling = 1573011;
    DicomTags.PercentPhaseFieldOfView = 1573012;
    DicomTags.PixelBandwidth = 1573013;
    DicomTags.DeviceSerialNumber = 1576960;
    DicomTags.DeviceUid = 1576962;
    DicomTags.DeviceId = 1576963;
    DicomTags.PlateId = 1576964;
    DicomTags.GeneratorId = 1576965;
    DicomTags.GridId = 1576966;
    DicomTags.CassetteId = 1576967;
    DicomTags.GantryId = 1576968;
    DicomTags.SecondaryCaptureDeviceId = 1576976;
    DicomTags.HardcopyCreationDeviceIdRetired = 1576977;
    DicomTags.DateOfSecondaryCapture = 1576978;
    DicomTags.TimeOfSecondaryCapture = 1576980;
    DicomTags.SecondaryCaptureDeviceManufacturer = 1576982;
    DicomTags.HardcopyDeviceManufacturerRetired = 1576983;
    DicomTags.SecondaryCaptureDeviceManufacturersModelName = 1576984;
    DicomTags.SecondaryCaptureDeviceSoftwareVersions = 1576985;
    DicomTags.HardcopyDeviceSoftwareVersionRetired = 1576986;
    DicomTags.HardcopyDeviceManufacturersModelNameRetired = 1576987;
    DicomTags.SoftwareVersions = 1576992;
    DicomTags.VideoImageFormatAcquired = 1576994;
    DicomTags.DigitalImageFormatAcquired = 1576995;
    DicomTags.ProtocolName = 1577008;
    DicomTags.ContrastBolusRoute = 1577024;
    DicomTags.ContrastBolusVolume = 1577025;
    DicomTags.ContrastBolusStartTime = 1577026;
    DicomTags.ContrastBolusStopTime = 1577027;
    DicomTags.ContrastBolusTotalDose = 1577028;
    DicomTags.SyringeCounts = 1577029;
    DicomTags.ContrastFlowRate = 1577030;
    DicomTags.ContrastFlowDuration = 1577031;
    DicomTags.ContrastBolusIngredient = 1577032;
    DicomTags.ContrastBolusIngredientConcentration = 1577033;
    DicomTags.SpatialResolution = 1577040;
    DicomTags.TriggerTime = 1577056;
    DicomTags.TriggerSourceOrType = 1577057;
    DicomTags.NominalInterval = 1577058;
    DicomTags.FrameTime = 1577059;
    DicomTags.CardiacFramingType = 1577060;
    DicomTags.FrameTimeVector = 1577061;
    DicomTags.FrameDelay = 1577062;
    DicomTags.ImageTriggerDelay = 1577063;
    DicomTags.MultiplexGroupTimeOffset = 1577064;
    DicomTags.TriggerTimeOffset = 1577065;
    DicomTags.SynchronizationTrigger = 1577066;
    DicomTags.SynchronizationChannel = 1577068;
    DicomTags.TriggerSamplePosition = 1577070;
    DicomTags.RadiopharmaceuticalRoute = 1577072;
    DicomTags.RadiopharmaceuticalVolume = 1577073;
    DicomTags.RadiopharmaceuticalStartTime = 1577074;
    DicomTags.RadiopharmaceuticalStopTime = 1577075;
    DicomTags.RadionuclideTotalDose = 1577076;
    DicomTags.RadionuclideHalfLife = 1577077;
    DicomTags.RadionuclidePositronFraction = 1577078;
    DicomTags.RadiopharmaceuticalSpecificActivity = 1577079;
    DicomTags.RadiopharmaceuticalStartDatetime = 1577080;
    DicomTags.RadiopharmaceuticalStopDatetime = 1577081;
    DicomTags.BeatRejectionFlag = 1577088;
    DicomTags.LowRRValue = 1577089;
    DicomTags.HighRRValue = 1577090;
    DicomTags.IntervalsAcquired = 1577091;
    DicomTags.IntervalsRejected = 1577092;
    DicomTags.PvcRejection = 1577093;
    DicomTags.SkipBeats = 1577094;
    DicomTags.HeartRate = 1577096;
    DicomTags.CardiacNumberOfImages = 1577104;
    DicomTags.TriggerWindow = 1577108;
    DicomTags.ReconstructionDiameter = 1577216;
    DicomTags.DistanceSourceToDetector = 1577232;
    DicomTags.DistanceSourceToPatient = 1577233;
    DicomTags.EstimatedRadiographicMagnificationFactor = 1577236;
    DicomTags.GantryDetectorTilt = 1577248;
    DicomTags.GantryDetectorSlew = 1577249;
    DicomTags.TableHeight = 1577264;
    DicomTags.TableTraverse = 1577265;
    DicomTags.TableMotion = 1577268;
    DicomTags.TableVerticalIncrement = 1577269;
    DicomTags.TableLateralIncrement = 1577270;
    DicomTags.TableLongitudinalIncrement = 1577271;
    DicomTags.TableAngle = 1577272;
    DicomTags.TableType = 1577274;
    DicomTags.RotationDirection = 1577280;
    DicomTags.AngularPositionRetired = 1577281;
    DicomTags.RadialPosition = 1577282;
    DicomTags.ScanArc = 1577283;
    DicomTags.AngularStep = 1577284;
    DicomTags.CenterOfRotationOffset = 1577285;
    DicomTags.RotationOffsetRetired = 1577286;
    DicomTags.FieldOfViewShape = 1577287;
    DicomTags.FieldOfViewDimensions = 1577289;
    DicomTags.ExposureTime = 1577296;
    DicomTags.XRayTubeCurrent = 1577297;
    DicomTags.Exposure = 1577298;
    DicomTags.ExposureInUas = 1577299;
    DicomTags.AveragePulseWidth = 1577300;
    DicomTags.RadiationSetting = 1577301;
    DicomTags.RectificationType = 1577302;
    DicomTags.RadiationMode = 1577306;
    DicomTags.ImageAndFluoroscopyAreaDoseProduct = 1577310;
    DicomTags.FilterType = 1577312;
    DicomTags.TypeOfFilters = 1577313;
    DicomTags.IntensifierSize = 1577314;
    DicomTags.ImagerPixelSpacing = 1577316;
    DicomTags.Grid = 1577318;
    DicomTags.GeneratorPower = 1577328;
    DicomTags.CollimatorGridName = 1577344;
    DicomTags.CollimatorType = 1577345;
    DicomTags.FocalDistance = 1577346;
    DicomTags.XFocusCenter = 1577347;
    DicomTags.YFocusCenter = 1577348;
    DicomTags.FocalSpots = 1577360;
    DicomTags.AnodeTargetMaterial = 1577361;
    DicomTags.BodyPartThickness = 1577376;
    DicomTags.CompressionForce = 1577378;
    DicomTags.DateOfLastCalibration = 1577472;
    DicomTags.TimeOfLastCalibration = 1577473;
    DicomTags.ConvolutionKernel = 1577488;
    DicomTags.UpperLowerPixelValuesRetired = 1577536;
    DicomTags.ActualFrameDuration = 1577538;
    DicomTags.CountRate = 1577539;
    DicomTags.PreferredPlaybackSequencing = 1577540;
    DicomTags.ReceiveCoilName = 1577552;
    DicomTags.TransmitCoilName = 1577553;
    DicomTags.PlateType = 1577568;
    DicomTags.PhosphorType = 1577569;
    DicomTags.ScanVelocity = 1577728;
    DicomTags.WholeBodyTechnique = 1577729;
    DicomTags.ScanLength = 1577730;
    DicomTags.AcquisitionMatrix = 1577744;
    DicomTags.InPlanePhaseEncodingDirection = 1577746;
    DicomTags.FlipAngle = 1577748;
    DicomTags.VariableFlipAngleFlag = 1577749;
    DicomTags.Sar = 1577750;
    DicomTags.DbDt = 1577752;
    DicomTags.AcquisitionDeviceProcessingDescription = 1577984;
    DicomTags.AcquisitionDeviceProcessingCode = 1577985;
    DicomTags.CassetteOrientation = 1577986;
    DicomTags.CassetteSize = 1577987;
    DicomTags.ExposuresOnPlate = 1577988;
    DicomTags.RelativeXRayExposure = 1577989;
    DicomTags.ExposureIndex = 1578001;
    DicomTags.TargetExposureIndex = 1578002;
    DicomTags.DeviationIndex = 1578003;
    DicomTags.ColumnAngulation = 1578064;
    DicomTags.TomoLayerHeight = 1578080;
    DicomTags.TomoAngle = 1578096;
    DicomTags.TomoTime = 1578112;
    DicomTags.TomoType = 1578128;
    DicomTags.TomoClass = 1578129;
    DicomTags.NumberOfTomosynthesisSourceImages = 1578133;
    DicomTags.PositionerMotion = 1578240;
    DicomTags.PositionerType = 1578248;
    DicomTags.PositionerPrimaryAngle = 1578256;
    DicomTags.PositionerSecondaryAngle = 1578257;
    DicomTags.PositionerPrimaryAngleIncrement = 1578272;
    DicomTags.PositionerSecondaryAngleIncrement = 1578273;
    DicomTags.DetectorPrimaryAngle = 1578288;
    DicomTags.DetectorSecondaryAngle = 1578289;
    DicomTags.ShutterShape = 1578496;
    DicomTags.ShutterLeftVerticalEdge = 1578498;
    DicomTags.ShutterRightVerticalEdge = 1578500;
    DicomTags.ShutterUpperHorizontalEdge = 1578502;
    DicomTags.ShutterLowerHorizontalEdge = 1578504;
    DicomTags.CenterOfCircularShutter = 1578512;
    DicomTags.RadiusOfCircularShutter = 1578514;
    DicomTags.VerticesOfThePolygonalShutter = 1578528;
    DicomTags.ShutterPresentationValue = 1578530;
    DicomTags.ShutterOverlayGroup = 1578531;
    DicomTags.ShutterPresentationColorCielabValue = 1578532;
    DicomTags.CollimatorShape = 1578752;
    DicomTags.CollimatorLeftVerticalEdge = 1578754;
    DicomTags.CollimatorRightVerticalEdge = 1578756;
    DicomTags.CollimatorUpperHorizontalEdge = 1578758;
    DicomTags.CollimatorLowerHorizontalEdge = 1578760;
    DicomTags.CenterOfCircularCollimator = 1578768;
    DicomTags.RadiusOfCircularCollimator = 1578770;
    DicomTags.VerticesOfThePolygonalCollimator = 1578784;
    DicomTags.AcquisitionTimeSynchronized = 1579008;
    DicomTags.TimeSource = 1579009;
    DicomTags.TimeDistributionProtocol = 1579010;
    DicomTags.NtpSourceAddress = 1579011;
    DicomTags.PageNumberVector = 1581057;
    DicomTags.FrameLabelVector = 1581058;
    DicomTags.FramePrimaryAngleVector = 1581059;
    DicomTags.FrameSecondaryAngleVector = 1581060;
    DicomTags.SliceLocationVector = 1581061;
    DicomTags.DisplayWindowLabelVector = 1581062;
    DicomTags.NominalScannedPixelSpacing = 1581072;
    DicomTags.DigitizingDeviceTransportDirection = 1581088;
    DicomTags.RotationOfScannedFilm = 1581104;
    DicomTags.IvusAcquisition = 1585408;
    DicomTags.IvusPullbackRate = 1585409;
    DicomTags.IvusGatedRate = 1585410;
    DicomTags.IvusPullbackStartFrameNumber = 1585411;
    DicomTags.IvusPullbackStopFrameNumber = 1585412;
    DicomTags.LesionNumber = 1585413;
    DicomTags.AcquisitionCommentsRetired = 1589248;
    DicomTags.OutputPower = 1593344;
    DicomTags.TransducerData = 1593360;
    DicomTags.FocusDepth = 1593362;
    DicomTags.ProcessingFunction = 1593376;
    DicomTags.PostprocessingFunctionRetired = 1593377;
    DicomTags.MechanicalIndex = 1593378;
    DicomTags.BoneThermalIndex = 1593380;
    DicomTags.CranialThermalIndex = 1593382;
    DicomTags.SoftTissueThermalIndex = 1593383;
    DicomTags.SoftTissueFocusThermalIndex = 1593384;
    DicomTags.SoftTissueSurfaceThermalIndex = 1593385;
    DicomTags.DynamicRangeRetired = 1593392;
    DicomTags.TotalGainRetired = 1593408;
    DicomTags.DepthOfScanField = 1593424;
    DicomTags.PatientPosition = 1593600;
    DicomTags.ViewPosition = 1593601;
    DicomTags.ProjectionEponymousNameCodeSequence = 1593604;
    DicomTags.ImageTransformationMatrixRetired = 1593872;
    DicomTags.ImageTranslationVectorRetired = 1593874;
    DicomTags.Sensitivity = 1597440;
    DicomTags.SequenceOfUltrasoundRegions = 1597457;
    DicomTags.RegionSpatialFormat = 1597458;
    DicomTags.RegionDataType = 1597460;
    DicomTags.RegionFlags = 1597462;
    DicomTags.RegionLocationMinX0 = 1597464;
    DicomTags.RegionLocationMinY0 = 1597466;
    DicomTags.RegionLocationMaxX1 = 1597468;
    DicomTags.RegionLocationMaxY1 = 1597470;
    DicomTags.ReferencePixelX0 = 1597472;
    DicomTags.ReferencePixelY0 = 1597474;
    DicomTags.PhysicalUnitsXDirection = 1597476;
    DicomTags.PhysicalUnitsYDirection = 1597478;
    DicomTags.ReferencePixelPhysicalValueX = 1597480;
    DicomTags.ReferencePixelPhysicalValueY = 1597482;
    DicomTags.PhysicalDeltaX = 1597484;
    DicomTags.PhysicalDeltaY = 1597486;
    DicomTags.TransducerFrequency = 1597488;
    DicomTags.TransducerType = 1597489;
    DicomTags.PulseRepetitionFrequency = 1597490;
    DicomTags.DopplerCorrectionAngle = 1597492;
    DicomTags.SteeringAngle = 1597494;
    DicomTags.DopplerSampleVolumeXPositionRetired = 1597496;
    DicomTags.DopplerSampleVolumeXPosition = 1597497;
    DicomTags.DopplerSampleVolumeYPositionRetired = 1597498;
    DicomTags.DopplerSampleVolumeYPosition = 1597499;
    DicomTags.TmLinePositionX0Retired = 1597500;
    DicomTags.TmLinePositionX0 = 1597501;
    DicomTags.TmLinePositionY0Retired = 1597502;
    DicomTags.TmLinePositionY0 = 1597503;
    DicomTags.TmLinePositionX1Retired = 1597504;
    DicomTags.TmLinePositionX1 = 1597505;
    DicomTags.TmLinePositionY1Retired = 1597506;
    DicomTags.TmLinePositionY1 = 1597507;
    DicomTags.PixelComponentOrganization = 1597508;
    DicomTags.PixelComponentMask = 1597510;
    DicomTags.PixelComponentRangeStart = 1597512;
    DicomTags.PixelComponentRangeStop = 1597514;
    DicomTags.PixelComponentPhysicalUnits = 1597516;
    DicomTags.PixelComponentDataType = 1597518;
    DicomTags.NumberOfTableBreakPoints = 1597520;
    DicomTags.TableOfXBreakPoints = 1597522;
    DicomTags.TableOfYBreakPoints = 1597524;
    DicomTags.NumberOfTableEntries = 1597526;
    DicomTags.TableOfPixelValues = 1597528;
    DicomTags.TableOfParameterValues = 1597530;
    DicomTags.RWaveTimeVector = 1597536;
    DicomTags.DetectorConditionsNominalFlag = 1601536;
    DicomTags.DetectorTemperature = 1601537;
    DicomTags.DetectorType = 1601540;
    DicomTags.DetectorConfiguration = 1601541;
    DicomTags.DetectorDescription = 1601542;
    DicomTags.DetectorMode = 1601544;
    DicomTags.DetectorId = 1601546;
    DicomTags.DateOfLastDetectorCalibration = 1601548;
    DicomTags.TimeOfLastDetectorCalibration = 1601550;
    DicomTags.ExposuresOnDetectorSinceLastCalibration = 1601552;
    DicomTags.ExposuresOnDetectorSinceManufactured = 1601553;
    DicomTags.DetectorTimeSinceLastExposure = 1601554;
    DicomTags.DetectorActiveTime = 1601556;
    DicomTags.DetectorActivationOffsetFromExposure = 1601558;
    DicomTags.DetectorBinning = 1601562;
    DicomTags.DetectorElementPhysicalSize = 1601568;
    DicomTags.DetectorElementSpacing = 1601570;
    DicomTags.DetectorActiveShape = 1601572;
    DicomTags.DetectorActiveDimensions = 1601574;
    DicomTags.DetectorActiveOrigin = 1601576;
    DicomTags.DetectorManufacturerName = 1601578;
    DicomTags.DetectorManufacturersModelName = 1601579;
    DicomTags.FieldOfViewOrigin = 1601584;
    DicomTags.FieldOfViewRotation = 1601586;
    DicomTags.FieldOfViewHorizontalFlip = 1601588;
    DicomTags.PixelDataAreaOriginRelativeToFov = 1601590;
    DicomTags.PixelDataAreaRotationAngleRelativeToFov = 1601592;
    DicomTags.GridAbsorbingMaterial = 1601600;
    DicomTags.GridSpacingMaterial = 1601601;
    DicomTags.GridThickness = 1601602;
    DicomTags.GridPitch = 1601604;
    DicomTags.GridAspectRatio = 1601606;
    DicomTags.GridPeriod = 1601608;
    DicomTags.GridFocalDistance = 1601612;
    DicomTags.FilterMaterial = 1601616;
    DicomTags.FilterThicknessMinimum = 1601618;
    DicomTags.FilterThicknessMaximum = 1601620;
    DicomTags.FilterBeamPathLengthMinimum = 1601622;
    DicomTags.FilterBeamPathLengthMaximum = 1601624;
    DicomTags.ExposureControlMode = 1601632;
    DicomTags.ExposureControlModeDescription = 1601634;
    DicomTags.ExposureStatus = 1601636;
    DicomTags.PhototimerSetting = 1601637;
    DicomTags.ExposureTimeInUs = 1605968;
    DicomTags.XRayTubeCurrentInUa = 1605969;
    DicomTags.ContentQualification = 1609732;
    DicomTags.PulseSequenceName = 1609733;
    DicomTags.MrImagingModifierSequence = 1609734;
    DicomTags.EchoPulseSequence = 1609736;
    DicomTags.InversionRecovery = 1609737;
    DicomTags.FlowCompensation = 1609744;
    DicomTags.MultipleSpinEcho = 1609745;
    DicomTags.MultiPlanarExcitation = 1609746;
    DicomTags.PhaseContrast = 1609748;
    DicomTags.TimeOfFlightContrast = 1609749;
    DicomTags.Spoiling = 1609750;
    DicomTags.SteadyStatePulseSequence = 1609751;
    DicomTags.EchoPlanarPulseSequence = 1609752;
    DicomTags.TagAngleFirstAxis = 1609753;
    DicomTags.MagnetizationTransfer = 1609760;
    DicomTags.T2Preparation = 1609761;
    DicomTags.BloodSignalNulling = 1609762;
    DicomTags.SaturationRecovery = 1609764;
    DicomTags.SpectrallySelectedSuppression = 1609765;
    DicomTags.SpectrallySelectedExcitation = 1609766;
    DicomTags.SpatialPreSaturation = 1609767;
    DicomTags.Tagging = 1609768;
    DicomTags.OversamplingPhase = 1609769;
    DicomTags.TagSpacingFirstDimension = 1609776;
    DicomTags.GeometryOfKSpaceTraversal = 1609778;
    DicomTags.SegmentedKSpaceTraversal = 1609779;
    DicomTags.RectilinearPhaseEncodeReordering = 1609780;
    DicomTags.TagThickness = 1609781;
    DicomTags.PartialFourierDirection = 1609782;
    DicomTags.CardiacSynchronizationTechnique = 1609783;
    DicomTags.ReceiveCoilManufacturerName = 1609793;
    DicomTags.MrReceiveCoilSequence = 1609794;
    DicomTags.ReceiveCoilType = 1609795;
    DicomTags.QuadratureReceiveCoil = 1609796;
    DicomTags.MultiCoilDefinitionSequence = 1609797;
    DicomTags.MultiCoilConfiguration = 1609798;
    DicomTags.MultiCoilElementName = 1609799;
    DicomTags.MultiCoilElementUsed = 1609800;
    DicomTags.MrTransmitCoilSequence = 1609801;
    DicomTags.TransmitCoilManufacturerName = 1609808;
    DicomTags.TransmitCoilType = 1609809;
    DicomTags.SpectralWidth = 1609810;
    DicomTags.ChemicalShiftReference = 1609811;
    DicomTags.VolumeLocalizationTechnique = 1609812;
    DicomTags.MrAcquisitionFrequencyEncodingSteps = 1609816;
    DicomTags.DeCoupling = 1609817;
    DicomTags.DeCoupledNucleus = 1609824;
    DicomTags.DeCouplingFrequency = 1609825;
    DicomTags.DeCouplingMethod = 1609826;
    DicomTags.DeCouplingChemicalShiftReference = 1609827;
    DicomTags.KSpaceFiltering = 1609828;
    DicomTags.TimeDomainFiltering = 1609829;
    DicomTags.NumberOfZeroFills = 1609830;
    DicomTags.BaselineCorrection = 1609831;
    DicomTags.ParallelReductionFactorInPlane = 1609833;
    DicomTags.CardiacRRIntervalSpecified = 1609840;
    DicomTags.AcquisitionDuration = 1609843;
    DicomTags.FrameAcquisitionDatetime = 1609844;
    DicomTags.DiffusionDirectionality = 1609845;
    DicomTags.DiffusionGradientDirectionSequence = 1609846;
    DicomTags.ParallelAcquisition = 1609847;
    DicomTags.ParallelAcquisitionTechnique = 1609848;
    DicomTags.InversionTimes = 1609849;
    DicomTags.MetaboliteMapDescription = 1609856;
    DicomTags.PartialFourier = 1609857;
    DicomTags.EffectiveEchoTime = 1609858;
    DicomTags.MetaboliteMapCodeSequence = 1609859;
    DicomTags.ChemicalShiftSequence = 1609860;
    DicomTags.CardiacSignalSource = 1609861;
    DicomTags.DiffusionBValue = 1609863;
    DicomTags.DiffusionGradientOrientation = 1609865;
    DicomTags.VelocityEncodingDirection = 1609872;
    DicomTags.VelocityEncodingMinimumValue = 1609873;
    DicomTags.VelocityEncodingAcquisitionSequence = 1609874;
    DicomTags.NumberOfKSpaceTrajectories = 1609875;
    DicomTags.CoverageOfKSpace = 1609876;
    DicomTags.SpectroscopyAcquisitionPhaseRows = 1609877;
    DicomTags.ParallelReductionFactorInPlaneRetired = 1609878;
    DicomTags.TransmitterFrequency = 1609880;
    DicomTags.ResonantNucleus = 1609984;
    DicomTags.FrequencyCorrection = 1609985;
    DicomTags.MrSpectroscopyFovGeometrySequence = 1609987;
    DicomTags.SlabThickness = 1609988;
    DicomTags.SlabOrientation = 1609989;
    DicomTags.MidSlabPosition = 1609990;
    DicomTags.MrSpatialSaturationSequence = 1609991;
    DicomTags.MrTimingAndRelatedParametersSequence = 1610002;
    DicomTags.MrEchoSequence = 1610004;
    DicomTags.MrModifierSequence = 1610005;
    DicomTags.MrDiffusionSequence = 1610007;
    DicomTags.CardiacSynchronizationSequence = 1610008;
    DicomTags.MrAveragesSequence = 1610009;
    DicomTags.MrFovGeometrySequence = 1610021;
    DicomTags.VolumeLocalizationSequence = 1610022;
    DicomTags.SpectroscopyAcquisitionDataColumns = 1610023;
    DicomTags.DiffusionAnisotropyType = 1610055;
    DicomTags.FrameReferenceDatetime = 1610065;
    DicomTags.MrMetaboliteMapSequence = 1610066;
    DicomTags.ParallelReductionFactorOutOfPlane = 1610069;
    DicomTags.SpectroscopyAcquisitionOutOfPlanePhaseSteps = 1610073;
    DicomTags.BulkMotionStatusRetired = 1610086;
    DicomTags.ParallelReductionFactorSecondInPlane = 1610088;
    DicomTags.CardiacBeatRejectionTechnique = 1610089;
    DicomTags.RespiratoryMotionCompensationTechnique = 1610096;
    DicomTags.RespiratorySignalSource = 1610097;
    DicomTags.BulkMotionCompensationTechnique = 1610098;
    DicomTags.BulkMotionSignalSource = 1610099;
    DicomTags.ApplicableSafetyStandardAgency = 1610100;
    DicomTags.ApplicableSafetyStandardDescription = 1610101;
    DicomTags.OperatingModeSequence = 1610102;
    DicomTags.OperatingModeType = 1610103;
    DicomTags.OperatingMode = 1610104;
    DicomTags.SpecificAbsorptionRateDefinition = 1610105;
    DicomTags.GradientOutputType = 1610112;
    DicomTags.SpecificAbsorptionRateValue = 1610113;
    DicomTags.GradientOutput = 1610114;
    DicomTags.FlowCompensationDirection = 1610115;
    DicomTags.TaggingDelay = 1610116;
    DicomTags.RespiratoryMotionCompensationTechniqueDescription = 1610117;
    DicomTags.RespiratorySignalSourceId = 1610118;
    DicomTags.ChemicalShiftMinimumIntegrationLimitInHzRetired = 1610133;
    DicomTags.ChemicalShiftMaximumIntegrationLimitInHzRetired = 1610134;
    DicomTags.MrVelocityEncodingSequence = 1610135;
    DicomTags.FirstOrderPhaseCorrection = 1610136;
    DicomTags.WaterReferencedPhaseCorrection = 1610137;
    DicomTags.MrSpectroscopyAcquisitionType = 1610240;
    DicomTags.RespiratoryCyclePosition = 1610260;
    DicomTags.VelocityEncodingMaximumValue = 1610263;
    DicomTags.TagSpacingSecondDimension = 1610264;
    DicomTags.TagAngleSecondAxis = 1610265;
    DicomTags.FrameAcquisitionDuration = 1610272;
    DicomTags.MrImageFrameTypeSequence = 1610278;
    DicomTags.MrSpectroscopyFrameTypeSequence = 1610279;
    DicomTags.MrAcquisitionPhaseEncodingStepsInPlane = 1610289;
    DicomTags.MrAcquisitionPhaseEncodingStepsOutOfPlane = 1610290;
    DicomTags.SpectroscopyAcquisitionPhaseColumns = 1610292;
    DicomTags.CardiacCyclePosition = 1610294;
    DicomTags.SpecificAbsorptionRateSequence = 1610297;
    DicomTags.RfEchoTrainLength = 1610304;
    DicomTags.GradientEchoTrainLength = 1610305;
    DicomTags.ArterialSpinLabelingContrast = 1610320;
    DicomTags.MrArterialSpinLabelingSequence = 1610321;
    DicomTags.AslTechniqueDescription = 1610322;
    DicomTags.AslSlabNumber = 1610323;
    DicomTags.AslSlabThickness = 1610324;
    DicomTags.AslSlabOrientation = 1610325;
    DicomTags.AslMidSlabPosition = 1610326;
    DicomTags.AslContext = 1610327;
    DicomTags.AslPulseTrainDuration = 1610328;
    DicomTags.AslCrusherFlag = 1610329;
    DicomTags.AslCrusherFlow = 1610330;
    DicomTags.AslCrusherDescription = 1610331;
    DicomTags.AslBolusCutOffFlag = 1610332;
    DicomTags.AslBolusCutOffTimingSequence = 1610333;
    DicomTags.AslBolusCutOffTechnique = 1610334;
    DicomTags.AslBolusCutOffDelayTime = 1610335;
    DicomTags.AslSlabSequence = 1610336;
    DicomTags.ChemicalShiftMinimumIntegrationLimitInPpm = 1610389;
    DicomTags.ChemicalShiftMaximumIntegrationLimitInPpm = 1610390;
    DicomTags.CtAcquisitionTypeSequence = 1610497;
    DicomTags.AcquisitionType = 1610498;
    DicomTags.TubeAngle = 1610499;
    DicomTags.CtAcquisitionDetailsSequence = 1610500;
    DicomTags.RevolutionTime = 1610501;
    DicomTags.SingleCollimationWidth = 1610502;
    DicomTags.TotalCollimationWidth = 1610503;
    DicomTags.CtTableDynamicsSequence = 1610504;
    DicomTags.TableSpeed = 1610505;
    DicomTags.TableFeedPerRotation = 1610512;
    DicomTags.SpiralPitchFactor = 1610513;
    DicomTags.CtGeometrySequence = 1610514;
    DicomTags.DataCollectionCenterPatient = 1610515;
    DicomTags.CtReconstructionSequence = 1610516;
    DicomTags.ReconstructionAlgorithm = 1610517;
    DicomTags.ConvolutionKernelGroup = 1610518;
    DicomTags.ReconstructionFieldOfView = 1610519;
    DicomTags.ReconstructionTargetCenterPatient = 1610520;
    DicomTags.ReconstructionAngle = 1610521;
    DicomTags.ImageFilter = 1610528;
    DicomTags.CtExposureSequence = 1610529;
    DicomTags.ReconstructionPixelSpacing = 1610530;
    DicomTags.ExposureModulationType = 1610531;
    DicomTags.EstimatedDoseSaving = 1610532;
    DicomTags.CtXRayDetailsSequence = 1610533;
    DicomTags.CtPositionSequence = 1610534;
    DicomTags.TablePosition = 1610535;
    DicomTags.ExposureTimeInMs = 1610536;
    DicomTags.CtImageFrameTypeSequence = 1610537;
    DicomTags.XRayTubeCurrentInMa = 1610544;
    DicomTags.ExposureInMas = 1610546;
    DicomTags.ConstantVolumeFlag = 1610547;
    DicomTags.FluoroscopyFlag = 1610548;
    DicomTags.DistanceSourceToDataCollectionCenter = 1610549;
    DicomTags.ContrastBolusAgentNumber = 1610551;
    DicomTags.ContrastBolusIngredientCodeSequence = 1610552;
    DicomTags.ContrastAdministrationProfileSequence = 1610560;
    DicomTags.ContrastBolusUsageSequence = 1610561;
    DicomTags.ContrastBolusAgentAdministered = 1610562;
    DicomTags.ContrastBolusAgentDetected = 1610563;
    DicomTags.ContrastBolusAgentPhase = 1610564;
    DicomTags.Ctdivol = 1610565;
    DicomTags.CtdiPhantomTypeCodeSequence = 1610566;
    DicomTags.CalciumScoringMassFactorPatient = 1610577;
    DicomTags.CalciumScoringMassFactorDevice = 1610578;
    DicomTags.EnergyWeightingFactor = 1610579;
    DicomTags.CtAdditionalXRaySourceSequence = 1610592;
    DicomTags.ProjectionPixelCalibrationSequence = 1610753;
    DicomTags.DistanceSourceToIsocenter = 1610754;
    DicomTags.DistanceObjectToTableTop = 1610755;
    DicomTags.ObjectPixelSpacingInCenterOfBeam = 1610756;
    DicomTags.PositionerPositionSequence = 1610757;
    DicomTags.TablePositionSequence = 1610758;
    DicomTags.CollimatorShapeSequence = 1610759;
    DicomTags.PlanesInAcquisition = 1610768;
    DicomTags.XaXrfFrameCharacteristicsSequence = 1610770;
    DicomTags.FrameAcquisitionSequence = 1610775;
    DicomTags.XRayReceptorType = 1610784;
    DicomTags.AcquisitionProtocolName = 1610787;
    DicomTags.AcquisitionProtocolDescription = 1610788;
    DicomTags.ContrastBolusIngredientOpaque = 1610789;
    DicomTags.DistanceReceptorPlaneToDetectorHousing = 1610790;
    DicomTags.IntensifierActiveShape = 1610791;
    DicomTags.IntensifierActiveDimensions = 1610792;
    DicomTags.PhysicalDetectorSize = 1610793;
    DicomTags.PositionOfIsocenterProjection = 1610800;
    DicomTags.FieldOfViewSequence = 1610802;
    DicomTags.FieldOfViewDescription = 1610803;
    DicomTags.ExposureControlSensingRegionsSequence = 1610804;
    DicomTags.ExposureControlSensingRegionShape = 1610805;
    DicomTags.ExposureControlSensingRegionLeftVerticalEdge = 1610806;
    DicomTags.ExposureControlSensingRegionRightVerticalEdge = 1610807;
    DicomTags.ExposureControlSensingRegionUpperHorizontalEdge = 1610808;
    DicomTags.ExposureControlSensingRegionLowerHorizontalEdge = 1610809;
    DicomTags.CenterOfCircularExposureControlSensingRegion = 1610816;
    DicomTags.RadiusOfCircularExposureControlSensingRegion = 1610817;
    DicomTags.VerticesOfThePolygonalExposureControlSensingRegion = 1610818;
    DicomTags.ColumnAngulationPatient = 1610823;
    DicomTags.BeamAngle = 1610825;
    DicomTags.FrameDetectorParametersSequence = 1610833;
    DicomTags.CalculatedAnatomyThickness = 1610834;
    DicomTags.CalibrationSequence = 1610837;
    DicomTags.ObjectThicknessSequence = 1610838;
    DicomTags.PlaneIdentification = 1610839;
    DicomTags.FieldOfViewDimensionsInFloat = 1610849;
    DicomTags.IsocenterReferenceSystemSequence = 1610850;
    DicomTags.PositionerIsocenterPrimaryAngle = 1610851;
    DicomTags.PositionerIsocenterSecondaryAngle = 1610852;
    DicomTags.PositionerIsocenterDetectorRotationAngle = 1610853;
    DicomTags.TableXPositionToIsocenter = 1610854;
    DicomTags.TableYPositionToIsocenter = 1610855;
    DicomTags.TableZPositionToIsocenter = 1610856;
    DicomTags.TableHorizontalRotationAngle = 1610857;
    DicomTags.TableHeadTiltAngle = 1610864;
    DicomTags.TableCradleTiltAngle = 1610865;
    DicomTags.FrameDisplayShutterSequence = 1610866;
    DicomTags.AcquiredImageAreaDoseProduct = 1610867;
    DicomTags.CArmPositionerTabletopRelationship = 1610868;
    DicomTags.XRayGeometrySequence = 1610870;
    DicomTags.IrradiationEventIdentificationSequence = 1610871;
    DicomTags.XRay3dFrameTypeSequence = 1611012;
    DicomTags.ContributingSourcesSequence = 1611014;
    DicomTags.XRay3dAcquisitionSequence = 1611015;
    DicomTags.PrimaryPositionerScanArc = 1611016;
    DicomTags.SecondaryPositionerScanArc = 1611017;
    DicomTags.PrimaryPositionerScanStartAngle = 1611024;
    DicomTags.SecondaryPositionerScanStartAngle = 1611025;
    DicomTags.PrimaryPositionerIncrement = 1611028;
    DicomTags.SecondaryPositionerIncrement = 1611029;
    DicomTags.StartAcquisitionDatetime = 1611030;
    DicomTags.EndAcquisitionDatetime = 1611031;
    DicomTags.ApplicationName = 1611044;
    DicomTags.ApplicationVersion = 1611045;
    DicomTags.ApplicationManufacturer = 1611046;
    DicomTags.AlgorithmType = 1611047;
    DicomTags.AlgorithmDescription = 1611048;
    DicomTags.XRay3dReconstructionSequence = 1611056;
    DicomTags.ReconstructionDescription = 1611057;
    DicomTags.PerProjectionAcquisitionSequence = 1611064;
    DicomTags.DiffusionBMatrixSequence = 1611265;
    DicomTags.DiffusionBValueXx = 1611266;
    DicomTags.DiffusionBValueXy = 1611267;
    DicomTags.DiffusionBValueXz = 1611268;
    DicomTags.DiffusionBValueYy = 1611269;
    DicomTags.DiffusionBValueYz = 1611270;
    DicomTags.DiffusionBValueZz = 1611271;
    DicomTags.DecayCorrectionDatetime = 1611521;
    DicomTags.StartDensityThreshold = 1611541;
    DicomTags.StartRelativeDensityDifferenceThreshold = 1611542;
    DicomTags.StartCardiacTriggerCountThreshold = 1611543;
    DicomTags.StartRespiratoryTriggerCountThreshold = 1611544;
    DicomTags.TerminationCountsThreshold = 1611545;
    DicomTags.TerminationDensityThreshold = 1611552;
    DicomTags.TerminationRelativeDensityThreshold = 1611553;
    DicomTags.TerminationTimeThreshold = 1611554;
    DicomTags.TerminationCardiacTriggerCountThreshold = 1611555;
    DicomTags.TerminationRespiratoryTriggerCountThreshold = 1611556;
    DicomTags.DetectorGeometry = 1611557;
    DicomTags.TransverseDetectorSeparation = 1611558;
    DicomTags.AxialDetectorDimension = 1611559;
    DicomTags.RadiopharmaceuticalAgentNumber = 1611561;
    DicomTags.PetFrameAcquisitionSequence = 1611570;
    DicomTags.PetDetectorMotionDetailsSequence = 1611571;
    DicomTags.PetTableDynamicsSequence = 1611572;
    DicomTags.PetPositionSequence = 1611573;
    DicomTags.PetFrameCorrectionFactorsSequence = 1611574;
    DicomTags.RadiopharmaceuticalUsageSequence = 1611575;
    DicomTags.AttenuationCorrectionSource = 1611576;
    DicomTags.NumberOfIterations = 1611577;
    DicomTags.NumberOfSubsets = 1611584;
    DicomTags.PetReconstructionSequence = 1611593;
    DicomTags.PetFrameTypeSequence = 1611601;
    DicomTags.TimeOfFlightInformationUsed = 1611605;
    DicomTags.ReconstructionType = 1611606;
    DicomTags.DecayCorrected = 1611608;
    DicomTags.AttenuationCorrected = 1611609;
    DicomTags.ScatterCorrected = 1611616;
    DicomTags.DeadTimeCorrected = 1611617;
    DicomTags.GantryMotionCorrected = 1611618;
    DicomTags.PatientMotionCorrected = 1611619;
    DicomTags.CountLossNormalizationCorrected = 1611620;
    DicomTags.RandomsCorrected = 1611621;
    DicomTags.NonUniformRadialSamplingCorrected = 1611622;
    DicomTags.SensitivityCalibrated = 1611623;
    DicomTags.DetectorNormalizationCorrection = 1611624;
    DicomTags.IterativeReconstructionMethod = 1611625;
    DicomTags.AttenuationCorrectionTemporalRelationship = 1611632;
    DicomTags.PatientPhysiologicalStateSequence = 1611633;
    DicomTags.PatientPhysiologicalStateCodeSequence = 1611634;
    DicomTags.DepthsOfFocus = 1611777;
    DicomTags.ExcludedIntervalsSequence = 1611779;
    DicomTags.ExclusionStartDatetime = 1611780;
    DicomTags.ExclusionDuration = 1611781;
    DicomTags.UsImageDescriptionSequence = 1611782;
    DicomTags.ImageDataTypeSequence = 1611783;
    DicomTags.DataType = 1611784;
    DicomTags.TransducerScanPatternCodeSequence = 1611785;
    DicomTags.AliasedDataType = 1611787;
    DicomTags.PositionMeasuringDeviceUsed = 1611788;
    DicomTags.TransducerGeometryCodeSequence = 1611789;
    DicomTags.TransducerBeamSteeringCodeSequence = 1611790;
    DicomTags.TransducerApplicationCodeSequence = 1611791;
    DicomTags.ContributingEquipmentSequence = 1613825;
    DicomTags.ContributionDateTime = 1613826;
    DicomTags.ContributionDescription = 1613827;
    DicomTags.StudyInstanceUid = 2097165;
    DicomTags.SeriesInstanceUid = 2097166;
    DicomTags.StudyId = 2097168;
    DicomTags.SeriesNumber = 2097169;
    DicomTags.AcquisitionNumber = 2097170;
    DicomTags.InstanceNumber = 2097171;
    DicomTags.IsotopeNumberRetired = 2097172;
    DicomTags.PhaseNumberRetired = 2097173;
    DicomTags.IntervalNumberRetired = 2097174;
    DicomTags.TimeSlotNumberRetired = 2097175;
    DicomTags.AngleNumberRetired = 2097176;
    DicomTags.ItemNumber = 2097177;
    DicomTags.PatientOrientation = 2097184;
    DicomTags.OverlayNumberRetired = 2097186;
    DicomTags.CurveNumberRetired = 2097188;
    DicomTags.LutNumberRetired = 2097190;
    DicomTags.ImagePositionRetired = 2097200;
    DicomTags.ImagePositionPatient = 2097202;
    DicomTags.ImageOrientationRetired = 2097205;
    DicomTags.ImageOrientationPatient = 2097207;
    DicomTags.LocationRetired = 2097232;
    DicomTags.FrameOfReferenceUid = 2097234;
    DicomTags.Laterality = 2097248;
    DicomTags.ImageLaterality = 2097250;
    DicomTags.ImageGeometryTypeRetired = 2097264;
    DicomTags.MaskingImageRetired = 2097280;
    DicomTags.ReportNumberRetired = 2097322;
    DicomTags.TemporalPositionIdentifier = 2097408;
    DicomTags.NumberOfTemporalPositions = 2097413;
    DicomTags.TemporalResolution = 2097424;
    DicomTags.SynchronizationFrameOfReferenceUid = 2097664;
    DicomTags.SopInstanceUidOfConcatenationSource = 2097730;
    DicomTags.SeriesInStudyRetired = 2101248;
    DicomTags.AcquisitionsInSeriesRetired = 2101249;
    DicomTags.ImagesInAcquisition = 2101250;
    DicomTags.ImagesInSeriesRetired = 2101251;
    DicomTags.AcquisitionsInStudyRetired = 2101252;
    DicomTags.ImagesInStudyRetired = 2101253;
    DicomTags.ReferenceRetired = 2101280;
    DicomTags.PositionReferenceIndicator = 2101312;
    DicomTags.SliceLocation = 2101313;
    DicomTags.OtherStudyNumbersRetired = 2101360;
    DicomTags.NumberOfPatientRelatedStudies = 2101760;
    DicomTags.NumberOfPatientRelatedSeries = 2101762;
    DicomTags.NumberOfPatientRelatedInstances = 2101764;
    DicomTags.NumberOfStudyRelatedSeries = 2101766;
    DicomTags.NumberOfStudyRelatedInstances = 2101768;
    DicomTags.NumberOfSeriesRelatedInstances = 2101769;
    DicomTags.SourceImageIdsRetired = 2109696;
    DicomTags.ModifyingDeviceIdRetired = 2110465;
    DicomTags.ModifiedImageIdRetired = 2110466;
    DicomTags.ModifiedImageDateRetired = 2110467;
    DicomTags.ModifyingDeviceManufacturerRetired = 2110468;
    DicomTags.ModifiedImageTimeRetired = 2110469;
    DicomTags.ModifiedImageDescriptionRetired = 2110470;
    DicomTags.ImageComments = 2113536;
    DicomTags.OriginalImageIdentificationRetired = 2117632;
    DicomTags.OriginalImageIdentificationNomenclatureRetired = 2117634;
    DicomTags.StackId = 2134102;
    DicomTags.InStackPositionNumber = 2134103;
    DicomTags.FrameAnatomySequence = 2134129;
    DicomTags.FrameLaterality = 2134130;
    DicomTags.FrameContentSequence = 2134289;
    DicomTags.PlanePositionSequence = 2134291;
    DicomTags.PlaneOrientationSequence = 2134294;
    DicomTags.TemporalPositionIndex = 2134312;
    DicomTags.NominalCardiacTriggerDelayTime = 2134355;
    DicomTags.NominalCardiacTriggerTimePriorToRPeak = 2134356;
    DicomTags.ActualCardiacTriggerTimePriorToRPeak = 2134357;
    DicomTags.FrameAcquisitionNumber = 2134358;
    DicomTags.DimensionIndexValues = 2134359;
    DicomTags.FrameComments = 2134360;
    DicomTags.ConcatenationUid = 2134369;
    DicomTags.InConcatenationNumber = 2134370;
    DicomTags.InConcatenationTotalNumber = 2134371;
    DicomTags.DimensionOrganizationUid = 2134372;
    DicomTags.DimensionIndexPointer = 2134373;
    DicomTags.FunctionalGroupPointer = 2134375;
    DicomTags.DimensionIndexPrivateCreator = 2134547;
    DicomTags.DimensionOrganizationSequence = 2134561;
    DicomTags.DimensionIndexSequence = 2134562;
    DicomTags.ConcatenationFrameOffsetNumber = 2134568;
    DicomTags.FunctionalGroupPrivateCreator = 2134584;
    DicomTags.NominalPercentageOfCardiacPhase = 2134593;
    DicomTags.NominalPercentageOfRespiratoryPhase = 2134597;
    DicomTags.StartingRespiratoryAmplitude = 2134598;
    DicomTags.StartingRespiratoryPhase = 2134599;
    DicomTags.EndingRespiratoryAmplitude = 2134600;
    DicomTags.EndingRespiratoryPhase = 2134601;
    DicomTags.RespiratoryTriggerType = 2134608;
    DicomTags.RRIntervalTimeNominal = 2134609;
    DicomTags.ActualCardiacTriggerDelayTime = 2134610;
    DicomTags.RespiratorySynchronizationSequence = 2134611;
    DicomTags.RespiratoryIntervalTime = 2134612;
    DicomTags.NominalRespiratoryTriggerDelayTime = 2134613;
    DicomTags.RespiratoryTriggerDelayThreshold = 2134614;
    DicomTags.ActualRespiratoryTriggerDelayTime = 2134615;
    DicomTags.ImagePositionVolume = 2134785;
    DicomTags.ImageOrientationVolume = 2134786;
    DicomTags.UltrasoundAcquisitionGeometry = 2134791;
    DicomTags.ApexPosition = 2134792;
    DicomTags.VolumeToTransducerMappingMatrix = 2134793;
    DicomTags.VolumeToTableMappingMatrix = 2134794;
    DicomTags.PatientFrameOfReferenceSource = 2134796;
    DicomTags.TemporalPositionTimeOffset = 2134797;
    DicomTags.PlanePositionVolumeSequence = 2134798;
    DicomTags.PlaneOrientationVolumeSequence = 2134799;
    DicomTags.TemporalPositionSequence = 2134800;
    DicomTags.DimensionOrganizationType = 2134801;
    DicomTags.VolumeFrameOfReferenceUid = 2134802;
    DicomTags.TableFrameOfReferenceUid = 2134803;
    DicomTags.DimensionDescriptionLabel = 2135073;
    DicomTags.PatientOrientationInFrameSequence = 2135120;
    DicomTags.FrameLabel = 2135123;
    DicomTags.AcquisitionIndex = 2135320;
    DicomTags.ContributingSopInstancesReferenceSequence = 2135337;
    DicomTags.ReconstructionIndex = 2135350;
    DicomTags.LightPathFilterPassThroughWavelength = 2228225;
    DicomTags.LightPathFilterPassBand = 2228226;
    DicomTags.ImagePathFilterPassThroughWavelength = 2228227;
    DicomTags.ImagePathFilterPassBand = 2228228;
    DicomTags.PatientEyeMovementCommanded = 2228229;
    DicomTags.PatientEyeMovementCommandCodeSequence = 2228230;
    DicomTags.SphericalLensPower = 2228231;
    DicomTags.CylinderLensPower = 2228232;
    DicomTags.CylinderAxis = 2228233;
    DicomTags.EmmetropicMagnification = 2228234;
    DicomTags.IntraOcularPressure = 2228235;
    DicomTags.HorizontalFieldOfView = 2228236;
    DicomTags.PupilDilated = 2228237;
    DicomTags.DegreeOfDilation = 2228238;
    DicomTags.StereoBaselineAngle = 2228240;
    DicomTags.StereoBaselineDisplacement = 2228241;
    DicomTags.StereoHorizontalPixelOffset = 2228242;
    DicomTags.StereoVerticalPixelOffset = 2228243;
    DicomTags.StereoRotation = 2228244;
    DicomTags.AcquisitionDeviceTypeCodeSequence = 2228245;
    DicomTags.IlluminationTypeCodeSequence = 2228246;
    DicomTags.LightPathFilterTypeStackCodeSequence = 2228247;
    DicomTags.ImagePathFilterTypeStackCodeSequence = 2228248;
    DicomTags.LensesCodeSequence = 2228249;
    DicomTags.ChannelDescriptionCodeSequence = 2228250;
    DicomTags.RefractiveStateSequence = 2228251;
    DicomTags.MydriaticAgentCodeSequence = 2228252;
    DicomTags.RelativeImagePositionCodeSequence = 2228253;
    DicomTags.CameraAngleOfView = 2228254;
    DicomTags.StereoPairsSequence = 2228256;
    DicomTags.LeftImageSequence = 2228257;
    DicomTags.RightImageSequence = 2228258;
    DicomTags.AxialLengthOfTheEye = 2228272;
    DicomTags.OphthalmicFrameLocationSequence = 2228273;
    DicomTags.ReferenceCoordinates = 2228274;
    DicomTags.DepthSpatialResolution = 2228277;
    DicomTags.MaximumDepthDistortion = 2228278;
    DicomTags.AlongScanSpatialResolution = 2228279;
    DicomTags.MaximumAlongScanDistortion = 2228280;
    DicomTags.OphthalmicImageOrientation = 2228281;
    DicomTags.DepthOfTransverseImage = 2228289;
    DicomTags.MydriaticAgentConcentrationUnitsSequence = 2228290;
    DicomTags.AcrossScanSpatialResolution = 2228296;
    DicomTags.MaximumAcrossScanDistortion = 2228297;
    DicomTags.MydriaticAgentConcentration = 2228302;
    DicomTags.IlluminationWaveLength = 2228309;
    DicomTags.IlluminationPower = 2228310;
    DicomTags.IlluminationBandwidth = 2228311;
    DicomTags.MydriaticAgentSequence = 2228312;
    DicomTags.OphthalmicAxialMeasurementsRightEyeSequence = 2232327;
    DicomTags.OphthalmicAxialMeasurementsLeftEyeSequence = 2232328;
    DicomTags.OphthalmicAxialLengthMeasurementsType = 2232336;
    DicomTags.OphthalmicAxialLength = 2232345;
    DicomTags.LensStatusCodeSequence = 2232356;
    DicomTags.VitreousStatusCodeSequence = 2232357;
    DicomTags.IolFormulaCodeSequence = 2232360;
    DicomTags.IolFormulaDetail = 2232361;
    DicomTags.KeratometerIndex = 2232371;
    DicomTags.SourceOfOphthalmicAxialLengthCodeSequence = 2232373;
    DicomTags.TargetRefraction = 2232375;
    DicomTags.RefractiveProcedureOccurred = 2232377;
    DicomTags.RefractiveSurgeryTypeCodeSequence = 2232384;
    DicomTags.OphthalmicUltrasoundAxialMeasurementsTypeCodeSequence = 2232388;
    DicomTags.OphthalmicAxialLengthMeasurementsSequence = 2232400;
    DicomTags.IolPower = 2232403;
    DicomTags.PredictedRefractiveError = 2232404;
    DicomTags.OphthalmicAxialLengthVelocity = 2232409;
    DicomTags.LensStatusDescription = 2232421;
    DicomTags.VitreousStatusDescription = 2232422;
    DicomTags.IolPowerSequence = 2232464;
    DicomTags.LensConstantSequence = 2232466;
    DicomTags.IolManufacturer = 2232467;
    DicomTags.LensConstantDescription = 2232468;
    DicomTags.KeratometryMeasurementTypeCodeSequence = 2232470;
    DicomTags.ReferencedOphthalmicAxialMeasurementsSequence = 2232576;
    DicomTags.OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence = 2232577;
    DicomTags.RefractiveErrorBeforeRefractiveSurgeryCodeSequence = 2232579;
    DicomTags.IolPowerForExactEmmetropia = 2232609;
    DicomTags.IolPowerForExactTargetRefraction = 2232610;
    DicomTags.AnteriorChamberDepthDefinitionCodeSequence = 2232613;
    DicomTags.LensThickness = 2232624;
    DicomTags.AnteriorChamberDepth = 2232625;
    DicomTags.SourceOfLensThicknessDataCodeSequence = 2232626;
    DicomTags.SourceOfAnteriorChamberDepthDataCodeSequence = 2232627;
    DicomTags.SourceOfRefractiveErrorDataCodeSequence = 2232629;
    DicomTags.OphthalmicAxialLengthMeasurementModified = 2232640;
    DicomTags.OphthalmicAxialLengthDataSourceCodeSequence = 2232656;
    DicomTags.OphthalmicAxialLengthAcquisitionMethodCodeSequence = 2232659;
    DicomTags.SignalToNoiseRatio = 2232661;
    DicomTags.OphthalmicAxialLengthDataSourceDescription = 2232665;
    DicomTags.OphthalmicAxialLengthMeasurementsTotalLengthSequence = 2232848;
    DicomTags.OphthalmicAxialLengthMeasurementsSegmentalLengthSequence = 2232849;
    DicomTags.OphthalmicAxialLengthMeasurementsLengthSummationSequence = 2232850;
    DicomTags.UltrasoundOphthalmicAxialLengthMeasurementsSequence = 2232864;
    DicomTags.OpticalOphthalmicAxialLengthMeasurementsSequence = 2232869;
    DicomTags.UltrasoundSelectedOphthalmicAxialLengthSequence = 2232880;
    DicomTags.OphthalmicAxialLengthSelectionMethodCodeSequence = 2232912;
    DicomTags.OpticalSelectedOphthalmicAxialLengthSequence = 2232917;
    DicomTags.SelectedSegmentalOphthalmicAxialLengthSequence = 2232919;
    DicomTags.SelectedTotalOphthalmicAxialLengthSequence = 2232928;
    DicomTags.OphthalmicAxialLengthQualityMetricSequence = 2232930;
    DicomTags.OphthalmicAxialLengthQualityMetricTypeDescription = 2232947;
    DicomTags.IntraocularLensCalculationsRightEyeSequence = 2233088;
    DicomTags.IntraocularLensCalculationsLeftEyeSequence = 2233104;
    DicomTags.ReferencedOphthalmicAxialLengthMeasurementQcImageSequence = 2233136;
    DicomTags.VisualFieldHorizontalExtent = 2359312;
    DicomTags.VisualFieldVerticalExtent = 2359313;
    DicomTags.VisualFieldShape = 2359314;
    DicomTags.ScreeningTestModeCodeSequence = 2359318;
    DicomTags.MaximumStimulusLuminance = 2359320;
    DicomTags.BackgroundLuminance = 2359328;
    DicomTags.StimulusColorCodeSequence = 2359329;
    DicomTags.BackgroundIlluminationColorCodeSequence = 2359332;
    DicomTags.StimulusArea = 2359333;
    DicomTags.StimulusPresentationTime = 2359336;
    DicomTags.FixationSequence = 2359346;
    DicomTags.FixationMonitoringCodeSequence = 2359347;
    DicomTags.VisualFieldCatchTrialSequence = 2359348;
    DicomTags.FixationCheckedQuantity = 2359349;
    DicomTags.PatientNotProperlyFixatedQuantity = 2359350;
    DicomTags.PresentedVisualStimuliDataFlag = 2359351;
    DicomTags.NumberOfVisualStimuli = 2359352;
    DicomTags.ExcessiveFixationLossesDataFlag = 2359353;
    DicomTags.ExcessiveFixationLosses = 2359360;
    DicomTags.StimuliRetestingQuantity = 2359362;
    DicomTags.CommentsOnPatientsPerformanceOfVisualField = 2359364;
    DicomTags.FalseNegativesEstimateFlag = 2359365;
    DicomTags.FalseNegativesEstimate = 2359366;
    DicomTags.NegativeCatchTrialsQuantity = 2359368;
    DicomTags.FalseNegativesQuantity = 2359376;
    DicomTags.ExcessiveFalseNegativesDataFlag = 2359377;
    DicomTags.ExcessiveFalseNegatives = 2359378;
    DicomTags.FalsePositivesEstimateFlag = 2359379;
    DicomTags.FalsePositivesEstimate = 2359380;
    DicomTags.CatchTrialsDataFlag = 2359381;
    DicomTags.PositiveCatchTrialsQuantity = 2359382;
    DicomTags.TestPointNormalsDataFlag = 2359383;
    DicomTags.TestPointNormalsSequence = 2359384;
    DicomTags.GlobalDeviationProbabilityNormalsFlag = 2359385;
    DicomTags.FalsePositivesQuantity = 2359392;
    DicomTags.ExcessiveFalsePositivesDataFlag = 2359393;
    DicomTags.ExcessiveFalsePositives = 2359394;
    DicomTags.VisualFieldTestNormalsFlag = 2359395;
    DicomTags.ResultsNormalsSequence = 2359396;
    DicomTags.AgeCorrectedSensitivityDeviationAlgorithmSequence = 2359397;
    DicomTags.GlobalDeviationFromNormal = 2359398;
    DicomTags.GeneralizedDefectSensitivityDeviationAlgorithmSequence = 2359399;
    DicomTags.LocalizedDeviationFromNormal = 2359400;
    DicomTags.PatientReliabilityIndicator = 2359401;
    DicomTags.VisualFieldMeanSensitivity = 2359408;
    DicomTags.GlobalDeviationProbability = 2359409;
    DicomTags.LocalDeviationProbabilityNormalsFlag = 2359410;
    DicomTags.LocalizedDeviationProbability = 2359411;
    DicomTags.ShortTermFluctuationCalculated = 2359412;
    DicomTags.ShortTermFluctuation = 2359413;
    DicomTags.ShortTermFluctuationProbabilityCalculated = 2359414;
    DicomTags.ShortTermFluctuationProbability = 2359415;
    DicomTags.CorrectedLocalizedDeviationFromNormalCalculated = 2359416;
    DicomTags.CorrectedLocalizedDeviationFromNormal = 2359417;
    DicomTags.CorrectedLocalizedDeviationFromNormalProbabilityCalculated = 2359424;
    DicomTags.CorrectedLocalizedDeviationFromNormalProbability = 2359425;
    DicomTags.GlobalDeviationProbabilitySequence = 2359427;
    DicomTags.LocalizedDeviationProbabilitySequence = 2359429;
    DicomTags.FovealSensitivityMeasured = 2359430;
    DicomTags.FovealSensitivity = 2359431;
    DicomTags.VisualFieldTestDuration = 2359432;
    DicomTags.VisualFieldTestPointSequence = 2359433;
    DicomTags.VisualFieldTestPointXCoordinate = 2359440;
    DicomTags.VisualFieldTestPointYCoordinate = 2359441;
    DicomTags.AgeCorrectedSensitivityDeviationValue = 2359442;
    DicomTags.StimulusResults = 2359443;
    DicomTags.SensitivityValue = 2359444;
    DicomTags.RetestStimulusSeen = 2359445;
    DicomTags.RetestSensitivityValue = 2359446;
    DicomTags.VisualFieldTestPointNormalsSequence = 2359447;
    DicomTags.QuantifiedDefect = 2359448;
    DicomTags.AgeCorrectedSensitivityDeviationProbabilityValue = 2359552;
    DicomTags.GeneralizedDefectCorrectedSensitivityDeviationFlag = 2359554;
    DicomTags.GeneralizedDefectCorrectedSensitivityDeviationValue = 2359555;
    DicomTags.GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue = 2359556;
    DicomTags.MinimumSensitivityValue = 2359557;
    DicomTags.BlindSpotLocalized = 2359558;
    DicomTags.BlindSpotXCoordinate = 2359559;
    DicomTags.BlindSpotYCoordinate = 2359560;
    DicomTags.VisualAcuityMeasurementSequence = 2359568;
    DicomTags.RefractiveParametersUsedOnPatientSequence = 2359570;
    DicomTags.MeasurementLaterality = 2359571;
    DicomTags.OphthalmicPatientClinicalInformationLeftEyeSequence = 2359572;
    DicomTags.OphthalmicPatientClinicalInformationRightEyeSequence = 2359573;
    DicomTags.FovealPointNormativeDataFlag = 2359575;
    DicomTags.FovealPointProbabilityValue = 2359576;
    DicomTags.ScreeningBaselineMeasured = 2359584;
    DicomTags.ScreeningBaselineMeasuredSequence = 2359586;
    DicomTags.ScreeningBaselineType = 2359588;
    DicomTags.ScreeningBaselineValue = 2359590;
    DicomTags.AlgorithmSource = 2359810;
    DicomTags.DataSetName = 2360070;
    DicomTags.DataSetVersion = 2360071;
    DicomTags.DataSetSource = 2360072;
    DicomTags.DataSetDescription = 2360073;
    DicomTags.VisualFieldTestReliabilityGlobalIndexSequence = 2360087;
    DicomTags.VisualFieldGlobalResultsIndexSequence = 2360096;
    DicomTags.DataObservationSequence = 2360101;
    DicomTags.IndexNormalsFlag = 2360120;
    DicomTags.IndexProbability = 2360129;
    DicomTags.IndexProbabilitySequence = 2360132;
    DicomTags.SamplesPerPixel = 2621442;
    DicomTags.SamplesPerPixelUsed = 2621443;
    DicomTags.PhotometricInterpretation = 2621444;
    DicomTags.ImageDimensionsRetired = 2621445;
    DicomTags.PlanarConfiguration = 2621446;
    DicomTags.NumberOfFrames = 2621448;
    DicomTags.FrameIncrementPointer = 2621449;
    DicomTags.FrameDimensionPointer = 2621450;
    DicomTags.Rows = 2621456;
    DicomTags.Columns = 2621457;
    DicomTags.PlanesRetired = 2621458;
    DicomTags.UltrasoundColorDataPresent = 2621460;
    DicomTags.PixelSpacing = 2621488;
    DicomTags.ZoomFactor = 2621489;
    DicomTags.ZoomCenter = 2621490;
    DicomTags.PixelAspectRatio = 2621492;
    DicomTags.ImageFormatRetired = 2621504;
    DicomTags.ManipulatedImageRetired = 2621520;
    DicomTags.CorrectedImage = 2621521;
    DicomTags.CompressionRecognitionCodeRetired = 2621535;
    DicomTags.CompressionCodeRetired = 2621536;
    DicomTags.CompressionOriginatorRetired = 2621537;
    DicomTags.CompressionLabelRetired = 2621538;
    DicomTags.CompressionDescriptionRetired = 2621539;
    DicomTags.CompressionSequenceRetired = 2621541;
    DicomTags.CompressionStepPointersRetired = 2621542;
    DicomTags.RepeatIntervalRetired = 2621544;
    DicomTags.BitsGroupedRetired = 2621545;
    DicomTags.PerimeterTableRetired = 2621552;
    DicomTags.PerimeterValueRetired = 2621553;
    DicomTags.PredictorRowsRetired = 2621568;
    DicomTags.PredictorColumnsRetired = 2621569;
    DicomTags.PredictorConstantsRetired = 2621570;
    DicomTags.BlockedPixelsRetired = 2621584;
    DicomTags.BlockRowsRetired = 2621585;
    DicomTags.BlockColumnsRetired = 2621586;
    DicomTags.RowOverlapRetired = 2621587;
    DicomTags.ColumnOverlapRetired = 2621588;
    DicomTags.BitsAllocated = 2621696;
    DicomTags.BitsStored = 2621697;
    DicomTags.HighBit = 2621698;
    DicomTags.PixelRepresentation = 2621699;
    DicomTags.SmallestValidPixelValueRetired = 2621700;
    DicomTags.LargestValidPixelValueRetired = 2621701;
    DicomTags.SmallestImagePixelValue = 2621702;
    DicomTags.LargestImagePixelValue = 2621703;
    DicomTags.SmallestPixelValueInSeries = 2621704;
    DicomTags.LargestPixelValueInSeries = 2621705;
    DicomTags.SmallestImagePixelValueInPlaneRetired = 2621712;
    DicomTags.LargestImagePixelValueInPlaneRetired = 2621713;
    DicomTags.PixelPaddingValue = 2621728;
    DicomTags.PixelPaddingRangeLimit = 2621729;
    DicomTags.ImageLocationRetired = 2621952;
    DicomTags.QualityControlImage = 2622208;
    DicomTags.BurnedInAnnotation = 2622209;
    DicomTags.RecognizableVisualFeatures = 2622210;
    DicomTags.LongitudinalTemporalInformationModified = 2622211;
    DicomTags.TransformLabelRetired = 2622464;
    DicomTags.TransformVersionNumberRetired = 2622465;
    DicomTags.NumberOfTransformStepsRetired = 2622466;
    DicomTags.SequenceOfCompressedDataRetired = 2622467;
    DicomTags.DetailsOfCoefficientsRetired = 2622468;
    DicomTags.DctLabelRetired = 2623232;
    DicomTags.DataBlockDescriptionRetired = 2623233;
    DicomTags.DataBlockRetired = 2623234;
    DicomTags.NormalizationFactorFormatRetired = 2623248;
    DicomTags.ZonalMapNumberFormatRetired = 2623264;
    DicomTags.ZonalMapLocationRetired = 2623265;
    DicomTags.ZonalMapFormatRetired = 2623266;
    DicomTags.AdaptiveMapFormatRetired = 2623280;
    DicomTags.CodeNumberFormatRetired = 2623296;
    DicomTags.PixelSpacingCalibrationType = 2624002;
    DicomTags.PixelSpacingCalibrationDescription = 2624004;
    DicomTags.PixelIntensityRelationship = 2625600;
    DicomTags.PixelIntensityRelationshipSign = 2625601;
    DicomTags.WindowCenter = 2625616;
    DicomTags.WindowWidth = 2625617;
    DicomTags.RescaleIntercept = 2625618;
    DicomTags.RescaleSlope = 2625619;
    DicomTags.RescaleType = 2625620;
    DicomTags.WindowCenterWidthExplanation = 2625621;
    DicomTags.VoiLutFunction = 2625622;
    DicomTags.GrayScaleRetired = 2625664;
    DicomTags.RecommendedViewingMode = 2625680;
    DicomTags.GrayLookupTableDescriptorRetired = 2625792;
    DicomTags.RedPaletteColorLookupTableDescriptor = 2625793;
    DicomTags.GreenPaletteColorLookupTableDescriptor = 2625794;
    DicomTags.BluePaletteColorLookupTableDescriptor = 2625795;
    DicomTags.AlphaPaletteColorLookupTableDescriptor = 2625796;
    DicomTags.LargeRedPaletteColorLookupTableDescriptorRetired = 2625809;
    DicomTags.LargeGreenPaletteColorLookupTableDescriptorRetired = 2625810;
    DicomTags.LargeBluePaletteColorLookupTableDescriptorRetired = 2625811;
    DicomTags.PaletteColorLookupTableUid = 2625945;
    DicomTags.GrayLookupTableDataRetired = 2626048;
    DicomTags.RedPaletteColorLookupTableData = 2626049;
    DicomTags.GreenPaletteColorLookupTableData = 2626050;
    DicomTags.BluePaletteColorLookupTableData = 2626051;
    DicomTags.AlphaPaletteColorLookupTableData = 2626052;
    DicomTags.LargeRedPaletteColorLookupTableDataRetired = 2626065;
    DicomTags.LargeGreenPaletteColorLookupTableDataRetired = 2626066;
    DicomTags.LargeBluePaletteColorLookupTableDataRetired = 2626067;
    DicomTags.LargePaletteColorLookupTableUidRetired = 2626068;
    DicomTags.SegmentedRedPaletteColorLookupTableData = 2626081;
    DicomTags.SegmentedGreenPaletteColorLookupTableData = 2626082;
    DicomTags.SegmentedBluePaletteColorLookupTableData = 2626083;
    DicomTags.BreastImplantPresent = 2626304;
    DicomTags.PartialView = 2626384;
    DicomTags.PartialViewDescription = 2626385;
    DicomTags.PartialViewCodeSequence = 2626386;
    DicomTags.SpatialLocationsPreserved = 2626394;
    DicomTags.DataFrameAssignmentSequence = 2626561;
    DicomTags.DataPathAssignment = 2626562;
    DicomTags.BitsMappedToColorLookupTable = 2626563;
    DicomTags.BlendingLut1Sequence = 2626564;
    DicomTags.BlendingLut1TransferFunction = 2626565;
    DicomTags.BlendingWeightConstant = 2626566;
    DicomTags.BlendingLookupTableDescriptor = 2626567;
    DicomTags.BlendingLookupTableData = 2626568;
    DicomTags.EnhancedPaletteColorLookupTableSequence = 2626571;
    DicomTags.BlendingLut2Sequence = 2626572;
    DicomTags.BlendingLut2TransferFunction = 2626573;
    DicomTags.DataPathId = 2626574;
    DicomTags.RgbLutTransferFunction = 2626575;
    DicomTags.AlphaLutTransferFunction = 2626576;
    DicomTags.IccProfile = 2629632;
    DicomTags.LossyImageCompression = 2629904;
    DicomTags.LossyImageCompressionRatio = 2629906;
    DicomTags.LossyImageCompressionMethod = 2629908;
    DicomTags.ModalityLutSequence = 2633728;
    DicomTags.LutDescriptor = 2633730;
    DicomTags.LutExplanation = 2633731;
    DicomTags.ModalityLutType = 2633732;
    DicomTags.LutData = 2633734;
    DicomTags.VoiLutSequence = 2633744;
    DicomTags.SoftcopyVoiLutSequence = 2634000;
    DicomTags.ImagePresentationCommentsRetired = 2637824;
    DicomTags.BiPlaneAcquisitionSequenceRetired = 2641920;
    DicomTags.RepresentativeFrameNumber = 2646032;
    DicomTags.FrameNumbersOfInterestFoi = 2646048;
    DicomTags.FrameOfInterestDescription = 2646050;
    DicomTags.FrameOfInterestType = 2646051;
    DicomTags.MaskPointersRetired = 2646064;
    DicomTags.RWavePointer = 2646080;
    DicomTags.MaskSubtractionSequence = 2646272;
    DicomTags.MaskOperation = 2646273;
    DicomTags.ApplicableFrameRange = 2646274;
    DicomTags.MaskFrameNumbers = 2646288;
    DicomTags.ContrastFrameAveraging = 2646290;
    DicomTags.MaskSubPixelShift = 2646292;
    DicomTags.TidOffset = 2646304;
    DicomTags.MaskOperationExplanation = 2646416;
    DicomTags.PixelDataProviderUrl = 2654176;
    DicomTags.DataPointRows = 2658305;
    DicomTags.DataPointColumns = 2658306;
    DicomTags.SignalDomainColumns = 2658307;
    DicomTags.LargestMonochromePixelValueRetired = 2658457;
    DicomTags.DataRepresentation = 2658568;
    DicomTags.PixelMeasuresSequence = 2658576;
    DicomTags.FrameVoiLutSequence = 2658610;
    DicomTags.PixelValueTransformationSequence = 2658629;
    DicomTags.SignalDomainRows = 2658869;
    DicomTags.DisplayFilterPercentage = 2659345;
    DicomTags.FramePixelShiftSequence = 2659349;
    DicomTags.SubtractionItemId = 2659350;
    DicomTags.PixelIntensityRelationshipLutSequence = 2659362;
    DicomTags.FramePixelDataPropertiesSequence = 2659395;
    DicomTags.GeometricalProperties = 2659396;
    DicomTags.GeometricMaximumDistortion = 2659397;
    DicomTags.ImageProcessingApplied = 2659398;
    DicomTags.MaskSelectionMode = 2659412;
    DicomTags.LutFunction = 2659444;
    DicomTags.MaskVisibilityPercentage = 2659448;
    DicomTags.PixelShiftSequence = 2659585;
    DicomTags.RegionPixelShiftSequence = 2659586;
    DicomTags.VerticesOfTheRegion = 2659587;
    DicomTags.MultiFramePresentationSequence = 2659589;
    DicomTags.PixelShiftFrameRange = 2659590;
    DicomTags.LutFrameRange = 2659591;
    DicomTags.ImageToEquipmentMappingMatrix = 2659616;
    DicomTags.EquipmentCoordinateSystemIdentification = 2659639;
    DicomTags.StudyStatusIdRetired = 3276810;
    DicomTags.StudyPriorityIdRetired = 3276812;
    DicomTags.StudyIdIssuerRetired = 3276818;
    DicomTags.StudyVerifiedDateRetired = 3276850;
    DicomTags.StudyVerifiedTimeRetired = 3276851;
    DicomTags.StudyReadDateRetired = 3276852;
    DicomTags.StudyReadTimeRetired = 3276853;
    DicomTags.ScheduledStudyStartDateRetired = 3280896;
    DicomTags.ScheduledStudyStartTimeRetired = 3280897;
    DicomTags.ScheduledStudyStopDateRetired = 3280912;
    DicomTags.ScheduledStudyStopTimeRetired = 3280913;
    DicomTags.ScheduledStudyLocationRetired = 3280928;
    DicomTags.ScheduledStudyLocationAeTitleRetired = 3280929;
    DicomTags.ReasonForStudyRetired = 3280944;
    DicomTags.RequestingPhysicianIdentificationSequence = 3280945;
    DicomTags.RequestingPhysician = 3280946;
    DicomTags.RequestingService = 3280947;
    DicomTags.RequestingServiceCodeSequence = 3280948;
    DicomTags.StudyArrivalDateRetired = 3280960;
    DicomTags.StudyArrivalTimeRetired = 3280961;
    DicomTags.StudyCompletionDateRetired = 3280976;
    DicomTags.StudyCompletionTimeRetired = 3280977;
    DicomTags.StudyComponentStatusIdRetired = 3280981;
    DicomTags.RequestedProcedureDescription = 3280992;
    DicomTags.RequestedProcedureCodeSequence = 3280996;
    DicomTags.RequestedContrastAgent = 3281008;
    DicomTags.StudyCommentsRetired = 3293184;
    DicomTags.ReferencedPatientAliasSequence = 3670020;
    DicomTags.VisitStatusId = 3670024;
    DicomTags.AdmissionId = 3670032;
    DicomTags.IssuerOfAdmissionIdRetired = 3670033;
    DicomTags.IssuerOfAdmissionIdSequence = 3670036;
    DicomTags.RouteOfAdmissions = 3670038;
    DicomTags.ScheduledAdmissionDateRetired = 3670042;
    DicomTags.ScheduledAdmissionTimeRetired = 3670043;
    DicomTags.ScheduledDischargeDateRetired = 3670044;
    DicomTags.ScheduledDischargeTimeRetired = 3670045;
    DicomTags.ScheduledPatientInstitutionResidenceRetired = 3670046;
    DicomTags.AdmittingDate = 3670048;
    DicomTags.AdmittingTime = 3670049;
    DicomTags.DischargeDateRetired = 3670064;
    DicomTags.DischargeTimeRetired = 3670066;
    DicomTags.DischargeDiagnosisDescriptionRetired = 3670080;
    DicomTags.DischargeDiagnosisCodeSequenceRetired = 3670084;
    DicomTags.SpecialNeeds = 3670096;
    DicomTags.ServiceEpisodeId = 3670112;
    DicomTags.IssuerOfServiceEpisodeIdRetired = 3670113;
    DicomTags.ServiceEpisodeDescription = 3670114;
    DicomTags.IssuerOfServiceEpisodeIdSequence = 3670116;
    DicomTags.PertinentDocumentsSequence = 3670272;
    DicomTags.CurrentPatientLocation = 3670784;
    DicomTags.PatientsInstitutionResidence = 3671040;
    DicomTags.PatientState = 3671296;
    DicomTags.PatientClinicalTrialParticipationSequence = 3671298;
    DicomTags.VisitComments = 3686400;
    DicomTags.WaveformOriginality = 3801092;
    DicomTags.NumberOfWaveformChannels = 3801093;
    DicomTags.NumberOfWaveformSamples = 3801104;
    DicomTags.SamplingFrequency = 3801114;
    DicomTags.MultiplexGroupLabel = 3801120;
    DicomTags.ChannelDefinitionSequence = 3801600;
    DicomTags.WaveformChannelNumber = 3801602;
    DicomTags.ChannelLabel = 3801603;
    DicomTags.ChannelStatus = 3801605;
    DicomTags.ChannelSourceSequence = 3801608;
    DicomTags.ChannelSourceModifiersSequence = 3801609;
    DicomTags.SourceWaveformSequence = 3801610;
    DicomTags.ChannelDerivationDescription = 3801612;
    DicomTags.ChannelSensitivity = 3801616;
    DicomTags.ChannelSensitivityUnitsSequence = 3801617;
    DicomTags.ChannelSensitivityCorrectionFactor = 3801618;
    DicomTags.ChannelBaseline = 3801619;
    DicomTags.ChannelTimeSkew = 3801620;
    DicomTags.ChannelSampleSkew = 3801621;
    DicomTags.ChannelOffset = 3801624;
    DicomTags.WaveformBitsStored = 3801626;
    DicomTags.FilterLowFrequency = 3801632;
    DicomTags.FilterHighFrequency = 3801633;
    DicomTags.NotchFilterFrequency = 3801634;
    DicomTags.NotchFilterBandwidth = 3801635;
    DicomTags.WaveformDataDisplayScale = 3801648;
    DicomTags.WaveformDisplayBackgroundCielabValue = 3801649;
    DicomTags.WaveformPresentationGroupSequence = 3801664;
    DicomTags.PresentationGroupNumber = 3801665;
    DicomTags.ChannelDisplaySequence = 3801666;
    DicomTags.ChannelRecommendedDisplayCielabValue = 3801668;
    DicomTags.ChannelPosition = 3801669;
    DicomTags.DisplayShadingFlag = 3801670;
    DicomTags.FractionalChannelDisplayScale = 3801671;
    DicomTags.AbsoluteChannelDisplayScale = 3801672;
    DicomTags.MultiplexedAudioChannelsDescriptionCodeSequence = 3801856;
    DicomTags.ChannelIdentificationCode = 3801857;
    DicomTags.ChannelMode = 3801858;
    DicomTags.ScheduledStationAeTitle = 4194305;
    DicomTags.ScheduledProcedureStepStartDate = 4194306;
    DicomTags.ScheduledProcedureStepStartTime = 4194307;
    DicomTags.ScheduledProcedureStepEndDate = 4194308;
    DicomTags.ScheduledProcedureStepEndTime = 4194309;
    DicomTags.ScheduledPerformingPhysiciansName = 4194310;
    DicomTags.ScheduledProcedureStepDescription = 4194311;
    DicomTags.ScheduledProtocolCodeSequence = 4194312;
    DicomTags.ScheduledProcedureStepId = 4194313;
    DicomTags.StageCodeSequence = 4194314;
    DicomTags.ScheduledPerformingPhysicianIdentificationSequence = 4194315;
    DicomTags.ScheduledStationName = 4194320;
    DicomTags.ScheduledProcedureStepLocation = 4194321;
    DicomTags.PreMedication = 4194322;
    DicomTags.ScheduledProcedureStepStatus = 4194336;
    DicomTags.OrderPlacerIdentifierSequence = 4194342;
    DicomTags.OrderFillerIdentifierSequence = 4194343;
    DicomTags.LocalNamespaceEntityId = 4194353;
    DicomTags.UniversalEntityId = 4194354;
    DicomTags.UniversalEntityIdType = 4194355;
    DicomTags.IdentifierTypeCode = 4194357;
    DicomTags.AssigningFacilitySequence = 4194358;
    DicomTags.AssigningJurisdictionCodeSequence = 4194361;
    DicomTags.AssigningAgencyOrDepartmentCodeSequence = 4194362;
    DicomTags.ScheduledProcedureStepSequence = 4194560;
    DicomTags.ReferencedNonImageCompositeSopInstanceSequence = 4194848;
    DicomTags.PerformedStationAeTitle = 4194881;
    DicomTags.PerformedStationName = 4194882;
    DicomTags.PerformedLocation = 4194883;
    DicomTags.PerformedProcedureStepStartDate = 4194884;
    DicomTags.PerformedProcedureStepStartTime = 4194885;
    DicomTags.PerformedProcedureStepEndDate = 4194896;
    DicomTags.PerformedProcedureStepEndTime = 4194897;
    DicomTags.PerformedProcedureStepStatus = 4194898;
    DicomTags.PerformedProcedureStepId = 4194899;
    DicomTags.PerformedProcedureStepDescription = 4194900;
    DicomTags.PerformedProcedureTypeDescription = 4194901;
    DicomTags.PerformedProtocolCodeSequence = 4194912;
    DicomTags.PerformedProtocolType = 4194913;
    DicomTags.ScheduledStepAttributesSequence = 4194928;
    DicomTags.RequestAttributesSequence = 4194933;
    DicomTags.CommentsOnThePerformedProcedureStep = 4194944;
    DicomTags.PerformedProcedureStepDiscontinuationReasonCodeSequence = 4194945;
    DicomTags.QuantitySequence = 4194963;
    DicomTags.Quantity = 4194964;
    DicomTags.MeasuringUnitsSequence = 4194965;
    DicomTags.BillingItemSequence = 4194966;
    DicomTags.TotalTimeOfFluoroscopy = 4195072;
    DicomTags.TotalNumberOfExposures = 4195073;
    DicomTags.EntranceDose = 4195074;
    DicomTags.ExposedArea = 4195075;
    DicomTags.DistanceSourceToEntrance = 4195078;
    DicomTags.DistanceSourceToSupportRetired = 4195079;
    DicomTags.ExposureDoseSequence = 4195086;
    DicomTags.CommentsOnRadiationDose = 4195088;
    DicomTags.XRayOutput = 4195090;
    DicomTags.HalfValueLayer = 4195092;
    DicomTags.OrganDose = 4195094;
    DicomTags.OrganExposed = 4195096;
    DicomTags.BillingProcedureStepSequence = 4195104;
    DicomTags.FilmConsumptionSequence = 4195105;
    DicomTags.BillingSuppliesAndDevicesSequence = 4195108;
    DicomTags.ReferencedProcedureStepSequenceRetired = 4195120;
    DicomTags.PerformedSeriesSequence = 4195136;
    DicomTags.CommentsOnTheScheduledProcedureStep = 4195328;
    DicomTags.ProtocolContextSequence = 4195392;
    DicomTags.ContentItemModifierSequence = 4195393;
    DicomTags.ScheduledSpecimenSequence = 4195584;
    DicomTags.SpecimenAccessionNumberRetired = 4195594;
    DicomTags.ContainerIdentifier = 4195602;
    DicomTags.IssuerOfTheContainerIdentifierSequence = 4195603;
    DicomTags.AlternateContainerIdentifierSequence = 4195605;
    DicomTags.ContainerTypeCodeSequence = 4195608;
    DicomTags.ContainerDescription = 4195610;
    DicomTags.ContainerComponentSequence = 4195616;
    DicomTags.SpecimenSequenceRetired = 4195664;
    DicomTags.SpecimenIdentifier = 4195665;
    DicomTags.SpecimenDescriptionSequenceTrialRetired = 4195666;
    DicomTags.SpecimenDescriptionTrialRetired = 4195667;
    DicomTags.SpecimenUid = 4195668;
    DicomTags.AcquisitionContextSequence = 4195669;
    DicomTags.AcquisitionContextDescription = 4195670;
    DicomTags.SpecimenDescriptionSequence = 4195680;
    DicomTags.IssuerOfTheSpecimenIdentifierSequence = 4195682;
    DicomTags.SpecimenTypeCodeSequence = 4195738;
    DicomTags.SpecimenShortDescription = 4195840;
    DicomTags.SpecimenDetailedDescription = 4195842;
    DicomTags.SpecimenPreparationSequence = 4195856;
    DicomTags.SpecimenPreparationStepContentItemSequence = 4195858;
    DicomTags.SpecimenLocalizationContentItemSequence = 4195872;
    DicomTags.SlideIdentifierRetired = 4196090;
    DicomTags.ImageCenterPointCoordinatesSequence = 4196122;
    DicomTags.XOffsetInSlideCoordinateSystem = 4196138;
    DicomTags.YOffsetInSlideCoordinateSystem = 4196154;
    DicomTags.ZOffsetInSlideCoordinateSystem = 4196170;
    DicomTags.PixelSpacingSequenceRetired = 4196568;
    DicomTags.CoordinateSystemAxisCodeSequenceRetired = 4196570;
    DicomTags.MeasurementUnitsCodeSequence = 4196586;
    DicomTags.VitalStainCodeSequenceTrialRetired = 4196856;
    DicomTags.RequestedProcedureId = 4198401;
    DicomTags.ReasonForTheRequestedProcedure = 4198402;
    DicomTags.RequestedProcedurePriority = 4198403;
    DicomTags.PatientTransportArrangements = 4198404;
    DicomTags.RequestedProcedureLocation = 4198405;
    DicomTags.PlacerOrderNumberProcedureRetired = 4198406;
    DicomTags.FillerOrderNumberProcedureRetired = 4198407;
    DicomTags.ConfidentialityCode = 4198408;
    DicomTags.ReportingPriority = 4198409;
    DicomTags.ReasonForRequestedProcedureCodeSequence = 4198410;
    DicomTags.NamesOfIntendedRecipientsOfResults = 4198416;
    DicomTags.IntendedRecipientsOfResultsIdentificationSequence = 4198417;
    DicomTags.ReasonForPerformedProcedureCodeSequence = 4198418;
    DicomTags.RequestedProcedureDescriptionTrialRetired = 4198496;
    DicomTags.PersonIdentificationCodeSequence = 4198657;
    DicomTags.PersonsAddress = 4198658;
    DicomTags.PersonsTelephoneNumbers = 4198659;
    DicomTags.RequestedProcedureComments = 4199424;
    DicomTags.ReasonForTheImagingServiceRequestRetired = 4202497;
    DicomTags.IssueDateOfImagingServiceRequest = 4202500;
    DicomTags.IssueTimeOfImagingServiceRequest = 4202501;
    DicomTags.PlacerOrderNumberImagingServiceRequestRetired = 4202502;
    DicomTags.FillerOrderNumberImagingServiceRequestRetired = 4202503;
    DicomTags.OrderEnteredBy = 4202504;
    DicomTags.OrderEnterersLocation = 4202505;
    DicomTags.OrderCallbackPhoneNumber = 4202512;
    DicomTags.PlacerOrderNumberImagingServiceRequest = 4202518;
    DicomTags.FillerOrderNumberImagingServiceRequest = 4202519;
    DicomTags.ImagingServiceRequestComments = 4203520;
    DicomTags.ConfidentialityConstraintOnPatientDataDescription = 4206593;
    DicomTags.GeneralPurposeScheduledProcedureStepStatus = 4210689;
    DicomTags.GeneralPurposePerformedProcedureStepStatus = 4210690;
    DicomTags.GeneralPurposeScheduledProcedureStepPriority = 4210691;
    DicomTags.ScheduledProcessingApplicationsCodeSequence = 4210692;
    DicomTags.ScheduledProcedureStepStartDatetime = 4210693;
    DicomTags.MultipleCopiesFlag = 4210694;
    DicomTags.PerformedProcessingApplicationsCodeSequence = 4210695;
    DicomTags.HumanPerformerCodeSequence = 4210697;
    DicomTags.ScheduledProcedureStepModificationDateTime = 4210704;
    DicomTags.ExpectedCompletionDateTime = 4210705;
    DicomTags.ResultingGeneralPurposePerformedProcedureStepsSequence = 4210709;
    DicomTags.ReferencedGeneralPurposeScheduledProcedureStepSequence = 4210710;
    DicomTags.ScheduledWorkitemCodeSequence = 4210712;
    DicomTags.PerformedWorkitemCodeSequence = 4210713;
    DicomTags.InputAvailabilityFlag = 4210720;
    DicomTags.InputInformationSequence = 4210721;
    DicomTags.RelevantInformationSequence = 4210722;
    DicomTags.ReferencedGeneralPurposeScheduledProcedureStepTransactionUid = 4210723;
    DicomTags.ScheduledStationNameCodeSequence = 4210725;
    DicomTags.ScheduledStationClassCodeSequence = 4210726;
    DicomTags.ScheduledStationGeographicLocationCodeSequence = 4210727;
    DicomTags.PerformedStationNameCodeSequence = 4210728;
    DicomTags.PerformedStationClassCodeSequence = 4210729;
    DicomTags.PerformedStationGeographicLocationCodeSequence = 4210736;
    DicomTags.RequestedSubsequentWorkitemCodeSequence = 4210737;
    DicomTags.NonDicomOutputCodeSequence = 4210738;
    DicomTags.OutputInformationSequence = 4210739;
    DicomTags.ScheduledHumanPerformersSequence = 4210740;
    DicomTags.ActualHumanPerformersSequence = 4210741;
    DicomTags.HumanPerformersOrganization = 4210742;
    DicomTags.HumanPerformersName = 4210743;
    DicomTags.RawDataHandling = 4210752;
    DicomTags.InputReadinessState = 4210753;
    DicomTags.PerformedProcedureStepStartDatetime = 4210768;
    DicomTags.PerformedProcedureStepEndDatetime = 4210769;
    DicomTags.ProcedureStepCancellationDatetime = 4210770;
    DicomTags.EntranceDoseInMgy = 4227842;
    DicomTags.ReferencedImageRealWorldValueMappingSequence = 4231316;
    DicomTags.RealWorldValueMappingSequence = 4231318;
    DicomTags.PixelValueMappingCodeSequence = 4231320;
    DicomTags.LutLabel = 4231696;
    DicomTags.RealWorldValueLastValueMapped = 4231697;
    DicomTags.RealWorldValueLutData = 4231698;
    DicomTags.RealWorldValueFirstValueMapped = 4231702;
    DicomTags.RealWorldValueIntercept = 4231716;
    DicomTags.RealWorldValueSlope = 4231717;
    DicomTags.FindingsFlagTrialRetired = 4235271;
    DicomTags.RelationshipType = 4235280;
    DicomTags.FindingsSequenceTrialRetired = 4235296;
    DicomTags.FindingsGroupUidTrialRetired = 4235297;
    DicomTags.ReferencedFindingsGroupUidTrialRetired = 4235298;
    DicomTags.FindingsGroupRecordingDateTrialRetired = 4235299;
    DicomTags.FindingsGroupRecordingTimeTrialRetired = 4235300;
    DicomTags.FindingsSourceCategoryCodeSequenceTrialRetired = 4235302;
    DicomTags.VerifyingOrganization = 4235303;
    DicomTags.DocumentingOrganizationIdentifierCodeSequenceTrialRetired = 4235304;
    DicomTags.VerificationDateTime = 4235312;
    DicomTags.ObservationDateTime = 4235314;
    DicomTags.ValueType = 4235328;
    DicomTags.ConceptNameCodeSequence = 4235331;
    DicomTags.MeasurementPrecisionDescriptionTrialRetired = 4235335;
    DicomTags.ContinuityOfContent = 4235344;
    DicomTags.UrgencyOrPriorityAlertsTrialRetired = 4235351;
    DicomTags.SequencingIndicatorTrialRetired = 4235360;
    DicomTags.DocumentIdentifierCodeSequenceTrialRetired = 4235366;
    DicomTags.DocumentAuthorTrialRetired = 4235367;
    DicomTags.DocumentAuthorIdentifierCodeSequenceTrialRetired = 4235368;
    DicomTags.IdentifierCodeSequenceTrialRetired = 4235376;
    DicomTags.VerifyingObserverSequence = 4235379;
    DicomTags.ObjectBinaryIdentifierTrialRetired = 4235380;
    DicomTags.VerifyingObserverName = 4235381;
    DicomTags.DocumentingObserverIdentifierCodeSequenceTrialRetired = 4235382;
    DicomTags.AuthorObserverSequence = 4235384;
    DicomTags.ParticipantSequence = 4235386;
    DicomTags.CustodialOrganizationSequence = 4235388;
    DicomTags.ParticipationType = 4235392;
    DicomTags.ParticipationDatetime = 4235394;
    DicomTags.ObserverType = 4235396;
    DicomTags.ProcedureIdentifierCodeSequenceTrialRetired = 4235397;
    DicomTags.VerifyingObserverIdentificationCodeSequence = 4235400;
    DicomTags.ObjectDirectoryBinaryIdentifierTrialRetired = 4235401;
    DicomTags.EquivalentCdaDocumentSequenceRetired = 4235408;
    DicomTags.ReferencedWaveformChannels = 4235440;
    DicomTags.DateOfDocumentOrVerbalTransactionTrialRetired = 4235536;
    DicomTags.TimeOfDocumentCreationOrVerbalTransactionTrialRetired = 4235538;
    DicomTags.Datetime = 4235552;
    DicomTags.Date = 4235553;
    DicomTags.Time = 4235554;
    DicomTags.PersonName = 4235555;
    DicomTags.Uid = 4235556;
    DicomTags.ReportStatusIdTrialRetired = 4235557;
    DicomTags.TemporalRangeType = 4235568;
    DicomTags.ReferencedSamplePositions = 4235570;
    DicomTags.ReferencedFrameNumbers = 4235574;
    DicomTags.ReferencedTimeOffsets = 4235576;
    DicomTags.ReferencedDatetime = 4235578;
    DicomTags.TextValue = 4235616;
    DicomTags.ObservationCategoryCodeSequenceTrialRetired = 4235623;
    DicomTags.ConceptCodeSequence = 4235624;
    DicomTags.BibliographicCitationTrialRetired = 4235626;
    DicomTags.PurposeOfReferenceCodeSequence = 4235632;
    DicomTags.ObservationUidTrialRetired = 4235633;
    DicomTags.ReferencedObservationUidTrialRetired = 4235634;
    DicomTags.ReferencedObservationClassTrialRetired = 4235635;
    DicomTags.ReferencedObjectObservationClassTrialRetired = 4235636;
    DicomTags.AnnotationGroupNumber = 4235648;
    DicomTags.ObservationDateTrialRetired = 4235666;
    DicomTags.ObservationTimeTrialRetired = 4235667;
    DicomTags.MeasurementAutomationTrialRetired = 4235668;
    DicomTags.ModifierCodeSequence = 4235669;
    DicomTags.IdentificationDescriptionTrialRetired = 4235812;
    DicomTags.CoordinatesSetGeometricTypeTrialRetired = 4235920;
    DicomTags.AlgorithmCodeSequenceTrialRetired = 4235926;
    DicomTags.AlgorithmDescriptionTrialRetired = 4235927;
    DicomTags.PixelCoordinatesSetTrialRetired = 4235930;
    DicomTags.MeasuredValueSequence = 4236032;
    DicomTags.NumericValueQualifierCodeSequence = 4236033;
    DicomTags.CurrentObserverTrialRetired = 4236039;
    DicomTags.NumericValue = 4236042;
    DicomTags.ReferencedAccessionSequenceTrialRetired = 4236051;
    DicomTags.ReportStatusCommentTrialRetired = 4236090;
    DicomTags.ProcedureContextSequenceTrialRetired = 4236096;
    DicomTags.VerbalSourceTrialRetired = 4236114;
    DicomTags.AddressTrialRetired = 4236115;
    DicomTags.TelephoneNumberTrialRetired = 4236116;
    DicomTags.VerbalSourceIdentifierCodeSequenceTrialRetired = 4236120;
    DicomTags.PredecessorDocumentsSequence = 4236128;
    DicomTags.ReferencedRequestSequence = 4236144;
    DicomTags.PerformedProcedureCodeSequence = 4236146;
    DicomTags.CurrentRequestedProcedureEvidenceSequence = 4236149;
    DicomTags.ReportDetailSequenceTrialRetired = 4236160;
    DicomTags.PertinentOtherEvidenceSequence = 4236165;
    DicomTags.Hl7StructuredDocumentReferenceSequence = 4236176;
    DicomTags.ObservationSubjectUidTrialRetired = 4236290;
    DicomTags.ObservationSubjectClassTrialRetired = 4236291;
    DicomTags.ObservationSubjectTypeCodeSequenceTrialRetired = 4236292;
    DicomTags.CompletionFlag = 4236433;
    DicomTags.CompletionFlagDescription = 4236434;
    DicomTags.VerificationFlag = 4236435;
    DicomTags.ArchiveRequested = 4236436;
    DicomTags.PreliminaryFlag = 4236438;
    DicomTags.ContentTemplateSequence = 4236548;
    DicomTags.IdenticalDocumentsSequence = 4236581;
    DicomTags.ObservationSubjectContextFlagTrialRetired = 4236800;
    DicomTags.ObserverContextFlagTrialRetired = 4236801;
    DicomTags.ProcedureContextFlagTrialRetired = 4236803;
    DicomTags.ContentSequence = 4237104;
    DicomTags.RelationshipSequenceTrialRetired = 4237105;
    DicomTags.RelationshipTypeCodeSequenceTrialRetired = 4237106;
    DicomTags.LanguageCodeSequenceTrialRetired = 4237124;
    DicomTags.UniformResourceLocatorTrialRetired = 4237714;
    DicomTags.WaveformAnnotationSequence = 4239392;
    DicomTags.TemplateIdentifier = 4250368;
    DicomTags.TemplateVersionRetired = 4250374;
    DicomTags.TemplateLocalVersionRetired = 4250375;
    DicomTags.TemplateExtensionFlagRetired = 4250379;
    DicomTags.TemplateExtensionOrganizationUidRetired = 4250380;
    DicomTags.TemplateExtensionCreatorUidRetired = 4250381;
    DicomTags.ReferencedContentItemIdentifier = 4250483;
    DicomTags.Hl7InstanceIdentifier = 4251649;
    DicomTags.Hl7DocumentEffectiveTime = 4251652;
    DicomTags.Hl7DocumentTypeCodeSequence = 4251654;
    DicomTags.DocumentClassCodeSequence = 4251656;
    DicomTags.RetrieveUri = 4251664;
    DicomTags.RetrieveLocationUid = 4251665;
    DicomTags.TypeOfInstances = 4251680;
    DicomTags.DicomRetrievalSequence = 4251681;
    DicomTags.DicomMediaRetrievalSequence = 4251682;
    DicomTags.WadoRetrievalSequence = 4251683;
    DicomTags.XdsRetrievalSequence = 4251684;
    DicomTags.RepositoryUniqueId = 4251696;
    DicomTags.HomeCommunityId = 4251697;
    DicomTags.DocumentTitle = 4325392;
    DicomTags.EncapsulatedDocument = 4325393;
    DicomTags.MimeTypeOfEncapsulatedDocument = 4325394;
    DicomTags.SourceInstanceSequence = 4325395;
    DicomTags.ListOfMimeTypes = 4325396;
    DicomTags.ProductPackageIdentifier = 4456449;
    DicomTags.SubstanceAdministrationApproval = 4456450;
    DicomTags.ApprovalStatusFurtherDescription = 4456451;
    DicomTags.ApprovalStatusDatetime = 4456452;
    DicomTags.ProductTypeCodeSequence = 4456455;
    DicomTags.ProductName = 4456456;
    DicomTags.ProductDescription = 4456457;
    DicomTags.ProductLotIdentifier = 4456458;
    DicomTags.ProductExpirationDatetime = 4456459;
    DicomTags.SubstanceAdministrationDatetime = 4456464;
    DicomTags.SubstanceAdministrationNotes = 4456465;
    DicomTags.SubstanceAdministrationDeviceId = 4456466;
    DicomTags.ProductParameterSequence = 4456467;
    DicomTags.SubstanceAdministrationParameterSequence = 4456473;
    DicomTags.LensDescription = 4587538;
    DicomTags.RightLensSequence = 4587540;
    DicomTags.LeftLensSequence = 4587541;
    DicomTags.UnspecifiedLateralityLensSequence = 4587542;
    DicomTags.CylinderSequence = 4587544;
    DicomTags.PrismSequence = 4587560;
    DicomTags.HorizontalPrismPower = 4587568;
    DicomTags.HorizontalPrismBase = 4587570;
    DicomTags.VerticalPrismPower = 4587572;
    DicomTags.VerticalPrismBase = 4587574;
    DicomTags.LensSegmentType = 4587576;
    DicomTags.OpticalTransmittance = 4587584;
    DicomTags.ChannelWidth = 4587586;
    DicomTags.PupilSize = 4587588;
    DicomTags.CornealSize = 4587590;
    DicomTags.AutorefractionRightEyeSequence = 4587600;
    DicomTags.AutorefractionLeftEyeSequence = 4587602;
    DicomTags.DistancePupillaryDistance = 4587616;
    DicomTags.NearPupillaryDistance = 4587618;
    DicomTags.IntermediatePupillaryDistance = 4587619;
    DicomTags.OtherPupillaryDistance = 4587620;
    DicomTags.KeratometryRightEyeSequence = 4587632;
    DicomTags.KeratometryLeftEyeSequence = 4587633;
    DicomTags.SteepKeratometricAxisSequence = 4587636;
    DicomTags.RadiusOfCurvature = 4587637;
    DicomTags.KeratometricPower = 4587638;
    DicomTags.KeratometricAxis = 4587639;
    DicomTags.FlatKeratometricAxisSequence = 4587648;
    DicomTags.BackgroundColor = 4587666;
    DicomTags.Optotype = 4587668;
    DicomTags.OptotypePresentation = 4587669;
    DicomTags.SubjectiveRefractionRightEyeSequence = 4587671;
    DicomTags.SubjectiveRefractionLeftEyeSequence = 4587672;
    DicomTags.AddNearSequence = 4587776;
    DicomTags.AddIntermediateSequence = 4587777;
    DicomTags.AddOtherSequence = 4587778;
    DicomTags.AddPower = 4587780;
    DicomTags.ViewingDistance = 4587782;
    DicomTags.VisualAcuityTypeCodeSequence = 4587809;
    DicomTags.VisualAcuityRightEyeSequence = 4587810;
    DicomTags.VisualAcuityLeftEyeSequence = 4587811;
    DicomTags.VisualAcuityBothEyesOpenSequence = 4587812;
    DicomTags.ViewingDistanceType = 4587813;
    DicomTags.VisualAcuityModifiers = 4587829;
    DicomTags.DecimalVisualAcuity = 4587831;
    DicomTags.OptotypeDetailedDefinition = 4587833;
    DicomTags.ReferencedRefractiveMeasurementsSequence = 4587845;
    DicomTags.SpherePower = 4587846;
    DicomTags.CylinderPower = 4587847;
    DicomTags.ImagedVolumeWidth = 4718593;
    DicomTags.ImagedVolumeHeight = 4718594;
    DicomTags.ImagedVolumeDepth = 4718595;
    DicomTags.TotalPixelMatrixColumns = 4718598;
    DicomTags.TotalPixelMatrixRows = 4718599;
    DicomTags.TotalPixelMatrixOriginSequence = 4718600;
    DicomTags.SpecimenLabelInImage = 4718608;
    DicomTags.FocusMethod = 4718609;
    DicomTags.ExtendedDepthOfField = 4718610;
    DicomTags.NumberOfFocalPlanes = 4718611;
    DicomTags.DistanceBetweenFocalPlanes = 4718612;
    DicomTags.RecommendedAbsentPixelCielabValue = 4718613;
    DicomTags.IlluminatorTypeCodeSequence = 4718848;
    DicomTags.ImageOrientationSlide = 4718850;
    DicomTags.OpticalPathSequence = 4718853;
    DicomTags.OpticalPathIdentifier = 4718854;
    DicomTags.OpticalPathDescription = 4718855;
    DicomTags.IlluminationColorCodeSequence = 4718856;
    DicomTags.SpecimenReferenceSequence = 4718864;
    DicomTags.CondenserLensPower = 4718865;
    DicomTags.ObjectiveLensPower = 4718866;
    DicomTags.ObjectiveLensNumericalAperture = 4718867;
    DicomTags.PaletteColorLookupTableSequence = 4718880;
    DicomTags.ReferencedImageNavigationSequence = 4719104;
    DicomTags.TopLeftHandCornerOfLocalizerArea = 4719105;
    DicomTags.BottomRightHandCornerOfLocalizerArea = 4719106;
    DicomTags.OpticalPathIdentificationSequence = 4719111;
    DicomTags.PlanePositionSlideSequence = 4719130;
    DicomTags.RowPositionInTotalImagePixelMatrix = 4719134;
    DicomTags.ColumnPositionInTotalImagePixelMatrix = 4719135;
    DicomTags.PixelOriginInterpretation = 4719361;
    DicomTags.CalibrationImage = 5242884;
    DicomTags.DeviceSequence = 5242896;
    DicomTags.ContainerComponentTypeCodeSequence = 5242898;
    DicomTags.ContainerComponentThickness = 5242899;
    DicomTags.DeviceLength = 5242900;
    DicomTags.ContainerComponentWidth = 5242901;
    DicomTags.DeviceDiameter = 5242902;
    DicomTags.DeviceDiameterUnits = 5242903;
    DicomTags.DeviceVolume = 5242904;
    DicomTags.InterMarkerDistance = 5242905;
    DicomTags.ContainerComponentMaterial = 5242906;
    DicomTags.ContainerComponentId = 5242907;
    DicomTags.ContainerComponentLength = 5242908;
    DicomTags.ContainerComponentDiameter = 5242909;
    DicomTags.ContainerComponentDescription = 5242910;
    DicomTags.DeviceDescription = 5242912;
    DicomTags.ContrastBolusIngredientPercentByVolume = 5373953;
    DicomTags.OctFocalDistance = 5373954;
    DicomTags.BeamSpotSize = 5373955;
    DicomTags.EffectiveRefractiveIndex = 5373956;
    DicomTags.OctAcquisitionDomain = 5373958;
    DicomTags.OctOpticalCenterWavelength = 5373959;
    DicomTags.AxialResolution = 5373960;
    DicomTags.RangingDepth = 5373961;
    DicomTags.AlineRate = 5373969;
    DicomTags.AlinesPerFrame = 5373970;
    DicomTags.CatheterRotationalRate = 5373971;
    DicomTags.AlinePixelSpacing = 5373972;
    DicomTags.ModeOfPercutaneousAccessSequence = 5373974;
    DicomTags.IntravascularOctFrameTypeSequence = 5373989;
    DicomTags.OctZOffsetApplied = 5373990;
    DicomTags.IntravascularFrameContentSequence = 5373991;
    DicomTags.IntravascularLongitudinalDistance = 5373992;
    DicomTags.IntravascularOctFrameContentSequence = 5373993;
    DicomTags.OctZOffsetCorrection = 5374000;
    DicomTags.CatheterDirectionOfRotation = 5374001;
    DicomTags.SeamLineLocation = 5374003;
    DicomTags.FirstAlineLocation = 5374004;
    DicomTags.SeamLineIndex = 5374006;
    DicomTags.NumberOfPaddedAlines = 5374008;
    DicomTags.InterpolationType = 5374009;
    DicomTags.RefractiveIndexApplied = 5374010;
    DicomTags.EnergyWindowVector = 5505040;
    DicomTags.NumberOfEnergyWindows = 5505041;
    DicomTags.EnergyWindowInformationSequence = 5505042;
    DicomTags.EnergyWindowRangeSequence = 5505043;
    DicomTags.EnergyWindowLowerLimit = 5505044;
    DicomTags.EnergyWindowUpperLimit = 5505045;
    DicomTags.RadiopharmaceuticalInformationSequence = 5505046;
    DicomTags.ResidualSyringeCounts = 5505047;
    DicomTags.EnergyWindowName = 5505048;
    DicomTags.DetectorVector = 5505056;
    DicomTags.NumberOfDetectors = 5505057;
    DicomTags.DetectorInformationSequence = 5505058;
    DicomTags.PhaseVector = 5505072;
    DicomTags.NumberOfPhases = 5505073;
    DicomTags.PhaseInformationSequence = 5505074;
    DicomTags.NumberOfFramesInPhase = 5505075;
    DicomTags.PhaseDelay = 5505078;
    DicomTags.PauseBetweenFrames = 5505080;
    DicomTags.PhaseDescription = 5505081;
    DicomTags.RotationVector = 5505104;
    DicomTags.NumberOfRotations = 5505105;
    DicomTags.RotationInformationSequence = 5505106;
    DicomTags.NumberOfFramesInRotation = 5505107;
    DicomTags.RRIntervalVector = 5505120;
    DicomTags.NumberOfRRIntervals = 5505121;
    DicomTags.GatedInformationSequence = 5505122;
    DicomTags.DataInformationSequence = 5505123;
    DicomTags.TimeSlotVector = 5505136;
    DicomTags.NumberOfTimeSlots = 5505137;
    DicomTags.TimeSlotInformationSequence = 5505138;
    DicomTags.TimeSlotTime = 5505139;
    DicomTags.SliceVector = 5505152;
    DicomTags.NumberOfSlices = 5505153;
    DicomTags.AngularViewVector = 5505168;
    DicomTags.TimeSliceVector = 5505280;
    DicomTags.NumberOfTimeSlices = 5505281;
    DicomTags.StartAngle = 5505536;
    DicomTags.TypeOfDetectorMotion = 5505538;
    DicomTags.TriggerVector = 5505552;
    DicomTags.NumberOfTriggersInPhase = 5505553;
    DicomTags.ViewCodeSequence = 5505568;
    DicomTags.ViewModifierCodeSequence = 5505570;
    DicomTags.RadionuclideCodeSequence = 5505792;
    DicomTags.AdministrationRouteCodeSequence = 5505794;
    DicomTags.RadiopharmaceuticalCodeSequence = 5505796;
    DicomTags.CalibrationDataSequence = 5505798;
    DicomTags.EnergyWindowNumber = 5505800;
    DicomTags.ImageId = 5506048;
    DicomTags.PatientOrientationCodeSequence = 5506064;
    DicomTags.PatientOrientationModifierCodeSequence = 5506066;
    DicomTags.PatientGantryRelationshipCodeSequence = 5506068;
    DicomTags.SliceProgressionDirection = 5506304;
    DicomTags.SeriesType = 5509120;
    DicomTags.Units = 5509121;
    DicomTags.CountsSource = 5509122;
    DicomTags.ReprojectionMethod = 5509124;
    DicomTags.SuvType = 5509126;
    DicomTags.RandomsCorrectionMethod = 5509376;
    DicomTags.AttenuationCorrectionMethod = 5509377;
    DicomTags.DecayCorrection = 5509378;
    DicomTags.ReconstructionMethod = 5509379;
    DicomTags.DetectorLinesOfResponseUsed = 5509380;
    DicomTags.ScatterCorrectionMethod = 5509381;
    DicomTags.AxialAcceptance = 5509632;
    DicomTags.AxialMash = 5509633;
    DicomTags.TransverseMash = 5509634;
    DicomTags.DetectorElementSize = 5509635;
    DicomTags.CoincidenceWindowWidth = 5509648;
    DicomTags.SecondaryCountsType = 5509664;
    DicomTags.FrameReferenceTime = 5509888;
    DicomTags.PrimaryPromptsCountsAccumulated = 5509904;
    DicomTags.SecondaryCountsAccumulated = 5509905;
    DicomTags.SliceSensitivityFactor = 5509920;
    DicomTags.DecayFactor = 5509921;
    DicomTags.DoseCalibrationFactor = 5509922;
    DicomTags.ScatterFractionFactor = 5509923;
    DicomTags.DeadTimeFactor = 5509924;
    DicomTags.ImageIndex = 5509936;
    DicomTags.CountsIncludedRetired = 5510144;
    DicomTags.DeadTimeCorrectionFlagRetired = 5510145;
    DicomTags.HistogramSequence = 6303744;
    DicomTags.HistogramNumberOfBins = 6303746;
    DicomTags.HistogramFirstBinValue = 6303748;
    DicomTags.HistogramLastBinValue = 6303750;
    DicomTags.HistogramBinWidth = 6303752;
    DicomTags.HistogramExplanation = 6303760;
    DicomTags.HistogramData = 6303776;
    DicomTags.SegmentationType = 6422529;
    DicomTags.SegmentSequence = 6422530;
    DicomTags.SegmentedPropertyCategoryCodeSequence = 6422531;
    DicomTags.SegmentNumber = 6422532;
    DicomTags.SegmentLabel = 6422533;
    DicomTags.SegmentDescription = 6422534;
    DicomTags.SegmentAlgorithmType = 6422536;
    DicomTags.SegmentAlgorithmName = 6422537;
    DicomTags.SegmentIdentificationSequence = 6422538;
    DicomTags.ReferencedSegmentNumber = 6422539;
    DicomTags.RecommendedDisplayGrayscaleValue = 6422540;
    DicomTags.RecommendedDisplayCielabValue = 6422541;
    DicomTags.MaximumFractionalValue = 6422542;
    DicomTags.SegmentedPropertyTypeCodeSequence = 6422543;
    DicomTags.SegmentationFractionalType = 6422544;
    DicomTags.DeformableRegistrationSequence = 6553602;
    DicomTags.SourceFrameOfReferenceUid = 6553603;
    DicomTags.DeformableRegistrationGridSequence = 6553605;
    DicomTags.GridDimensions = 6553607;
    DicomTags.GridResolution = 6553608;
    DicomTags.VectorGridData = 6553609;
    DicomTags.PreDeformationMatrixRegistrationSequence = 6553615;
    DicomTags.PostDeformationMatrixRegistrationSequence = 6553616;
    DicomTags.NumberOfSurfaces = 6684673;
    DicomTags.SurfaceSequence = 6684674;
    DicomTags.SurfaceNumber = 6684675;
    DicomTags.SurfaceComments = 6684676;
    DicomTags.SurfaceProcessing = 6684681;
    DicomTags.SurfaceProcessingRatio = 6684682;
    DicomTags.SurfaceProcessingDescription = 6684683;
    DicomTags.RecommendedPresentationOpacity = 6684684;
    DicomTags.RecommendedPresentationType = 6684685;
    DicomTags.FiniteVolume = 6684686;
    DicomTags.Manifold = 6684688;
    DicomTags.SurfacePointsSequence = 6684689;
    DicomTags.SurfacePointsNormalsSequence = 6684690;
    DicomTags.SurfaceMeshPrimitivesSequence = 6684691;
    DicomTags.NumberOfSurfacePoints = 6684693;
    DicomTags.PointCoordinatesData = 6684694;
    DicomTags.PointPositionAccuracy = 6684695;
    DicomTags.MeanPointDistance = 6684696;
    DicomTags.MaximumPointDistance = 6684697;
    DicomTags.PointsBoundingBoxCoordinates = 6684698;
    DicomTags.AxisOfRotation = 6684699;
    DicomTags.CenterOfRotation = 6684700;
    DicomTags.NumberOfVectors = 6684702;
    DicomTags.VectorDimensionality = 6684703;
    DicomTags.VectorAccuracy = 6684704;
    DicomTags.VectorCoordinateData = 6684705;
    DicomTags.TrianglePointIndexList = 6684707;
    DicomTags.EdgePointIndexList = 6684708;
    DicomTags.VertexPointIndexList = 6684709;
    DicomTags.TriangleStripSequence = 6684710;
    DicomTags.TriangleFanSequence = 6684711;
    DicomTags.LineSequence = 6684712;
    DicomTags.PrimitivePointIndexList = 6684713;
    DicomTags.SurfaceCount = 6684714;
    DicomTags.ReferencedSurfaceSequence = 6684715;
    DicomTags.ReferencedSurfaceNumber = 6684716;
    DicomTags.SegmentSurfaceGenerationAlgorithmIdentificationSequence = 6684717;
    DicomTags.SegmentSurfaceSourceInstanceSequence = 6684718;
    DicomTags.AlgorithmFamilyCodeSequence = 6684719;
    DicomTags.AlgorithmNameCodeSequence = 6684720;
    DicomTags.AlgorithmVersion = 6684721;
    DicomTags.AlgorithmParameters = 6684722;
    DicomTags.FacetSequence = 6684724;
    DicomTags.SurfaceProcessingAlgorithmIdentificationSequence = 6684725;
    DicomTags.AlgorithmName = 6684726;
    DicomTags.ImplantSize = 6840848;
    DicomTags.ImplantTemplateVersion = 6840865;
    DicomTags.ReplacedImplantTemplateSequence = 6840866;
    DicomTags.ImplantType = 6840867;
    DicomTags.DerivationImplantTemplateSequence = 6840868;
    DicomTags.OriginalImplantTemplateSequence = 6840869;
    DicomTags.EffectiveDatetime = 6840870;
    DicomTags.ImplantTargetAnatomySequence = 6840880;
    DicomTags.InformationFromManufacturerSequence = 6840928;
    DicomTags.NotificationFromManufacturerSequence = 6840933;
    DicomTags.InformationIssueDatetime = 6840944;
    DicomTags.InformationSummary = 6840960;
    DicomTags.ImplantRegulatoryDisapprovalCodeSequence = 6840992;
    DicomTags.OverallTemplateSpatialTolerance = 6840997;
    DicomTags.HpglDocumentSequence = 6841024;
    DicomTags.HpglDocumentId = 6841040;
    DicomTags.HpglDocumentLabel = 6841045;
    DicomTags.ViewOrientationCodeSequence = 6841056;
    DicomTags.ViewOrientationModifier = 6841072;
    DicomTags.HpglDocumentScaling = 6841074;
    DicomTags.HpglDocument = 6841088;
    DicomTags.HpglContourPenNumber = 6841104;
    DicomTags.HpglPenSequence = 6841120;
    DicomTags.HpglPenNumber = 6841136;
    DicomTags.HpglPenLabel = 6841152;
    DicomTags.HpglPenDescription = 6841157;
    DicomTags.RecommendedRotationPoint = 6841158;
    DicomTags.BoundingRectangle = 6841159;
    DicomTags.ImplantTemplate3dModelSurfaceNumber = 6841168;
    DicomTags.SurfaceModelDescriptionSequence = 6841184;
    DicomTags.SurfaceModelLabel = 6841216;
    DicomTags.SurfaceModelScalingFactor = 6841232;
    DicomTags.MaterialsCodeSequence = 6841248;
    DicomTags.CoatingMaterialsCodeSequence = 6841252;
    DicomTags.ImplantTypeCodeSequence = 6841256;
    DicomTags.FixationMethodCodeSequence = 6841260;
    DicomTags.MatingFeatureSetsSequence = 6841264;
    DicomTags.MatingFeatureSetId = 6841280;
    DicomTags.MatingFeatureSetLabel = 6841296;
    DicomTags.MatingFeatureSequence = 6841312;
    DicomTags.MatingFeatureId = 6841328;
    DicomTags.MatingFeatureDegreeOfFreedomSequence = 6841344;
    DicomTags.DegreeOfFreedomId = 6841360;
    DicomTags.DegreeOfFreedomType = 6841376;
    DicomTags.TwoDMatingFeatureCoordinatesSequence = 6841392;
    DicomTags.ReferencedHpglDocumentId = 6841408;
    DicomTags.TwoDMatingPoint = 6841424;
    DicomTags.TwoDMatingAxes = 6841440;
    DicomTags.TwoDDegreeOfFreedomSequence = 6841456;
    DicomTags.ThreeDDegreeOfFreedomAxis = 6841488;
    DicomTags.RangeOfFreedom = 6841504;
    DicomTags.ThreeDMatingPoint = 6841536;
    DicomTags.ThreeDMatingAxes = 6841552;
    DicomTags.TwoDDegreeOfFreedomAxis = 6841584;
    DicomTags.PlanningLandmarkPointSequence = 6841600;
    DicomTags.PlanningLandmarkLineSequence = 6841616;
    DicomTags.PlanningLandmarkPlaneSequence = 6841632;
    DicomTags.PlanningLandmarkId = 6841648;
    DicomTags.PlanningLandmarkDescription = 6841664;
    DicomTags.PlanningLandmarkIdentificationCodeSequence = 6841669;
    DicomTags.TwoDPointCoordinatesSequence = 6841680;
    DicomTags.TwoDPointCoordinates = 6841696;
    DicomTags.ThreeDPointCoordinates = 6841744;
    DicomTags.TwoDLineCoordinatesSequence = 6841760;
    DicomTags.TwoDLineCoordinates = 6841776;
    DicomTags.ThreeDLineCoordinates = 6841808;
    DicomTags.TwoDPlaneCoordinatesSequence = 6841824;
    DicomTags.TwoDPlaneIntersection = 6841840;
    DicomTags.ThreeDPlaneOrigin = 6841872;
    DicomTags.ThreeDPlaneNormal = 6841888;
    DicomTags.GraphicAnnotationSequence = 7340033;
    DicomTags.GraphicLayer = 7340034;
    DicomTags.BoundingBoxAnnotationUnits = 7340035;
    DicomTags.AnchorPointAnnotationUnits = 7340036;
    DicomTags.GraphicAnnotationUnits = 7340037;
    DicomTags.UnformattedTextValue = 7340038;
    DicomTags.TextObjectSequence = 7340040;
    DicomTags.GraphicObjectSequence = 7340041;
    DicomTags.BoundingBoxTopLeftHandCorner = 7340048;
    DicomTags.BoundingBoxBottomRightHandCorner = 7340049;
    DicomTags.BoundingBoxTextHorizontalJustification = 7340050;
    DicomTags.AnchorPoint = 7340052;
    DicomTags.AnchorPointVisibility = 7340053;
    DicomTags.GraphicDimensions = 7340064;
    DicomTags.NumberOfGraphicPoints = 7340065;
    DicomTags.GraphicData = 7340066;
    DicomTags.GraphicType = 7340067;
    DicomTags.GraphicFilled = 7340068;
    DicomTags.ImageRotationRetired = 7340096;
    DicomTags.ImageHorizontalFlip = 7340097;
    DicomTags.ImageRotation = 7340098;
    DicomTags.DisplayedAreaTopLeftHandCornerTrialRetired = 7340112;
    DicomTags.DisplayedAreaBottomRightHandCornerTrialRetired = 7340113;
    DicomTags.DisplayedAreaTopLeftHandCorner = 7340114;
    DicomTags.DisplayedAreaBottomRightHandCorner = 7340115;
    DicomTags.DisplayedAreaSelectionSequence = 7340122;
    DicomTags.GraphicLayerSequence = 7340128;
    DicomTags.GraphicLayerOrder = 7340130;
    DicomTags.GraphicLayerRecommendedDisplayGrayscaleValue = 7340134;
    DicomTags.GraphicLayerRecommendedDisplayRgbValueRetired = 7340135;
    DicomTags.GraphicLayerDescription = 7340136;
    DicomTags.ContentLabel = 7340160;
    DicomTags.ContentDescription = 7340161;
    DicomTags.PresentationCreationDate = 7340162;
    DicomTags.PresentationCreationTime = 7340163;
    DicomTags.ContentCreatorsName = 7340164;
    DicomTags.ContentCreatorsIdentificationCodeSequence = 7340166;
    DicomTags.AlternateContentDescriptionSequence = 7340167;
    DicomTags.PresentationSizeMode = 7340288;
    DicomTags.PresentationPixelSpacing = 7340289;
    DicomTags.PresentationPixelAspectRatio = 7340290;
    DicomTags.PresentationPixelMagnificationRatio = 7340291;
    DicomTags.GraphicGroupLabel = 7340551;
    DicomTags.GraphicGroupDescription = 7340552;
    DicomTags.CompoundGraphicSequence = 7340553;
    DicomTags.CompoundGraphicInstanceId = 7340582;
    DicomTags.FontName = 7340583;
    DicomTags.FontNameType = 7340584;
    DicomTags.CssFontName = 7340585;
    DicomTags.RotationAngle = 7340592;
    DicomTags.TextStyleSequence = 7340593;
    DicomTags.LineStyleSequence = 7340594;
    DicomTags.FillStyleSequence = 7340595;
    DicomTags.GraphicGroupSequence = 7340596;
    DicomTags.TextColorCielabValue = 7340609;
    DicomTags.HorizontalAlignment = 7340610;
    DicomTags.VerticalAlignment = 7340611;
    DicomTags.ShadowStyle = 7340612;
    DicomTags.ShadowOffsetX = 7340613;
    DicomTags.ShadowOffsetY = 7340614;
    DicomTags.ShadowColorCielabValue = 7340615;
    DicomTags.Underlined = 7340616;
    DicomTags.Bold = 7340617;
    DicomTags.Italic = 7340624;
    DicomTags.PatternOnColorCielabValue = 7340625;
    DicomTags.PatternOffColorCielabValue = 7340626;
    DicomTags.LineThickness = 7340627;
    DicomTags.LineDashingStyle = 7340628;
    DicomTags.LinePattern = 7340629;
    DicomTags.FillPattern = 7340630;
    DicomTags.FillMode = 7340631;
    DicomTags.ShadowOpacity = 7340632;
    DicomTags.GapLength = 7340641;
    DicomTags.DiameterOfVisibility = 7340642;
    DicomTags.RotationPoint = 7340659;
    DicomTags.TickAlignment = 7340660;
    DicomTags.ShowTickLabel = 7340664;
    DicomTags.TickLabelAlignment = 7340665;
    DicomTags.CompoundGraphicUnits = 7340674;
    DicomTags.PatternOnOpacity = 7340676;
    DicomTags.PatternOffOpacity = 7340677;
    DicomTags.MajorTicksSequence = 7340679;
    DicomTags.TickPosition = 7340680;
    DicomTags.TickLabel = 7340681;
    DicomTags.CompoundGraphicType = 7340692;
    DicomTags.GraphicGroupId = 7340693;
    DicomTags.ShapeType = 7340806;
    DicomTags.RegistrationSequence = 7340808;
    DicomTags.MatrixRegistrationSequence = 7340809;
    DicomTags.MatrixSequence = 7340810;
    DicomTags.FrameOfReferenceTransformationMatrixType = 7340812;
    DicomTags.RegistrationTypeCodeSequence = 7340813;
    DicomTags.FiducialDescription = 7340815;
    DicomTags.FiducialIdentifier = 7340816;
    DicomTags.FiducialIdentifierCodeSequence = 7340817;
    DicomTags.ContourUncertaintyRadius = 7340818;
    DicomTags.UsedFiducialsSequence = 7340820;
    DicomTags.GraphicCoordinatesDataSequence = 7340824;
    DicomTags.FiducialUid = 7340826;
    DicomTags.FiducialSetSequence = 7340828;
    DicomTags.FiducialSequence = 7340830;
    DicomTags.GraphicLayerRecommendedDisplayCielabValue = 7341057;
    DicomTags.BlendingSequence = 7341058;
    DicomTags.RelativeOpacity = 7341059;
    DicomTags.ReferencedSpatialRegistrationSequence = 7341060;
    DicomTags.BlendingPosition = 7341061;
    DicomTags.HangingProtocolName = 7471106;
    DicomTags.HangingProtocolDescription = 7471108;
    DicomTags.HangingProtocolLevel = 7471110;
    DicomTags.HangingProtocolCreator = 7471112;
    DicomTags.HangingProtocolCreationDatetime = 7471114;
    DicomTags.HangingProtocolDefinitionSequence = 7471116;
    DicomTags.HangingProtocolUserIdentificationCodeSequence = 7471118;
    DicomTags.HangingProtocolUserGroupName = 7471120;
    DicomTags.SourceHangingProtocolSequence = 7471122;
    DicomTags.NumberOfPriorsReferenced = 7471124;
    DicomTags.ImageSetsSequence = 7471136;
    DicomTags.ImageSetSelectorSequence = 7471138;
    DicomTags.ImageSetSelectorUsageFlag = 7471140;
    DicomTags.SelectorAttribute = 7471142;
    DicomTags.SelectorValueNumber = 7471144;
    DicomTags.TimeBasedImageSetsSequence = 7471152;
    DicomTags.ImageSetNumber = 7471154;
    DicomTags.ImageSetSelectorCategory = 7471156;
    DicomTags.RelativeTime = 7471160;
    DicomTags.RelativeTimeUnits = 7471162;
    DicomTags.AbstractPriorValue = 7471164;
    DicomTags.AbstractPriorCodeSequence = 7471166;
    DicomTags.ImageSetLabel = 7471168;
    DicomTags.SelectorAttributeVr = 7471184;
    DicomTags.SelectorSequencePointer = 7471186;
    DicomTags.SelectorSequencePointerPrivateCreator = 7471188;
    DicomTags.SelectorAttributePrivateCreator = 7471190;
    DicomTags.SelectorAtValue = 7471200;
    DicomTags.SelectorCsValue = 7471202;
    DicomTags.SelectorIsValue = 7471204;
    DicomTags.SelectorLoValue = 7471206;
    DicomTags.SelectorLtValue = 7471208;
    DicomTags.SelectorPnValue = 7471210;
    DicomTags.SelectorShValue = 7471212;
    DicomTags.SelectorStValue = 7471214;
    DicomTags.SelectorUtValue = 7471216;
    DicomTags.SelectorDsValue = 7471218;
    DicomTags.SelectorFdValue = 7471220;
    DicomTags.SelectorFlValue = 7471222;
    DicomTags.SelectorUlValue = 7471224;
    DicomTags.SelectorUsValue = 7471226;
    DicomTags.SelectorSlValue = 7471228;
    DicomTags.SelectorSsValue = 7471230;
    DicomTags.SelectorCodeSequenceValue = 7471232;
    DicomTags.NumberOfScreens = 7471360;
    DicomTags.NominalScreenDefinitionSequence = 7471362;
    DicomTags.NumberOfVerticalPixels = 7471364;
    DicomTags.NumberOfHorizontalPixels = 7471366;
    DicomTags.DisplayEnvironmentSpatialPosition = 7471368;
    DicomTags.ScreenMinimumGrayscaleBitDepth = 7471370;
    DicomTags.ScreenMinimumColorBitDepth = 7471372;
    DicomTags.ApplicationMaximumRepaintTime = 7471374;
    DicomTags.DisplaySetsSequence = 7471616;
    DicomTags.DisplaySetNumber = 7471618;
    DicomTags.DisplaySetLabel = 7471619;
    DicomTags.DisplaySetPresentationGroup = 7471620;
    DicomTags.DisplaySetPresentationGroupDescription = 7471622;
    DicomTags.PartialDataDisplayHandling = 7471624;
    DicomTags.SynchronizedScrollingSequence = 7471632;
    DicomTags.DisplaySetScrollingGroup = 7471634;
    DicomTags.NavigationIndicatorSequence = 7471636;
    DicomTags.NavigationDisplaySet = 7471638;
    DicomTags.ReferenceDisplaySets = 7471640;
    DicomTags.ImageBoxesSequence = 7471872;
    DicomTags.ImageBoxNumber = 7471874;
    DicomTags.ImageBoxLayoutType = 7471876;
    DicomTags.ImageBoxTileHorizontalDimension = 7471878;
    DicomTags.ImageBoxTileVerticalDimension = 7471880;
    DicomTags.ImageBoxScrollDirection = 7471888;
    DicomTags.ImageBoxSmallScrollType = 7471890;
    DicomTags.ImageBoxSmallScrollAmount = 7471892;
    DicomTags.ImageBoxLargeScrollType = 7471894;
    DicomTags.ImageBoxLargeScrollAmount = 7471896;
    DicomTags.ImageBoxOverlapPriority = 7471904;
    DicomTags.CineRelativeToRealTime = 7471920;
    DicomTags.FilterOperationsSequence = 7472128;
    DicomTags.FilterByCategory = 7472130;
    DicomTags.FilterByAttributePresence = 7472132;
    DicomTags.FilterByOperator = 7472134;
    DicomTags.StructuredDisplayBackgroundCielabValue = 7472160;
    DicomTags.EmptyImageBoxCielabValue = 7472161;
    DicomTags.StructuredDisplayImageBoxSequence = 7472162;
    DicomTags.StructuredDisplayTextBoxSequence = 7472164;
    DicomTags.ReferencedFirstFrameSequence = 7472167;
    DicomTags.ImageBoxSynchronizationSequence = 7472176;
    DicomTags.SynchronizedImageBoxList = 7472178;
    DicomTags.TypeOfSynchronization = 7472180;
    DicomTags.BlendingOperationType = 7472384;
    DicomTags.ReformattingOperationType = 7472400;
    DicomTags.ReformattingThickness = 7472402;
    DicomTags.ReformattingInterval = 7472404;
    DicomTags.ReformattingOperationInitialViewDirection = 7472406;
    DicomTags.ThreeDRenderingType = 7472416;
    DicomTags.SortingOperationsSequence = 7472640;
    DicomTags.SortByCategory = 7472642;
    DicomTags.SortingDirection = 7472644;
    DicomTags.DisplaySetPatientOrientation = 7472896;
    DicomTags.VoiType = 7472898;
    DicomTags.PseudoColorType = 7472900;
    DicomTags.PseudoColorPaletteInstanceReferenceSequence = 7472901;
    DicomTags.ShowGrayscaleInverted = 7472902;
    DicomTags.ShowImageTrueSizeFlag = 7472912;
    DicomTags.ShowGraphicAnnotationFlag = 7472914;
    DicomTags.ShowPatientDemographicsFlag = 7472916;
    DicomTags.ShowAcquisitionTechniquesFlag = 7472918;
    DicomTags.DisplaySetHorizontalJustification = 7472919;
    DicomTags.DisplaySetVerticalJustification = 7472920;
    DicomTags.ContinuationStartMeterset = 7602464;
    DicomTags.ContinuationEndMeterset = 7602465;
    DicomTags.ProcedureStepState = 7606272;
    DicomTags.ProcedureStepProgressInformationSequence = 7606274;
    DicomTags.ProcedureStepProgress = 7606276;
    DicomTags.ProcedureStepProgressDescription = 7606278;
    DicomTags.ProcedureStepCommunicationsUriSequence = 7606280;
    DicomTags.ContactUri = 7606282;
    DicomTags.ContactDisplayName = 7606284;
    DicomTags.ProcedureStepDiscontinuationReasonCodeSequence = 7606286;
    DicomTags.BeamTaskSequence = 7606304;
    DicomTags.BeamTaskType = 7606306;
    DicomTags.BeamOrderIndexTrialRetired = 7606308;
    DicomTags.TableTopVerticalAdjustedPosition = 7606310;
    DicomTags.TableTopLongitudinalAdjustedPosition = 7606311;
    DicomTags.TableTopLateralAdjustedPosition = 7606312;
    DicomTags.PatientSupportAdjustedAngle = 7606314;
    DicomTags.TableTopEccentricAdjustedAngle = 7606315;
    DicomTags.TableTopPitchAdjustedAngle = 7606316;
    DicomTags.TableTopRollAdjustedAngle = 7606317;
    DicomTags.DeliveryVerificationImageSequence = 7606320;
    DicomTags.VerificationImageTiming = 7606322;
    DicomTags.DoubleExposureFlag = 7606324;
    DicomTags.DoubleExposureOrdering = 7606326;
    DicomTags.DoubleExposureMetersetTrialRetired = 7606328;
    DicomTags.DoubleExposureFieldDeltaTrialRetired = 7606330;
    DicomTags.RelatedReferenceRtImageSequence = 7606336;
    DicomTags.GeneralMachineVerificationSequence = 7606338;
    DicomTags.ConventionalMachineVerificationSequence = 7606340;
    DicomTags.IonMachineVerificationSequence = 7606342;
    DicomTags.FailedAttributesSequence = 7606344;
    DicomTags.OverriddenAttributesSequence = 7606346;
    DicomTags.ConventionalControlPointVerificationSequence = 7606348;
    DicomTags.IonControlPointVerificationSequence = 7606350;
    DicomTags.AttributeOccurrenceSequence = 7606352;
    DicomTags.AttributeOccurrencePointer = 7606354;
    DicomTags.AttributeItemSelector = 7606356;
    DicomTags.AttributeOccurrencePrivateCreator = 7606358;
    DicomTags.SelectorSequencePointerItems = 7606359;
    DicomTags.ScheduledProcedureStepPriority = 7606784;
    DicomTags.WorklistLabel = 7606786;
    DicomTags.ProcedureStepLabel = 7606788;
    DicomTags.ScheduledProcessingParametersSequence = 7606800;
    DicomTags.PerformedProcessingParametersSequence = 7606802;
    DicomTags.UnifiedProcedureStepPerformedProcedureSequence = 7606806;
    DicomTags.RelatedProcedureStepSequenceRetired = 7606816;
    DicomTags.ProcedureStepRelationshipTypeRetired = 7606818;
    DicomTags.ReplacedProcedureStepSequence = 7606820;
    DicomTags.DeletionLock = 7606832;
    DicomTags.ReceivingAe = 7606836;
    DicomTags.RequestingAe = 7606838;
    DicomTags.ReasonForCancellation = 7606840;
    DicomTags.ScpStatus = 7606850;
    DicomTags.SubscriptionListStatus = 7606852;
    DicomTags.UnifiedProcedureStepListStatus = 7606854;
    DicomTags.BeamOrderIndex = 7607076;
    DicomTags.DoubleExposureMeterset = 7607096;
    DicomTags.DoubleExposureFieldDelta = 7607098;
    DicomTags.ImplantAssemblyTemplateName = 7733249;
    DicomTags.ImplantAssemblyTemplateIssuer = 7733251;
    DicomTags.ImplantAssemblyTemplateVersion = 7733254;
    DicomTags.ReplacedImplantAssemblyTemplateSequence = 7733256;
    DicomTags.ImplantAssemblyTemplateType = 7733258;
    DicomTags.OriginalImplantAssemblyTemplateSequence = 7733260;
    DicomTags.DerivationImplantAssemblyTemplateSequence = 7733262;
    DicomTags.ImplantAssemblyTemplateTargetAnatomySequence = 7733264;
    DicomTags.ProcedureTypeCodeSequence = 7733280;
    DicomTags.SurgicalTechnique = 7733296;
    DicomTags.ComponentTypesSequence = 7733298;
    DicomTags.ComponentTypeCodeSequence = 7733300;
    DicomTags.ExclusiveComponentType = 7733302;
    DicomTags.MandatoryComponentType = 7733304;
    DicomTags.ComponentSequence = 7733312;
    DicomTags.ComponentId = 7733333;
    DicomTags.ComponentAssemblySequence = 7733344;
    DicomTags.Component1ReferencedId = 7733360;
    DicomTags.Component1ReferencedMatingFeatureSetId = 7733376;
    DicomTags.Component1ReferencedMatingFeatureId = 7733392;
    DicomTags.Component2ReferencedId = 7733408;
    DicomTags.Component2ReferencedMatingFeatureSetId = 7733424;
    DicomTags.Component2ReferencedMatingFeatureId = 7733440;
    DicomTags.ImplantTemplateGroupName = 7864321;
    DicomTags.ImplantTemplateGroupDescription = 7864336;
    DicomTags.ImplantTemplateGroupIssuer = 7864352;
    DicomTags.ImplantTemplateGroupVersion = 7864356;
    DicomTags.ReplacedImplantTemplateGroupSequence = 7864358;
    DicomTags.ImplantTemplateGroupTargetAnatomySequence = 7864360;
    DicomTags.ImplantTemplateGroupMembersSequence = 7864362;
    DicomTags.ImplantTemplateGroupMemberId = 7864366;
    DicomTags.ThreeDImplantTemplateGroupMemberMatchingPoint = 7864400;
    DicomTags.ThreeDImplantTemplateGroupMemberMatchingAxes = 7864416;
    DicomTags.ImplantTemplateGroupMemberMatching2dCoordinatesSequence = 7864432;
    DicomTags.TwoDImplantTemplateGroupMemberMatchingPoint = 7864464;
    DicomTags.TwoDImplantTemplateGroupMemberMatchingAxes = 7864480;
    DicomTags.ImplantTemplateGroupVariationDimensionSequence = 7864496;
    DicomTags.ImplantTemplateGroupVariationDimensionName = 7864498;
    DicomTags.ImplantTemplateGroupVariationDimensionRankSequence = 7864500;
    DicomTags.ReferencedImplantTemplateGroupMemberId = 7864502;
    DicomTags.ImplantTemplateGroupVariationDimensionRank = 7864504;
    DicomTags.StorageMediaFileSetId = 8913200;
    DicomTags.StorageMediaFileSetUid = 8913216;
    DicomTags.IconImageSequence = 8913408;
    DicomTags.TopicTitleRetired = 8915204;
    DicomTags.TopicSubjectRetired = 8915206;
    DicomTags.TopicAuthorRetired = 8915216;
    DicomTags.TopicKeywordsRetired = 8915218;
    DicomTags.SopInstanceStatus = 16778256;
    DicomTags.SopAuthorizationDatetime = 16778272;
    DicomTags.SopAuthorizationComment = 16778276;
    DicomTags.AuthorizationEquipmentCertificationNumber = 16778278;
    DicomTags.MacIdNumber = 67108869;
    DicomTags.MacCalculationTransferSyntaxUid = 67108880;
    DicomTags.MacAlgorithm = 67108885;
    DicomTags.DataElementsSigned = 67108896;
    DicomTags.DigitalSignatureUid = 67109120;
    DicomTags.DigitalSignatureDatetime = 67109125;
    DicomTags.CertificateType = 67109136;
    DicomTags.CertificateOfSigner = 67109141;
    DicomTags.Signature = 67109152;
    DicomTags.CertifiedTimestampType = 67109637;
    DicomTags.CertifiedTimestamp = 67109648;
    DicomTags.DigitalSignaturePurposeCodeSequence = 67109889;
    DicomTags.ReferencedDigitalSignatureSequence = 67109890;
    DicomTags.ReferencedSopInstanceMacSequence = 67109891;
    DicomTags.Mac = 67109892;
    DicomTags.EncryptedAttributesSequence = 67110144;
    DicomTags.EncryptedContentTransferSyntaxUid = 67110160;
    DicomTags.EncryptedContent = 67110176;
    DicomTags.ModifiedAttributesSequence = 67110224;
    DicomTags.OriginalAttributesSequence = 67110241;
    DicomTags.AttributeModificationDatetime = 67110242;
    DicomTags.ModifyingSystem = 67110243;
    DicomTags.SourceOfPreviousValues = 67110244;
    DicomTags.ReasonForTheAttributeModification = 67110245;
    DicomTags.NumberOfCopies = 536870928;
    DicomTags.PrinterConfigurationSequence = 536870942;
    DicomTags.PrintPriority = 536870944;
    DicomTags.MediumType = 536870960;
    DicomTags.FilmDestination = 536870976;
    DicomTags.FilmSessionLabel = 536870992;
    DicomTags.MemoryAllocation = 536871008;
    DicomTags.MaximumMemoryAllocation = 536871009;
    DicomTags.ColorImagePrintingFlagRetired = 536871010;
    DicomTags.CollationFlagRetired = 536871011;
    DicomTags.AnnotationFlagRetired = 536871013;
    DicomTags.ImageOverlayFlagRetired = 536871015;
    DicomTags.PresentationLutFlagRetired = 536871017;
    DicomTags.ImageBoxPresentationLutFlagRetired = 536871018;
    DicomTags.MemoryBitDepth = 536871072;
    DicomTags.PrintingBitDepth = 536871073;
    DicomTags.MediaInstalledSequence = 536871074;
    DicomTags.OtherMediaAvailableSequence = 536871076;
    DicomTags.SupportedImageDisplayFormatsSequence = 536871080;
    DicomTags.ReferencedFilmBoxSequence = 536872192;
    DicomTags.ReferencedStoredPrintSequenceRetired = 536872208;
    DicomTags.ImageDisplayFormat = 537919504;
    DicomTags.AnnotationDisplayFormatId = 537919536;
    DicomTags.FilmOrientation = 537919552;
    DicomTags.FilmSizeId = 537919568;
    DicomTags.PrinterResolutionId = 537919570;
    DicomTags.DefaultPrinterResolutionId = 537919572;
    DicomTags.MagnificationType = 537919584;
    DicomTags.SmoothingType = 537919616;
    DicomTags.DefaultMagnificationType = 537919654;
    DicomTags.OtherMagnificationTypesAvailable = 537919655;
    DicomTags.DefaultSmoothingType = 537919656;
    DicomTags.OtherSmoothingTypesAvailable = 537919657;
    DicomTags.BorderDensity = 537919744;
    DicomTags.EmptyImageDensity = 537919760;
    DicomTags.MinDensity = 537919776;
    DicomTags.MaxDensity = 537919792;
    DicomTags.Trim = 537919808;
    DicomTags.ConfigurationInformation = 537919824;
    DicomTags.ConfigurationInformationDescription = 537919826;
    DicomTags.MaximumCollatedFilms = 537919828;
    DicomTags.Illumination = 537919838;
    DicomTags.ReflectedAmbientLight = 537919840;
    DicomTags.PrinterPixelSpacing = 537920374;
    DicomTags.ReferencedFilmSessionSequence = 537920768;
    DicomTags.ReferencedImageBoxSequence = 537920784;
    DicomTags.ReferencedBasicAnnotationBoxSequence = 537920800;
    DicomTags.ImageBoxPosition = 538968080;
    DicomTags.Polarity = 538968096;
    DicomTags.RequestedImageSize = 538968112;
    DicomTags.RequestedDecimateCropBehavior = 538968128;
    DicomTags.RequestedResolutionId = 538968144;
    DicomTags.RequestedImageSizeFlag = 538968224;
    DicomTags.DecimateCropResult = 538968226;
    DicomTags.BasicGrayscaleImageSequence = 538968336;
    DicomTags.BasicColorImageSequence = 538968337;
    DicomTags.ReferencedImageOverlayBoxSequenceRetired = 538968368;
    DicomTags.ReferencedVoiLutBoxSequenceRetired = 538968384;
    DicomTags.AnnotationPosition = 540016656;
    DicomTags.TextString = 540016672;
    DicomTags.ReferencedOverlayPlaneSequenceRetired = 541065232;
    DicomTags.ReferencedOverlayPlaneGroupsRetired = 541065233;
    DicomTags.OverlayPixelDataSequenceRetired = 541065248;
    DicomTags.OverlayMagnificationTypeRetired = 541065312;
    DicomTags.OverlaySmoothingTypeRetired = 541065328;
    DicomTags.OverlayOrImageMagnificationRetired = 541065330;
    DicomTags.MagnifyToNumberOfColumnsRetired = 541065332;
    DicomTags.OverlayForegroundDensityRetired = 541065344;
    DicomTags.OverlayBackgroundDensityRetired = 541065346;
    DicomTags.OverlayModeRetired = 541065360;
    DicomTags.ThresholdDensityRetired = 541065472;
    DicomTags.ReferencedImageBoxSequenceRetired = 541066496;
    DicomTags.PresentationLutSequence = 542113808;
    DicomTags.PresentationLutShape = 542113824;
    DicomTags.ReferencedPresentationLutSequence = 542115072;
    DicomTags.PrintJobIdRetired = 553648144;
    DicomTags.ExecutionStatus = 553648160;
    DicomTags.ExecutionStatusInfo = 553648176;
    DicomTags.CreationDate = 553648192;
    DicomTags.CreationTime = 553648208;
    DicomTags.Originator = 553648240;
    DicomTags.DestinationAeRetired = 553648448;
    DicomTags.OwnerId = 553648480;
    DicomTags.NumberOfFilms = 553648496;
    DicomTags.ReferencedPrintJobSequencePullStoredPrintRetired = 553649408;
    DicomTags.PrinterStatus = 554696720;
    DicomTags.PrinterStatusInfo = 554696736;
    DicomTags.PrinterName = 554696752;
    DicomTags.PrintQueueIdRetired = 554696857;
    DicomTags.QueueStatusRetired = 555745296;
    DicomTags.PrintJobDescriptionSequenceRetired = 555745360;
    DicomTags.ReferencedPrintJobSequenceRetired = 555745392;
    DicomTags.PrintManagementCapabilitiesSequenceRetired = 556793872;
    DicomTags.PrinterCharacteristicsSequenceRetired = 556793877;
    DicomTags.FilmBoxContentSequenceRetired = 556793904;
    DicomTags.ImageBoxContentSequenceRetired = 556793920;
    DicomTags.AnnotationContentSequenceRetired = 556793936;
    DicomTags.ImageOverlayBoxContentSequenceRetired = 556793952;
    DicomTags.PresentationLutContentSequenceRetired = 556793984;
    DicomTags.ProposedStudySequenceRetired = 556794016;
    DicomTags.OriginalImageSequenceRetired = 556794048;
    DicomTags.LabelUsingInformationExtractedFromInstances = 570425345;
    DicomTags.LabelText = 570425346;
    DicomTags.LabelStyleSelection = 570425347;
    DicomTags.MediaDisposition = 570425348;
    DicomTags.BarcodeValue = 570425349;
    DicomTags.BarcodeSymbology = 570425350;
    DicomTags.AllowMediaSplitting = 570425351;
    DicomTags.IncludeNonDicomObjects = 570425352;
    DicomTags.IncludeDisplayApplication = 570425353;
    DicomTags.PreserveCompositeInstancesAfterMediaCreation = 570425354;
    DicomTags.TotalNumberOfPiecesOfMediaCreated = 570425355;
    DicomTags.RequestedMediaApplicationProfile = 570425356;
    DicomTags.ReferencedStorageMediaSequence = 570425357;
    DicomTags.FailureAttributes = 570425358;
    DicomTags.AllowLossyCompression = 570425359;
    DicomTags.RequestPriority = 570425376;
    DicomTags.RtImageLabel = 805437442;
    DicomTags.RtImageName = 805437443;
    DicomTags.RtImageDescription = 805437444;
    DicomTags.ReportedValuesOrigin = 805437450;
    DicomTags.RtImagePlane = 805437452;
    DicomTags.XRayImageReceptorTranslation = 805437453;
    DicomTags.XRayImageReceptorAngle = 805437454;
    DicomTags.RtImageOrientation = 805437456;
    DicomTags.ImagePlanePixelSpacing = 805437457;
    DicomTags.RtImagePosition = 805437458;
    DicomTags.RadiationMachineName = 805437472;
    DicomTags.RadiationMachineSad = 805437474;
    DicomTags.RadiationMachineSsd = 805437476;
    DicomTags.RtImageSid = 805437478;
    DicomTags.SourceToReferenceObjectDistance = 805437480;
    DicomTags.FractionNumber = 805437481;
    DicomTags.ExposureSequence = 805437488;
    DicomTags.MetersetExposure = 805437490;
    DicomTags.DiaphragmPosition = 805437492;
    DicomTags.FluenceMapSequence = 805437504;
    DicomTags.FluenceDataSource = 805437505;
    DicomTags.FluenceDataScale = 805437506;
    DicomTags.PrimaryFluenceModeSequence = 805437520;
    DicomTags.FluenceMode = 805437521;
    DicomTags.FluenceModeId = 805437522;
    DicomTags.DvhType = 805568513;
    DicomTags.DoseUnits = 805568514;
    DicomTags.DoseType = 805568516;
    DicomTags.DoseComment = 805568518;
    DicomTags.NormalizationPoint = 805568520;
    DicomTags.DoseSummationType = 805568522;
    DicomTags.GridFrameOffsetVector = 805568524;
    DicomTags.DoseGridScaling = 805568526;
    DicomTags.RtDoseRoiSequence = 805568528;
    DicomTags.DoseValue = 805568530;
    DicomTags.TissueHeterogeneityCorrection = 805568532;
    DicomTags.DvhNormalizationPoint = 805568576;
    DicomTags.DvhNormalizationDoseValue = 805568578;
    DicomTags.DvhSequence = 805568592;
    DicomTags.DvhDoseScaling = 805568594;
    DicomTags.DvhVolumeUnits = 805568596;
    DicomTags.DvhNumberOfBins = 805568598;
    DicomTags.DvhData = 805568600;
    DicomTags.DvhReferencedRoiSequence = 805568608;
    DicomTags.DvhRoiContributionType = 805568610;
    DicomTags.DvhMinimumDose = 805568624;
    DicomTags.DvhMaximumDose = 805568626;
    DicomTags.DvhMeanDose = 805568628;
    DicomTags.StructureSetLabel = 805699586;
    DicomTags.StructureSetName = 805699588;
    DicomTags.StructureSetDescription = 805699590;
    DicomTags.StructureSetDate = 805699592;
    DicomTags.StructureSetTime = 805699593;
    DicomTags.ReferencedFrameOfReferenceSequence = 805699600;
    DicomTags.RtReferencedStudySequence = 805699602;
    DicomTags.RtReferencedSeriesSequence = 805699604;
    DicomTags.ContourImageSequence = 805699606;
    DicomTags.StructureSetRoiSequence = 805699616;
    DicomTags.RoiNumber = 805699618;
    DicomTags.ReferencedFrameOfReferenceUid = 805699620;
    DicomTags.RoiName = 805699622;
    DicomTags.RoiDescription = 805699624;
    DicomTags.RoiDisplayColor = 805699626;
    DicomTags.RoiVolume = 805699628;
    DicomTags.RtRelatedRoiSequence = 805699632;
    DicomTags.RtRoiRelationship = 805699635;
    DicomTags.RoiGenerationAlgorithm = 805699638;
    DicomTags.RoiGenerationDescription = 805699640;
    DicomTags.RoiContourSequence = 805699641;
    DicomTags.ContourSequence = 805699648;
    DicomTags.ContourGeometricType = 805699650;
    DicomTags.ContourSlabThickness = 805699652;
    DicomTags.ContourOffsetVector = 805699653;
    DicomTags.NumberOfContourPoints = 805699654;
    DicomTags.ContourNumber = 805699656;
    DicomTags.AttachedContours = 805699657;
    DicomTags.ContourData = 805699664;
    DicomTags.RtRoiObservationsSequence = 805699712;
    DicomTags.ObservationNumber = 805699714;
    DicomTags.ReferencedRoiNumber = 805699716;
    DicomTags.RoiObservationLabel = 805699717;
    DicomTags.RtRoiIdentificationCodeSequence = 805699718;
    DicomTags.RoiObservationDescription = 805699720;
    DicomTags.RelatedRtRoiObservationsSequence = 805699744;
    DicomTags.RtRoiInterpretedType = 805699748;
    DicomTags.RoiInterpreter = 805699750;
    DicomTags.RoiPhysicalPropertiesSequence = 805699760;
    DicomTags.RoiPhysicalProperty = 805699762;
    DicomTags.RoiPhysicalPropertyValue = 805699764;
    DicomTags.RoiElementalCompositionSequence = 805699766;
    DicomTags.RoiElementalCompositionAtomicNumber = 805699767;
    DicomTags.RoiElementalCompositionAtomicMassFraction = 805699768;
    DicomTags.FrameOfReferenceRelationshipSequence = 805699776;
    DicomTags.RelatedFrameOfReferenceUid = 805699778;
    DicomTags.FrameOfReferenceTransformationType = 805699780;
    DicomTags.FrameOfReferenceTransformationMatrix = 805699782;
    DicomTags.FrameOfReferenceTransformationComment = 805699784;
    DicomTags.MeasuredDoseReferenceSequence = 805830672;
    DicomTags.MeasuredDoseDescription = 805830674;
    DicomTags.MeasuredDoseType = 805830676;
    DicomTags.MeasuredDoseValue = 805830678;
    DicomTags.TreatmentSessionBeamSequence = 805830688;
    DicomTags.TreatmentSessionIonBeamSequence = 805830689;
    DicomTags.CurrentFractionNumber = 805830690;
    DicomTags.TreatmentControlPointDate = 805830692;
    DicomTags.TreatmentControlPointTime = 805830693;
    DicomTags.TreatmentTerminationStatus = 805830698;
    DicomTags.TreatmentTerminationCode = 805830699;
    DicomTags.TreatmentVerificationStatus = 805830700;
    DicomTags.ReferencedTreatmentRecordSequence = 805830704;
    DicomTags.SpecifiedPrimaryMeterset = 805830706;
    DicomTags.SpecifiedSecondaryMeterset = 805830707;
    DicomTags.DeliveredPrimaryMeterset = 805830710;
    DicomTags.DeliveredSecondaryMeterset = 805830711;
    DicomTags.SpecifiedTreatmentTime = 805830714;
    DicomTags.DeliveredTreatmentTime = 805830715;
    DicomTags.ControlPointDeliverySequence = 805830720;
    DicomTags.IonControlPointDeliverySequence = 805830721;
    DicomTags.SpecifiedMeterset = 805830722;
    DicomTags.DeliveredMeterset = 805830724;
    DicomTags.MetersetRateSet = 805830725;
    DicomTags.MetersetRateDelivered = 805830726;
    DicomTags.ScanSpotMetersetsDelivered = 805830727;
    DicomTags.DoseRateDelivered = 805830728;
    DicomTags.TreatmentSummaryCalculatedDoseReferenceSequence = 805830736;
    DicomTags.CumulativeDoseToDoseReference = 805830738;
    DicomTags.FirstTreatmentDate = 805830740;
    DicomTags.MostRecentTreatmentDate = 805830742;
    DicomTags.NumberOfFractionsDelivered = 805830746;
    DicomTags.OverrideSequence = 805830752;
    DicomTags.ParameterSequencePointer = 805830753;
    DicomTags.OverrideParameterPointer = 805830754;
    DicomTags.ParameterItemIndex = 805830755;
    DicomTags.MeasuredDoseReferenceNumber = 805830756;
    DicomTags.ParameterPointer = 805830757;
    DicomTags.OverrideReason = 805830758;
    DicomTags.CorrectedParameterSequence = 805830760;
    DicomTags.CorrectionValue = 805830762;
    DicomTags.CalculatedDoseReferenceSequence = 805830768;
    DicomTags.CalculatedDoseReferenceNumber = 805830770;
    DicomTags.CalculatedDoseReferenceDescription = 805830772;
    DicomTags.CalculatedDoseReferenceDoseValue = 805830774;
    DicomTags.StartMeterset = 805830776;
    DicomTags.EndMeterset = 805830778;
    DicomTags.ReferencedMeasuredDoseReferenceSequence = 805830784;
    DicomTags.ReferencedMeasuredDoseReferenceNumber = 805830786;
    DicomTags.ReferencedCalculatedDoseReferenceSequence = 805830800;
    DicomTags.ReferencedCalculatedDoseReferenceNumber = 805830802;
    DicomTags.BeamLimitingDeviceLeafPairsSequence = 805830816;
    DicomTags.RecordedWedgeSequence = 805830832;
    DicomTags.RecordedCompensatorSequence = 805830848;
    DicomTags.RecordedBlockSequence = 805830864;
    DicomTags.TreatmentSummaryMeasuredDoseReferenceSequence = 805830880;
    DicomTags.RecordedSnoutSequence = 805830896;
    DicomTags.RecordedRangeShifterSequence = 805830898;
    DicomTags.RecordedLateralSpreadingDeviceSequence = 805830900;
    DicomTags.RecordedRangeModulatorSequence = 805830902;
    DicomTags.RecordedSourceSequence = 805830912;
    DicomTags.SourceSerialNumber = 805830917;
    DicomTags.TreatmentSessionApplicationSetupSequence = 805830928;
    DicomTags.ApplicationSetupCheck = 805830934;
    DicomTags.RecordedBrachyAccessoryDeviceSequence = 805830944;
    DicomTags.ReferencedBrachyAccessoryDeviceNumber = 805830946;
    DicomTags.RecordedChannelSequence = 805830960;
    DicomTags.SpecifiedChannelTotalTime = 805830962;
    DicomTags.DeliveredChannelTotalTime = 805830964;
    DicomTags.SpecifiedNumberOfPulses = 805830966;
    DicomTags.DeliveredNumberOfPulses = 805830968;
    DicomTags.SpecifiedPulseRepetitionInterval = 805830970;
    DicomTags.DeliveredPulseRepetitionInterval = 805830972;
    DicomTags.RecordedSourceApplicatorSequence = 805830976;
    DicomTags.ReferencedSourceApplicatorNumber = 805830978;
    DicomTags.RecordedChannelShieldSequence = 805830992;
    DicomTags.ReferencedChannelShieldNumber = 805830994;
    DicomTags.BrachyControlPointDeliveredSequence = 805831008;
    DicomTags.SafePositionExitDate = 805831010;
    DicomTags.SafePositionExitTime = 805831012;
    DicomTags.SafePositionReturnDate = 805831014;
    DicomTags.SafePositionReturnTime = 805831016;
    DicomTags.CurrentTreatmentStatus = 805831168;
    DicomTags.TreatmentStatusComment = 805831170;
    DicomTags.FractionGroupSummarySequence = 805831200;
    DicomTags.ReferencedFractionNumber = 805831203;
    DicomTags.FractionGroupType = 805831204;
    DicomTags.BeamStopperPosition = 805831216;
    DicomTags.FractionStatusSummarySequence = 805831232;
    DicomTags.TreatmentDate = 805831248;
    DicomTags.TreatmentTime = 805831249;
    DicomTags.RtPlanLabel = 805961730;
    DicomTags.RtPlanName = 805961731;
    DicomTags.RtPlanDescription = 805961732;
    DicomTags.RtPlanDate = 805961734;
    DicomTags.RtPlanTime = 805961735;
    DicomTags.TreatmentProtocols = 805961737;
    DicomTags.PlanIntent = 805961738;
    DicomTags.TreatmentSites = 805961739;
    DicomTags.RtPlanGeometry = 805961740;
    DicomTags.PrescriptionDescription = 805961742;
    DicomTags.DoseReferenceSequence = 805961744;
    DicomTags.DoseReferenceNumber = 805961746;
    DicomTags.DoseReferenceUid = 805961747;
    DicomTags.DoseReferenceStructureType = 805961748;
    DicomTags.NominalBeamEnergyUnit = 805961749;
    DicomTags.DoseReferenceDescription = 805961750;
    DicomTags.DoseReferencePointCoordinates = 805961752;
    DicomTags.NominalPriorDose = 805961754;
    DicomTags.DoseReferenceType = 805961760;
    DicomTags.ConstraintWeight = 805961761;
    DicomTags.DeliveryWarningDose = 805961762;
    DicomTags.DeliveryMaximumDose = 805961763;
    DicomTags.TargetMinimumDose = 805961765;
    DicomTags.TargetPrescriptionDose = 805961766;
    DicomTags.TargetMaximumDose = 805961767;
    DicomTags.TargetUnderdoseVolumeFraction = 805961768;
    DicomTags.OrganAtRiskFullVolumeDose = 805961770;
    DicomTags.OrganAtRiskLimitDose = 805961771;
    DicomTags.OrganAtRiskMaximumDose = 805961772;
    DicomTags.OrganAtRiskOverdoseVolumeFraction = 805961773;
    DicomTags.ToleranceTableSequence = 805961792;
    DicomTags.ToleranceTableNumber = 805961794;
    DicomTags.ToleranceTableLabel = 805961795;
    DicomTags.GantryAngleTolerance = 805961796;
    DicomTags.BeamLimitingDeviceAngleTolerance = 805961798;
    DicomTags.BeamLimitingDeviceToleranceSequence = 805961800;
    DicomTags.BeamLimitingDevicePositionTolerance = 805961802;
    DicomTags.SnoutPositionTolerance = 805961803;
    DicomTags.PatientSupportAngleTolerance = 805961804;
    DicomTags.TableTopEccentricAngleTolerance = 805961806;
    DicomTags.TableTopPitchAngleTolerance = 805961807;
    DicomTags.TableTopRollAngleTolerance = 805961808;
    DicomTags.TableTopVerticalPositionTolerance = 805961809;
    DicomTags.TableTopLongitudinalPositionTolerance = 805961810;
    DicomTags.TableTopLateralPositionTolerance = 805961811;
    DicomTags.RtPlanRelationship = 805961813;
    DicomTags.FractionGroupSequence = 805961840;
    DicomTags.FractionGroupNumber = 805961841;
    DicomTags.FractionGroupDescription = 805961842;
    DicomTags.NumberOfFractionsPlanned = 805961848;
    DicomTags.NumberOfFractionPatternDigitsPerDay = 805961849;
    DicomTags.RepeatFractionCycleLength = 805961850;
    DicomTags.FractionPattern = 805961851;
    DicomTags.NumberOfBeams = 805961856;
    DicomTags.BeamDoseSpecificationPoint = 805961858;
    DicomTags.BeamDose = 805961860;
    DicomTags.BeamMeterset = 805961862;
    DicomTags.BeamDosePointDepth = 805961864;
    DicomTags.BeamDosePointEquivalentDepth = 805961865;
    DicomTags.BeamDosePointSsd = 805961866;
    DicomTags.NumberOfBrachyApplicationSetups = 805961888;
    DicomTags.BrachyApplicationSetupDoseSpecificationPoint = 805961890;
    DicomTags.BrachyApplicationSetupDose = 805961892;
    DicomTags.BeamSequence = 805961904;
    DicomTags.TreatmentMachineName = 805961906;
    DicomTags.PrimaryDosimeterUnit = 805961907;
    DicomTags.SourceAxisDistance = 805961908;
    DicomTags.BeamLimitingDeviceSequence = 805961910;
    DicomTags.RtBeamLimitingDeviceType = 805961912;
    DicomTags.SourceToBeamLimitingDeviceDistance = 805961914;
    DicomTags.IsocenterToBeamLimitingDeviceDistance = 805961915;
    DicomTags.NumberOfLeafJawPairs = 805961916;
    DicomTags.LeafPositionBoundaries = 805961918;
    DicomTags.BeamNumber = 805961920;
    DicomTags.BeamName = 805961922;
    DicomTags.BeamDescription = 805961923;
    DicomTags.BeamType = 805961924;
    DicomTags.RadiationType = 805961926;
    DicomTags.HighDoseTechniqueType = 805961927;
    DicomTags.ReferenceImageNumber = 805961928;
    DicomTags.PlannedVerificationImageSequence = 805961930;
    DicomTags.ImagingDeviceSpecificAcquisitionParameters = 805961932;
    DicomTags.TreatmentDeliveryType = 805961934;
    DicomTags.NumberOfWedges = 805961936;
    DicomTags.WedgeSequence = 805961937;
    DicomTags.WedgeNumber = 805961938;
    DicomTags.WedgeType = 805961939;
    DicomTags.WedgeId = 805961940;
    DicomTags.WedgeAngle = 805961941;
    DicomTags.WedgeFactor = 805961942;
    DicomTags.TotalWedgeTrayWaterEquivalentThickness = 805961943;
    DicomTags.WedgeOrientation = 805961944;
    DicomTags.IsocenterToWedgeTrayDistance = 805961945;
    DicomTags.SourceToWedgeTrayDistance = 805961946;
    DicomTags.WedgeThinEdgePosition = 805961947;
    DicomTags.BolusId = 805961948;
    DicomTags.BolusDescription = 805961949;
    DicomTags.NumberOfCompensators = 805961952;
    DicomTags.MaterialId = 805961953;
    DicomTags.TotalCompensatorTrayFactor = 805961954;
    DicomTags.CompensatorSequence = 805961955;
    DicomTags.CompensatorNumber = 805961956;
    DicomTags.CompensatorId = 805961957;
    DicomTags.SourceToCompensatorTrayDistance = 805961958;
    DicomTags.CompensatorRows = 805961959;
    DicomTags.CompensatorColumns = 805961960;
    DicomTags.CompensatorPixelSpacing = 805961961;
    DicomTags.CompensatorPosition = 805961962;
    DicomTags.CompensatorTransmissionData = 805961963;
    DicomTags.CompensatorThicknessData = 805961964;
    DicomTags.NumberOfBoli = 805961965;
    DicomTags.CompensatorType = 805961966;
    DicomTags.NumberOfBlocks = 805961968;
    DicomTags.TotalBlockTrayFactor = 805961970;
    DicomTags.TotalBlockTrayWaterEquivalentThickness = 805961971;
    DicomTags.BlockSequence = 805961972;
    DicomTags.BlockTrayId = 805961973;
    DicomTags.SourceToBlockTrayDistance = 805961974;
    DicomTags.IsocenterToBlockTrayDistance = 805961975;
    DicomTags.BlockType = 805961976;
    DicomTags.AccessoryCode = 805961977;
    DicomTags.BlockDivergence = 805961978;
    DicomTags.BlockMountingPosition = 805961979;
    DicomTags.BlockNumber = 805961980;
    DicomTags.BlockName = 805961982;
    DicomTags.BlockThickness = 805961984;
    DicomTags.BlockTransmission = 805961986;
    DicomTags.BlockNumberOfPoints = 805961988;
    DicomTags.BlockData = 805961990;
    DicomTags.ApplicatorSequence = 805961991;
    DicomTags.ApplicatorId = 805961992;
    DicomTags.ApplicatorType = 805961993;
    DicomTags.ApplicatorDescription = 805961994;
    DicomTags.CumulativeDoseReferenceCoefficient = 805961996;
    DicomTags.FinalCumulativeMetersetWeight = 805961998;
    DicomTags.NumberOfControlPoints = 805962000;
    DicomTags.ControlPointSequence = 805962001;
    DicomTags.ControlPointIndex = 805962002;
    DicomTags.NominalBeamEnergy = 805962004;
    DicomTags.DoseRateSet = 805962005;
    DicomTags.WedgePositionSequence = 805962006;
    DicomTags.WedgePosition = 805962008;
    DicomTags.BeamLimitingDevicePositionSequence = 805962010;
    DicomTags.LeafJawPositions = 805962012;
    DicomTags.GantryAngle = 805962014;
    DicomTags.GantryRotationDirection = 805962015;
    DicomTags.BeamLimitingDeviceAngle = 805962016;
    DicomTags.BeamLimitingDeviceRotationDirection = 805962017;
    DicomTags.PatientSupportAngle = 805962018;
    DicomTags.PatientSupportRotationDirection = 805962019;
    DicomTags.TableTopEccentricAxisDistance = 805962020;
    DicomTags.TableTopEccentricAngle = 805962021;
    DicomTags.TableTopEccentricRotationDirection = 805962022;
    DicomTags.TableTopVerticalPosition = 805962024;
    DicomTags.TableTopLongitudinalPosition = 805962025;
    DicomTags.TableTopLateralPosition = 805962026;
    DicomTags.IsocenterPosition = 805962028;
    DicomTags.SurfaceEntryPoint = 805962030;
    DicomTags.SourceToSurfaceDistance = 805962032;
    DicomTags.CumulativeMetersetWeight = 805962036;
    DicomTags.TableTopPitchAngle = 805962048;
    DicomTags.TableTopPitchRotationDirection = 805962050;
    DicomTags.TableTopRollAngle = 805962052;
    DicomTags.TableTopRollRotationDirection = 805962054;
    DicomTags.HeadFixationAngle = 805962056;
    DicomTags.GantryPitchAngle = 805962058;
    DicomTags.GantryPitchRotationDirection = 805962060;
    DicomTags.GantryPitchAngleTolerance = 805962062;
    DicomTags.PatientSetupSequence = 805962112;
    DicomTags.PatientSetupNumber = 805962114;
    DicomTags.PatientSetupLabel = 805962115;
    DicomTags.PatientAdditionalPosition = 805962116;
    DicomTags.FixationDeviceSequence = 805962128;
    DicomTags.FixationDeviceType = 805962130;
    DicomTags.FixationDeviceLabel = 805962132;
    DicomTags.FixationDeviceDescription = 805962134;
    DicomTags.FixationDevicePosition = 805962136;
    DicomTags.FixationDevicePitchAngle = 805962137;
    DicomTags.FixationDeviceRollAngle = 805962138;
    DicomTags.ShieldingDeviceSequence = 805962144;
    DicomTags.ShieldingDeviceType = 805962146;
    DicomTags.ShieldingDeviceLabel = 805962148;
    DicomTags.ShieldingDeviceDescription = 805962150;
    DicomTags.ShieldingDevicePosition = 805962152;
    DicomTags.SetupTechnique = 805962160;
    DicomTags.SetupTechniqueDescription = 805962162;
    DicomTags.SetupDeviceSequence = 805962164;
    DicomTags.SetupDeviceType = 805962166;
    DicomTags.SetupDeviceLabel = 805962168;
    DicomTags.SetupDeviceDescription = 805962170;
    DicomTags.SetupDeviceParameter = 805962172;
    DicomTags.SetupReferenceDescription = 805962192;
    DicomTags.TableTopVerticalSetupDisplacement = 805962194;
    DicomTags.TableTopLongitudinalSetupDisplacement = 805962196;
    DicomTags.TableTopLateralSetupDisplacement = 805962198;
    DicomTags.BrachyTreatmentTechnique = 805962240;
    DicomTags.BrachyTreatmentType = 805962242;
    DicomTags.TreatmentMachineSequence = 805962246;
    DicomTags.SourceSequence = 805962256;
    DicomTags.SourceNumber = 805962258;
    DicomTags.SourceType = 805962260;
    DicomTags.SourceManufacturer = 805962262;
    DicomTags.ActiveSourceDiameter = 805962264;
    DicomTags.ActiveSourceLength = 805962266;
    DicomTags.SourceEncapsulationNominalThickness = 805962274;
    DicomTags.SourceEncapsulationNominalTransmission = 805962276;
    DicomTags.SourceIsotopeName = 805962278;
    DicomTags.SourceIsotopeHalfLife = 805962280;
    DicomTags.SourceStrengthUnits = 805962281;
    DicomTags.ReferenceAirKermaRate = 805962282;
    DicomTags.SourceStrength = 805962283;
    DicomTags.SourceStrengthReferenceDate = 805962284;
    DicomTags.SourceStrengthReferenceTime = 805962286;
    DicomTags.ApplicationSetupSequence = 805962288;
    DicomTags.ApplicationSetupType = 805962290;
    DicomTags.ApplicationSetupNumber = 805962292;
    DicomTags.ApplicationSetupName = 805962294;
    DicomTags.ApplicationSetupManufacturer = 805962296;
    DicomTags.TemplateNumber = 805962304;
    DicomTags.TemplateType = 805962306;
    DicomTags.TemplateName = 805962308;
    DicomTags.TotalReferenceAirKerma = 805962320;
    DicomTags.BrachyAccessoryDeviceSequence = 805962336;
    DicomTags.BrachyAccessoryDeviceNumber = 805962338;
    DicomTags.BrachyAccessoryDeviceId = 805962339;
    DicomTags.BrachyAccessoryDeviceType = 805962340;
    DicomTags.BrachyAccessoryDeviceName = 805962342;
    DicomTags.BrachyAccessoryDeviceNominalThickness = 805962346;
    DicomTags.BrachyAccessoryDeviceNominalTransmission = 805962348;
    DicomTags.ChannelSequence = 805962368;
    DicomTags.ChannelNumber = 805962370;
    DicomTags.ChannelLength = 805962372;
    DicomTags.ChannelTotalTime = 805962374;
    DicomTags.SourceMovementType = 805962376;
    DicomTags.NumberOfPulses = 805962378;
    DicomTags.PulseRepetitionInterval = 805962380;
    DicomTags.SourceApplicatorNumber = 805962384;
    DicomTags.SourceApplicatorId = 805962385;
    DicomTags.SourceApplicatorType = 805962386;
    DicomTags.SourceApplicatorName = 805962388;
    DicomTags.SourceApplicatorLength = 805962390;
    DicomTags.SourceApplicatorManufacturer = 805962392;
    DicomTags.SourceApplicatorWallNominalThickness = 805962396;
    DicomTags.SourceApplicatorWallNominalTransmission = 805962398;
    DicomTags.SourceApplicatorStepSize = 805962400;
    DicomTags.TransferTubeNumber = 805962402;
    DicomTags.TransferTubeLength = 805962404;
    DicomTags.ChannelShieldSequence = 805962416;
    DicomTags.ChannelShieldNumber = 805962418;
    DicomTags.ChannelShieldId = 805962419;
    DicomTags.ChannelShieldName = 805962420;
    DicomTags.ChannelShieldNominalThickness = 805962424;
    DicomTags.ChannelShieldNominalTransmission = 805962426;
    DicomTags.FinalCumulativeTimeWeight = 805962440;
    DicomTags.BrachyControlPointSequence = 805962448;
    DicomTags.ControlPointRelativePosition = 805962450;
    DicomTags.ControlPoint3dPosition = 805962452;
    DicomTags.CumulativeTimeWeight = 805962454;
    DicomTags.CompensatorDivergence = 805962464;
    DicomTags.CompensatorMountingPosition = 805962465;
    DicomTags.SourceToCompensatorDistance = 805962466;
    DicomTags.TotalCompensatorTrayWaterEquivalentThickness = 805962467;
    DicomTags.IsocenterToCompensatorTrayDistance = 805962468;
    DicomTags.CompensatorColumnOffset = 805962469;
    DicomTags.IsocenterToCompensatorDistances = 805962470;
    DicomTags.CompensatorRelativeStoppingPowerRatio = 805962471;
    DicomTags.CompensatorMillingToolDiameter = 805962472;
    DicomTags.IonRangeCompensatorSequence = 805962474;
    DicomTags.CompensatorDescription = 805962475;
    DicomTags.RadiationMassNumber = 805962498;
    DicomTags.RadiationAtomicNumber = 805962500;
    DicomTags.RadiationChargeState = 805962502;
    DicomTags.ScanMode = 805962504;
    DicomTags.VirtualSourceAxisDistances = 805962506;
    DicomTags.SnoutSequence = 805962508;
    DicomTags.SnoutPosition = 805962509;
    DicomTags.SnoutId = 805962511;
    DicomTags.NumberOfRangeShifters = 805962514;
    DicomTags.RangeShifterSequence = 805962516;
    DicomTags.RangeShifterNumber = 805962518;
    DicomTags.RangeShifterId = 805962520;
    DicomTags.RangeShifterType = 805962528;
    DicomTags.RangeShifterDescription = 805962530;
    DicomTags.NumberOfLateralSpreadingDevices = 805962544;
    DicomTags.LateralSpreadingDeviceSequence = 805962546;
    DicomTags.LateralSpreadingDeviceNumber = 805962548;
    DicomTags.LateralSpreadingDeviceId = 805962550;
    DicomTags.LateralSpreadingDeviceType = 805962552;
    DicomTags.LateralSpreadingDeviceDescription = 805962554;
    DicomTags.LateralSpreadingDeviceWaterEquivalentThickness = 805962556;
    DicomTags.NumberOfRangeModulators = 805962560;
    DicomTags.RangeModulatorSequence = 805962562;
    DicomTags.RangeModulatorNumber = 805962564;
    DicomTags.RangeModulatorId = 805962566;
    DicomTags.RangeModulatorType = 805962568;
    DicomTags.RangeModulatorDescription = 805962570;
    DicomTags.BeamCurrentModulationId = 805962572;
    DicomTags.PatientSupportType = 805962576;
    DicomTags.PatientSupportId = 805962578;
    DicomTags.PatientSupportAccessoryCode = 805962580;
    DicomTags.FixationLightAzimuthalAngle = 805962582;
    DicomTags.FixationLightPolarAngle = 805962584;
    DicomTags.MetersetRate = 805962586;
    DicomTags.RangeShifterSettingsSequence = 805962592;
    DicomTags.RangeShifterSetting = 805962594;
    DicomTags.IsocenterToRangeShifterDistance = 805962596;
    DicomTags.RangeShifterWaterEquivalentThickness = 805962598;
    DicomTags.LateralSpreadingDeviceSettingsSequence = 805962608;
    DicomTags.LateralSpreadingDeviceSetting = 805962610;
    DicomTags.IsocenterToLateralSpreadingDeviceDistance = 805962612;
    DicomTags.RangeModulatorSettingsSequence = 805962624;
    DicomTags.RangeModulatorGatingStartValue = 805962626;
    DicomTags.RangeModulatorGatingStopValue = 805962628;
    DicomTags.RangeModulatorGatingStartWaterEquivalentThickness = 805962630;
    DicomTags.RangeModulatorGatingStopWaterEquivalentThickness = 805962632;
    DicomTags.IsocenterToRangeModulatorDistance = 805962634;
    DicomTags.ScanSpotTuneId = 805962640;
    DicomTags.NumberOfScanSpotPositions = 805962642;
    DicomTags.ScanSpotPositionMap = 805962644;
    DicomTags.ScanSpotMetersetWeights = 805962646;
    DicomTags.ScanningSpotSize = 805962648;
    DicomTags.NumberOfPaintings = 805962650;
    DicomTags.IonToleranceTableSequence = 805962656;
    DicomTags.IonBeamSequence = 805962658;
    DicomTags.IonBeamLimitingDeviceSequence = 805962660;
    DicomTags.IonBlockSequence = 805962662;
    DicomTags.IonControlPointSequence = 805962664;
    DicomTags.IonWedgeSequence = 805962666;
    DicomTags.IonWedgePositionSequence = 805962668;
    DicomTags.ReferencedSetupImageSequence = 805962753;
    DicomTags.SetupImageComment = 805962754;
    DicomTags.MotionSynchronizationSequence = 805962768;
    DicomTags.ControlPointOrientation = 805962770;
    DicomTags.GeneralAccessorySequence = 805962784;
    DicomTags.GeneralAccessoryId = 805962785;
    DicomTags.GeneralAccessoryDescription = 805962786;
    DicomTags.GeneralAccessoryType = 805962787;
    DicomTags.GeneralAccessoryNumber = 805962788;
    DicomTags.ApplicatorGeometrySequence = 805962801;
    DicomTags.ApplicatorApertureShape = 805962802;
    DicomTags.ApplicatorOpening = 805962803;
    DicomTags.ApplicatorOpeningX = 805962804;
    DicomTags.ApplicatorOpeningY = 805962805;
    DicomTags.SourceToApplicatorMountingPositionDistance = 805962806;
    DicomTags.ReferencedRtPlanSequence = 806092802;
    DicomTags.ReferencedBeamSequence = 806092804;
    DicomTags.ReferencedBeamNumber = 806092806;
    DicomTags.ReferencedReferenceImageNumber = 806092807;
    DicomTags.StartCumulativeMetersetWeight = 806092808;
    DicomTags.EndCumulativeMetersetWeight = 806092809;
    DicomTags.ReferencedBrachyApplicationSetupSequence = 806092810;
    DicomTags.ReferencedBrachyApplicationSetupNumber = 806092812;
    DicomTags.ReferencedSourceNumber = 806092814;
    DicomTags.ReferencedFractionGroupSequence = 806092832;
    DicomTags.ReferencedFractionGroupNumber = 806092834;
    DicomTags.ReferencedVerificationImageSequence = 806092864;
    DicomTags.ReferencedReferenceImageSequence = 806092866;
    DicomTags.ReferencedDoseReferenceSequence = 806092880;
    DicomTags.ReferencedDoseReferenceNumber = 806092881;
    DicomTags.BrachyReferencedDoseReferenceSequence = 806092885;
    DicomTags.ReferencedStructureSetSequence = 806092896;
    DicomTags.ReferencedPatientSetupNumber = 806092906;
    DicomTags.ReferencedDoseSequence = 806092928;
    DicomTags.ReferencedToleranceTableNumber = 806092960;
    DicomTags.ReferencedBolusSequence = 806092976;
    DicomTags.ReferencedWedgeNumber = 806092992;
    DicomTags.ReferencedCompensatorNumber = 806093008;
    DicomTags.ReferencedBlockNumber = 806093024;
    DicomTags.ReferencedControlPointIndex = 806093040;
    DicomTags.ReferencedControlPointSequence = 806093042;
    DicomTags.ReferencedStartControlPointIndex = 806093044;
    DicomTags.ReferencedStopControlPointIndex = 806093046;
    DicomTags.ReferencedRangeShifterNumber = 806093056;
    DicomTags.ReferencedLateralSpreadingDeviceNumber = 806093058;
    DicomTags.ReferencedRangeModulatorNumber = 806093060;
    DicomTags.ApprovalStatus = 806223874;
    DicomTags.ReviewDate = 806223876;
    DicomTags.ReviewTime = 806223877;
    DicomTags.ReviewerName = 806223880;
    DicomTags.ArbitraryRetired = 1073741840;
    DicomTags.TextCommentsRetired = 1073758208;
    DicomTags.ResultsIdRetired = 1074266176;
    DicomTags.ResultsIdIssuerRetired = 1074266178;
    DicomTags.ReferencedInterpretationSequenceRetired = 1074266192;
    DicomTags.ReportProductionStatusTrialRetired = 1074266367;
    DicomTags.InterpretationRecordedDateRetired = 1074266368;
    DicomTags.InterpretationRecordedTimeRetired = 1074266369;
    DicomTags.InterpretationRecorderRetired = 1074266370;
    DicomTags.ReferenceToRecordedSoundRetired = 1074266371;
    DicomTags.InterpretationTranscriptionDateRetired = 1074266376;
    DicomTags.InterpretationTranscriptionTimeRetired = 1074266377;
    DicomTags.InterpretationTranscriberRetired = 1074266378;
    DicomTags.InterpretationTextRetired = 1074266379;
    DicomTags.InterpretationAuthorRetired = 1074266380;
    DicomTags.InterpretationApproverSequenceRetired = 1074266385;
    DicomTags.InterpretationApprovalDateRetired = 1074266386;
    DicomTags.InterpretationApprovalTimeRetired = 1074266387;
    DicomTags.PhysicianApprovingInterpretationRetired = 1074266388;
    DicomTags.InterpretationDiagnosisDescriptionRetired = 1074266389;
    DicomTags.InterpretationDiagnosisCodeSequenceRetired = 1074266391;
    DicomTags.ResultsDistributionListSequenceRetired = 1074266392;
    DicomTags.DistributionNameRetired = 1074266393;
    DicomTags.DistributionAddressRetired = 1074266394;
    DicomTags.InterpretationIdRetired = 1074266624;
    DicomTags.InterpretationIdIssuerRetired = 1074266626;
    DicomTags.InterpretationTypeIdRetired = 1074266640;
    DicomTags.InterpretationStatusIdRetired = 1074266642;
    DicomTags.ImpressionsRetired = 1074266880;
    DicomTags.ResultsCommentsRetired = 1074282496;
    DicomTags.LowEnergyDetectors = 1074790401;
    DicomTags.HighEnergyDetectors = 1074790402;
    DicomTags.DetectorGeometrySequence = 1074790404;
    DicomTags.ThreatRoiVoxelSequence = 1074794497;
    DicomTags.ThreatRoiBase = 1074794500;
    DicomTags.ThreatRoiExtents = 1074794501;
    DicomTags.ThreatRoiBitmap = 1074794502;
    DicomTags.RouteSegmentId = 1074794503;
    DicomTags.GantryType = 1074794504;
    DicomTags.OoiOwnerType = 1074794505;
    DicomTags.RouteSegmentSequence = 1074794506;
    DicomTags.PotentialThreatObjectId = 1074794512;
    DicomTags.ThreatSequence = 1074794513;
    DicomTags.ThreatCategory = 1074794514;
    DicomTags.ThreatCategoryDescription = 1074794515;
    DicomTags.AtdAbilityAssessment = 1074794516;
    DicomTags.AtdAssessmentFlag = 1074794517;
    DicomTags.AtdAssessmentProbability = 1074794518;
    DicomTags.Mass = 1074794519;
    DicomTags.Density = 1074794520;
    DicomTags.ZEffective = 1074794521;
    DicomTags.BoardingPassId = 1074794522;
    DicomTags.CenterOfMass = 1074794523;
    DicomTags.CenterOfPto = 1074794524;
    DicomTags.BoundingPolygon = 1074794525;
    DicomTags.RouteSegmentStartLocationId = 1074794526;
    DicomTags.RouteSegmentEndLocationId = 1074794527;
    DicomTags.RouteSegmentLocationIdType = 1074794528;
    DicomTags.AbortReason = 1074794529;
    DicomTags.VolumeOfPto = 1074794531;
    DicomTags.AbortFlag = 1074794532;
    DicomTags.RouteSegmentStartTime = 1074794533;
    DicomTags.RouteSegmentEndTime = 1074794534;
    DicomTags.TdrType = 1074794535;
    DicomTags.InternationalRouteSegment = 1074794536;
    DicomTags.ThreatDetectionAlgorithmAndVersion = 1074794537;
    DicomTags.AssignedLocation = 1074794538;
    DicomTags.AlarmDecisionTime = 1074794539;
    DicomTags.AlarmDecision = 1074794545;
    DicomTags.NumberOfTotalObjects = 1074794547;
    DicomTags.NumberOfAlarmObjects = 1074794548;
    DicomTags.PtoRepresentationSequence = 1074794551;
    DicomTags.AtdAssessmentSequence = 1074794552;
    DicomTags.TipType = 1074794553;
    DicomTags.DicosVersion = 1074794554;
    DicomTags.OoiOwnerCreationTime = 1074794561;
    DicomTags.OoiType = 1074794562;
    DicomTags.OoiSize = 1074794563;
    DicomTags.AcquisitionStatus = 1074794564;
    DicomTags.BasisMaterialsCodeSequence = 1074794565;
    DicomTags.PhantomType = 1074794566;
    DicomTags.OoiOwnerSequence = 1074794567;
    DicomTags.ScanType = 1074794568;
    DicomTags.ItineraryId = 1074794577;
    DicomTags.ItineraryIdType = 1074794578;
    DicomTags.ItineraryIdAssigningAuthority = 1074794579;
    DicomTags.RouteId = 1074794580;
    DicomTags.RouteIdAssigningAuthority = 1074794581;
    DicomTags.InboundArrivalType = 1074794582;
    DicomTags.CarrierId = 1074794584;
    DicomTags.CarrierIdAssigningAuthority = 1074794585;
    DicomTags.SourceOrientation = 1074794592;
    DicomTags.SourcePosition = 1074794593;
    DicomTags.BeltHeight = 1074794594;
    DicomTags.AlgorithmRoutingCodeSequence = 1074794596;
    DicomTags.TransportClassification = 1074794599;
    DicomTags.OoiTypeDescriptor = 1074794600;
    DicomTags.TotalProcessingTime = 1074794601;
    DicomTags.DetectorCalibrationData = 1074794604;
    DicomTags.MacParametersSequence = 1342046209;
    DicomTags.CurveDimensionsRetired = 1342177285;
    DicomTags.NumberOfPointsRetired = 1342177296;
    DicomTags.TypeOfDataRetired = 1342177312;
    DicomTags.CurveDescriptionRetired = 1342177314;
    DicomTags.AxisUnitsRetired = 1342177328;
    DicomTags.AxisLabelsRetired = 1342177344;
    DicomTags.DataValueRepresentationRetired = 1342177539;
    DicomTags.MinimumCoordinateValueRetired = 1342177540;
    DicomTags.MaximumCoordinateValueRetired = 1342177541;
    DicomTags.CurveRangeRetired = 1342177542;
    DicomTags.CurveDataDescriptorRetired = 1342177552;
    DicomTags.CoordinateStartValueRetired = 1342177554;
    DicomTags.CoordinateStepValueRetired = 1342177556;
    DicomTags.CurveActivationLayerRetired = 1342181377;
    DicomTags.AudioTypeRetired = 1342185472;
    DicomTags.AudioSampleFormatRetired = 1342185474;
    DicomTags.NumberOfChannelsRetired = 1342185476;
    DicomTags.NumberOfSamplesRetired = 1342185478;
    DicomTags.SampleRateRetired = 1342185480;
    DicomTags.TotalTimeRetired = 1342185482;
    DicomTags.AudioSampleDataRetired = 1342185484;
    DicomTags.AudioCommentsRetired = 1342185486;
    DicomTags.CurveLabelRetired = 1342186752;
    DicomTags.CurveReferencedOverlaySequenceRetired = 1342187008;
    DicomTags.CurveReferencedOverlayGroupRetired = 1342187024;
    DicomTags.CurveDataRetired = 1342189568;
    DicomTags.SharedFunctionalGroupsSequence = 1375769129;
    DicomTags.PerFrameFunctionalGroupsSequence = 1375769136;
    DicomTags.WaveformSequence = 1409286400;
    DicomTags.ChannelMinimumValue = 1409286416;
    DicomTags.ChannelMaximumValue = 1409286418;
    DicomTags.WaveformBitsAllocated = 1409290244;
    DicomTags.WaveformSampleInterpretation = 1409290246;
    DicomTags.WaveformPaddingValue = 1409290250;
    DicomTags.WaveformData = 1409290256;
    DicomTags.FirstOrderPhaseCorrectionAngle = 1442840592;
    DicomTags.SpectroscopyData = 1442840608;
    DicomTags.OverlayRows = 1610612752;
    DicomTags.OverlayColumns = 1610612753;
    DicomTags.OverlayPlanesRetired = 1610612754;
    DicomTags.NumberOfFramesInOverlay = 1610612757;
    DicomTags.OverlayDescription = 1610612770;
    DicomTags.OverlayType = 1610612800;
    DicomTags.OverlaySubtype = 1610612805;
    DicomTags.OverlayOrigin = 1610612816;
    DicomTags.ImageFrameOrigin = 1610612817;
    DicomTags.OverlayPlaneOriginRetired = 1610612818;
    DicomTags.OverlayCompressionCodeRetired = 1610612832;
    DicomTags.OverlayCompressionOriginatorRetired = 1610612833;
    DicomTags.OverlayCompressionLabelRetired = 1610612834;
    DicomTags.OverlayCompressionDescriptionRetired = 1610612835;
    DicomTags.OverlayCompressionStepPointersRetired = 1610612838;
    DicomTags.OverlayRepeatIntervalRetired = 1610612840;
    DicomTags.OverlayBitsGroupedRetired = 1610612841;
    DicomTags.OverlayBitsAllocated = 1610612992;
    DicomTags.OverlayBitPosition = 1610612994;
    DicomTags.OverlayFormatRetired = 1610613008;
    DicomTags.OverlayLocationRetired = 1610613248;
    DicomTags.OverlayCodeLabelRetired = 1610614784;
    DicomTags.OverlayNumberOfTablesRetired = 1610614786;
    DicomTags.OverlayCodeTableLocationRetired = 1610614787;
    DicomTags.OverlayBitsForCodeWordRetired = 1610614788;
    DicomTags.OverlayActivationLayer = 1610616833;
    DicomTags.OverlayDescriptorGrayRetired = 1610617088;
    DicomTags.OverlayDescriptorRedRetired = 1610617089;
    DicomTags.OverlayDescriptorGreenRetired = 1610617090;
    DicomTags.OverlayDescriptorBlueRetired = 1610617091;
    DicomTags.OverlaysGrayRetired = 1610617344;
    DicomTags.OverlaysRedRetired = 1610617345;
    DicomTags.OverlaysGreenRetired = 1610617346;
    DicomTags.OverlaysBlueRetired = 1610617347;
    DicomTags.RoiArea = 1610617601;
    DicomTags.RoiMean = 1610617602;
    DicomTags.RoiStandardDeviation = 1610617603;
    DicomTags.OverlayLabel = 1610618112;
    DicomTags.OverlayData = 1610625024;
    DicomTags.OverlayCommentsRetired = 1610629120;
    DicomTags.VariablePixelDataRetired = 2130706448;
    DicomTags.VariableNextDataGroupRetired = 2130706449;
    DicomTags.VariableCoefficientsSdvnRetired = 2130706464;
    DicomTags.VariableCoefficientsSdhnRetired = 2130706480;
    DicomTags.VariableCoefficientsSddnRetired = 2130706496;
    DicomTags.PixelData = 2145386512;
    DicomTags.CoefficientsSdvnRetired = 2145386528;
    DicomTags.CoefficientsSdhnRetired = 2145386544;
    DicomTags.CoefficientsSddnRetired = 2145386560;
    DicomTags.DigitalSignaturesSequence = 4294639610;
    DicomTags.DataSetTrailingPadding = 4294770684;
    return DicomTags;
}());
var DicomVRs = (function () {
    function DicomVRs() {
        this.CS = "CS";
        this.PN = "PN";
        this.SQ = "SQ";
    }
    return DicomVRs;
}());
var DicomVR = (function () {
    function DicomVR() {
    }
    return DicomVR;
}());
var ImagePixelMacroIod = (function () {
    function ImagePixelMacroIod(dicomProvider) {
        this.DicomSourceProvider = dicomProvider;
    }
    Object.defineProperty(ImagePixelMacroIod.prototype, "SamplesPerPixel", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.SamplesPerPixel).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.SamplesPerPixel).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "PhotometricInterpretation", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.PhotometricInterpretation).GetString(0, "");
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.PhotometricInterpretation).SetString(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "Rows", {
        get: function () {
            var element = this.DicomSourceProvider.getElement(DicomTags.Rows);
            return element.GetUInt16(0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "Rowse", {
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.Rows).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "Columns", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.Columns).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.Columns).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "BitsAllocated", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.BitsAllocated).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.BitsAllocated).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "BitsStored", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.BitsStored).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.BitsStored).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "HighBit", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.HighBit).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.HighBit).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "PixelRepresentation", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.PixelRepresentation).GetString(0, "");
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.PixelRepresentation).SetString(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "PlanarConfiguration", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.PlanarConfiguration).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.PlanarConfiguration).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "SmallestImagePixelValue", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.SmallestImagePixelValue).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.SmallestImagePixelValue).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "LargestImagePixelValue", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.LargestImagePixelValue).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.LargestImagePixelValue).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "WindowCenter", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.WindowCenter).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.WindowCenter).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "WindowWidth", {
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.WindowWidth).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.WindowWidth).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    return ImagePixelMacroIod;
}());
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
//# sourceMappingURL=DICOMwebJS.js.map