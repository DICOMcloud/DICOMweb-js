var DicomJsonSourceProvider = (function () {
    function DicomJsonSourceProvider() {
    }
    DicomJsonSourceProvider.prototype.setModel = function (jsonDicom) {
        this.dataSource = jsonDicom;
    };
    DicomJsonSourceProvider.prototype.getElement = function (tagValue) {
        var dicomTag = new DicomTag(tagValue);
        var jsonElement = this.dataSource[dicomTag.StringValue];
        var element = new DicomElement();
        element.Value = jsonElement.Value;
        element.VR = jsonElement.vr;
        element.Tag = dicomTag;
        return element;
    };
    return DicomJsonSourceProvider;
})();
//# sourceMappingURL=DicomSourceProvider.js.map