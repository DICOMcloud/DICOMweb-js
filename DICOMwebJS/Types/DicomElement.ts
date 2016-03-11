class DicomElement {
   Tag: DicomTag;
   VR: string//DicomVR;
   Value: Array<any> = [];

   public constructor() { }
   public SetUInt16(index: number, value: number) {
       this.Value[index] = value;
   }

   public GetUInt16(index: number, defaultValue: number): number {
      return parseInt(this.get(index, defaultValue));
   }

   public SetString(index: number, value: string) {
       this.Value[index] = value;
   }

   public GetString(index: number, defaultValue: string): string {
      return this.get(index, defaultValue) + "" ;
   }

   public SetValue(index: number, value: any) {
      this.Value[index] = value;
   }

   public GetValue(index: number, defaultValue: string): any {
      return this.get(index, defaultValue);
   }

   public toString():string
   {
       if (this.Value && this.Value.length > 0) {
          return this.getStringValue();
       }
       else
       {
           return "" ;
       }
   }
     
   private get(index: number, defaultValue: any): any {
      if (this.Value && this.Value.length > 0) {
         if (index >= this.Value.length) {
            throw "Invalid index";
         }

         return this.Value[index];
      }

      return defaultValue;
   }

   private getStringValue()
   {
      if (this.VR == "PN")
      {
         var pName: PersonName = this.Value[0];

         if (pName)
         {
            return pName.Alphabetic + "" ;
         }
      }

      return this.Value[0].toString(); //TODO: must concatentate the values and stuff      
   }


}