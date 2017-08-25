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
      return this.renderEditor(uiElement, data);
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

   private renderEditor(uiElement: HTMLElement, data: any, editorMode?:string) {
      var editor = ace.edit(uiElement);
      var editorSession = editorSession = editor.getSession();
      
      editorSession.setValue(data);

      if (typeof editorMode !== "undefined") {
         editorSession.setMode(editorMode);
      }

      editor.resize();
   }
}