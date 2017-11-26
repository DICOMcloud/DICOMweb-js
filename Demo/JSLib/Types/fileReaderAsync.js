var fileReaderAsync = (function () {
    function fileReaderAsync() {
    }
    fileReaderAsync.prototype.read = function (file) {
        var deferred = $.Deferred();
        var reader = new FileReader();
        reader.onloadend = function (e) {
            deferred.resolve(e.target.result);
        };
        reader.onerror = function (e) {
            deferred.reject(e.target.error);
        };
        reader.readAsArrayBuffer(file);
        return deferred.promise();
    };
    return fileReaderAsync;
}());
//# sourceMappingURL=fileReaderAsync.js.map