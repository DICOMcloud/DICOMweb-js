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

    interface Stack
    {
       currentImageIdIndex: number ;
       imageIds: Array<string>;
       instanceParams: Array<CommonDicomInstanceParams> ;
    };

class WadoViewer
{ 
   private _loaded: Boolean = false;
   private _uriProxy: WadoUriProxy;
   private _stack: Stack;
   private _transferSyntax: string;
   private _$parentView: JQuery;
   private _viewerElement: HTMLElement;
   private _copyImageView: copyImageUrlView;
   private _mouseActionsButtons: ViewerMouseButtons = new ViewerMouseButtons();
   private WADO_IMAGE_LOADER_PREFIX = "wadouri:";
   private _seriesNavigator: SeriesNavigator;
   private _instanceSlider: InstanceSlider;

   constructor($parentView:JQuery, uriProxy: WadoUriProxy)
   {
      this._$parentView = $parentView;
      this._viewerElement = $parentView.find('#dicomImage').get(0);
      this._uriProxy = uriProxy;
      this._copyImageView = new copyImageUrlView($parentView, uriProxy);
      this._seriesNavigator = new SeriesNavigator(this);
      this._instanceSlider = new InstanceSlider(this);

      const options = {
        renderer: 'webgl'
      };

      cornerstone.enable(this._viewerElement, options);

      cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

      this.configureWebWorker();


     this._viewerElement.addEventListener('cornerstonenewimage', (e) => {
       this.onNewImage(e);
     });


      $(this._$parentView).find("input[name=defaultButtonTool]").change((eventObj:JQueryEventObject) =>{
         var element: any = eventObj.target;
         if (element.value == "WL") {
            this._mouseActionsButtons.DefaultButton = this._mouseActionsButtons.MouseActions.WL;
         }
         else {
            this._mouseActionsButtons.DefaultButton = this._mouseActionsButtons.MouseActions.Sroll;
         }

         if (this._loaded)
         {
            this._mouseActionsButtons.applyMouseAction(this._viewerElement);
         }

      });

      $(window).resize(() => {
         cornerstone.resize(this._viewerElement, true);
      })
   }


   configureWebWorker()
   {
      var config = {
         
         webWorkerPath: location.protocol + "//" + location.host + '/scripts/cornerstone/cornerstoneWADOImageLoaderWebWorker.min.js',
         taskConfiguration: {
            'decodeTask': {
              codecsPath: location.protocol + "//" + location.host + '/scripts/cornerstone/cornerstoneWADOImageLoaderCodecs.min.js',
              usePDFJS: false
            }
         }
      };

      cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
   }

   public refresh()
   {
      cornerstone.resize(this._viewerElement, true);
   }

   public parentView()
   {
      return this._$parentView;
   }

   public getViewerElement()
   {
      return this._viewerElement;
   }

   public loadStudy(studyParam: StudyParams, transferSyntax: string = null)
   {
      this._seriesNavigator.reset();

      $.getJSON(DICOMwebJS.ServerConfiguration.getOhifJsonEndpoint(studyParam.StudyInstanceUid)).then((data: any) => {
         $.each(data.studies, (studyIndex: number, study: any) => {
            $.each(study.seriesList, (seriesIndex: number, series) => {
               this.loadSeriesJson(study, series, transferSyntax).then(() => { 
                  this._seriesNavigator.setStudy(study, seriesIndex, transferSyntax);
               });
               return false;
            });

            return false;
         });
      });
   }

   public loadSeriesJson(study: any, series: any, transferSyntax: string = null): JQueryPromise<{}> {

         var imageIds: Array<any> = [];
         var instanceParams: Array<CommonDicomInstanceParams> = [];
         var stack: Stack = {
            currentImageIdIndex: 0,
            imageIds: imageIds,
            instanceParams: instanceParams
         };

         $.each(series.instances, (instsanceIndex: number, instance: any) => {

            let imageParam: WadoImageParams = { frameNumber: null, transferSyntax: transferSyntax };
            let dicomInstance = {
               studyUID: study.studyInstanceUid,
               seriesUID: series.seriesInstanceUid,
               instanceUID: instance.sopInstanceUid
            };

            var wadoImageLoaderUrl = this.getWadoImageLoaderUrl(dicomInstance, imageParam);

            instanceParams.push(dicomInstance);

            imageIds.push(wadoImageLoaderUrl);
         });

         this._stack = stack;

         return this.loadAndViewImage(stack);
   }

   public loadInstance(dicomInstance: CommonDicomInstanceParams, transferSyntax: string = null)
   {
      let imageParam: WadoImageParams = { frameNumber: null, transferSyntax:transferSyntax };
      var wadoImageLoaderUrl = this.getWadoImageLoaderUrl(dicomInstance, imageParam);
      var stack: Stack = {
         currentImageIdIndex: 0,
         imageIds: [],
         instanceParams: []
      };

      stack.imageIds.push(wadoImageLoaderUrl);
      stack.instanceParams.push(dicomInstance);

      this._stack = stack;
      this._seriesNavigator.reset();

      this.loadAndViewImage(stack);
   }

