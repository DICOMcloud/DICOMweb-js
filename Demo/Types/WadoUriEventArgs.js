var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WadoUriEventArgs = (function (_super) {
    __extends(WadoUriEventArgs, _super);
    function WadoUriEventArgs(instance, contentType, frame) {
        _super.call(this, instance, contentType);
        this._frame = "";
        this._frame = frame;
    }
    Object.defineProperty(WadoUriEventArgs.prototype, "Frame", {
        get: function () {
            return this._frame;
        },
        set: function (frame) {
            this._frame = frame;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return WadoUriEventArgs;
})(RsInstanceEventArgs);
//# sourceMappingURL=WadoUriEventArgs.js.map