class RsInstanceEventArgs
{
   constructor(instance: InstanceParams, mediaType: string)
   {
      this._instanceParams = instance;
      this._mediaType = mediaType;
   }

   private _instanceParams: InstanceParams;
   private _mediaType: string;

   public get InstanceParams(): InstanceParams {
      return this._instanceParams;
   };
   public set InstanceParams( instance : InstanceParams ) {
      this._instanceParams = instance ;
   };

   public get MediaType(): string {
      return this._mediaType;
   };
   public set MediaType(mediaType: string) {
      this._mediaType = mediaType;
   };

  
}