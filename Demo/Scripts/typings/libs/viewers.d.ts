interface DWV{
   gui: any;
   App: any;
}


interface Cornerstone
{
   enable(element: Element): any;
   resize(element: Element, fit: Boolean): any;
   loadAndCacheImage(imageId: string): JQueryPromise<{}>;
   getDefaultViewportForImage(element: any, image: any);
   displayImage(element: any, image: any, viewport: any);
}

interface CornerstoneTools
{
   mouseInput: any;
   mouseWheelInput: any;
   wwwc: any; // ww/wc is the default tool for left mouse button
   pan: any; // pan is the default tool for middle mouse button
   zoom: any; // zoom is the default tool for right mouse button
   zoomWheel: any; // zoom is the default tool for middle mouse wheel
}

declare var dwv: DWV;

declare var cornerstone: Cornerstone;
declare var cornerstoneTools: CornerstoneTools;
declare var uids: Object;


