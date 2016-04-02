var RsInstanceEventArgs = (function () {
    function RsInstanceEventArgs(instance, mediaType) {
        this._instanceParams = instance;
        this._mediaType = mediaType;
    }
    Object.defineProperty(RsInstanceEventArgs.prototype, "InstanceParams", {
        get: function () {
            return this._instanceParams;
        },
        set: function (instance) {
            this._instanceParams = instance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(RsInstanceEventArgs.prototype, "MediaType", {
        get: function () {
            return this._mediaType;
        },
        set: function (mediaType) {
            this._mediaType = mediaType;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return RsInstanceEventArgs;
})();
//# sourceMappingURL=RsInstanceEventArgs.js.map