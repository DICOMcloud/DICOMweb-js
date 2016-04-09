/// <reference path="coderenderer.ts" />
class ModalDialog
{
   private _$dialogName: string;

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
   }
}