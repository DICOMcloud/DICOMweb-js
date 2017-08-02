var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WadoUriEventArgs = (function (_super) {
    __extends(WadoUriEventArgs, _super);
    function WadoUriEventArgs(instance, contentType, frame) {
        var _this = _super.call(this, instance, contentType) || this;
        _this._frame = "";
        _this._frame = frame;
        return _this;
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
}(RsInstanceEventArgs));
//# sourceMappingURL=WadoUriEventArgs.js.map