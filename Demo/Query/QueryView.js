var QueryView = (function () {
    function QueryView(parentElement, model, retrieveService) {
        var _this = this;
        this._ViewClassName = {
            $SeriesQuery: ".series-query", $StudyQuery: ".studies-query", $InstanceQuery: ".instance-query",
            SeriesQuery: "series-query", StudyQuery: "studies-query", InstanceQuery: "instance-query" };
        this._parent = parentElement;
        this._model = model;
        this._retrieveService = retrieveService;
        this._$selectedSeriesView = $(this._ViewClassName.$SeriesQuery);
        this._$selectedInstanceView = $(this._ViewClassName.$InstanceQuery);
        this.buildQueryControl();
        this.createViewTemplates();
        model.StudiesChangedEvent = function () {
            _this.renderStudies();
        };
        model.SeriesChangedEvent = function () {
            _this.renderSeries();
        };
        model.InstancesChangedEvent = function () {
            _this.renderInstances();
        };
    }
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
            var $studyItem = _this.getStudyItem(value, index);
            $studyItem.appendTo($(_this._ViewClassName.$StudyQuery));
            //TODO: a hack, needs to be designed in the UI
            if ($(_this._ViewClassName.$StudyQuery).children(".col-sm-4").length % 3 == 0) {
                $("<div class='clearfix visible-sm-block' ></div>").appendTo($(_this._ViewClassName.$StudyQuery));
            }
        });
    };
    QueryView.prototype.renderSeries = function () {
        var _this = this;
        this._$selectedSeriesView.html("");
        this._model.Series.forEach(function (value, index, array) {
            var $seriesItem = _this.getSeriesItem(value, index);
            $seriesItem.appendTo(_this._$selectedSeriesView);
        });
    };
    QueryView.prototype.renderInstances = function () {
        var _this = this;
        this._$selectedInstanceView.html("");
        this._model.Instances.forEach(function (value, index, array) {
            var $instanceItem = _this.getInstanceItem(value, index);
            $instanceItem.appendTo(_this._$selectedInstanceView);
        });
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
    QueryView.prototype.createStudyTemplate = function () {
        var _this = this;
        var ajaxSettings = {};
        ajaxSettings.url = "/Home/_StudyItem/";
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
        $.get("/Home/_SeriesItem/", function (data, textStatus, jqXHR) {
            _this._$seriesItemTemplate = $(data);
        }, "html");
    };
    QueryView.prototype.createInstanceTemplate = function () {
        var _this = this;
        $.get("/Home/_InstanceItem/", function (data, textStatus, jqXHR) {
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
    QueryView.prototype.getStudyItem = function (study, index) {
        var _this = this;
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
        $item.on("click", function (ev) {
            _this.ViewJson(study.DicomSourceProvider.getSourceDataset(), "JSON Study Query Response");
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-studyJson]").on("click", function (ev) {
            _this._retrieveService.getStudyAsJson(study, function (studyInstances) {
                _this.ViewJson(studyInstances, "JSON Study Response");
            });
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-findSeires]").on("click", function (ev) {
            _this._model.SelectedStudyIndex = index;
            ev.preventDefault();
            return false;
        });
        return $item;
    };
    QueryView.prototype.getSeriesItem = function (series, index) {
        var $item = this._$seriesItemTemplate.clone();
        this.updateSeriesItem(series, $item);
        this.registerSeriesEvents(series, $item, index);
        return $item;
    };
    QueryView.prototype.getInstanceItem = function (instance, index) {
        var _this = this;
        var $item = this._$instanceItemTemplate.clone();
        $item.find("*[data-pacs-InstanceNum]").text(instance.InstanceNumber);
        $item.find("*[data-pacs-SopInstanceUid]").text(instance.SopInstanceUid);
        $item.on("click", function (ev) {
            _this.ViewJson(instance.DicomSourceProvider.getSourceDataset(), "Instance Query Response");
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-metadata]").on("click", function (ev) {
            _this._retrieveService.getObjectAsJson(instance, function (objectInstance) {
                _this.ViewJson(objectInstance, "JSON metadata");
                ev.preventDefault();
                return false;
            });
        });
        $item.find("*[data-pacs-dicom]").on("click", function (ev) {
            _this._retrieveService.DownloadObject(instance, function (data) {
                var $dlg = $("#modal-alert");
                $dlg.find(".modal-title").text("DICOM");
                $dlg.find(".modal-body").text(data);
                $dlg.modal("show");
            });
            ev.preventDefault();
            return false;
        });
        return $item;
    };
    QueryView.prototype.updateSeriesItem = function (series, $item) {
        $item.find("*[data-pacs-seriesNum]").text(series.SeriesNumber);
        $item.find("*[data-pacs-modality]").text(series.Modality);
        $item.find("*[data-pacs-seriesDesc]").text(series.SeriesDescription);
        $item.find("*[data-pacs-seriesDate]").text(series.SeriesDate);
    };
    QueryView.prototype.registerSeriesEvents = function (series, $item, index) {
        var _this = this;
        $item.on("click", function (ev) {
            _this.ViewJson(series.DicomSourceProvider.getSourceDataset(), "Series Query Response");
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-seriesJson]").on("click", function (ev) {
            _this._retrieveService.getStudyAsJson(series, function (seriesInstances) {
                _this.ViewJson(seriesInstances, "(" + seriesInstances.length + ") Series Instances Response");
            });
            ev.preventDefault();
            return false;
        });
        $item.find("*[data-pacs-findInstances]").on("click", function (ev) {
            _this._model.SelectedSeriesIndex = index;
            ev.preventDefault();
            return false;
        });
    };
    QueryView.prototype.ViewJson = function (data, caption) {
        var $dlg = $("#modal-alert");
        $dlg.find(".modal-title").text(caption);
        $dlg.find(".modal-body").jsonViewer(data, { collapsed: true });
        $dlg.modal("show");
    };
    return QueryView;
})();
//# sourceMappingURL=queryview.js.map