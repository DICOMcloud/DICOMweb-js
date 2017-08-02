var QidoRsEventArgs = (function () {
    function QidoRsEventArgs(mediaType, studyInstanceUid, seriesInstanceUid, sopInstanceUid) {
        this.StudyInstanceUID = studyInstanceUid;
        this.SeriesInstanceUID = seriesInstanceUid;
        this.SopInstanceUID = sopInstanceUid;
        this.MediaType = mediaType;
    }
    Object.defineProperty(QidoRsEventArgs.prototype, "StudyInstanceUID", {
        get: function () {
            return this._studyInstanceUid;
        },
        set: function (studyInstanceUID) {
            this._studyInstanceUid = studyInstanceUID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QidoRsEventArgs.prototype, "SeriesInstanceUID", {
        get: function () {
            return this._seriesInstanceUid;
        },
        set: function (seriesInstanceUID) {
            this._seriesInstanceUid = seriesInstanceUID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QidoRsEventArgs.prototype, "SopInstanceUID", {
        get: function () {
            return this._sopInstanceUid;
        },
        set: function (sopInstanceUID) {
            this._sopInstanceUid = sopInstanceUID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QidoRsEventArgs.prototype, "MediaType", {
        get: function () {
            return this._mediaType;
        },
        set: function (mediaType) {
            this._mediaType = mediaType;
        },
        enumerable: true,
        configurable: true
    });
    return QidoRsEventArgs;
}());
//# sourceMappingURL=QidoRsEventArgs.js.map