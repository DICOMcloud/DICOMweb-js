class CodeRenderer
{
   public static renderJson(uiElement:HTMLElement, data :any)
   {
      var editor : any = uiElement;;
      var editorSession;


      editor = ace.edit(uiElement);

      editorSession = editor.getSession();
      editorSession.setValue(JSON.stringify(data, null, '\t'));
      editorSession.setMode("ace/mode/json");

      editor.resize();
   }

   public static renderXml(uiElement: HTMLElement, data: any)
   {
      var editor : any ;
      var editorSession;


      editor = ace.edit(uiElement);

      editorSession = editor.getSession();
      editorSession.setValue(data);
      editorSession.setMode("ace/mode/html");

      editor.resize();
   }

   public static renderValue(uiElement: HTMLElement, data: any) {
      this.renderEditor(uiElement, data);
   }

   private static renderEditor(uiElement: HTMLElement, data: any, editorMode?:string) {
      var editor: any;
      var editorSession;


      editor = ace.edit(uiElement);

      editorSession = editor.getSession();
      editorSession.setValue(data);

      if (typeof editorMode !== "undefined") {
         editorSession.setMode(editorMode);
      }

      editor.resize();
   }
}