var ModalDialog = (function () {
    function ModalDialog($dialogName) {
        this._onDlgClose = new LiteEvent();
        this._$dialogName = $dialogName;
    }
    Object.defineProperty(ModalDialog.prototype, "dilaogClosed", {
        get: function () { return this._onDlgClose; },
        enumerable: true,
        configurable: true
    });
    ModalDialog.prototype.showJson = function (title, data) {
        var $dlg = $(this._$dialogName);
        var $contentElement = $dlg.find(".model-body-content");
        $dlg.find(".modal-title").text(title);
        CodeRenderer.renderJson($contentElement[0], data);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.showXml = function (title, data) {
        var $dlg = $(this._$dialogName);
        var $contentElement = $dlg.find(".model-body-content");
        $dlg.find(".modal-title").text(title);
        CodeRenderer.renderXml($contentElement[0], data);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.showText = function (title, data) {
        var $dlg = $(this._$dialogName);
        var $contentElement = $dlg.find(".model-body-content");
        $dlg.find(".modal-title").text(title);
        CodeRenderer.renderValue($contentElement[0], data);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.show = function (title) {
        var $dlg = $(this._$dialogName);
        $dlg.find(".modal-title").text(title);
        $dlg.modal("show");
        this.onDialogClose($dlg);
    };
    ModalDialog.prototype.onDialogClose = function ($dlg) {
        var _this = this;
        $dlg.on('hidden.bs.modal', function () {
            _this._onDlgClose.trigger(_this._$dialogName);
        });
    };
    return ModalDialog;
}());
//# sourceMappingURL=ModelDialog.js.map