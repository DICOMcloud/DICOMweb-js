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
        window.onerror = function (message, url, lineNumber) {
            //save error and send to server for example.
            alert(message + "\n" + url + "\n" + lineNumber);
            return true;
        };
        $("#serverList").change(function () {
            DICOMwebJS.ServerConfiguration.BaseServerUrl = $("#serverList").val();
        });
    };
    //public initViewer() {
    //   // base function to get elements
    //   dwv.gui.getElement = dwv.gui.base.getElement;
    //   dwv.gui.displayProgress = function (percent) { };
    //   // create the dwv app
    //   var viewer = new dwv.App();
    //   // initialise with the id of the container div
    //   viewer.init({
    //      "containerDivId": "dwv",
    //      "tools": ["WindowLevel"], // or try "ZoomAndPan"
    //   });
    //   return viewer;
    //}
    app.prototype.initAuthentication = function () {
        var token = this.getAuthenticationToken();
        if (token) {
            DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader = true;
            DICOMwebJS.ServerConfiguration.SecurityToken = "Bearer " + token;
        }
    };
    app.prototype.getAuthenticationToken = function () {
        var name = this.__AUTHENTICATION_COOKIE;
        //http://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
        //function readCookie(name) {
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
        //}
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