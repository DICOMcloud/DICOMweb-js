class WadoUriEventArgs extends RsInstanceEventArgs
{
      private _frame: string = "";
      constructor(instance: InstanceParams, contentType: string, frame: string) {
      super(instance, contentType);

      this._frame = frame; 
      }

      public get Frame(): string {
         return this._frame;
      };
      public set Frame(frame: string) {
         this._frame = frame;
      };
   
}