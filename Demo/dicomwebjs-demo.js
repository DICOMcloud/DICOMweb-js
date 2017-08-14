var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StoreView = (function () {
    function StoreView(parentElement) {
        this._parent = parentElement;
        this.registerEvents();
    }
    StoreView.prototype.registerEvents = function () {
        var _this = this;
        $(this._parent).find("#addFileButton").click(function (e) {
            e.preventDefault();
            var newName = jQuery('#displayName').val();
            // Initiate method calls using jQuery promises.
            // Get the local file as an array buffer.
            var getFile = _this.getFileBuffer();
            var url = DICOMwebJS.ServerConfiguration.getStowUrl();
            var anonymizedElementsQuery = _this.getAnonymizedElementsQuery();
            getFile.done(function (arrayBuffer) {
                var proxy = new StowRsProxy(url);
                var dlg = new ModalDialog("#modal-alert");
                proxy.StoreInstance(arrayBuffer, null, anonymizedElementsQuery).done(function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
                    }
                    else {
                        dlg.showXml("XML Store Response", xhr.response);
                    }
                })
                    .fail(function (xhr) {
                    dlg.showText("Error Storing Dataset", xhr.response);
                });
            });
        });
    };
    // Get the local file as an array buffer.
    StoreView.prototype.getFileBuffer = function () {
        var fileInput = $('#getFile');
        var deferred = jQuery.Deferred();
        var reader = new FileReader();
        reader.onloadend = function (e) {
            deferred.resolve(e.target.result);
        };
        reader.onerror = function (e) {
            deferred.reject(e.target.error);
        };
        reader.readAsArrayBuffer(fileInput[0].files[0]);
        return deferred.promise();
    };
    StoreView.prototype.getAnonymizedElementsQuery = function () {
        var anonyElementsQuery = "";
        $(this._parent).find(".app-anonymizer-field").each(function (index, element) {
            var tagKey = $(element).attr("data-app-tag");
            var tagValue = $(element).val();
            if (tagValue !== "") {
                anonyElementsQuery += tagKey + "=" + tagValue + "&";
            }
        });
        return anonyElementsQuery;
    };
    return StoreView;
}());
var appUtils;
(function (appUtils) {
    function download(data, filename) {
        //http://stackoverflow.com/questions/16086162/handle-file-download-from-ajax-post/23797348#23797348
        var blob = new Blob([data], { type: "application/octet-stream" });
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            var URL = window.URL || window.webkitURL;
            var downloadUrl = URL.createObjectURL(blob);
            if (filename) {
                // use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
                // safari doesn't support this yet
                if (typeof a.download === 'undefined') {
                    window.location.assign(downloadUrl);
                }
                else {
                    a.href = downloadUrl;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    //TODO: this should be added, need testing
                    document.body.removeChild(a);
                }
            }
            else {
                window.location.assign(downloadUrl);
            }
        }
    }
    appUtils.download = download;
    function showError(message) {
        alert("Error\n\n" + message);
    }
    appUtils.showError = showError;
    function showInfo(message) {
        alert(message);
    }
    appUtils.showInfo = showInfo;
})(appUtils || (appUtils = {}));
cornerstoneWADOImageLoader.configure({
    beforeSend: function (xhr) {
        // Add custom headers here (e.g. auth tokens)
        //xhr.setRequestHeader('x-auth-token', 'my auth token');
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
    }
});
var WadoViewer = (function () {
    function WadoViewer(element, uriProx) {
        this._loaded = false;
        this._viewerElement = element;
        this._uriProxy = uriProx;
        cornerstone.enable(element);
        this.configureWebWorker();
        $(window).resize(function () {
            cornerstone.resize(element, true);
        });
        this.registerImageURLButtons();
    }
    WadoViewer.prototype.configureWebWorker = function () {
        var config = {
            webWorkerPath: 'bower_components/cornerstoneWADOImageLoader/dist/cornerstoneWADOImageLoaderWebWorker.min.js',
            taskConfiguration: {
                'decodeTask': {
                    codecsPath: 'cornerstoneWADOImageLoaderCodecs.min.js'
                }
            }
        };
        cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    };
    WadoViewer.prototype.loadInstance = function (instance, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var dicomInstance = {
            studyUID: instance.StudyInstanceUid,
            seriesUID: instance.SeriesInstanceUID,
            instanceUID: instance.SopInstanceUid
        };
        var imageParam = { frameNumber: null, transferSyntax: transferSyntax };
        var instanceUrl = this._uriProxy.createUrl(dicomInstance, MimeTypes.DICOM, imageParam);
        //add this "wadouri:" so it loads the wado uri loader, 
        //the loader trims this prefix from the url
        this.loadAndViewImage("wadouri:" + instanceUrl);
        this._loadedInstance = instance;
        this._transferSyntax = transferSyntax;
        cornerstone.resize(this._viewerElement, true);
        $("#image-url-input").val(instanceUrl);
    };
    WadoViewer.prototype.loadedInstance = function () {
        return this._loadedInstance;
    };
    WadoViewer.prototype.loadAndViewImage = function (imageId) {
        var _this = this;
        var element = this._viewerElement;
        try {
            var start = new Date().getTime();
            cornerstone.loadAndCacheImage(imageId).then(function (image) {
                console.log(image);
                var viewport = cornerstone.getDefaultViewportForImage(element, image);
                //$('#toggleModalityLUT').attr("checked",viewport.modalityLUT !== undefined);
                //$('#toggleVOILUT').attr("checked",viewport.voiLUT !== undefined);
                cornerstone.displayImage(element, image, viewport);
                if (_this._loaded === false) {
                    cornerstoneTools.mouseInput.enable(element);
                    cornerstoneTools.mouseWheelInput.enable(element);
                    cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
                    cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
                    cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
                    cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
                    cornerstoneTools.wwwcTouchDrag.activate(element);
                    _this._loaded = true;
                }
                function getTransferSyntax() {
                    var value = image.data.string('x00020010');
                    return value + ' [' + uids[value] + ']';
                }
                function getSopClass() {
                    var value = image.data.string('x00080016');
                    return value + ' [' + uids[value] + ']';
                }
                function getPixelRepresentation() {
                    var value = image.data.uint16('x00280103');
                    if (value === undefined) {
                        return;
                    }
                    return value + (value === 0 ? ' (unsigned)' : ' (signed)');
                }
                function getPlanarConfiguration() {
                    var value = image.data.uint16('x00280006');
                    if (value === undefined) {
                        return;
                    }
                    return value + (value === 0 ? ' (pixel)' : ' (plane)');
                }
                $('#transferSyntax').text(getTransferSyntax());
                $('#sopClass').text(getSopClass());
                $('#samplesPerPixel').text(image.data.uint16('x00280002'));
                $('#photometricInterpretation').text(image.data.string('x00280004'));
                $('#numberOfFrames').text(image.data.string('x00280008'));
                $('#planarConfiguration').text(getPlanarConfiguration());
                $('#rows').text(image.data.uint16('x00280010'));
                $('#columns').text(image.data.uint16('x00280011'));
                $('#pixelSpacing').text(image.data.string('x00280030'));
                $('#bitsAllocated').text(image.data.uint16('x00280100'));
                $('#bitsStored').text(image.data.uint16('x00280101'));
                $('#highBit').text(image.data.uint16('x00280102'));
                $('#pixelRepresentation').text(getPixelRepresentation());
                $('#windowCenter').text(image.data.string('x00281050'));
                $('#windowWidth').text(image.data.string('x00281051'));
                $('#rescaleIntercept').text(image.data.string('x00281052'));
                $('#rescaleSlope').text(image.data.string('x00281053'));
                $('#basicOffsetTable').text(image.data.elements.x7fe00010.basicOffsetTable ? image.data.elements.x7fe00010.basicOffsetTable.length : '');
                $('#fragments').text(image.data.elements.x7fe00010.fragments ? image.data.elements.x7fe00010.fragments.length : '');
                $('#minStoredPixelValue').text(image.minPixelValue);
                $('#maxStoredPixelValue').text(image.maxPixelValue);
                var end = new Date().getTime();
                var time = end - start;
                $('#loadTime').text(time + "ms");
            }, function (err) {
                alert(err);
            });
        }
        catch (err) {
            alert(err);
        }
    };
    WadoViewer.prototype.registerImageURLButtons = function () {
        var _this = this;
        var $copyBtn = $('#copy-image-url-button');
        var $downloadBtn = $('#dlownload-image-url-button');
        $downloadBtn.bind('click', function () {
            if (_this._loadedInstance) {
                var imageParam = { frameNumber: "", transferSyntax: _this._transferSyntax };
                var instanceParam = {
                    studyUID: _this._loadedInstance.StudyInstanceUid,
                    seriesUID: _this._loadedInstance.SeriesInstanceUID,
                    instanceUID: _this._loadedInstance.SopInstanceUid
                };
                _this._uriProxy.getDicomInstance(instanceParam, false, imageParam, function (data) {
                    appUtils.download(data, "dicom.dcm");
                }, function (err) {
                    appUtils.showError(err.message);
                });
            }
        });
        $copyBtn.on('click', function () {
            var inputSelector = $copyBtn.attr("data-clipboard-target");
            var input = document.querySelector($copyBtn.attr("data-clipboard-target"));
            if ($(inputSelector).val() == "") {
                return;
            }
            input.select();
            try {
                var success = document.execCommand('copy');
                if (success) {
                    $copyBtn.trigger('copied', ['Copied!']);
                }
                else {
                    $copyBtn.trigger('copied', ['Copy with Ctrl-c']);
                }
            }
            catch (err) {
                $copyBtn.trigger('copied', ['Copy with Ctrl-c']);
            }
        });
        // Handler for updating the tooltip message.
        $copyBtn.on('copied', function (event, message) {
            $copyBtn.attr('title', message)
                .tooltip('fixTitle')
                .tooltip('show')
                .attr('title', "Copy to Clipboard")
                .tooltip('fixTitle');
        });
    };
    return WadoViewer;
}());
window.onload = function () {
    new app();
};
var app = (function () {
    function app() {
        this.__AUTHENTICATION_COOKIE = "__dicomwebclient";
        this.init();
    }
    app.prototype.init = function () {
        if (typeof (serverUrl) != "undefined") {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = serverUrl;
        }
        else {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        }
        var model = new QueryModel();
        var rsProxy = new WadoRsProxy();
        var uriProxy = new WadoUriProxy();
        var qidoProxy = new QidoRsProxy();
        var rsService = new RetrieveService(rsProxy);
        var delowProxy = new DelowRsProxy();
        var queryView = new QueryView(document.getElementById("#content"), model, rsService);
        var queryController = new QueryController(queryView, model, qidoProxy, rsService, uriProxy, delowProxy);
        var element = $('#dicomImage').get(0);
        var viewer = new WadoViewer(element, uriProxy);
        this.initAuthentication();
        queryView.instanceViewRequest.on(function (args) {
            $('.nav-tabs a[href="#_ViewerView"]').tab('show');
            viewer.loadInstance(args.InstanceParams);
        });
        $("#SelectedTransferSyntax").change(function () {
            var loadedInstance = viewer.loadedInstance();
            if (null != loadedInstance) {
                viewer.loadInstance(loadedInstance, $("#SelectedTransferSyntax").val());
            }
        });
        new StoreView($("#_StoreView")[0]);
        window.onerror = function (message, url, lineNumber) {
            //save error and send to server for example.
            alert(message + "\n" + url + "\n" + lineNumber);
            return true;
        };
        $("#serverList").change(function () {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        });
    };
    //public initViewer() {
    //   // base function to get elements
    //   dwv.gui.getElement = dwv.gui.base.getElement;
    //   dwv.gui.displayProgress = function (percent) { };
    //   // create the dwv app
    //   var viewer = new dwv.App();
    //   // initialise with the id of the container div
    //   viewer.init({
    //      "containerDivId": "dwv",
    //      "tools": ["WindowLevel"], // or try "ZoomAndPan"
    //   });
    //   return viewer;
    //}
    app.prototype.initAuthentication = function () {
        var token = this.getAuthenticationToken();
        if (token) {
            DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader = true;
            DICOMwebJS.ServerConfiguration.SecurityToken = "Bearer " + token;
        }
    };
    app.prototype.getAuthenticationToken = function () {
        var name = this.__AUTHENTICATION_COOKIE;
        //http://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
        //function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
        //}
    };
    return app;
}());
$(document).on('change', '.btn-file :file', function () {
    var input = $(this), numFiles = input.get(0).files ? input.get(0).files.length : 1, label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});
