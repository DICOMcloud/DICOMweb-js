var CodeRenderer = (function () {
    function CodeRenderer() {
    }
    CodeRenderer.renderJson = function (uiElement, data) {
        var editor = uiElement;
        ;
        var editorSession;
        editor = ace.edit(uiElement);
        editorSession = editor.getSession();
        editorSession.setValue(JSON.stringify(data, null, '\t'));
        editorSession.setMode("ace/mode/json");
        editor.resize();
    };
    CodeRenderer.renderXml = function (uiElement, data) {
        var editor;
        var editorSession;
        editor = ace.edit(uiElement);
        editorSession = editor.getSession();
        editorSession.setValue(data);
        editorSession.setMode("ace/mode/html");
        editor.resize();
    };
    CodeRenderer.renderValue = function (uiElement, data) {
        this.renderEditor(uiElement, data);
    };
    CodeRenderer.renderEditor = function (uiElement, data, editorMode) {
        var editor;
        var editorSession;
        editor = ace.edit(uiElement);
        editorSession = editor.getSession();
        editorSession.setValue(data);
        if (typeof editorMode !== "undefined") {
            editorSession.setMode(editorMode);
        }
        editor.resize();
    };
    return CodeRenderer;
}());
//# sourceMappingURL=CodeRenderer.js.map