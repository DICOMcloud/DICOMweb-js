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
        this.$progress.hide();
        this.$resultBody.show();
        this.$alert.addClass("alert-success").removeClass("alert-danger");
        this.$resultTitle.text("Success!");
        if (xmlData) {
            var $referencedInstance = $(xmlData).find("DicomAttribute[keyword='ReferencedInstanceSequence']");
            var instanceUrl = $referencedInstance.find("DicomAttribute[keyword='RetrieveURI']").children("Value").text();
            this._copyImageView.setUrl(instanceUrl);
            CodeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
        }
        else {
            this._copyImageView.setUrl("");
            CodeRenderer.renderXml(this.$resultContent[0], "");
        }
    };
    StoreResultView.prototype.showError = function (xmlData, error) {
        this.$progress.hide();
        this.$resultBody.show();
        this.$alert.addClass("alert-danger").removeClass("alert-success");
        this.$resultTitle.text(error);
        this._copyImageView.setUrl("");
        if (xmlData) {
            CodeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
        }
        else {
            this._copyImageView.setUrl("");
            CodeRenderer.renderXml(this.$resultContent[0], "");
        }
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
//# sourceMappingURL=StoreResultView.js.map