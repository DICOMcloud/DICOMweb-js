class DicomTag {
   public constructor(tagValue: number) {
      this.Value = tagValue;
      this.StringValue = DicomTag.getStringValue (tagValue);
      this.Group = ((tagValue & 0xffff0000) >> 16); //TODO:not working
      this.Element = (tagValue & 0x0000ffff);//TODO:not working
   }
   public Group: number;
   public Element: number;
   public StringValue: string;
   public Value: number;


   public toString(): string {
      return "(" + ("0000" + this.Group.toString(8)).substr(-4) + "," + ("0000" + this.Element.toString(8)).substr(-4) + ")";
   }

   public static getStringValue(tagValue: number): string
   {
      return ("00000000" + tagValue.toString(16).toUpperCase()).substr(-8);
   }
}