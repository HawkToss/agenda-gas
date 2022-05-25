const HOJA = SpreadsheetApp.openById("10OMKxtKsZR3qL_pJyeTVFjul95_h2l1OR7d62cNTHMU").getActiveSheet();

function doGet(datos)
{
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda Google App Script");
}

function doPost(datos)
{
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda Google App Script");
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}