$(document).ready(function () {
    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents('.input-group').find(':text'), log = numFiles > 1 ? numFiles + ' files selected' : label;
        if (input.length) {
            input.val(log);
        }
        else {
            if (log)
                alert(log);
        }
    });
});
var QueryController = (function () {
    function QueryController(queryView, queryModel, queryService, retrieveService, wadoUriService, delowRsProxy) {
        this._queryView = queryView;
        this._queryModel = queryModel;
        this._queryService = queryService;
        this._retrieveService = retrieveService;
        this._wadoUriService = wadoUriService;
        this._delowRsProxy = delowRsProxy;
        this.registerEvents();
    }
    QueryController.prototype.registerEvents = function () {
        var _this = this;
        this._queryView.qidoStudy.on(function (args) {
            var query = new StudyParams();
            var request = _this.getQidoQueryParam(query, args.MediaType, "QIDO-RS Study");
            query.StudyInstanceUid = args.StudyInstanceUID;
            _this._queryService.findStudies(request);
        });
        this._queryView.qidoSeries.on(function (args) {
            var query = new SeriesParams();
            var request = _this.getQidoQueryParam(query, args.MediaType, "QIDO-RS Series");
            query.StudyInstanceUid = args.StudyInstanceUID;
            query.SeriesInstanceUID = args.SeriesInstanceUID;
            _this._queryService.findSeries(request);
        });
        this._queryView.qidoInstance.on(function (args) {
            var query = new InstanceParams();
            var request = _this.getQidoQueryParam(query, args.MediaType, "QIDO-RS Instance");
            query.StudyInstanceUid = args.StudyInstanceUID;
            query.SeriesInstanceUID = args.SeriesInstanceUID;
            query.SopInstanceUid = args.SopInstanceUID;
            _this._queryService.findInstances(request);
        });
        this._queryView.instanceMetaDataRequest.on(function (args) {
            _this._retrieveService.getObjectInstanceMetadata(args.InstanceParams, function (data) {
                _this._queryView.showInstanceMetadata(data, args);
            }, args.MediaType);
        });
        this._queryView.instanceRequest.on(function (args) {
            _this._retrieveService.getObjectInstance(args.InstanceParams, args.MediaType, function (data) {
                appUtils.download(data, "wado-rs.txt");
            });
        });
        this._queryView.framesRequest.on(function (args) {
            _this._retrieveService.getFrameUncompressed(args.InstanceParams, args.FrameList, function (data) {
                appUtils.download(data, "wado-rs.frm");
            }, function (ev) {
                appUtils.showError();
            });
        });
        this._queryView.wadoUriRequest.on(function (args) {
            var instance = {
                studyUID: args.InstanceParams.StudyInstanceUid,
                seriesUID: args.InstanceParams.SeriesInstanceUID,
                instanceUID: args.InstanceParams.SopInstanceUid
            };
            var imageParam = { frameNumber: args.Frame, transferSyntax: null };
            _this._wadoUriService.getDicomInstance(instance, false, imageParam, function (data) {
                appUtils.download(data, "dicom.dcm");
            }, function (err) {
                appUtils.showError();
            });
        });
        this._queryView.deleteStudyRequest.on(function (args) {
            _this._delowRsProxy.deleteStudy(args.StudyParams.StudyInstanceUid)
                .done(function (response) {
                appUtils.showInfo("Success");
            })
                .fail(function (error) {
                appUtils.showError(error);
            });
        });
        this._queryModel.StudyQueryChangedEvent = function () {
            _this.queryStudies();
        };
        this._queryModel.SelectedStudyChangedEvent.on(function () {
            _this.querySeries(_this._queryModel.selectedStudy());
        });
        this._queryModel.SelectedSeriesChangedEvent.on(function () {
            _this.queryInstances(_this._queryModel.selectedSeries());
        });
    };
    QueryController.prototype.queryStudies = function () {
        var _this = this;
        if (!this._queryModel.StudyQueryParams) {
            return;
        }
        var params = {
            query: this._queryModel.StudyQueryParams,
            returnValues: [],
            options: null,
            acceptType: MimeTypes.Json,
            success: function (data) {
                _this.onQueryStudies(data);
            },
            error: this.onQueryError
        };
        this._queryService.findStudies(params);
    };
    QueryController.prototype.querySeries = function (study) {
        var _this = this;
        if (!study) {
            return;
        }
        var params = {
            query: study,
            returnValues: [],
            options: null,
            acceptType: MimeTypes.Json,
            success: function (data) {
                _this.onQuerySeries(data);
            },
            error: this.onQueryError
        };
        this._queryService.findSeries(params);
    };
    QueryController.prototype.queryInstances = function (series) {
        var _this = this;
        if (!series) {
            return;
        }
        var params = {
            query: series,
            returnValues: [],
            options: null,
            acceptType: MimeTypes.Json,
            success: function (data) {
                _this.onQueryInstances(data);
            },
            error: this.onQueryError
        };
        this._queryService.findInstances(params);
    };
    QueryController.prototype.onQueryStudies = function (data) {
        //TODO: use a model service for getting 
        //the response data and converting it
        var length = data.length;
        var studies = [];
        while (length--) {
            var dsService = new JsonDicomDatasetService();
            dsService.setModel(data[length]);
            studies[length] = new StudyParams(dsService);
        }
        this._queryModel.Studies = studies;
    };
    QueryController.prototype.onQuerySeries = function (data) {
        var length = data.length;
        var series = [];
        while (length--) {
            var dsService = new JsonDicomDatasetService();
            dsService.setModel(data[length]);
            series[length] = new SeriesParams(dsService);
        }
        this._queryModel.Series = series;
    };
    QueryController.prototype.onQueryInstances = function (data) {
        var length = data.length;
        var instances = [];
        while (length--) {
            var dsService = new JsonDicomDatasetService();
            dsService.setModel(data[length]);
            instances[length] = new InstanceParams(dsService);
        }
        this._queryModel.Instances = instances;
    };
    QueryController.prototype.getQidoQueryParam = function (query, mediaType, operation) {
        var _this = this;
        var request = {
            query: query,
            returnValues: [],
            options: null,
            acceptType: mediaType,
            success: function (data) {
                _this.showDialog(operation, mediaType, data);
            },
            error: function () {
                alert(operation + " Failed");
            }
        };
        return request;
    };
    QueryController.prototype.showDialog = function (title, mediaType, data) {
        var title = title + " (" + mediaType + ")";
        var dlg = new ModalDialog("#modal-alert");
        if (mediaType == MimeTypes.Json) {
            dlg.showJson(title, data);
        }
        else {
            dlg.showXml(title, data);
        }
    };
    QueryController.prototype.onQueryError = function (textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    };
    return QueryController;
}());
//TODO: update events with real listenr, currently they are just callbacks to one function
var QueryModel = (function () {
    function QueryModel() {
        this.StudyQueryChangedEvent = null;
        this.StudiesChangedEvent = null;
        this.SeriesChangedEvent = null;
        this.InstancesChangedEvent = null;
        this._onSelectedStudyChanged = new LiteEvent();
        this._onSelectedSeriesChanged = new LiteEvent();
        this._onSelectedInstanceChanged = new LiteEvent();
        this._studyQueryParams = new StudyParams(new JsonDicomDatasetService());
        this._studies = [];
        this._series = [];
        this._instances = [];
        this.__NOT_SELECTED = -1;
        this._selectedStudyIndex = this.__NOT_SELECTED;
        this._selectedSeriesIndex = this.__NOT_SELECTED;
        this._selectedInstancesIndex = this.__NOT_SELECTED;
    }
    Object.defineProperty(QueryModel.prototype, "SelectedStudyChangedEvent", {
        get: function () { return this._onSelectedStudyChanged; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "SelectedSeriesChangedEvent", {
        get: function () { return this._onSelectedSeriesChanged; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "SelectedInstanceChangedEvent", {
        get: function () { return this._onSelectedInstanceChanged; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "StudyQueryParams", {
        get: function () {
            return this._studyQueryParams;
        },
        set: function (value) {
            this._studyQueryParams = value;
            this.onStudyQueryChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "Studies", {
        get: function () {
            return this._studies;
        },
        set: function (value) {
            if (value != this._studies) {
                this._studies = value;
                this.onStudiesChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "Series", {
        get: function () {
            return this._series;
        },
        set: function (value) {
            if (value != this._studies) {
                this._series = value;
                this.onSeriesChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "Instances", {
        get: function () {
            return this._instances;
        },
        set: function (value) {
            if (value != this._instances) {
                this._instances = value;
                this.onInstancesChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "SelectedStudyIndex", {
        get: function () {
            return this._selectedStudyIndex;
        },
        set: function (value) {
            //if (this._selectedStudyIndex != value) 
            {
                if (this._studies.length <= value || value < this.__NOT_SELECTED) {
                    throw new RangeError();
                }
                this._selectedStudyIndex = value;
                this.onSelectedStudyChanged();
                this.Series = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "SelectedSeriesIndex", {
        get: function () {
            return this._selectedSeriesIndex;
        },
        set: function (value) {
            //if (this._selectedSeriesIndex != value)
            {
                if (this._series.length <= value || value < this.__NOT_SELECTED) {
                    throw new RangeError();
                }
                this._selectedSeriesIndex = value;
                this.onSelectedSeriesChanged();
                this.Instances = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryModel.prototype, "SelectedInstanceIndex", {
        get: function () {
            return this._selectedInstancesIndex;
        },
        set: function (value) {
            //if (this._selectedInstancesIndex != value) 
            {
                if (this._instances.length <= value || value < this.__NOT_SELECTED) {
                    throw new RangeError();
                }
                this._selectedInstancesIndex = value;
                this.onSelectedInstanceChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    QueryModel.prototype.selectedStudy = function () {
        if (this._studies.length > 0) {
            return this._studies[this._selectedStudyIndex];
        }
        return null;
    };
    QueryModel.prototype.selectedSeries = function () {
        if (this._series.length > 0) {
            return this._series[this._selectedSeriesIndex];
        }
        return null;
    };
    QueryModel.prototype.selectedInstance = function () {
        if (this._instances.length > 0) {
            return this._instances[this._selectedInstancesIndex];
        }
        return null;
    };
    QueryModel.prototype.onStudyQueryChanged = function () {
        if (this.StudyQueryChangedEvent) {
            this.StudyQueryChangedEvent();
        }
    };
    QueryModel.prototype.onSelectedStudyChanged = function () {
        this._onSelectedStudyChanged.trigger();
    };
    QueryModel.prototype.onSelectedSeriesChanged = function () {
        this._onSelectedSeriesChanged.trigger();
    };
    QueryModel.prototype.onSelectedInstanceChanged = function () {
        this._onSelectedInstanceChanged.trigger();
    };
    QueryModel.prototype.onStudiesChanged = function () {
        //calling props to fire events
        this.SelectedStudyIndex = this.__NOT_SELECTED;
        this.SelectedSeriesIndex = this.__NOT_SELECTED;
        this.SelectedInstanceIndex = this.__NOT_SELECTED;
        if (this.StudiesChangedEvent) {
            this.StudiesChangedEvent();
        }
    };
    QueryModel.prototype.onSeriesChanged = function () {
        this.SelectedSeriesIndex = this.__NOT_SELECTED;
        this.SelectedInstanceIndex = this.__NOT_SELECTED;
        if (this.SeriesChangedEvent) {
            this.SeriesChangedEvent();
        }
    };
    QueryModel.prototype.onInstancesChanged = function () {
        this._selectedInstancesIndex = this.__NOT_SELECTED;
        if (this.InstancesChangedEvent) {
            this.InstancesChangedEvent();
        }
    };
    return QueryModel;
}());
/// <reference path="../../scripts/typings/libs/ace.d.ts" />
/// <reference path="../../scripts/typings/libs/html.ts" />
var QueryView = (function () {
    function QueryView(parentElement, model, retrieveService) {
        //these will be replaced by some event dispatcher, 
        //keep it simple for now
        this.RetrieveInstanceEvent = null;
        //EVENTS
        this._onQidoStudy = new LiteEvent();
        this._onQidoSeries = new LiteEvent();
        this._onQidoInstance = new LiteEvent();
        this._onInstanceMetadata = new LiteEvent();
        this._onInstance = new LiteEvent();
        this._onFrames = new LiteEvent();
        this._onWadoUri = new LiteEvent();
        this._onDeleteStudy = new LiteEvent();
        this._onViewInstance = new LiteEvent();
        this._ViewClassName = {
            $SeriesQuery: ".series-query", $StudyQuery: ".studies-query", $InstanceQuery: ".instance-query",
            SeriesQuery: "series-query", StudyQuery: "studies-query", InstanceQuery: "instance-query"
        };
        this._parent = parentElement;
        this._model = model;
        this._retrieveService = retrieveService;
        this._$studiesView = $(this._ViewClassName.$StudyQuery);
        this._$seriesView = $(this._ViewClassName.$SeriesQuery);
        this._$instanceView = $(this._ViewClassName.$InstanceQuery);
        this.buildQueryControl();
        this.createViewTemplates();
        $(".instance-details").hide();
        this.registerEvents();
    }
    Object.defineProperty(QueryView.prototype, "qidoStudy", {
        get: function () { return this._onQidoStudy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "qidoSeries", {
        get: function () { return this._onQidoSeries; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "qidoInstance", {
        get: function () { return this._onQidoInstance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "instanceMetaDataRequest", {
        get: function () { return this._onInstanceMetadata; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "instanceRequest", {
        get: function () { return this._onInstance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "framesRequest", {
        get: function () { return this._onFrames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "wadoUriRequest", {
        get: function () { return this._onWadoUri; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "deleteStudyRequest", {
        get: function () { return this._onDeleteStudy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "instanceViewRequest", {
        get: function () { return this._onViewInstance; },
        enumerable: true,
        configurable: true
    });
    QueryView.prototype.clearInstanceMetadata = function () {
        var editor;
        var editorSession;
        editor = ace.edit($(".pacs-metadata-viewer")[0]);
        editorSession = editor.getSession();
        editorSession.setValue("");
    };
    QueryView.prototype.showInstanceMetadata = function (data, args) {
        if (args.MediaType == MimeTypes.Json) {
            this.renderJson($(".pacs-metadata-viewer"), data);
        }
        if (args.MediaType == MimeTypes.xmlDicom) {
            this.renderXml($(".pacs-metadata-viewer"), data);
        }
    };
    QueryView.prototype.bin2String = function (array) {
        return String.fromCharCode.apply(String, array);
    };
    QueryView.prototype.registerEvents = function () {
        var _this = this;
        this._model.StudiesChangedEvent = function () {
            _this.renderStudies();
        };
        this._model.SeriesChangedEvent = function () {
            _this.renderSeries();
        };
        this._model.InstancesChangedEvent = function () {
            _this.renderInstances();
        };
        this._model.SelectedStudyChangedEvent.on(function () {
            var index = _this._model.SelectedStudyIndex;
            _this._$studiesView.find(".thumbnail").removeClass("selected");
            if (index != -1) {
                _this._$studiesView.find(".thumbnail").eq(index).addClass("selected");
                $(".study-overview").text("| (Patient: " + _this._model.Studies[index].PatientName.Alphabetic + ")");
            }
            else {
                $(".study-overview").text("");
            }
        });
        this._model.SelectedSeriesChangedEvent.on(function () {
            var index = _this._model.SelectedSeriesIndex;
            _this._$seriesView.find(".thumbnail").removeClass("selected");
            if (index != -1) {
                _this._$seriesView.find(".thumbnail").eq(index).addClass("selected");
            }
        });
        this._model.SelectedInstanceChangedEvent.on(function () {
            var index = _this._model.SelectedInstanceIndex;
            _this._$instanceView.find(".thumbnail").removeClass("selected");
            _this.clearInstanceMetadata();
            if (index == -1) {
                $(".instance-details").hide();
            }
            else {
                _this._$instanceView.find(".thumbnail").eq(index).addClass("selected");
                $(".instance-details").show();
            }
        });
        $("*[data-rs-frames]").on("click", function (ev) {
            var instance = _this._model.selectedInstance();
            if (instance) {
                var frameList = _this.geFramsList();
                var args = new RsFramesEventArgs(instance, $(ev.target).attr("data-pacs-args"), frameList);
                _this._onFrames.trigger(args);
            }
            ev.preventDefault();
            return false;
        });
        $("*[data-uri-instance]").on("click", function (ev) {
            var instance = _this._model.selectedInstance();
            if (instance) {
                var frame = _this.geUriFrame();
                var args = new WadoUriEventArgs(instance, $(ev.target).attr("data-pacs-args"), frame);
                _this._onWadoUri.trigger(args);
            }
            ev.preventDefault();
            return false;
        });
    };
    QueryView.prototype.StudiesChangedHandler = function () {
        this.renderStudies();
    };
    QueryView.prototype.SeriesChangedHandler = function () {
        this.renderSeries();
    };
    QueryView.prototype.render = function () {
        this.renderStudies();
        this.renderSeries();
        this.renderInstances();
    };
    QueryView.prototype.renderStudies = function () {
        var _this = this;
        $(this._ViewClassName.$StudyQuery).html("");
        this._model.Studies.forEach(function (value, index, array) {
            var $studyItem = _this.createStudyItem(value, index);
            $studyItem.appendTo($(_this._ViewClassName.$StudyQuery));
        });
        if (!$("#studyCollapse").hasClass("in")) {
            $("#studyCollapse").collapse("show");
        }
        $("*[data-pacs-study-count]").text(this._model.Studies.length);
    };
    QueryView.prototype.renderSeries = function () {
        var _this = this;
        this._$seriesView.html("");
        this._model.Series.forEach(function (value, index, array) {
            var $seriesItem = _this.createSeriesItem(value, index);
            $seriesItem.appendTo(_this._$seriesView);
        });
        $("#seriesCollapse").collapse("show");
        $("*[data-pacs-series-count]").text(this._model.Series.length);
    };
    QueryView.prototype.renderInstances = function () {
        var _this = this;
        this._$instanceView.html("");
        this.renderJson($(".pacs-metadata-viewer"), "");
        this._model.Instances.forEach(function (value, index, array) {
            var $instanceItem = _this.createInstanceItem(value, index);
            $instanceItem.appendTo(_this._$instanceView);
        });
        $("#instanceCollapse").collapse("show");
        $("*[data-pacs-instance-count]").text(this._model.Instances.length);
    };
    QueryView.prototype.buildQueryControl = function () {
        var _this = this;
        $("#searchButton").click(function (args) {
            args.preventDefault();
            var queryModel = _this._model.StudyQueryParams;
            queryModel.PatientId = $("#patientIdInput").val();
            queryModel.PatientName = $("#patientNameInput").val();
            queryModel.StudyDate = $("#studyDateInput").val();
            queryModel.StudyID = $("#studyIdInput").val();
            _this._model.StudyQueryParams = queryModel;
            return false;
        });
    };
    //TODO: zaid-move this to the app
    QueryView.prototype.createViewTemplates = function () {
        this.createStudyTemplate();
        this.createSeriesTemplate();
        this.createInstanceTemplate();
    };
    QueryView.prototype.getTemplateRelativePath = function (templatePath) {
        //take the relative path name and remove / if exists
        return window.location.pathname.replace(/\/$/, "") + templatePath;
    };
    QueryView.prototype.createStudyTemplate = function () {
        var _this = this;
        var ajaxSettings = {};
        ajaxSettings.url = this.getTemplateRelativePath("/_StudyItem/");
        ajaxSettings.success = function (data, textStatus, jqXHR) {
            _this._$studyItemTemplate = $(data);
        };
        ajaxSettings.error = function (jsXHR, testStatus, errorThrown) {
            alert("error getting study item");
        };
        $.ajax(ajaxSettings);
    };
    QueryView.prototype.createSeriesTemplate = function () {
        var _this = this;
        $.get(this.getTemplateRelativePath("/_SeriesItem/"), function (data, textStatus, jqXHR) {
            _this._$seriesItemTemplate = $(data);
        }, "html");
    };
    QueryView.prototype.createInstanceTemplate = function () {
        var _this = this;
        $.get(this.getTemplateRelativePath("/_InstanceItem/"), function (data, textStatus, jqXHR) {
            _this._$instanceItemTemplate = $(data);
        }, "html");
    };
    QueryView.prototype.getContentView = function ($parentView, viewId) {
        var targetItemId = $parentView.find("*[data-target]").attr("data-target");
        if (targetItemId) {
            var $seriesView;
            $parentView.find("*[data-target]").attr("data-target", "#" + viewId);
            $seriesView = $parentView.find(targetItemId);
            $seriesView.attr("id", viewId);
            return $seriesView;
        }
        return null;
    };
    QueryView.prototype.createStudyItem = function (study, index) {
        var $item = this._$studyItemTemplate.clone();
        var patientName = "";
        if (study.PatientName) {
            patientName = study.PatientName.Alphabetic;
        }
        $item.find("*[data-pacs-patientName]").text(patientName);
        $item.find("*[data-pacs-patientId]").text(study.PatientId);
        $item.find("*[data-pacs-accessionNumber]").text(study.AccessionNumber);
        $item.find("*[data-pacs-studyDate]").text(study.StudyDate);
        $item.find("*[data-pacs-studyID]").text(study.StudyID);
        $item.find("*[data-pacs-studyDesc]").text(study.StudyDescription);
        this.registerStudyEvents(study, $item, index);
        return $item;
    };
    QueryView.prototype.createSeriesItem = function (series, index) {
        var $item = this._$seriesItemTemplate.clone();
        this.updateSeriesItem(series, $item);
        this.registerSeriesEvents(series, $item, index);
        return $item;
    };
    QueryView.prototype.createInstanceItem = function (instance, index) {
        var $item = this._$instanceItemTemplate.clone();
        $item.find("*[data-pacs-InstanceNum]").text(instance.InstanceNumber);
        //$item.find("*[data-pacs-SopInstanceUid]").text(instance.SopInstanceUid);
        this.registerInstanceEvents(instance, $item, index);
        return $item;
    };
    QueryView.prototype.updateSeriesItem = function (series, $item) {
        $item.find("*[data-pacs-seriesNum]").text(series.SeriesNumber);
        $item.find("*[data-pacs-modality]").text(series.Modality);
        $item.find("*[data-pacs-seriesDesc]").text(series.SeriesDescription);
        $item.find("*[data-pacs-seriesDate]").text(series.SeriesDate);
    };
    QueryView.prototype.registerStudyEvents = function (study, $item, index) {
        var _this = this;
        $item.find(".thumbnail").on("click", function (ev) {
            _this._model.SelectedStudyIndex = index;
            $("#studyCollapse").collapse("hide");
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-study-json]").on("click", function (ev) {
            _this._retrieveService.getStudyAsJson(study, function (studyInstances) {
                _this.ViewJsonDlg(studyInstances, "(" + studyInstances.length + ") Study Instances Response");
            });
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-study-xml]").on("click", function (ev) {
            _this._retrieveService.getStudyAsXml(study, function (studyInstances) {
                _this.ViewXmlDlg(studyInstances, "Multipart DICOM+XML Study Instances Response");
            });
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-viewQidoStudy="json"]').on("click", function (ev) {
            var args = new QidoRsEventArgs(MimeTypes.Json, study.StudyInstanceUid);
            _this._onQidoStudy.trigger(args);
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-viewQidoStudy="xml"]').on("click", function (ev) {
            var args = new QidoRsEventArgs(MimeTypes.xmlDicom, study.StudyInstanceUid);
            _this._onQidoStudy.trigger(args);
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-deletestudy="true"]').on("click", function (ev) {
            var args = new StudyEventArgs(study);
            _this._onDeleteStudy.trigger(args);
            ev.preventDefault();
            return false;
        });
    };
    QueryView.prototype.registerSeriesEvents = function (series, $item, index) {
        var _this = this;
        $item.find(".panel-body").on("click", function (ev) {
            _this._model.SelectedSeriesIndex = index;
            $("#seriesCollapse").collapse("hide");
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-series-json]").on("click", function (ev) {
            _this._retrieveService.getSeries(series, function (seriesInstances) {
                _this.ViewJsonDlg(seriesInstances, "(" + seriesInstances.length + ") Series Instances Response");
            }, MimeTypes.Json);
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-series-xml]").on("click", function (ev) {
            _this._retrieveService.getSeries(series, function (seriesInstances) {
                _this.ViewXmlDlg(seriesInstances, "Multipart DICOM+XML Study Instances Response");
            }, MimeTypes.xmlDicom);
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-viewQidoSeries="json"]').on("click", function (ev) {
            var args = new QidoRsEventArgs(MimeTypes.Json, series.StudyInstanceUid, series.SeriesInstanceUID);
            _this._onQidoSeries.trigger(args);
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-viewQidoSeries="xml"]').on("click", function (ev) {
            var args = new QidoRsEventArgs(MimeTypes.xmlDicom, series.StudyInstanceUid, series.SeriesInstanceUID);
            _this._onQidoSeries.trigger(args);
            ev.preventDefault();
            return false;
        });
    };
    QueryView.prototype.registerInstanceEvents = function (instance, $item, index) {
        var _this = this;
        $item.find(".panel-body").on("click", function (ev) {
            _this._model.SelectedInstanceIndex = index;
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-viewQidoInstance="json"]').on("click", function (ev) {
            var args = new QidoRsEventArgs(MimeTypes.Json, instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid);
            _this._onQidoInstance.trigger(args);
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-viewQidoInstance="xml"]').on("click", function (ev) {
            var args = new QidoRsEventArgs(MimeTypes.xmlDicom, instance.StudyInstanceUid, instance.SeriesInstanceUID, instance.SopInstanceUid);
            _this._onQidoInstance.trigger(args);
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-instance-json]").on("click", function (ev) {
            _this._retrieveService.getObjectInstanceMetadata(instance, function (instanceJson) {
                _this.ViewJsonDlg(instanceJson, "Instance Response");
            }, MimeTypes.Json);
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-instance-xml]").on("click", function (ev) {
            _this._retrieveService.getObjectInstanceMetadata(instance, function (instanceXml) {
                _this.ViewXmlDlg(instanceXml, "Multipart DICOM+XML Instance Response");
            }, MimeTypes.xmlDicom);
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-viewInstanceViewer]").on("click", function (ev) {
            _this._onViewInstance.trigger(new WadoUriEventArgs(instance, MimeTypes.DICOM, ""));
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-rs-instance]").on("click", function (ev) {
            var args = new RsInstanceEventArgs(instance, $(ev.target).attr("data-pacs-args"));
            _this._onInstance.trigger(args);
            ev.preventDefault();
            return false;
        });
    };
    QueryView.prototype.geFramsList = function () {
        var frameNumber;
        frameNumber = $("*[data-rs-frames-input]").val();
        if (frameNumber) {
            return frameNumber;
        }
        return "1";
    };
    QueryView.prototype.geUriFrame = function () {
        return $("*[data-uri-frame-input]").val();
    };
    QueryView.prototype.ViewJsonDlg = function (data, caption) {
        var dlg = new ModalDialog("#modal-alert");
        dlg.showJson(caption, data);
    };
    QueryView.prototype.ViewXmlDlg = function (data, caption) {
        var dlg = new ModalDialog("#modal-alert");
        dlg.showXml(caption, data);
    };
    QueryView.prototype.renderJson = function ($contentElement, data) {
        var editor;
        var editorSession;
        editor = ace.edit($contentElement[0]);
        editorSession = editor.getSession();
        editorSession.setValue(JSON.stringify(data, null, '\t'));
        editorSession.setMode("ace/mode/json");
        editor.resize();
    };
    QueryView.prototype.renderXml = function ($contentElement, data) {
        var editor;
        var editorSession;
        editor = ace.edit($contentElement[0]);
        editorSession = editor.getSession();
        editorSession.setValue(data);
        editorSession.setMode("ace/mode/html");
        editor.resize();
    };
    return QueryView;
}());
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
var CodeRenderer = (function () {
    function CodeRenderer() {
    }
    CodeRenderer.renderJson = function (uiElement, data) {
        var editor = uiElement;
        ;
        var editorSession;
        editor = ace.edit(uiElement);
        editorSession = editor.getSession();
        editorSession.setValue(JSON.stringify(data, null, '\t'));
        editorSession.setMode("ace/mode/json");
        editor.resize();
    };
    CodeRenderer.renderXml = function (uiElement, data) {
        var editor;
        var editorSession;
        editor = ace.edit(uiElement);
        editorSession = editor.getSession();
        editorSession.setValue(data);
        editorSession.setMode("ace/mode/html");
        editor.resize();
    };
    CodeRenderer.renderValue = function (uiElement, data) {
        this.renderEditor(uiElement, data);
    };
    CodeRenderer.renderEditor = function (uiElement, data, editorMode) {
        var editor;
        var editorSession;
        editor = ace.edit(uiElement);
        editorSession = editor.getSession();
        editorSession.setValue(data);
        if (typeof editorMode !== "undefined") {
            editorSession.setMode(editorMode);
        }
        editor.resize();
    };
    return CodeRenderer;
}());
var LiteEvent = (function () {
    function LiteEvent() {
        this.handlers = [];
    }
    LiteEvent.prototype.on = function (handler) {
        this.handlers.push(handler);
    };
    LiteEvent.prototype.off = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    LiteEvent.prototype.trigger = function (data) {
        this.handlers.slice(0).forEach(function (h) { return h(data); });
    };
    return LiteEvent;
}());
/// <reference path="coderenderer.ts" />
var ModalDialog = (function () {
    function ModalDialog($dialogName) {
        this._onDlgClose = new LiteEvent();
        this._$dialogName = $dialogName;
    }
    Object.defineProperty(ModalDialog.prototype, "dilaogClosed", {
        get: function () { return this._onDlgClose; },
        enumerable: true,
        configurable: true
    });
    ModalDialog.prototype.showJson = function (title, data) {
        var $dlg = $(this._$dialogName);
        var $contentElement = $dlg.find(".model-body-content");
        $dlg.find(".modal-title").text(title);
        CodeRenderer.renderJson($contentElement[0], data);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.showXml = function (title, data) {
        var $dlg = $(this._$dialogName);
        var $contentElement = $dlg.find(".model-body-content");
        $dlg.find(".modal-title").text(title);
        CodeRenderer.renderXml($contentElement[0], data);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.showText = function (title, data) {
        var $dlg = $(this._$dialogName);
        var $contentElement = $dlg.find(".model-body-content");
        $dlg.find(".modal-title").text(title);
        CodeRenderer.renderValue($contentElement[0], data);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.show = function (title) {
        var $dlg = $(this._$dialogName);
        $dlg.find(".modal-title").text(title);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.onDialogClose = function ($dlg) {
        var _this = this;
        $dlg.on('hidden.bs.modal', function () {
            _this._onDlgClose.trigger(_this._$dialogName);
        });
    };
    return ModalDialog;
}());
var QidoRsEventArgs = (function () {
    function QidoRsEventArgs(mediaType, studyInstanceUid, seriesInstanceUid, sopInstanceUid) {
        this.StudyInstanceUID = studyInstanceUid;
        this.SeriesInstanceUID = seriesInstanceUid;
        this.SopInstanceUID = sopInstanceUid;
        this.MediaType = mediaType;
    }
    Object.defineProperty(QidoRsEventArgs.prototype, "StudyInstanceUID", {
        get: function () {
            return this._studyInstanceUid;
        },
        set: function (studyInstanceUID) {
            this._studyInstanceUid = studyInstanceUID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QidoRsEventArgs.prototype, "SeriesInstanceUID", {
        get: function () {
            return this._seriesInstanceUid;
        },
        set: function (seriesInstanceUID) {
            this._seriesInstanceUid = seriesInstanceUID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QidoRsEventArgs.prototype, "SopInstanceUID", {
        get: function () {
            return this._sopInstanceUid;
        },
        set: function (sopInstanceUID) {
            this._sopInstanceUid = sopInstanceUID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QidoRsEventArgs.prototype, "MediaType", {
        get: function () {
            return this._mediaType;
        },
        set: function (mediaType) {
            this._mediaType = mediaType;
        },
        enumerable: true,
        configurable: true
    });
    return QidoRsEventArgs;
}());
var RsInstanceEventArgs = (function () {
    function RsInstanceEventArgs(instance, mediaType) {
        this._instanceParams = instance;
        this._mediaType = mediaType;
    }
    Object.defineProperty(RsInstanceEventArgs.prototype, "InstanceParams", {
        get: function () {
            return this._instanceParams;
        },
        set: function (instance) {
            this._instanceParams = instance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(RsInstanceEventArgs.prototype, "MediaType", {
        get: function () {
            return this._mediaType;
        },
        set: function (mediaType) {
            this._mediaType = mediaType;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return RsInstanceEventArgs;
}());
/// <reference path="rsinstanceeventargs.ts" />
var RsFramesEventArgs = (function (_super) {
    __extends(RsFramesEventArgs, _super);
    function RsFramesEventArgs(instance, mediaType, frames) {
        var _this = _super.call(this, instance, mediaType) || this;
        _this._frames = frames;
        return _this;
    }
    Object.defineProperty(RsFramesEventArgs.prototype, "FrameList", {
        get: function () {
            return this._frames;
        },
        set: function (frames) {
            this._frames = frames;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return RsFramesEventArgs;
}(RsInstanceEventArgs));
var StudyEventArgs = (function () {
    function StudyEventArgs(study) {
        this._studyParams = study;
    }
    Object.defineProperty(StudyEventArgs.prototype, "StudyParams", {
        get: function () {
            return this._studyParams;
        },
        set: function (instance) {
            this._studyParams = instance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return StudyEventArgs;
}());
var WadoUriEventArgs = (function (_super) {
    __extends(WadoUriEventArgs, _super);
    function WadoUriEventArgs(instance, contentType, frame) {
        var _this = _super.call(this, instance, contentType) || this;
        _this._frame = "";
        _this._frame = frame;
        return _this;
    }
    Object.defineProperty(WadoUriEventArgs.prototype, "Frame", {
        get: function () {
            return this._frame;
        },
        set: function (frame) {
            this._frame = frame;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return WadoUriEventArgs;
}(RsInstanceEventArgs));
//# sourceMappingURL=dicomwebjs-demo.js.map