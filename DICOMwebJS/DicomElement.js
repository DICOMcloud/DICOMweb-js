var DicomElement = (function () {
    function DicomElement() {
    }
    DicomElement.prototype.SetUInt16 = function (index, value) {
    };
    DicomElement.prototype.GetUInt16 = function (index, defaultValue) {
        return this.get(index, defaultValue);
    };
    DicomElement.prototype.SetString = function (index, value) {
    };
    DicomElement.prototype.GetString = function (index, defaultValue) {
        return this.get(index, defaultValue);
    };
    DicomElement.prototype.get = function (index, defaultValue) {
        if (this.Value && this.Value.length > 0) {
            if (index >= this.Value.length) {
                throw "Invalid index";
            }
            return this.Value[index];
        }
        return defaultValue;
    };
    return DicomElement;
})();
//# sourceMappingURL=DicomElement.js.map