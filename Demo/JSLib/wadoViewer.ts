    cornerstoneWADOImageLoader.configure({
        beforeSend: function(xhr) {
            // Add custom headers here (e.g. auth tokens)
            //xhr.setRequestHeader('x-auth-token', 'my auth token');

           if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader)
           {
              xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
           }
        }
    });

class WadoViewer
{ 
   private _loaded: Boolean = false;
   private _uriProxy: WadoUriProxy;
   private _loadedInstance: InstanceParams;
   private _transferSyntax: string;
   private _$parentView: JQuery;
   private _viewerElement: HTMLElement;
   private _copyImageView: copyImageUrlView;


   constructor($parentView:JQuery, uriProxy: WadoUriProxy)
   {
      this._$parentView = $parentView;
      this._viewerElement = $parentView.find('#dicomImage').get(0);
      this._uriProxy = uriProxy;
      this._copyImageView = new copyImageUrlView($parentView, uriProxy);
      cornerstone.enable(this._viewerElement);

      this.configureWebWorker();
      
      $(window).resize(() => {
         cornerstone.resize(this._viewerElement, true);
      })
   }


   configureWebWorker()
   {
      var config = {
         webWorkerPath: 'bower_components/cornerstoneWADOImageLoader/dist/cornerstoneWADOImageLoaderWebWorker.min.js',
         taskConfiguration: {
            'decodeTask': {
               codecsPath: 'cornerstoneWADOImageLoaderCodecs.min.js'
            }
         }
      };

      cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
   }

   public loadInstance(instance: InstanceParams, transferSyntax: string = null)
   {
      let dicomInstance: CommonDicomInstanceParams = {
         studyUID: instance.StudyInstanceUid,
         seriesUID: instance.SeriesInstanceUID,
         instanceUID: instance.SopInstanceUid
      };

      let imageParam: WadoImageParams = { frameNumber: null, transferSyntax:transferSyntax };
      var instanceUrl = this._uriProxy.createUrl(dicomInstance, MimeTypes.DICOM, imageParam);

      //add this "wadouri:" so it loads the wado uri loader, 
      //the loader trims this prefix from the url
      this.loadAndViewImage("wadouri:" + instanceUrl);

      this._loadedInstance = instance;
      this._transferSyntax = transferSyntax;

      cornerstone.resize(this._viewerElement, true);

      this._copyImageView.setUrl(instanceUrl);
   }

   public loadedInstance(): InstanceParams
   {
      return this._loadedInstance;
   }

    private loadAndViewImage(imageId:string) {
       var element = this._viewerElement;


       try {
           var start = new Date().getTime();
           cornerstone.loadAndCacheImage(imageId).done((image: any) => {
              console.log(image);
              var viewport = cornerstone.getDefaultViewportForImage(element, image);
              //$('#toggleModalityLUT').attr("checked",viewport.modalityLUT !== undefined);
              //$('#toggleVOILUT').attr("checked",viewport.voiLUT !== undefined);
              cornerstone.displayImage(element, image, viewport);
              if (this._loaded === false) {
                 cornerstoneTools.mouseInput.enable(element);
                 cornerstoneTools.mouseWheelInput.enable(element);
                 cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
                 cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
                 cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
                 cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
                 cornerstoneTools.wwwcTouchDrag.activate(element);
                 this._loaded = true;
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

           })
            .fail(() => {
                 new ModalDialog().showError("Error","Image Failed to load");
              });
       }
       catch(err) {
          new ModalDialog().showError("Error", err);
       }
   }
}