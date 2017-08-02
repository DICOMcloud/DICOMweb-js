var QueryView = (function () {
    function QueryView(parentElement, model, retrieveService) {
        this.RetrieveInstanceEvent = null;
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
    QueryView.prototype.showError = function (message) {
        alert("Error\n\n" + message);
    };
    QueryView.prototype.showInfo = function (message) {
        alert(message);
    };
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
    QueryView.prototype.download = function (data) {
        var filename = "dicom.txt";
        var blob = new Blob([data], { type: "application/octet-stream" });
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            var URL = window.URL || window.webkitURL;
            var downloadUrl = URL.createObjectURL(blob);
            if (filename) {
                var a = document.createElement("a");
                if (typeof a.download === 'undefined') {
                    window.location.assign(downloadUrl);
                }
                else {
                    a.href = downloadUrl;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                }
            }
            else {
                window.location.assign(downloadUrl);
            }
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
            _this._$seriesView.children(".thumbnail").removeClass("selected");
            if (index != -1) {
                _this._$seriesView.children(".thumbnail").eq(index).addClass("selected");
            }
        });
        this._model.SelectedInstanceChangedEvent.on(function () {
            var index = _this._model.SelectedInstanceIndex;
            _this._$instanceView.children(".thumbnail").removeClass("selected");
            _this.clearInstanceMetadata();
            if (index == -1) {
                $(".instance-details").hide();
            }
            else {
                _this._$instanceView.children(".thumbnail").eq(index).addClass("selected");
                $(".instance-details").show();
            }
        });
        $("*[data-rs-instance]").on("click", function (ev) {
            var instance = _this._model.selectedInstance();
            if (instance) {
                var args = new RsInstanceEventArgs(instance, $(ev.target).attr("data-pacs-args"));
                _this._onInstance.trigger(args);
            }
            ev.preventDefault();
            return false;
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
    QueryView.prototype.createViewTemplates = function () {
        this.createStudyTemplate();
        this.createSeriesTemplate();
        this.createInstanceTemplate();
    };
    QueryView.prototype.getTemplateRelativePath = function (templatePath) {
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
        $item.find(".panel-body").on("click", function (ev) {
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
//# sourceMappingURL=QueryView.js.map