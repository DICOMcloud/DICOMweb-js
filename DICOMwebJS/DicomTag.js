var DicomTag = (function () {
    function DicomTag(tagValue) {
        this.Value = tagValue;
        this.StringValue = ("00000000" + tagValue.toString(16)).substr(-8);
        this.Group = ((tagValue & 0xffff0000) >> 16); //TODO:not working
        this.Element = (tagValue & 0x0000ffff); //TODO:not working
    }
    DicomTag.prototype.toString = function () {
        return "(" + ("0000" + this.Group.toString(8)).substr(-4) + "," + ("0000" + this.Element.toString(8)).substr(-4) + ")";
    };
    return DicomTag;
})();
//# sourceMappingURL=DicomTag.js.map