   public loadedInstance(): CommonDicomInstanceParams
   {
      if (this._stack) {
         return this._stack.instanceParams[this._stack.currentImageIdIndex];
      }

      return null;
   }

   private loadAndViewImage(stack: Stack): JQueryPromise<{}>{
      var element = this._viewerElement;
      var promise;


      this._instanceSlider.reset();

       if (stack.imageIds.length == 0)
       {
          return;
       }

       var start = new Date().getTime();
       cornerstoneTools.clearToolState(element, "stack");

       this._instanceSlider.setStack(stack);

       try {
          promise = cornerstone.loadAndCacheImage(stack.imageIds[0]);

          promise.then((image: any) => {
             this._loaded = true;

             var viewport = cornerstone.getDefaultViewportForImage(element, image);
             //$('#toggleModalityLUT').attr("checked",viewport.modalityLUT !== undefined);
             //$('#toggleVOILUT').attr("checked",viewport.voiLUT !== undefined);
             cornerstone.displayImage(element, image, viewport);

             cornerstoneTools.mouseInput.enable(element);
             cornerstoneTools.mouseWheelInput.enable(element);
             cornerstoneTools.wwwcTouchDrag.activate(element);
             cornerstoneTools.addStackStateManager(element, ['stack', 'playClip']);
             cornerstoneTools.addToolState(element, 'stack', stack);

             if (stack.imageIds.length > 1) {
                this._mouseActionsButtons.WheelButton = this._mouseActionsButtons.MouseActions.Sroll;
             }
             else {
                this._mouseActionsButtons.WheelButton = this._mouseActionsButtons.MouseActions.Zoom;
             }

             this._mouseActionsButtons.applyMouseAction(element);

             cornerstone.resize(this._viewerElement, true);


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

          });

          promise.catch((xhr: XMLHttpRequest) => {
             var errorText = "Image failed to load";

             try {
                if ('TextDecoder' in window && xhr.response) {
                   var enc = new TextDecoder();
                   errorText = enc.decode(xhr.response);
                }
             }
             catch (error) { }

             new ModalDialog().showError("Error - " + xhr.status, errorText);
          });
       }
       catch(err) {
          new ModalDialog().showError("Error", err);
       }

       return promise;
   }

   private getWadoImageLoaderUrl(dicomInstance: CommonDicomInstanceParams, imageParam: WadoImageParams) {
      var instanceUrl = this._uriProxy.createUrl(dicomInstance, MimeTypes.DICOM, imageParam);

      //add this "wadouri:" so it loads the wado uri loader, 
      //the loader trims this prefix from the url
      return this.WADO_IMAGE_LOADER_PREFIX + instanceUrl;
   }


   private onNewImage(e) {
      var newImageIdIndex = this._stack.currentImageIdIndex;

      this._copyImageView.setUrl(this._stack.imageIds[this._stack.currentImageIdIndex].replace(this.WADO_IMAGE_LOADER_PREFIX,""));
   }
}

class ViewerMouseButtons
{
   public MouseActions = { WL: "WL", Zoom: "Zoom", Pan: "Pan", Sroll: "Scroll" };

   public DefaultButton = this.MouseActions.WL;
   public RightButton = this.MouseActions.Zoom;
   public MiddleButton = this.MouseActions.Pan;
   public WheelButton = this.MouseActions.Sroll;

   public applyMouseAction(element: HTMLElement)
   {
      cornerstoneTools.wwwc.activate(element, 0);
      cornerstoneTools.pan.activate(element, 0);
      cornerstoneTools.zoom.activate(element, 0);
      cornerstoneTools.stackScroll.activate(element, 0);

      this.apply(element, cornerstoneTools.wwwc, this.MouseActions.WL);
      this.apply(element, cornerstoneTools.pan, this.MouseActions.Pan);
      this.apply(element, cornerstoneTools.zoom, this.MouseActions.Zoom);
      this.apply(element, cornerstoneTools.stackScroll, this.MouseActions.Sroll);

      if (this.WheelButton == this.MouseActions.Zoom) {
         cornerstoneTools.zoomWheel.activate(element);

         cornerstoneTools.stackScrollWheel.deactivate(element);

         cornerstoneTools.scrollIndicator.disable(element);
      }
      else {
         // Enable all tools we want to use with this element
         //cornerstoneTools.stackScroll.activate(element, 1);
         cornerstoneTools.stackScrollWheel.activate(element);

         cornerstoneTools.scrollIndicator.enable(element);

         cornerstoneTools.zoomWheel.deactivate(element);
      }
   }

