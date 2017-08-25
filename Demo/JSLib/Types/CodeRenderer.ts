class CodeRenderer
{
   public renderJson(uiElement: HTMLElement, data: any)
   {
      return this.renderEditor(uiElement, JSON.stringify(data, null, '\t'), "ace/mode/json");
   }

   public renderXml(uiElement: HTMLElement, data: any) : any
   {
      return this.renderEditor(uiElement, data, "ace/mode/xml");
   }

   public renderValue(uiElement: HTMLElement, data: any) :any {
      return this.renderEditor(uiElement, data, null, true);
   }

   public clean(editor: any)
   {
      if (editor) {
         editor.destroy();
         var oldDiv = editor.container
         var newDiv = oldDiv.cloneNode(false)

         oldDiv.parentNode.replaceChild(newDiv, oldDiv)

         editor.container = null;
         editor.renderer = null;

         editor = null;
      }
   }

   private renderEditor(uiElement: HTMLElement, data: any, editorMode?:string, autoWrap:Boolean = false) {
      var editor = ace.edit(uiElement);
      var editorSession = editorSession = editor.getSession();

      if (data) {
         editorSession.setValue(data);
      }

      if (editorMode) {
         editorSession.setMode(editorMode);
      }

      if (autoWrap) {
         editorSession.setUseWrapMode(true);
      }

      editor.resize();
   }
}