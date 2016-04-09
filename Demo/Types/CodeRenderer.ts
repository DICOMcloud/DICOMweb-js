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
}