   private apply(element: HTMLElement, action: any, mouseAction: string) {
      if (this.DefaultButton == mouseAction) {
         action.activate(element, 1);
      }
      else if (this.RightButton == mouseAction) {
         action.activate(element, 4);
      }
      else if (this.MiddleButton == mouseAction) {
         action.activate(element, 2);
      }
   }

}

class SeriesNavigator
{
   private _wadoViewer: WadoViewer;
   private _study: any = null;
   private _loadedSeriesIndex: number = -1;
   private _transferSyntax: string = null;
   private _$prevEl: JQuery;
   private _$nextEl: JQuery;
   private _$serInput: JQuery;
   private _seriesCount: number = 0;
    private _$downloadBase64: JQuery;
   constructor(viewer: WadoViewer)
   {
      this._wadoViewer = viewer;

      this._$prevEl = this._wadoViewer.parentView().find(".prevtSer");
      this._$nextEl = this._wadoViewer.parentView().find(".nextSer");
      this._$serInput = this._wadoViewer.parentView().find(".seriesCount");
      this._$downloadBase64 = this._wadoViewer.parentView().find(".downbase64");
     
      this._$nextEl.click(() => { this.next(); });
      this._$prevEl.click(() => { this.prev(); });
     this._$downloadBase64.click(() => { this.down64(); });
      this.reset();
   }

   public setStudy(study: any, loadedSeriesIndex: number, transferSyntax:string=null)
   {
      this._study = study;
      this._loadedSeriesIndex = loadedSeriesIndex;
      this._transferSyntax = transferSyntax;
      this._seriesCount = study.seriesList.length;

      this.render();
   }

   public reset()
   {
      this._$serInput.text("");
      this._$prevEl.attr("disabled", "true");
      this._$nextEl.attr("disabled", "true");
      this._loadedSeriesIndex = -1;
      this._seriesCount = 0;
      this._study = null;
   }

   private render()
   {
      this._$serInput.text("Series " + (this._loadedSeriesIndex + 1) + "/" + this._seriesCount);

      if (this._loadedSeriesIndex == 0) {
         this._$prevEl.attr("disabled", "true");
      }
      else
      {
         this._$prevEl.removeAttr("disabled");
      }

      if (this._loadedSeriesIndex == this._seriesCount-1) {
         this._$nextEl.attr("disabled", "true");
      }
      else {
         this._$nextEl.removeAttr("disabled");
      }


   }

   private next()
   {
      if (this._loadedSeriesIndex == -1 || this._loadedSeriesIndex >= this._seriesCount-1 ) return;

      this._wadoViewer.loadSeriesJson(this._study, this._study.seriesList[++this._loadedSeriesIndex], this._transferSyntax);
      this.render();
   }

   private prev()
   {
      if (this._loadedSeriesIndex <= 0) return;

      this._wadoViewer.loadSeriesJson(this._study, this._study.seriesList[--this._loadedSeriesIndex], this._transferSyntax);
      this.render();
  }

  private down64() {
    const dcmCanvas = this._wadoViewer.parentView().find("#dicomImage");

    console.log("hey");
  }
}

class InstanceSlider
{
   private _viewer: WadoViewer;
   private _stack: Stack;
   private _$slider: JQuery;
   private _$instanceCount: JQuery;

   constructor(viewer: WadoViewer)
   {
      this._viewer = viewer;
      this._$slider = viewer.parentView().find(".instance-slider");
      this._$instanceCount = viewer.parentView().find(".instance-count");

     this._viewer.getViewerElement().addEventListener('cornerstonenewimage', (e) => {
       this._$slider.val(this._stack.currentImageIdIndex + 1);
       this.render();
     });

      this._$slider.on('input', () => {
         var slideIndex = this._$slider.val()-1;

         if (slideIndex >= 0 && slideIndex < this._stack.imageIds.length)
         {
            var targetElement = this._viewer.getViewerElement();
            var stackToolDataSource = cornerstoneTools.getToolState(targetElement, 'stack');

            if (stackToolDataSource === undefined) {
               return;
            }

            var stackData = stackToolDataSource.data[0];

            // Switch images, if necessary
            if (slideIndex !== stackData.currentImageIdIndex && stackData.imageIds[slideIndex] !== undefined) {
               cornerstone.loadAndCacheImage(stackData.imageIds[slideIndex]).then(function (image) {
                  var viewport = cornerstone.getViewport(targetElement);
                  stackData.currentImageIdIndex = slideIndex;
                  cornerstone.displayImage(targetElement, image, viewport);
               });
            }
         }
      })
   }

   public setStack(stack: Stack)
   {
      this._stack = stack;
      this._$slider.val(stack.currentImageIdIndex + 1);
      this._$slider.attr("min", 1);
      this._$slider.attr("max", this._stack.imageIds.length);

      this.render();
   }
   public reset()
   {
      this._stack = null;
      this._$instanceCount.text("");
   }

   private render()
   {
      this._$instanceCount.text("Count " + (this._stack.currentImageIdIndex+1) + "/" + this._stack.imageIds.length);
   }
}