class StoreResultView
{
   private $view: JQuery;
   private $progress: JQuery;
   private $alert: JQuery;
   private $resultBody:JQuery
   private $resultContent: JQuery;
   private $resultTitle: JQuery;
   private _copyImageView: copyImageUrlView;
   
   constructor($view: JQuery, uriProxy: WadoUriProxy)
   {
      this.$view = $view;

      this.$progress = this.$view.find(".progress").hide();
      this.$alert = this.$view.find(".store-result-alert");
      this.$resultBody = this.$view.find(".store-result-body").hide();
      this.$resultTitle = this.$view.find(".store-result-title");
      this.$resultContent = this.$view.find(".store-result-content");

      this._copyImageView = new copyImageUrlView($view, uriProxy);
   }

   public showProgress()
   {

      this.$resultBody.hide();
      this.$progress.show();
   }

   public showSuccess(xmlData: Document)
   {
      var codeRenderer = new CodeRenderer();


      this.$progress.hide();
      this.$resultBody.show();

      this.setAlertClass("alert-success");
      this.$resultTitle.text("Success!");

      if (xmlData) {
         var $referencedInstance = $(xmlData).find("DicomAttribute[keyword='ReferencedInstanceSequence']")
         var instanceUrl = $referencedInstance.find("DicomAttribute[keyword='RetrieveURI']").children("Value").text();

         this._copyImageView.setUrl(instanceUrl);

         codeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
      }
      else
      {
         this._copyImageView.setUrl("");
         codeRenderer.renderXml(this.$resultContent[0], "");
      }
   }

   public showError(xmlData: any, error: string) {
      this.showFailure(xmlData, error, "alert-danger");
   }

   public showWarning(xmlData: any, error: string) {
      this.showFailure(xmlData, error, "alert-warning");
   }

   private showFailure(xmlData: any, error: string, alertStyle:string) {
      var codeRenderer = new CodeRenderer();


      this.$progress.hide();
      this.$resultBody.show();

      this.setAlertClass(alertStyle);

      this.$resultTitle.text(error);
      this._copyImageView.setUrl("");

      if (xmlData) {
         codeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
      }
      else {
         this._copyImageView.setUrl("");
         codeRenderer.renderXml(this.$resultContent[0], "");
      }
   }

   private setAlertClass(alertClass)
   {
      this.$alert.removeClass("alert-success alert-warning alert-danger").addClass(alertClass);
   }

   public hide()
   {
      this.$view.hide();
   }

   public show()
   {
      this.$view.show();
   }

   private getString(data: any)
   {
      return data.xml ? data.xml : (new XMLSerializer()).serializeToString(data);
   }

}