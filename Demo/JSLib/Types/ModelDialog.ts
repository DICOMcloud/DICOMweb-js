/// <reference path="coderenderer.ts" />
class ModalDialog {
   private _$dialogName: string;
   private _$dlg: JQuery;
   private _$dlgContentParent: JQuery;
   private _contentElement: HTMLElement;
   private _$dlgTitle: JQuery;
   private _$dlgHeader: JQuery;
   private _onDlgClose = new LiteEvent<string>();
   private _codeRenderer = new CodeRenderer();
   private _editor: any;

   public get dilaogClosed() { return this._onDlgClose; }

   constructor($dialogName: string = "#modal-alert") {
      this._$dialogName = $dialogName;
      this._$dlg = $(this._$dialogName);
      this._$dlgTitle = this._$dlg.find(".modal-title");
      this._$dlgHeader = this._$dlg.find(".modal-header"); 
      this._$dlgContentParent = this._$dlg.find(".model-body-content");

      
      this._contentElement = this._$dlgContentParent[0]; 
   }

   public showJson(title: string, data: any) {
      this._$dlgTitle.text(title);

      this._editor = this._codeRenderer.renderJson(this._contentElement, data);

      this._$dlg.modal("show");

      this.onDialogClose(this._$dlg);
   }

   public showXml(title: string, data: any) {
      
      this._$dlgTitle.text(title);

      this._editor = this._codeRenderer.renderXml(this._contentElement, data);

      this._$dlg.modal("show");

      this.onDialogClose(this._$dlg);
   }

   public showText(title: string, data: string) {

      this._$dlgTitle.text(title);

      if (data) {
         data = data.toString()
      }

      this._editor = this._codeRenderer.renderValue(this._contentElement, data);

      this._$dlg.modal("show");

      this.onDialogClose(this._$dlg);
   }

   public show(title: string)
   {
      this.showText(title, "");
   }

   public showError(title: string, data: string)
   {
      this._$dlgHeader.addClass("bg-danger");

      this.showText(title, data);
   }
   
   private onDialogClose($dlg: any)
   {
      $dlg.on('hidden.bs.modal', () => {
         this._$dlgHeader.removeClass("bg-danger");
         this._codeRenderer.clean(this._editor);
         this._onDlgClose.trigger(this._$dialogName);
      });
   }
}