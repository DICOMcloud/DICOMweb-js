window.onload = function () {
    new app();
};
var app = (function () {
    function app() {
        this.__AUTHENTICATION_COOKIE = "__dicomwebclient";
        this.init();
    }
    app.prototype.init = function () {
        if (typeof (serverUrl) != "undefined") {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = serverUrl;
        }
        else {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        }
        var model = new QueryModel();
        var rsProxy = new WadoRsProxy();
        var uriProxy = new WadoUriProxy();
        var qidoProxy = new QidoRsProxy();
        var rsService = new RetrieveService(rsProxy);
        var delowProxy = new DelowRsProxy();
        var queryView = new QueryView(document.getElementById("#content"), model, rsService);
        var queryController = new QueryController(queryView, model, qidoProxy, rsService, uriProxy, delowProxy);
        var element = $('#dicomImage').get(0);
        var viewer = new WadoViewer(element, uriProxy);
        this.initAuthentication();
        queryView.instanceViewRequest.on(function (args) {
            $('.nav-tabs a[href="#_ViewerView"]').tab('show');
            viewer.loadInstance(args.InstanceParams);
        });
        $("#SelectedTransferSyntax").change(function () {
            var loadedInstance = viewer.loadedInstance();
            if (null != loadedInstance) {
                viewer.loadInstance(loadedInstance, $("#SelectedTransferSyntax").val());
            }
        });
        this.initStore();
        window.onerror = function (message, url, lineNumber) {
            alert(message + "\n" + url + "\n" + lineNumber);
            return true;
        };
        $("#serverList").change(function () {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        });
    };
    app.prototype.initAuthentication = function () {
        var token = this.getAuthenticationToken();
        if (token) {
            DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader = true;
            DICOMwebJS.ServerConfiguration.SecurityToken = "Bearer " + token;
        }
    };
    app.prototype.getAuthenticationToken = function () {
        var name = this.__AUTHENTICATION_COOKIE;
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    app.prototype.initStore = function () {
        var _this = this;
        $("#addFileButton").click(function (e) {
            e.preventDefault();
            var newName = jQuery('#displayName').val();
            var getFile = _this.getFileBuffer();
            var url = DICOMwebJS.ServerConfiguration.getStowUrl();
            getFile.done(function (arrayBuffer) {
                var proxy = new StowRsProxy(url);
                var dlg = new ModalDialog("#modal-alert");
                proxy.StoreInstance(arrayBuffer, function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
                    }
                    else {
                        dlg.showXml("XML Store Response", xhr.response);
                    }
                }, function (xhr) {
                    dlg.showText("Error Storing Dataset", xhr.response);
                });
            });
        });
    };
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
}());
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
//# sourceMappingURL=demo.js.map