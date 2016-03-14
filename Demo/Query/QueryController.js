var QueryController = (function () {
    function QueryController(queryModel, queryService) {
        var _this = this;
        this._queryModel = queryModel;
        this._queryService = queryService;
        queryModel.StudyQueryChangedEvent = function () {
            _this.queryStudies();
        };
        queryModel.SelectedStudyChangedEvent = function () {
            _this.querySeries(_this._queryModel.selectedStudy());
        };
        queryModel.SelectedSeriesChangedEvent = function () {
            _this.queryInstances(_this._queryModel.selectedSeries());
        };
    }
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
//# sourceMappingURL=querycontroller.js.map