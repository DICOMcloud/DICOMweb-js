/// <reference path="js/cornerstoneWADOImageLoader.js" />

    cornerstoneWADOImageLoader.configure({
        beforeSend: function(xhr) {
            // Add custom headers here (e.g. auth tokens)
            //xhr.setRequestHeader('x-auth-token', 'my auth token');
        }
    });

var loaded = false;

function loadAndViewImage(imageId) {
    var element = $('#dicomImage').get(0);
    try {
        var start = new Date().getTime();
        cornerstone.loadAndCacheImage(imageId).then(function(image) {
            console.log(image);
            var viewport = cornerstone.getDefaultViewportForImage(element, image);
            //$('#toggleModalityLUT').attr("checked",viewport.modalityLUT !== undefined);
            //$('#toggleVOILUT').attr("checked",viewport.voiLUT !== undefined);
            cornerstone.displayImage(element, image, viewport);
            if(loaded === false) {
                cornerstoneTools.mouseInput.enable(element);
                cornerstoneTools.mouseWheelInput.enable(element);
                cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
                cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
                cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
                cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
                loaded = true;
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
                if(value === undefined) {
                    return;
                }
                return value + (value === 0 ? ' (unsigned)' : ' (signed)');
            }

            function getPlanarConfiguration() {
                var value = image.data.uint16('x00280006');
                if(value === undefined) {
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
            
        }, function(err) {
            alert(err);
        });
    }
    catch(err) {
        alert(err);
    }
}

$(document).ready(function () {
    var element = $('#dicomImage').get(0);
    //$('#toggleModalityLUT').on('click', function() {
    //    var applyModalityLUT = $('#toggleModalityLUT').is(":checked");
    //    console.log('applyModalityLUT=', applyModalityLUT);
    //    var image = cornerstone.getImage(element);
    //    var viewport = cornerstone.getViewport(element);
    //    if(applyModalityLUT) {
    //        viewport.modalityLUT = image.modalityLUT;
    //    } else {
    //        viewport.modalityLUT = undefined;
    //    }
    //    cornerstone.setViewport(element, viewport);
    //});

    //$('#toggleVOILUT').on('click', function() {
    //    var applyVOILUT = $('#toggleVOILUT').is(":checked");
    //    console.log('applyVOILUT=', applyVOILUT);
    //    var image = cornerstone.getImage(element);
    //    var viewport = cornerstone.getViewport(element);
    //    if(applyVOILUT) {
    //        viewport.voiLUT = image.voiLUT;
    //    } else {
    //        viewport.voiLUT = undefined;
    //    }
    //    cornerstone.setViewport(element, viewport);
    //});


});
