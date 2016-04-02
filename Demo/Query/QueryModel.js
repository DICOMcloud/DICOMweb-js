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
})();
//# sourceMappingURL=QueryModel.js.map