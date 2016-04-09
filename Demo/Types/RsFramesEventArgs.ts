/// <reference path="rsinstanceeventargs.ts" />
class RsFramesEventArgs extends RsInstanceEventArgs
{
   constructor(instance: InstanceParams, mediaType: string, frames: string) {
      super(instance, mediaType);

      this._frames= frames ;
   }

   private _frames: string;

   public get FrameList(): string {
      return this._frames;
   };
   public set FrameList(frames: string) {
      this._frames = frames;
   };
}