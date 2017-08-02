cornerstoneWADOImageLoader.configure({
    beforeSend: function (xhr) {
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
    }
});
var WadoViewer = (function () {
    function WadoViewer(element, uriProx) {
        this._loaded = false;
        this._viewerElement = element;
        this._uriProxy = uriProx;
        cornerstone.enable(element);
        this.configureWebWorker();
        $(window).resize(function () {
            cornerstone.resize(element, true);
        });
    }
    WadoViewer.prototype.configureWebWorker = function () {
        var config = {
            webWorkerPath: 'bower_components/cornerstoneWADOImageLoader/dist/cornerstoneWADOImageLoaderWebWorker.min.js',
            taskConfiguration: {
                'decodeTask': {
                    codecsPath: 'cornerstoneWADOImageLoaderCodecs.min.js'
                }
            }
        };
        cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    };
    WadoViewer.prototype.loadInstance = function (instance, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var dicomInstance = {
            studyUID: instance.StudyInstanceUid,
            seriesUID: instance.SeriesInstanceUID,
            instanceUID: instance.SopInstanceUid
        };
        var imageParam = { frameNumber: null, transferSyntax: transferSyntax };
        var instanceUrl = this._uriProxy.createUrl(dicomInstance, MimeTypes.DICOM, imageParam);
        this.loadAndViewImage("wadouri:" + instanceUrl);
        this._loadedInstance = instance;
        cornerstone.resize(this._viewerElement, true);
    };
    WadoViewer.prototype.loadedInstance = function () {
        return this._loadedInstance;
    };
    WadoViewer.prototype.loadAndViewImage = function (imageId) {
        var _this = this;
        var element = this._viewerElement;
        try {
            var start = new Date().getTime();
            cornerstone.loadAndCacheImage(imageId).then(function (image) {
                console.log(image);
                var viewport = cornerstone.getDefaultViewportForImage(element, image);
                cornerstone.displayImage(element, image, viewport);
                if (_this._loaded === false) {
                    cornerstoneTools.mouseInput.enable(element);
                    cornerstoneTools.mouseWheelInput.enable(element);
                    cornerstoneTools.wwwc.activate(element, 1);
                    cornerstoneTools.pan.activate(element, 2);
                    cornerstoneTools.zoom.activate(element, 4);
                    cornerstoneTools.zoomWheel.activate(element);
                    cornerstoneTools.wwwcTouchDrag.activate(element);
                    _this._loaded = true;
                }
                function getTransferSyntax() {
                    var value = image.data.string('x00020010');
                    return value + ' [' + uids[value] + ']';
                }
                function getSopClass() {
                    var value = image.data.string('x00080016');
                    return value + ' [' + uids[value] + ']';
                }
                function getPixelRepresentation() {
                    var value = image.data.uint16('x00280103');
                    if (value === undefined) {
                        return;
                    }
                    return value + (value === 0 ? ' (unsigned)' : ' (signed)');
                }
                function getPlanarConfiguration() {
                    var value = image.data.uint16('x00280006');
                    if (value === undefined) {
                        return;
                    }
                    return value + (value === 0 ? ' (pixel)' : ' (plane)');
                }
                $('#transferSyntax').text(getTransferSyntax());
                $('#sopClass').text(getSopClass());
                $('#samplesPerPixel').text(image.data.uint16('x00280002'));
                $('#photometricInterpretation').text(image.data.string('x00280004'));
                $('#numberOfFrames').text(image.data.string('x00280008'));
                $('#planarConfiguration').text(getPlanarConfiguration());
                $('#rows').text(image.data.uint16('x00280010'));
                $('#columns').text(image.data.uint16('x00280011'));
                $('#pixelSpacing').text(image.data.string('x00280030'));
                $('#bitsAllocated').text(image.data.uint16('x00280100'));
                $('#bitsStored').text(image.data.uint16('x00280101'));
                $('#highBit').text(image.data.uint16('x00280102'));
                $('#pixelRepresentation').text(getPixelRepresentation());
                $('#windowCenter').text(image.data.string('x00281050'));
                $('#windowWidth').text(image.data.string('x00281051'));
                $('#rescaleIntercept').text(image.data.string('x00281052'));
                $('#rescaleSlope').text(image.data.string('x00281053'));
                $('#basicOffsetTable').text(image.data.elements.x7fe00010.basicOffsetTable ? image.data.elements.x7fe00010.basicOffsetTable.length : '');
                $('#fragments').text(image.data.elements.x7fe00010.fragments ? image.data.elements.x7fe00010.fragments.length : '');
                $('#minStoredPixelValue').text(image.minPixelValue);
                $('#maxStoredPixelValue').text(image.maxPixelValue);
                var end = new Date().getTime();
                var time = end - start;
                $('#loadTime').text(time + "ms");
            }, function (err) {
                alert(err);
            });
        }
        catch (err) {
            alert(err);
        }
    };
    return WadoViewer;
}());
//# sourceMappingURL=wadoViewer.js.map