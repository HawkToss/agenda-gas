function doGet()
{
    return HtmlService.createTemplateFromFile("web").evaluate()
    .setTitle("Agenda Google App Script");
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById("10OMKxtKsZR3qL_pJyeTVFjul95_h2l1OR7d62cNTHMU").getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;

}