interface DWV{
   gui: any;
   App: any;
}


interface Cornerstone
{
   enable(element: Element, options: any): any;
   resize(element: Element, fit: Boolean): any;
   loadAndCacheImage(imageId: string): JQueryPromise<{}>;
   getDefaultViewportForImage(element: any, image: any);
   displayImage(element: any, image: any, viewport: any);
   getViewport: any;
}

interface CornerstoneTools
{
   mouseInput: any;
   mouseWheelInput: any;
   wwwc: any; // ww/wc is the default tool for left mouse button
   pan: any; // pan is the default tool for middle mouse button
   zoom: any; // zoom is the default tool for right mouse button
   zoomWheel: any; // zoom is the default tool for middle mouse wheel
   wwwcTouchDrag: any;
   addStackStateManager: any;
   addToolState: any;
   removeToolState: any;
   getToolState: any;
   clearToolState: any;
   stackScroll: any;
   stackScrollWheel: any;

   scrollIndicator: any;
}

interface CornerstoneWADOImageLoader
{
   configure(options: any);
   webWorkerManager: any;
   external: any;
}

declare var dwv: DWV;

declare var cornerstone: Cornerstone;
declare var cornerstoneTools: CornerstoneTools;
declare var cornerstoneWADOImageLoader: CornerstoneWADOImageLoader;
declare var uids: Object;


