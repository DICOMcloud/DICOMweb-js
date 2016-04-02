var QueryController = (function () {
    function QueryController(queryView, queryModel, queryService, retrieveService, wadoUriService) {
        this._queryView = queryView;
        this._queryModel = queryModel;
        this._queryService = queryService;
        this._retrieveService = retrieveService;
        this._wadoUriService = wadoUriService;
        this.registerEvents();
    }
    QueryController.prototype.registerEvents = function () {
        var _this = this;
        this._queryView.instanceMetaDataRequest.on(function (args) {
            _this._retrieveService.getObjectInstanceMetadata(args.InstanceParams.StudyInstanceUid, args.InstanceParams.SeriesInstanceUID, args.InstanceParams.SopInstanceUid, args.MediaType, function (data, textStatus, jqXHR) {
                _this._queryView.showInstanceMetadata(data, args);
            });
        });
        this._queryView.instanceRequest.on(function (args) {
            _this._retrieveService.getObjectInstance(args.InstanceParams.StudyInstanceUid, args.InstanceParams.SeriesInstanceUID, args.InstanceParams.SopInstanceUid, args.MediaType, function (data, textStatus, jqXHR) {
                _this._queryView.download(data);
            }, function (ev) {
                _this._queryView.showError();
            });
        });
        this._queryView.framesRequest.on(function (args) {
            _this._retrieveService.getFrame(args.InstanceParams.StudyInstanceUid, args.InstanceParams.SeriesInstanceUID, args.InstanceParams.SopInstanceUid, args.FrameList, args.MediaType, function (data, textStatus, xhr) {
                _this._queryView.download(data);
            }, function (ev) {
                _this._queryView.showError();
            });
        });
        this._queryView.wadoUriRequest.on(function (args) {
            var instance = {
                studyUID: args.InstanceParams.StudyInstanceUid,
                seriesUID: args.InstanceParams.SeriesInstanceUID,
                instanceUID: args.InstanceParams.SopInstanceUid
            };
            var imageParam = { frameNumber: args.Frame };
            _this._wadoUriService.getDicomInstance(instance, false, imageParam, function (data) {
                _this._queryView.download(data);
            }, function (err) {
                _this._queryView.showError();
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
    QueryController.prototype.onQueryError = function (textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    };
    return QueryController;
})();
//# sourceMappingURL=QueryController.js.map