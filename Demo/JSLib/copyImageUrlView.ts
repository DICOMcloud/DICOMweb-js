class copyImageUrlView
{
   private _$parent: JQuery;
   private _instanceUrl: string;
   private _uriProxy: WadoUriProxy;
   private _$copyBtn: JQuery;
   private _$downloadBtn: JQuery;

   constructor($parent: JQuery, uriProxy: WadoUriProxy )
   {
      this._$parent = $parent;
      this._uriProxy = uriProxy;
      this._instanceUrl = null;

      this._$copyBtn = $parent.find('#copy-image-url-button');
      this._$downloadBtn = $parent.find('#dlownload-image-url-button');

      this.registerImageURLButtons();
   }

   public setUrl(instanceUrl: string)
   {
      this._instanceUrl = instanceUrl;

      this._$parent.find("#image-url-input").val(instanceUrl);
   }

   private registerImageURLButtons() {

      this._$downloadBtn.bind('click', () => {

         if (this._instanceUrl) {

            this._uriProxy.getObjectInstance(this._instanceUrl).done(
               (data) => {
                  appUtils.download(data, "dicom.dcm");
               }).fail(
               (err) => {
                  new ModalDialog().showError("Error", err.message);
               }
               );
         }
      });


      this._$copyBtn.on('click', () => {
         var inputSelector = this._$copyBtn.attr("data-clipboard-target");
         var input = this._$parent[0].querySelector(inputSelector);

         if ($(input).val() == "") { return; }

         input.select();

         try {
            var success = document.execCommand('copy');
            if (success) {
               this._$copyBtn.trigger('copied', ['Copied!']);
            } else {
               this._$copyBtn.trigger('copied', ['Copy with Ctrl-c']);
            }
         } catch (err) {
            this._$copyBtn.trigger('copied', ['Copy with Ctrl-c']);
         }
      });

      // Handler for updating the tooltip message.
      this._$copyBtn.on('copied', (event, message) => {
         this._$copyBtn.attr('title', message)
            .tooltip('fixTitle')
            .tooltip('show')
            .attr('title', "Copy to Clipboard")
            .tooltip('fixTitle');
      });


   }
}