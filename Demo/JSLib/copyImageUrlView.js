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
                    appUtils.showError(err.message);
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
//# sourceMappingURL=copyImageUrlView.js.map