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
var RsFramesEventArgs = (function (_super) {
    __extends(RsFramesEventArgs, _super);
    function RsFramesEventArgs(instance, mediaType, frames) {
        var _this = _super.call(this, instance, mediaType) || this;
        _this._frames = frames;
        return _this;
    }
    Object.defineProperty(RsFramesEventArgs.prototype, "FrameList", {
        get: function () {
            return this._frames;
        },
        set: function (frames) {
            this._frames = frames;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return RsFramesEventArgs;
}(RsInstanceEventArgs));
//# sourceMappingURL=RsFramesEventArgs.js.map