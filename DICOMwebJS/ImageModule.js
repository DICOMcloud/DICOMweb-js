var ImagePixelMacroIod = (function () {
    /// <summary>
    /// Initializes a new instance of the <see cref="ImagePixelMacroIod"/> class.
    /// </summary>
    /// <summary>
    /// Initializes a new instance of the <see cref="ImagePixelMacroIod"/> class.
    /// </summary>
    function ImagePixelMacroIod(dicomProvider) {
        this.DicomSourceProvider = dicomProvider;
    }
    Object.defineProperty(ImagePixelMacroIod.prototype, "SamplesPerPixel", {
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
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.SamplesPerPixel).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.SamplesPerPixel).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "PhotometricInterpretation", {
        /// <summary>
        /// Gets or sets the photometric interpretation.
        /// </summary>
        /// <value>The photometric interpretation.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.PhotometricInterpretation).GetString(0, "");
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.PhotometricInterpretation).SetString(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "Rows", {
        /// <summary>
        /// Gets or sets the rows.
        /// </summary>
        /// <value>The rows.</value>
        get: function () {
            var element = this.DicomSourceProvider.getElement(DicomTags.Rows);
            return element.GetUInt16(0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "Rowse", {
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.Rows).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "Columns", {
        /// <summary>
        /// Gets or sets the columns.
        /// </summary>
        /// <value>The columns.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.Columns).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.Columns).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "BitsAllocated", {
        /// <summary>
        /// Gets or sets the bits allocated.
        /// </summary>
        /// <value>The bits allocated.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.BitsAllocated).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.BitsAllocated).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "BitsStored", {
        /// <summary>
        /// Gets or sets the bits stored.
        /// </summary>
        /// <value>The bits stored.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.BitsStored).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.BitsStored).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "HighBit", {
        /// <summary>
        /// Gets or sets the high bit.
        /// </summary>
        /// <value>The high bit.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.HighBit).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.HighBit).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "PixelRepresentation", {
        /// <summary>
        /// Gets or sets the pixel representation.Data representation of the pixel samples. 
        /// Each sample shall have the same pixel representation. Enumerated Values: 
        /// <para>0000H = unsigned integer. </para>
        /// <para>0001H = 2's complement</para>
        /// </summary>
        /// <value>The pixel representation.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.PixelRepresentation).GetString(0, "");
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.PixelRepresentation).SetString(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "PlanarConfiguration", {
        /// <summary>
        /// Gets or sets the planar configuration.
        /// </summary>
        /// <value>The planar configuration.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.PlanarConfiguration).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.PlanarConfiguration).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "SmallestImagePixelValue", {
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
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.SmallestImagePixelValue).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.SmallestImagePixelValue).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePixelMacroIod.prototype, "LargestImagePixelValue", {
        /// <summary>
        /// Gets or sets the largest image pixel value.
        /// </summary>
        /// <value>The largest image pixel value.</value>
        get: function () {
            return this.DicomSourceProvider.getElement(DicomTags.LargestImagePixelValue).GetUInt16(0, 0);
        },
        set: function (value) {
            this.DicomSourceProvider.getElement(DicomTags.LargestImagePixelValue).SetUInt16(0, value);
        },
        enumerable: true,
        configurable: true
    });
    return ImagePixelMacroIod;
})();
//# sourceMappingURL=ImageModule.js.map