var StoreView = (function () {
    function StoreView(parentElement) {
        this._parent = parentElement;
        this.registerEvents();
    }
    StoreView.prototype.registerEvents = function () {
        var _this = this;
        $(this._parent).find("#addFileButton").click(function (e) {
            e.preventDefault();
            var newName = jQuery('#displayName').val();
            // Initiate method calls using jQuery promises.
            // Get the local file as an array buffer.
            var getFile = _this.getFileBuffer();
            var url = DICOMwebJS.ServerConfiguration.getStowUrl();
            var anonymizedElementsQuery = _this.getAnonymizedElementsQuery();
            getFile.done(function (arrayBuffer) {
                var proxy = new StowRsProxy(url);
                var dlg = new ModalDialog("#modal-alert");
                proxy.StoreInstance(arrayBuffer, null, anonymizedElementsQuery).done(function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
                    }
                    else {
                        dlg.showXml("XML Store Response", xhr.response);
                    }
                })
                    .fail(function (xhr) {
                    dlg.showText("Error Storing Dataset", xhr.response);
                });
            });
        });
    };
    // Get the local file as an array buffer.
    StoreView.prototype.getFileBuffer = function () {
        var fileInput = $('#getFile');
        var deferred = jQuery.Deferred();
        var reader = new FileReader();
        reader.onloadend = function (e) {
            deferred.resolve(e.target.result);
        };
        reader.onerror = function (e) {
            deferred.reject(e.target.error);
        };
        reader.readAsArrayBuffer(fileInput[0].files[0]);
        return deferred.promise();
    };
    StoreView.prototype.getAnonymizedElementsQuery = function () {
        var anonyElementsQuery = "";
        $(this._parent).find(".anonymizer-field").each(function (index, element) {
            var tagKey = $(element).attr("data-app-tag");
            var tagValue = $(element).val();
            anonyElementsQuery += tagKey + "=" + tagValue + "&";
        });
        return anonyElementsQuery;
    };
    return StoreView;
}());
//# sourceMappingURL=StoreView.js.map