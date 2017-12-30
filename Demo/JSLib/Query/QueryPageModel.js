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
//# sourceMappingURL=QueryPageModel.js.map