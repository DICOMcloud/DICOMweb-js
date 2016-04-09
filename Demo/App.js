window.onload = function () {
    new app();
};
var app = (function () {
    function app() {
        this.init();
    }
    app.prototype.init = function () {
        this._baseUrl = "https://dicomcloud.azurewebsites.net/";
        //this._baseUrl = "https://localhost:44301/";
        //this._baseUrl = "http://dicomserver.co.uk:81/";
        //DICOMwebJS.ServerConfiguration.QidoPart = "qido"
        DICOMwebJS.ServerConfiguration.BaseServerUrl = this._baseUrl;
        var rsProxy = new WadoRsProxy(DICOMwebJS.ServerConfiguration.getWadoRsUrl());
        var uriProxy = new WadoUriProxy();
        var model = new QueryModel();
        var queryView = new QueryView(document.getElementById("#content"), model, new RetrieveService(rsProxy));
        var queryController = new QueryController(queryView, model, new QidoRsProxy(DICOMwebJS.ServerConfiguration.getQidoUrl()), rsProxy, uriProxy);
        //new TestClientProxies().StoreFile();
        this.initStore();
    };
    app.prototype.initStore = function () {
        var _this = this;
        $("#addFileButton").click(function (e) {
            e.preventDefault();
            var newName = jQuery('#displayName').val();
            // Initiate method calls using jQuery promises.
            // Get the local file as an array buffer.
            var getFile = _this.getFileBuffer();
            var url = DICOMwebJS.ServerConfiguration.getStowUrl();
            getFile.done(function (arrayBuffer) {
                var proxy = new StowRsProxy(url);
                proxy.StoreInstance(arrayBuffer, function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        var $dlg = $("#modal-alert");
                        $dlg.find(".modal-title").text("JSON Store Response");
                        $dlg.modal("show");
                        $dlg.find(".modal-body-content").text(xhr.response);
                    }
                    else {
                        alert(xhr.status);
                    }
                }, function (error) {
                    alert(error.message);
                });
            });
        });
    };
    // Get the local file as an array buffer.
    app.prototype.getFileBuffer = function () {
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
    return app;
})();
$(document).on('change', '.btn-file :file', function () {
    var input = $(this), numFiles = input.get(0).files ? input.get(0).files.length : 1, label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});
$(document).ready(function () {
    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents('.input-group').find(':text'), log = numFiles > 1 ? numFiles + ' files selected' : label;
        if (input.length) {
            input.val(log);
        }
        else {
            if (log)
                alert(log);
        }
    });
});
