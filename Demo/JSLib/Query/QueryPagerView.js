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
        this._$pageInfo.text("Page: " + this.model.currentPage + "/" + this.model.pageCount);
    };
    QueryPagerView.prototype.show = function () {
        this._$element.show();
    };
    QueryPagerView.prototype.hide = function () {
        this._$element.hide();
    };
    return QueryPagerView;
}());
//# sourceMappingURL=QueryPagerView.js.map