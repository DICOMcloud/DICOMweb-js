interface DWV{
   gui: any;
   App: any;
}


interface Cornerstone
{
   enable(element: Element): any;
   resize(element: Element, fit: Boolean): any;
}

declare var dwv: DWV;

declare var cornerstone: Cornerstone;

declare function loadAndViewImage(url: string): any;

