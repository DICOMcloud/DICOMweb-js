var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
})(appUtils || (appUtils = {}));
var copyImageUrlView = (function () {
    function copyImageUrlView($parent, uriProxy) {
        this._$parent = $parent;
        this._uriProxy = uriProxy;
        this._instanceUrl = null;
        this._$copyBtn = $parent.find('#copy-image-url-button');
        this._$downloadBtn = $parent.find('#dlownload-image-url-button');
        this.registerImageURLButtons();
    }
    copyImageUrlView.prototype.setUrl = function (instanceUrl) {
        this._instanceUrl = instanceUrl;
        this._$parent.find("#image-url-input").val(instanceUrl);
    };
    copyImageUrlView.prototype.registerImageURLButtons = function () {
        var _this = this;
        this._$downloadBtn.bind('click', function () {
            if (_this._instanceUrl) {
                _this._uriProxy.getObjectInstance(_this._instanceUrl).done(function (data) {
                    appUtils.download(data, "dicom.dcm");
                }).fail(function (err) {
                    new ModalDialog().showError("Error", err.message);
                });
            }
        });
        this._$copyBtn.on('click', function () {
            var inputSelector = _this._$copyBtn.attr("data-clipboard-target");
            var input = _this._$parent[0].querySelector(inputSelector);
            if ($(input).val() == "") {
                return;
            }
            input.select();
            try {
                var success = document.execCommand('copy');
                if (success) {
                    _this._$copyBtn.trigger('copied', ['Copied!']);
                }
                else {
                    _this._$copyBtn.trigger('copied', ['Copy with Ctrl-c']);
                }
            }
            catch (err) {
                _this._$copyBtn.trigger('copied', ['Copy with Ctrl-c']);
            }
        });
        // Handler for updating the tooltip message.
        this._$copyBtn.on('copied', function (event, message) {
            _this._$copyBtn.attr('title', message)
                .tooltip('fixTitle')
                .tooltip('show')
                .attr('title', "Copy to Clipboard")
                .tooltip('fixTitle');
        });
    };
    return copyImageUrlView;
}());
/// <reference path="../scripts/typings/dicomwebjs/dicomwebjs.d.ts" />
jQuery(document).ready(function () {
    new app();
    $(document).ajaxError(function (event, request, settings, thrownError) {
        new ModalDialog().showError("Error", thrownError);
    });
});
var app = (function () {
    function app() {
        this.__AUTHENTICATION_COOKIE = "__dicomwebclient";
        this.init();
    }
    app.prototype.init = function () {
        var _this = this;
        if (typeof (serverUrl) != "undefined") {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = serverUrl;
        }
        else {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        }
        if (typeof (ohifViewerUrl) != "undefined") {
            DICOMwebJS.ServerConfiguration.OhifViewerUrl = ohifViewerUrl;
        }
        this.initAuthentication();
        $("#serverList").change(function () {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        });
        if ($("#searchButton").length > 0) {
            var model = new QueryModel();
            var rsProxy = new WadoRsProxy();
            var uriProxy = new WadoUriProxy();
            var qidoProxy = new QidoRsProxy();
            var rsService = new RetrieveService(rsProxy);
            var delowProxy = new DelowRsProxy();
            var queryView = new QueryView(document.getElementById("#content"), model, rsService);
            var viewer = new WadoViewer($(".dicomWeb-js-viewer"), uriProxy);
            var studyPagerModel = new QueryPageModel();
            var studyPager = new QueryPagerView($(".pagination-study"), studyPagerModel);
            model.StudyPaginationModel = studyPagerModel;
            var queryController = new QueryController(queryView, model, qidoProxy, rsService, uriProxy, delowProxy, viewer, studyPager);
            queryView.instanceViewRequest.on(function (args) {
                _this.showViewer(viewer);
            });
            queryView.previewStudy.on(function (args) {
                _this.showViewer(viewer);
            });
            $("#SelectedTransferSyntax").change(function () {
                var loadedInstance = viewer.loadedInstance();
                if (null != loadedInstance) {
                    viewer.loadInstance(loadedInstance, $("#SelectedTransferSyntax").val());
                }
            });
            new StoreView($("#_StoreView")[0]);
        }
    };
    app.prototype.showViewer = function (viewer) {
        $('.nav-tabs a[href="#_ViewerView"]').tab('show');
        viewer.refresh();
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
            if (log) {
                new ModalDialog().showError("Error", log);
            }
        }
    });
});
var QueryController = (function () {
    function QueryController(queryView, queryModel, queryService, retrieveService, wadoUriService, delowRsProxy, viewer, studyPagerView) {
        this._queryView = queryView;
        this._queryModel = queryModel;
        this._queryService = queryService;
        this._retrieveService = retrieveService;
        this._wadoUriService = wadoUriService;
        this._delowRsProxy = delowRsProxy;
        this._viewer = viewer;
        this._studyPagerView = studyPagerView;
        this._studyPagerModel = studyPagerView.model;
        this._studyPagerView.hide();
        this.registerEvents();
    }
    QueryController.prototype.registerEvents = function () {
        var _this = this;
        this._queryView.instanceViewRequest.on(function (args) {
            var dicomInstance = {
                studyUID: args.InstanceParams.StudyInstanceUid,
                seriesUID: args.InstanceParams.SeriesInstanceUID,
                instanceUID: args.InstanceParams.SopInstanceUid
            };
            _this._viewer.loadInstance(dicomInstance);
        });
        this._queryView.previewStudy.on(function (args) {
            var query = new StudyParams();
            query.StudyInstanceUid = args.StudyParams.StudyInstanceUid;
            _this._viewer.loadStudy(query);
        });
        this._queryView.qidoStudy.on(function (args) {
            var query = new StudyParams();
            query.StudyInstanceUid = args.StudyInstanceUID;
            var request = _this.getQidoQueryParam(query, args.MediaType);
            _this._queryService.findInstances(request)
                .done(function (xhr, data) {
                _this.showDialog("QIDO-RS Study", args.MediaType, data);
            }).fail(function (xhr) {
                new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
        });
        this._queryView.qidoSeries.on(function (args) {
            var query = new SeriesParams();
            var request = _this.getQidoQueryParam(query, args.MediaType);
            query.StudyInstanceUid = args.StudyInstanceUID;
            query.SeriesInstanceUID = args.SeriesInstanceUID;
            _this._queryService.findInstances(request)
                .done(function (xhr, data) {
                _this.showDialog("QIDO-RS Series", args.MediaType, data);
            })
                .fail(function (xhr) {
                new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
        });
        this._queryView.qidoInstance.on(function (args) {
            var query = new InstanceParams();
            var request = _this.getQidoQueryParam(query, args.MediaType);
            query.StudyInstanceUid = args.StudyInstanceUID;
            query.SeriesInstanceUID = args.SeriesInstanceUID;
            query.SopInstanceUid = args.SopInstanceUID;
            _this._queryService.findInstances(request)
                .done(function (xhr, data) {
                _this.showDialog("QIDO-RS Instance", args.MediaType, data);
            })
                .fail(function (xhr) {
                new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
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
                new ModalDialog().showError("Error", "");
            });
        });
        this._queryView.wadoUriRequest.on(function (args) {
            var instance = {
                studyUID: args.InstanceParams.StudyInstanceUid,
                seriesUID: args.InstanceParams.SeriesInstanceUID,
                instanceUID: args.InstanceParams.SopInstanceUid
            };
            var imageParam = { frameNumber: args.Frame, transferSyntax: null };
            _this._wadoUriService.getDicomInstance(instance, false, imageParam).done(function (data) {
                appUtils.download(data, "dicom.dcm");
            }).fail(function (err) {
                new ModalDialog().showError("Error", err);
            });
        });
        this._queryView.deleteStudyRequest.on(function (args) {
            _this._delowRsProxy.deleteStudy(args.StudyParams.StudyInstanceUid)
                .done(function (response) {
                new ModalDialog().show("Success");
            })
                .fail(function (error) {
                new ModalDialog().showError("Error", error);
            });
        });
        this._queryView.showStudyViewer.on(function (args) {
            var studyUid = args.StudyParams.StudyInstanceUid;
            var viewerUrl = DICOMwebJS.ServerConfiguration.getOhifViewerUrl(studyUid);
            _this._queryModel.selectedStudy();
            window.open(viewerUrl, "ohifViewer");
        });
        this._queryModel.StudyQueryChangedEvent = function () {
            _this.queryStudies();
        };
        this._queryView.querySeries.on(function () {
            _this.querySeries(_this._queryModel.selectedStudy());
        });
        this._queryView.queryInstances.on(function () {
            _this.queryInstances(_this._queryModel.selectedSeries());
        });
        this.registerStudyPager();
    };
    QueryController.prototype.registerStudyPager = function () {
        var _this = this;
        var offset = 0;
        var limit = this._studyPagerModel.pageLimit;
        this._studyPagerView.onFirst.on(function () {
            offset = _this._studyPagerModel.firstOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
        this._studyPagerView.onPrev.on(function () {
            offset = _this._studyPagerModel.prevOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
        this._studyPagerView.onNext.on(function () {
            offset = _this._studyPagerModel.nextOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
        this._studyPagerView.onLast.on(function () {
            offset = _this._studyPagerModel.lastOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
    };
    QueryController.prototype.queryStudies = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 12; }
        if (!this._queryModel.StudyQueryParams || offset === -1) {
            return;
        }
        var options = new QueryOptions();
        options.limit = limit;
        options.offset = offset;
        var params = {
            query: this._queryModel.StudyQueryParams,
            returnValues: [],
            options: options,
            acceptType: MimeTypes.Json,
            success: null,
            error: null
        };
        this._queryService.findStudies(params)
            .done(function (xhr, data) {
            try {
                var totalCount = xhr.getResponseHeader("X-Total-Count");
                var linkHeader = xhr.getResponseHeader("link");
                if (linkHeader) {
                    if (!totalCount) {
                        totalCount = "-1";
                    }
                    _this._studyPagerModel.setLinkHeader(linkHeader, data.length, parseInt(totalCount, 10));
                    _this._studyPagerModel.currentOffset = offset;
                    _this._studyPagerView.render();
                    _this._studyPagerView.show();
                }
                else {
                    _this._studyPagerView.hide();
                }
            }
            catch (err) {
                _this._studyPagerView.hide();
            }
            _this.onQueryStudies(data);
        }).fail(function (xhr) {
            _this.onQueryError(xhr.status, xhr.responseText);
        });
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
            success: null,
            error: null
        };
        this._queryService.findSeries(params)
            .done(function (xhr, data) {
            _this.onQuerySeries(data);
        }).fail(function (xhr) {
            _this.onQueryError(xhr.statusText, xhr.responseText);
        });
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
            success: null,
            error: null
        };
        this._queryService.findInstances(params)
            .done(function (xhr, data) {
            _this.onQueryInstances(data);
        }).fail(function (xhr) {
            _this.onQueryError(xhr.statusText, xhr.responseText);
        });
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
    QueryController.prototype.getQidoQueryParam = function (query, mediaType) {
        var request = {
            query: query,
            returnValues: [],
            options: null,
            acceptType: mediaType,
            success: null,
            error: null
        };
        request.returnValues.push(new DicomTag(DicomTags.StudyInstanceUid));
        request.returnValues.push(new DicomTag(DicomTags.SeriesInstanceUid));
        request.returnValues.push(new DicomTag(DicomTags.SopInstanceUid));
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
    QueryController.prototype.onQueryError = function (status, errorThrown) {
        new ModalDialog().showError("Error (HTTP Status: " + status + ")", errorThrown);
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
        this._studyPaginationModel = null;
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
                if (value != this._selectedStudyIndex) {
                    this._selectedStudyIndex = value;
                    this.onSelectedStudyChanged();
                    this.Series = [];
                }
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
                if (value != this._selectedSeriesIndex) {
                    this._selectedSeriesIndex = value;
                    this.onSelectedSeriesChanged();
                    this.Instances = [];
                }
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
            if (this._selectedInstancesIndex != value) {
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
    Object.defineProperty(QueryModel.prototype, "StudyPaginationModel", {
        get: function () {
            return this._studyPaginationModel;
        },
        set: function (studpagination) {
            this._studyPaginationModel = studpagination;
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
/// <reference path="../types/iliteevent.ts" />
var QueryPageModel = (function () {
    function QueryPageModel() {
        this.totalCount = 0;
        this._resultsCount = 0;
        this.firstOffset = -1;
        this.prevOffset = -1;
        this.nextOffset = -1;
        this.lastOffset = -1;
        this._currentPageOffset = 0;
        this.pageLimit = 12;
        this.currentPage = 0;
        this.pageCount = 0;
    }
    QueryPageModel.prototype.setLinkHeader = function (linkHeader, resultsCount, totalCount) {
        var _this = this;
        if (typeof linkHeader == "undefined" || linkHeader == null) {
            return;
        }
        this.totalCount = totalCount;
        this.ResultsCount = resultsCount;
        var pageLinks = linkHeader.split(",");
        this.firstOffset = this.prevOffset = this.nextOffset = this.lastOffset = -1;
        pageLinks.forEach(function (link) {
            var linkParts = link.split(";");
            var queryPart = linkParts[0].split("?")[1];
            var offset = parseInt(_this.getQueryVariable(queryPart, "offset"), 10);
            _this.pageLimit = parseInt(_this.getQueryVariable(queryPart, "limit"), 10);
            var rel = _this.getQueryVariable(linkParts[1], "rel");
            switch (rel) {
                case "\"first\"":
                    {
                        _this.firstOffset = offset;
                    }
                    break;
                case "\"prev\"":
                    {
                        _this.prevOffset = offset;
                    }
                    break;
                case "\"next\"":
                    {
                        _this.nextOffset = offset;
                    }
                    break;
                case "\"last\"":
                    {
                        _this.lastOffset = offset;
                    }
                    break;
            }
        });
    };
    Object.defineProperty(QueryPageModel.prototype, "currentOffset", {
        get: function () {
            return this._currentPageOffset;
        },
        set: function (offset) {
            this._currentPageOffset = offset;
            this.currentPage = Math.floor(this._currentPageOffset / this.pageLimit) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryPageModel.prototype, "pageLimit", {
        get: function () {
            return this._pageLimit;
        },
        set: function (limit) {
            if (limit < 1) {
                throw "page limit can't be less than 1";
            }
            this._pageLimit = limit;
            this.currentPage = Math.floor(this._currentPageOffset / this.pageLimit) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryPageModel.prototype, "ResultsCount", {
        get: function () {
            return this._resultsCount;
        },
        set: function (count) {
            this._resultsCount = count;
            this.pageCount = Math.ceil(this.totalCount / this.pageLimit);
        },
        enumerable: true,
        configurable: true
    });
    //https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
    QueryPageModel.prototype.getQueryVariable = function (query, variable) {
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]).trim() == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return "";
    };
    return QueryPageModel;
}());
/// <reference path="../types/iliteevent.ts" />
var QueryPagerView = (function () {
    function QueryPagerView($element, model) {
        this.onFirst = new LiteEvent();
        this.onPrev = new LiteEvent();
        this.onNext = new LiteEvent();
        this.onLast = new LiteEvent();
        this._$element = $element;
        this.model = model;
        this._$first = $(this._$element).find(".page-first");
        this._$prev = $(this._$element).find(".page-previous");
        this._$next = $(this._$element).find(".page-next");
        this._$last = $(this._$element).find(".page-last");
        this._$pageInfo = $(this._$element).find(".page-info");
        this._registerEvents();
        this.render();
    }
    QueryPagerView.prototype._registerEvents = function () {
        var _this = this;
        this._$first.click(function () { _this.onFirst.trigger(); });
        this._$prev.click(function () { _this.onPrev.trigger(); });
        this._$next.click(function () { _this.onNext.trigger(); });
        this._$last.click(function () { _this.onLast.trigger(); });
    };
    QueryPagerView.prototype.render = function () {
        if (this.model.firstOffset < 0) {
            this._$first.addClass("disabled");
        }
        else {
            this._$first.removeClass("disabled");
        }
        if (this.model.prevOffset < 0) {
            this._$prev.addClass("disabled");
        }
        else {
            this._$prev.removeClass("disabled");
        }
        if (this.model.nextOffset < 0) {
            this._$next.addClass("disabled");
        }
        else {
            this._$next.removeClass("disabled");
        }
        if (this.model.lastOffset < 0) {
            this._$last.addClass("disabled");
        }
        else {
            this._$last.removeClass("disabled");
        }
        if (this.model.pageCount >= this.model.currentPage) {
            this._$pageInfo.text("Page: " + this.model.currentPage + "/" + this.model.pageCount);
        }
        else {
            this._$pageInfo.text("Page: " + this.model.currentPage);
        }
    };
    QueryPagerView.prototype.show = function () {
        this._$element.show();
    };
    QueryPagerView.prototype.hide = function () {
        this._$element.hide();
    };
    return QueryPagerView;
}());
/// <reference path="../../scripts/typings/libs/html.ts" />
var QueryView = (function () {
    function QueryView(parentElement, model, retrieveService) {
        //these will be replaced by some event dispatcher, 
        //keep it simple for now
        this.RetrieveInstanceEvent = null;
        //EVENTS
        this._onPreviewStudy = new LiteEvent();
        this._onQidoStudy = new LiteEvent();
        this._onQidoSeries = new LiteEvent();
        this._onQidoInstance = new LiteEvent();
        this._onInstanceMetadata = new LiteEvent();
        this._onInstance = new LiteEvent();
        this._onFrames = new LiteEvent();
        this._onWadoUri = new LiteEvent();
        this._onDeleteStudy = new LiteEvent();
        this._onShowStudyViewer = new LiteEvent();
        this._onQuerySeries = new LiteEvent();
        this._onQueryInstances = new LiteEvent();
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
    Object.defineProperty(QueryView.prototype, "showStudyViewer", {
        get: function () { return this._onShowStudyViewer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "previewStudy", {
        get: function () { return this._onPreviewStudy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "instanceViewRequest", {
        get: function () { return this._onViewInstance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "querySeries", {
        get: function () { return this._onQuerySeries; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryView.prototype, "queryInstances", {
        get: function () { return this._onQueryInstances; },
        enumerable: true,
        configurable: true
    });
    QueryView.prototype.clearInstanceMetadata = function () {
        new CodeRenderer().renderValue($(".pacs-metadata-viewer")[0], "");
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
        var pageText = "";
        if (this._model.StudyPaginationModel.totalCount > this._model.StudyPaginationModel.pageLimit) {
            pageText = (this._model.StudyPaginationModel.currentOffset + 1) + "-" + (this._model.StudyPaginationModel.currentOffset + this._model.Studies.length) + " of " + this._model.StudyPaginationModel.totalCount;
        }
        else {
            pageText = this._model.Studies.length + "";
        }
        $("*[data-pacs-study-count]").text(pageText);
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
            new ModalDialog().showError("Error", "error getting study item");
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
            var args = new StudyEventArgs(study);
            _this._onPreviewStudy.trigger(args);
            _this._model.SelectedStudyIndex = index;
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
        $item.find('*[data-pacs-ohifviewer]').on("click", function (ev) {
            var args = new StudyEventArgs(study);
            _this._onShowStudyViewer.trigger(args);
            ev.preventDefault();
            return false;
        });
        $item.find('*[data-pacs-querySeries]').on("click", function (ev) {
            $("#studyCollapse").collapse("hide");
            _this._model.SelectedStudyIndex = index;
            _this._onQuerySeries.trigger();
            ev.preventDefault();
            return false;
        });
    };
    QueryView.prototype.registerSeriesEvents = function (series, $item, index) {
        var _this = this;
        $item.find(".panel-body").on("click", function (ev) {
            _this._model.SelectedSeriesIndex = index;
            _this._onQueryInstances.trigger();
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
        new CodeRenderer().renderJson($contentElement[0], data);
    };
    QueryView.prototype.renderXml = function ($contentElement, data) {
        new CodeRenderer().renderXml($contentElement[0], data);
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
var StoreResultView = (function () {
    function StoreResultView($view, uriProxy) {
        this.$view = $view;
        this.$progress = this.$view.find(".progress").hide();
        this.$alert = this.$view.find(".store-result-alert");
        this.$resultBody = this.$view.find(".store-result-body").hide();
        this.$resultTitle = this.$view.find(".store-result-title");
        this.$resultContent = this.$view.find(".store-result-content");
        this._copyImageView = new copyImageUrlView($view, uriProxy);
    }
    StoreResultView.prototype.showProgress = function () {
        this.$resultBody.hide();
        this.$progress.show();
    };
    StoreResultView.prototype.showSuccess = function (xmlData) {
        var codeRenderer = new CodeRenderer();
        this.$progress.hide();
        this.$resultBody.show();
        this.setAlertClass("alert-success");
        this.$resultTitle.text("Success!");
        if (xmlData) {
            var $referencedInstance = $(xmlData).find("DicomAttribute[keyword='ReferencedInstanceSequence']");
            var instanceUrl = $referencedInstance.find("DicomAttribute[keyword='RetrieveURI']").children("Value").text();
            this._copyImageView.setUrl(instanceUrl);
            codeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
        }
        else {
            this._copyImageView.setUrl("");
            codeRenderer.renderXml(this.$resultContent[0], "");
        }
    };
    StoreResultView.prototype.showError = function (xmlData, error) {
        this.showFailure(xmlData, error, "alert-danger");
    };
    StoreResultView.prototype.showWarning = function (xmlData, error) {
        this.showFailure(xmlData, error, "alert-warning");
    };
    StoreResultView.prototype.showFailure = function (xmlData, error, alertStyle) {
        var codeRenderer = new CodeRenderer();
        this.$progress.hide();
        this.$resultBody.show();
        this.setAlertClass(alertStyle);
        this.$resultTitle.text(error);
        this._copyImageView.setUrl("");
        if (xmlData) {
            codeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
        }
        else {
            this._copyImageView.setUrl("");
            codeRenderer.renderXml(this.$resultContent[0], "");
        }
    };
    StoreResultView.prototype.setAlertClass = function (alertClass) {
        this.$alert.removeClass("alert-success alert-warning alert-danger").addClass(alertClass);
    };
    StoreResultView.prototype.hide = function () {
        this.$view.hide();
    };
    StoreResultView.prototype.show = function () {
        this.$view.show();
    };
    StoreResultView.prototype.getString = function (data) {
        return data.xml ? data.xml : (new XMLSerializer()).serializeToString(data);
    };
    return StoreResultView;
}());
var StoreView = (function () {
    function StoreView(parentElement) {
        this._parent = parentElement;
        this._resultView = new StoreResultView($(".store-result-view"), new WadoUriProxy(DICOMwebJS.ServerConfiguration.getWadoRsUrl()));
        this._resultView.hide();
        this.registerEvents();
    }
    StoreView.prototype.registerEvents = function () {
        //https://stackoverflow.com/questions/15854946/how-do-i-limit-the-number-of-file-upload-in-html
        var _this = this;
        if (typeof (dcloudMaxUpload) !== "undefined" && dcloudMaxUpload > 0) {
            $('#getFile').change(function () {
                if (this.files.length > dcloudMaxUpload) {
                    new ModalDialog().showError("Too many files", "Please select no more than " + dcloudMaxUpload + " files");
                    this.value = '';
                }
            });
        }
        $(this._parent).find("#addFileButton").click(function (e) {
            e.preventDefault();
            var newName = jQuery('#displayName').val();
            // Initiate method calls using jQuery promises.
            // Get the local file as an array buffer.
            var getFile = _this.getFileBuffer();
            var url = DICOMwebJS.ServerConfiguration.getStowUrl();
            var anonymizedElementsQuery = _this.getAnonymizedElementsQuery();
            getFile.done(function (arrayBufferList) {
                var proxy = new StowRsProxy(url);
                var dlg = new ModalDialog("#modal-alert");
                _this._resultView.show();
                _this._resultView.showProgress();
                proxy.StoreInstance(arrayBufferList, null, anonymizedElementsQuery).done(function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
                    }
                    else {
                        _this._resultView.showSuccess(xhr.responseXML);
                    }
                })
                    .fail(function (xhr) {
                    if (xhr.status === 202) {
                        _this._resultView.showWarning(xhr.responseXML, "Some Errors during store  - " + xhr.statusText);
                    }
                    else {
                        _this._resultView.showError(xhr.responseXML, "Error Storing Dataset - " + xhr.statusText);
                    }
                });
            });
        });
    };
    // Get the local file as an array buffer.
    StoreView.prototype.getFileBuffer = function () {
        var results = [];
        var fileInput = $('#getFile')[0];
        var promises = [];
        var deferred = jQuery.Deferred();
        var files = fileInput.files;
        for (var index = 0; index < files.length; index++) {
            var reader = new fileReaderAsync();
            promises.push(reader.read(files[index]).done(function (result) { results.push(result); }));
        }
        $.when.apply($, promises).then(function () {
            deferred.resolve(results);
        });
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
var CodeRenderer = (function () {
    function CodeRenderer() {
    }
    CodeRenderer.prototype.renderJson = function (uiElement, data) {
        return this.renderEditor(uiElement, JSON.stringify(data, null, '\t'), "ace/mode/json");
    };
    CodeRenderer.prototype.renderXml = function (uiElement, data) {
        return this.renderEditor(uiElement, data, "ace/mode/xml");
    };
    CodeRenderer.prototype.renderValue = function (uiElement, data) {
        return this.renderEditor(uiElement, data, null, true);
    };
    CodeRenderer.prototype.clean = function (editor) {
        if (editor) {
            editor.destroy();
            var oldDiv = editor.container;
            var newDiv = oldDiv.cloneNode(false);
            oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            editor.container = null;
            editor.renderer = null;
            editor = null;
        }
    };
    CodeRenderer.prototype.renderEditor = function (uiElement, data, editorMode, autoWrap) {
        if (autoWrap === void 0) { autoWrap = false; }
        var editor = ace.edit(uiElement);
        var editorSession = editorSession = editor.getSession();
        if (data) {
            editorSession.setValue(data);
        }
        else {
            editorSession.setValue("");
        }
        if (editorMode) {
            editorSession.setMode(editorMode);
        }
        if (autoWrap) {
            editorSession.setUseWrapMode(true);
        }
        editor.resize();
    };
    return CodeRenderer;
}());
var fileReaderAsync = (function () {
    function fileReaderAsync() {
    }
    fileReaderAsync.prototype.read = function (file) {
        var deferred = $.Deferred();
        var reader = new FileReader();
        reader.onloadend = function (e) {
            deferred.resolve(e.target.result);
        };
        reader.onerror = function (e) {
            deferred.reject(e.target.error);
        };
        reader.readAsArrayBuffer(file);
        return deferred.promise();
    };
    return fileReaderAsync;
}());
/// <reference path="coderenderer.ts" />
var ModalDialog = (function () {
    function ModalDialog($dialogName) {
        if ($dialogName === void 0) { $dialogName = "#modal-alert"; }
        this._onDlgClose = new LiteEvent();
        this._codeRenderer = new CodeRenderer();
        this._$dialogName = $dialogName;
        this._$dlg = $(this._$dialogName);
        this._$dlgTitle = this._$dlg.find(".modal-title");
        this._$dlgHeader = this._$dlg.find(".modal-header");
        this._$dlgContentParent = this._$dlg.find(".model-body-content");
        this._contentElement = this._$dlgContentParent[0];
    }
    Object.defineProperty(ModalDialog.prototype, "dilaogClosed", {
        get: function () { return this._onDlgClose; },
        enumerable: true,
        configurable: true
    });
    ModalDialog.prototype.showJson = function (title, data) {
        this._$dlgTitle.text(title);
        this._editor = this._codeRenderer.renderJson(this._contentElement, data);
        this._$dlg.modal("show");
        this.onDialogClose(this._$dlg);
    };
    ModalDialog.prototype.showXml = function (title, data) {
        this._$dlgTitle.text(title);
        this._editor = this._codeRenderer.renderXml(this._contentElement, data);
        this._$dlg.modal("show");
        this.onDialogClose(this._$dlg);
    };
    ModalDialog.prototype.showText = function (title, data) {
        this._$dlgTitle.text(title);
        if (data) {
            data = data.toString();
        }
        this._editor = this._codeRenderer.renderValue(this._contentElement, data);
        this._$dlg.modal("show");
        this.onDialogClose(this._$dlg);
    };
    ModalDialog.prototype.show = function (title) {
        this.showText(title, "");
    };
    ModalDialog.prototype.showError = function (title, data) {
        this._$dlgHeader.addClass("bg-danger");
        this.showText(title, data);
    };
    ModalDialog.prototype.onDialogClose = function ($dlg) {
        var _this = this;
        $dlg.on('hidden.bs.modal', function () {
            _this._$dlgHeader.removeClass("bg-danger");
            _this._codeRenderer.clean(_this._editor);
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
cornerstoneWADOImageLoader.configure({
    beforeSend: function (xhr) {
        // Add custom headers here (e.g. auth tokens)
        //xhr.setRequestHeader('x-auth-token', 'my auth token');
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
    }
});
;
var WadoViewer = (function () {
    function WadoViewer($parentView, uriProxy) {
        var _this = this;
        this._loaded = false;
        this._mouseActionsButtons = new ViewerMouseButtons();
        this.WADO_IMAGE_LOADER_PREFIX = "wadouri:";
        this._$parentView = $parentView;
        this._viewerElement = $parentView.find('#dicomImage').get(0);
        this._uriProxy = uriProxy;
        this._copyImageView = new copyImageUrlView($parentView, uriProxy);
        this._seriesNavigator = new SeriesNavigator(this);
        this._instanceSlider = new InstanceSlider(this);
        cornerstone.enable(this._viewerElement);
        this.configureWebWorker();
        $(this._viewerElement).on('CornerstoneNewImage', function (event, e) {
            _this.onNewImage(e);
        });
        $(this._$parentView).find("input[name=defaultButtonTool]").change(function (eventObj) {
            var element = eventObj.target;
            if (element.value == "WL") {
                _this._mouseActionsButtons.DefaultButton = _this._mouseActionsButtons.MouseActions.WL;
            }
            else {
                _this._mouseActionsButtons.DefaultButton = _this._mouseActionsButtons.MouseActions.Sroll;
            }
            if (_this._loaded) {
                _this._mouseActionsButtons.applyMouseAction(_this._viewerElement);
            }
        });
        $(window).resize(function () {
            cornerstone.resize(_this._viewerElement, true);
        });
    }
    WadoViewer.prototype.configureWebWorker = function () {
        var config = {
            webWorkerPath: location.protocol + "//" + location.host + '/bower_components/cornerstoneWADOImageLoader/dist/cornerstoneWADOImageLoaderWebWorker.min.js',
            taskConfiguration: {
                'decodeTask': {
                    codecsPath: 'cornerstoneWADOImageLoaderCodecs.min.js'
                }
            }
        };
        cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    };
    WadoViewer.prototype.refresh = function () {
        cornerstone.resize(this._viewerElement, true);
    };
    WadoViewer.prototype.parentView = function () {
        return this._$parentView;
    };
    WadoViewer.prototype.getViewerElement = function () {
        return this._viewerElement;
    };
    WadoViewer.prototype.loadStudy = function (studyParam, transferSyntax) {
        var _this = this;
        if (transferSyntax === void 0) { transferSyntax = null; }
        this._seriesNavigator.reset();
        $.getJSON(DICOMwebJS.ServerConfiguration.getOhifJsonEndpoint(studyParam.StudyInstanceUid)).then(function (data) {
            $.each(data.studies, function (studyIndex, study) {
                $.each(study.seriesList, function (seriesIndex, series) {
                    _this.loadSeriesJson(study, series, transferSyntax).then(function () {
                        _this._seriesNavigator.setStudy(study, seriesIndex, transferSyntax);
                    });
                    return false;
                });
                return false;
            });
        });
    };
    WadoViewer.prototype.loadSeriesJson = function (study, series, transferSyntax) {
        var _this = this;
        if (transferSyntax === void 0) { transferSyntax = null; }
        var imageIds = [];
        var instanceParams = [];
        var stack = {
            currentImageIdIndex: 0,
            imageIds: imageIds,
            instanceParams: instanceParams
        };
        $.each(series.instances, function (instsanceIndex, instance) {
            var imageParam = { frameNumber: null, transferSyntax: transferSyntax };
            var dicomInstance = {
                studyUID: study.studyInstanceUid,
                seriesUID: series.seriesInstanceUid,
                instanceUID: instance.sopInstanceUid
            };
            var wadoImageLoaderUrl = _this.getWadoImageLoaderUrl(dicomInstance, imageParam);
            instanceParams.push(dicomInstance);
            imageIds.push(wadoImageLoaderUrl);
        });
        this._stack = stack;
        return this.loadAndViewImage(stack);
    };
    WadoViewer.prototype.loadInstance = function (dicomInstance, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var imageParam = { frameNumber: null, transferSyntax: transferSyntax };
        var wadoImageLoaderUrl = this.getWadoImageLoaderUrl(dicomInstance, imageParam);
        var stack = {
            currentImageIdIndex: 0,
            imageIds: [],
            instanceParams: []
        };
        stack.imageIds.push(wadoImageLoaderUrl);
        stack.instanceParams.push(dicomInstance);
        this._stack = stack;
        this._seriesNavigator.reset();
        this.loadAndViewImage(stack);
    };
    WadoViewer.prototype.loadedInstance = function () {
        if (this._stack) {
            return this._stack.instanceParams[this._stack.currentImageIdIndex];
        }
        return null;
    };
    WadoViewer.prototype.loadAndViewImage = function (stack) {
        var _this = this;
        var element = this._viewerElement;
        var promise;
        this._instanceSlider.reset();
        if (stack.imageIds.length == 0) {
            return;
        }
        var start = new Date().getTime();
        cornerstoneTools.clearToolState(element, "stack");
        this._instanceSlider.setStack(stack);
        try {
            promise = cornerstone.loadAndCacheImage(stack.imageIds[0]);
            promise.done(function (image) {
                _this._loaded = true;
                var viewport = cornerstone.getDefaultViewportForImage(element, image);
                //$('#toggleModalityLUT').attr("checked",viewport.modalityLUT !== undefined);
                //$('#toggleVOILUT').attr("checked",viewport.voiLUT !== undefined);
                cornerstone.displayImage(element, image, viewport);
                cornerstoneTools.mouseInput.enable(element);
                cornerstoneTools.mouseWheelInput.enable(element);
                cornerstoneTools.wwwcTouchDrag.activate(element);
                cornerstoneTools.addStackStateManager(element, ['stack', 'playClip']);
                cornerstoneTools.addToolState(element, 'stack', stack);
                if (stack.imageIds.length > 1) {
                    _this._mouseActionsButtons.WheelButton = _this._mouseActionsButtons.MouseActions.Sroll;
                }
                else {
                    _this._mouseActionsButtons.WheelButton = _this._mouseActionsButtons.MouseActions.Zoom;
                }
                _this._mouseActionsButtons.applyMouseAction(element);
                cornerstone.resize(_this._viewerElement, true);
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
            });
            promise.fail(function (xhr) {
                var errorText = "Image failed to load";
                try {
                    if ('TextDecoder' in window && xhr.response) {
                        var enc = new TextDecoder();
                        errorText = enc.decode(xhr.response);
                    }
                }
                catch (error) { }
                new ModalDialog().showError("Error - " + xhr.status, errorText);
            });
        }
        catch (err) {
            new ModalDialog().showError("Error", err);
        }
        return promise;
    };
    WadoViewer.prototype.getWadoImageLoaderUrl = function (dicomInstance, imageParam) {
        var instanceUrl = this._uriProxy.createUrl(dicomInstance, MimeTypes.DICOM, imageParam);
        //add this "wadouri:" so it loads the wado uri loader, 
        //the loader trims this prefix from the url
        return this.WADO_IMAGE_LOADER_PREFIX + instanceUrl;
    };
    WadoViewer.prototype.onNewImage = function (e) {
        var newImageIdIndex = this._stack.currentImageIdIndex;
        this._copyImageView.setUrl(this._stack.imageIds[this._stack.currentImageIdIndex].replace(this.WADO_IMAGE_LOADER_PREFIX, ""));
    };
    return WadoViewer;
}());
var ViewerMouseButtons = (function () {
    function ViewerMouseButtons() {
        this.MouseActions = { WL: "WL", Zoom: "Zoom", Pan: "Pan", Sroll: "Scroll" };
        this.DefaultButton = this.MouseActions.WL;
        this.RightButton = this.MouseActions.Zoom;
        this.MiddleButton = this.MouseActions.Pan;
        this.WheelButton = this.MouseActions.Sroll;
    }
    ViewerMouseButtons.prototype.applyMouseAction = function (element) {
        cornerstoneTools.wwwc.activate(element, 0);
        cornerstoneTools.pan.activate(element, 0);
        cornerstoneTools.zoom.activate(element, 0);
        cornerstoneTools.stackScroll.activate(element, 0);
        this.apply(element, cornerstoneTools.wwwc, this.MouseActions.WL);
        this.apply(element, cornerstoneTools.pan, this.MouseActions.Pan);
        this.apply(element, cornerstoneTools.zoom, this.MouseActions.Zoom);
        this.apply(element, cornerstoneTools.stackScroll, this.MouseActions.Sroll);
        if (this.WheelButton == this.MouseActions.Zoom) {
            cornerstoneTools.zoomWheel.activate(element);
            cornerstoneTools.stackScrollWheel.deactivate(element);
            cornerstoneTools.scrollIndicator.disable(element);
        }
        else {
            // Enable all tools we want to use with this element
            //cornerstoneTools.stackScroll.activate(element, 1);
            cornerstoneTools.stackScrollWheel.activate(element);
            cornerstoneTools.scrollIndicator.enable(element);
            cornerstoneTools.zoomWheel.deactivate(element);
        }
    };
    ViewerMouseButtons.prototype.apply = function (element, action, mouseAction) {
        if (this.DefaultButton == mouseAction) {
            action.activate(element, 1);
        }
        else if (this.RightButton == mouseAction) {
            action.activate(element, 4);
        }
        else if (this.MiddleButton == mouseAction) {
            action.activate(element, 2);
        }
    };
    return ViewerMouseButtons;
}());
var SeriesNavigator = (function () {
    function SeriesNavigator(viewer) {
        var _this = this;
        this._study = null;
        this._loadedSeriesIndex = -1;
        this._transferSyntax = null;
        this._seriesCount = 0;
        this._wadoViewer = viewer;
        this._$prevEl = this._wadoViewer.parentView().find(".prevtSer");
        this._$nextEl = this._wadoViewer.parentView().find(".nextSer");
        this._$serInput = this._wadoViewer.parentView().find(".seriesCount");
        this._$nextEl.click(function () { _this.next(); });
        this._$prevEl.click(function () { _this.prev(); });
        this.reset();
    }
    SeriesNavigator.prototype.setStudy = function (study, loadedSeriesIndex, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        this._study = study;
        this._loadedSeriesIndex = loadedSeriesIndex;
        this._transferSyntax = transferSyntax;
        this._seriesCount = study.seriesList.length;
        this.render();
    };
    SeriesNavigator.prototype.reset = function () {
        this._$serInput.text("");
        this._$prevEl.attr("disabled", "true");
        this._$nextEl.attr("disabled", "true");
        this._loadedSeriesIndex = -1;
        this._seriesCount = 0;
        this._study = null;
    };
    SeriesNavigator.prototype.render = function () {
        this._$serInput.text("Series " + (this._loadedSeriesIndex + 1) + "/" + this._seriesCount);
        if (this._loadedSeriesIndex == 0) {
            this._$prevEl.attr("disabled", "true");
        }
        else {
            this._$prevEl.removeAttr("disabled");
        }
        if (this._loadedSeriesIndex == this._seriesCount - 1) {
            this._$nextEl.attr("disabled", "true");
        }
        else {
            this._$nextEl.removeAttr("disabled");
        }
    };
    SeriesNavigator.prototype.next = function () {
        if (this._loadedSeriesIndex == -1 || this._loadedSeriesIndex >= this._seriesCount - 1)
            return;
        this._wadoViewer.loadSeriesJson(this._study, this._study.seriesList[++this._loadedSeriesIndex], this._transferSyntax);
        this.render();
    };
    SeriesNavigator.prototype.prev = function () {
        if (this._loadedSeriesIndex <= 0)
            return;
        this._wadoViewer.loadSeriesJson(this._study, this._study.seriesList[--this._loadedSeriesIndex], this._transferSyntax);
        this.render();
    };
    return SeriesNavigator;
}());
var InstanceSlider = (function () {
    function InstanceSlider(viewer) {
        var _this = this;
        this._viewer = viewer;
        this._$slider = viewer.parentView().find(".instance-slider");
        this._$instanceCount = viewer.parentView().find(".instance-count");
        $(this._viewer.getViewerElement()).on('CornerstoneNewImage', function (event, e) {
            _this._$slider.val(_this._stack.currentImageIdIndex + 1);
            _this.render();
        });
        this._$slider.on('input', function () {
            var slideIndex = _this._$slider.val() - 1;
            if (slideIndex >= 0 && slideIndex < _this._stack.imageIds.length) {
                var targetElement = _this._viewer.getViewerElement();
                var stackToolDataSource = cornerstoneTools.getToolState(targetElement, 'stack');
                if (stackToolDataSource === undefined) {
                    return;
                }
                var stackData = stackToolDataSource.data[0];
                // Switch images, if necessary
                if (slideIndex !== stackData.currentImageIdIndex && stackData.imageIds[slideIndex] !== undefined) {
                    cornerstone.loadAndCacheImage(stackData.imageIds[slideIndex]).then(function (image) {
                        var viewport = cornerstone.getViewport(targetElement);
                        stackData.currentImageIdIndex = slideIndex;
                        cornerstone.displayImage(targetElement, image, viewport);
                    });
                }
            }
        });
    }
    InstanceSlider.prototype.setStack = function (stack) {
        this._stack = stack;
        this._$slider.val(stack.currentImageIdIndex + 1);
        this._$slider.attr("min", 1);
        this._$slider.attr("max", this._stack.imageIds.length);
        this.render();
    };
    InstanceSlider.prototype.reset = function () {
        this._stack = null;
        this._$instanceCount.text("");
    };
    InstanceSlider.prototype.render = function () {
        this._$instanceCount.text("Count " + (this._stack.currentImageIdIndex + 1) + "/" + this._stack.imageIds.length);
    };
    return InstanceSlider;
}());
//# sourceMappingURL=dicomwebjs-demo.js.map