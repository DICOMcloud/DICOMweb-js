class ImagePixelMacroIod {
   DicomSourceProvider: IDicomDatasetService;
   /// <summary>
   /// Initializes a new instance of the <see cref="ImagePixelMacroIod"/> class.
   /// </summary>

   /// <summary>
   /// Initializes a new instance of the <see cref="ImagePixelMacroIod"/> class.
   /// </summary>
   public constructor(dicomProvider: IDicomDatasetService) {
      this.DicomSourceProvider = dicomProvider;
   }

   /// <summary>
   /// Gets or sets the samples per pixel.  Number of samples (planes) in this image.
   /// <para>
   /// Samples per Pixel (0028,0002) is the number of separate planes in this image. One, three, and
   /// four image planes are defined. Other numbers of image planes are allowed, but their meaning is
   /// not defined by this Standard. 
   /// </para>
   /// <para>
   /// For monochrome (gray scale) and palette color images, the number of planes is 1. 
   /// </para>
   /// <para>
   /// For RGB and other three vector color models, the value of this attribute is 3. 
   /// </para>
   /// <para>
   /// For four vector color models, the value of this attribute is 4.
   /// </para>
   /// </summary>
   /// <value>The samples per pixel.</value>
   /// <remarks>See Part 3, C.7.6.3.1.1 for more info.</remarks>
   public get SamplesPerPixel() {
      return this.DicomSourceProvider.getElement(DicomTags.SamplesPerPixel).GetUInt16(0, 0);
   }
   public set SamplesPerPixel(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.SamplesPerPixel).SetUInt16(0, value);
   }

   /// <summary>
   /// Gets or sets the photometric interpretation.
   /// </summary>
   /// <value>The photometric interpretation.</value>
   public get PhotometricInterpretation(): string {
      return this.DicomSourceProvider.getElement(DicomTags.PhotometricInterpretation).GetString(0, "");
   }

   public set PhotometricInterpretation(value: string) {
      this.DicomSourceProvider.getElement(DicomTags.PhotometricInterpretation).SetString(0, value);
   }
    

   /// <summary>
   /// Gets or sets the rows.
   /// </summary>
   /// <value>The rows.</value>
   public get Rows(): number {
      var element = this.DicomSourceProvider.getElement(DicomTags.Rows);
      return element.GetUInt16(0, 0);
   }

   public set Rowse(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.Rows).SetUInt16(0, value);
   }
    

   /// <summary>
   /// Gets or sets the columns.
   /// </summary>
   /// <value>The columns.</value>
   public get Columns(): number {
      return this.DicomSourceProvider.getElement(DicomTags.Columns).GetUInt16(0, 0);
   }

   public set Columns(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.Columns).SetUInt16(0, value);
   }
    

   /// <summary>
   /// Gets or sets the bits allocated.
   /// </summary>
   /// <value>The bits allocated.</value>
   public get BitsAllocated(): number {
      return this.DicomSourceProvider.getElement(DicomTags.BitsAllocated).GetUInt16(0, 0);
   }

   public set BitsAllocated(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.BitsAllocated).SetUInt16(0, value);
   }
    

   /// <summary>
   /// Gets or sets the bits stored.
   /// </summary>
   /// <value>The bits stored.</value>
   public get BitsStored(): number {
      return this.DicomSourceProvider.getElement(DicomTags.BitsStored).GetUInt16(0, 0);
   }

   public set BitsStored(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.BitsStored).SetUInt16(0, value);
   }
    

   /// <summary>
   /// Gets or sets the high bit.
   /// </summary>
   /// <value>The high bit.</value>
   public get HighBit(): number {
      return this.DicomSourceProvider.getElement(DicomTags.HighBit).GetUInt16(0, 0);
   }

   public set HighBit(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.HighBit).SetUInt16(0, value);
   }
    

   /// <summary>
   /// Gets or sets the pixel representation.Data representation of the pixel samples. 
   /// Each sample shall have the same pixel representation. Enumerated Values: 
   /// <para>0000H = unsigned integer. </para>
   /// <para>0001H = 2's complement</para>
   /// </summary>
   /// <value>The pixel representation.</value>
   public get PixelRepresentation(): string {
      return this.DicomSourceProvider.getElement(DicomTags.PixelRepresentation).GetString(0, "");
   }
   public set PixelRepresentation(value: string) {
      this.DicomSourceProvider.getElement(DicomTags.PixelRepresentation).SetString(0, value);
   }
    

   /// <summary>
   /// Gets or sets the planar configuration.
   /// </summary>
   /// <value>The planar configuration.</value>
   public get PlanarConfiguration(): number {
      return this.DicomSourceProvider.getElement(DicomTags.PlanarConfiguration).GetUInt16(0, 0);
   }
   public set PlanarConfiguration(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.PlanarConfiguration).SetUInt16(0, value);
   }
    

   //public PixelAspectRatio PixelAspectRatio
   //  {
   //      get { return PixelAspectRatio.FromString(this.DicomSourceProvider.getElement(DicomTags.PixelAspectRatio).ToString()); }
   //      set
   //      {
   //          if (value == null || value.IsNull)
   //              this.DicomSourceProvider.getElement(DicomTags.PixelAspectRatio).SetNullValue();
   //          else
   //              this.DicomSourceProvider.getElement(DicomTags.PixelAspectRatio).SetStringValue(value.ToString());
   //      }
   //  }

   /// <summary>
   /// Gets or sets the smallest image pixel value.
   /// </summary>
   /// <value>The smallest image pixel value.</value>
   public get SmallestImagePixelValue(): number {
      return this.DicomSourceProvider.getElement(DicomTags.SmallestImagePixelValue).GetUInt16(0, 0);
   }
   public set SmallestImagePixelValue(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.SmallestImagePixelValue).SetUInt16(0, value);
   }
    

   /// <summary>
   /// Gets or sets the largest image pixel value.
   /// </summary>
   /// <value>The largest image pixel value.</value>
   public get LargestImagePixelValue(): number {
      return this.DicomSourceProvider.getElement(DicomTags.LargestImagePixelValue).GetUInt16(0, 0);
   }
   public set LargestImagePixelValue(value: number) {
      this.DicomSourceProvider.getElement(DicomTags.LargestImagePixelValue).SetUInt16(0, value);
   }

   public get WindowCenter(): number {
       return this.DicomSourceProvider.getElement(DicomTags.WindowCenter).GetUInt16(0, 0);
   }

   public set WindowCenter(value: number) {
       this.DicomSourceProvider.getElement(DicomTags.WindowCenter).SetUInt16(0, value);
   }

   public get WindowWidth(): number {
       return this.DicomSourceProvider.getElement(DicomTags.WindowWidth).GetUInt16(0, 0);
   }

   public set WindowWidth(value: number) {
       this.DicomSourceProvider.getElement(DicomTags.WindowWidth).SetUInt16(0, value);
   }


   ///// <summary>
   ///// Gets or sets the red palette color lookup table descriptor.
   ///// </summary>
   ///// <value>The red palette color lookup table descriptor.</value>
   //public ushort RedPaletteColorLookupTableDescriptor
   //  {
   //      get { return this.DicomSourceProvider.getElement(DicomTags.RedPaletteColorLookupTableDescriptor].GetUInt16(0, 0); }
   //      set { this.DicomSourceProvider.getElement(DicomTags.RedPaletteColorLookupTableDescriptor].SetUInt16(0, value); }
   //  }

   //public ushort GreenPaletteColorLookupTableDescriptor
   //  {
   //      get { return this.DicomSourceProvider.getElement(DicomTags.GreenPaletteColorLookupTableDescriptor].GetUInt16(0, 0); }
   //      set { this.DicomSourceProvider.getElement(DicomTags.GreenPaletteColorLookupTableDescriptor].SetUInt16(0, value); }
   //  }

   //public ushort BluePaletteColorLookupTableDescriptor
   //  {
   //      get { return this.DicomSourceProvider.getElement(DicomTags.BluePaletteColorLookupTableDescriptor].GetUInt16(0, 0); }
   //      set { this.DicomSourceProvider.getElement(DicomTags.BluePaletteColorLookupTableDescriptor].SetUInt16(0, value); }
   //  }

}