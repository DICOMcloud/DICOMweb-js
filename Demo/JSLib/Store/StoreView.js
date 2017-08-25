var StoreView = (function () {
    function StoreView(parentElement) {
        this._parent = parentElement;
        this._resultView = new StoreResultView($(".store-result-view"), new WadoUriProxy(DICOMwebJS.ServerConfiguration.getWadoRsUrl()));
        this._resultView.hide();
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
                _this._resultView.show();
                _this._resultView.showProgress();
                proxy.StoreInstance(arrayBuffer, null, anonymizedElementsQuery).done(function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
                    }
                    else {
                        _this._resultView.showSuccess(xhr.responseXML);
                    }
                })
                    .fail(function (xhr) {
                    //dlg.showText("Error Storing Dataset", xhr.response);
                    _this._resultView.showError(xhr.responseXML, "Error Storing Dataset");
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
        $(this._parent).find(".app-anonymizer-field").each(function (index, element) {
            var tagKey = $(element).attr("data-app-tag");
            var tagValue = $(element).val();
            if (tagValue !== "") {
                anonyElementsQuery += tagKey + "=" + tagValue + "&";
            }
        });
        return anonyElementsQuery;
    };
    return StoreView;
}());
//# sourceMappingURL=StoreView.js.map