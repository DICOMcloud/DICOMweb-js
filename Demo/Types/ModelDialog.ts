/// <reference path="coderenderer.ts" />
class ModalDialog
{
   private _$dialogName: string;
   private _onDlgClose = new LiteEvent<string>();


   public get dilaogClosed() { return this._onDlgClose; }

   constructor($dialogName:string ) {
      this._$dialogName = $dialogName;
   }

   public showJson(title: string, data: any)
   {
      var $dlg: any = $(this._$dialogName);
      var $contentElement = $dlg.find(".model-body-content");

      $dlg.find(".modal-title").text(title);

      CodeRenderer.renderJson($contentElement[0], data);

      $dlg.modal("show");

      this.onDialogClose($dlg);
   }

   public showXml(title: string, data: any) {
      var $dlg: any = $(this._$dialogName);
      var $contentElement = $dlg.find(".model-body-content");

      $dlg.find(".modal-title").text(title);

      CodeRenderer.renderXml($contentElement[0], data);

      $dlg.modal("show");

      this.onDialogClose($dlg);
   }

   public show(title: string)
   {
      var $dlg: any = $(this._$dialogName);
      $dlg.find(".modal-title").text(title);

      $dlg.modal("show");

      this.onDialogClose($dlg);
   }

   private onDialogClose($dlg: any)
   {
      $dlg.on('hidden.bs.modal', () => {

         this._onDlgClose.trigger(this._$dialogName);
      });
   }
}