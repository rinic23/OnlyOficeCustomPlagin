(function(window, undefined){

    var isInit = false;
    window.Add = function(field_type)
    {
        if (!isInit)
            return;

        // serialize command as text
        var sScript = "var oDocument = Api.GetDocument();";
        sScript += "var oParagraph = Api.CreateParagraph();";
        sScript += "oParagraph.AddText(\'" + field_type + "\');";
        sScript += "oDocument.InsertContent([oParagraph]);";
        window.Asc.plugin.info.recalculate = true;
        window.Asc.plugin.executeCommand("command", sScript);
    };
    window.Mark = function()
    {
        return window.Add('${DynamicTable}');
    };

    window.Asc.plugin.init = function()
    {
        isInit = true;
    };

    window.Asc.plugin.button = function(id)
    {
        if (-1 == id)
            this.executeCommand("close", "");
    };

    console.log('hi222')

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));

})(window, undefined);

