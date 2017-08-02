var StudyEventArgs = (function () {
    function StudyEventArgs(study) {
        this._studyParams = study;
    }
    Object.defineProperty(StudyEventArgs.prototype, "StudyParams", {
        get: function () {
            return this._studyParams;
        },
        set: function (instance) {
            this._studyParams = instance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return StudyEventArgs;
}());
//# sourceMappingURL=StudyEventArgs.js.map