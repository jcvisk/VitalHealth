$(document).ready(function () {

    //Inicializando WOW
    new WOW().init();

    //Obteniedo el año actual para el copyright
    /*
    copyright = new Date();
    update = copyright.getFullYear();
    document.getElementById('year').innerHTML = update;
    */


    /* JS PARA QUE LOS METATAGAS SEAN DIANMICOS*/
    //Asignando dominio a metaTags
    var dominio = $(location).attr('hostname');
    $('#metatagUrlFacebook').attr('content', dominio)
    $('#metatagUrlTwitter').attr('content', dominio)
    //Asignando direccion de favicon a metaTags
    dominio += "/favicon.png"
    $('#metatagFaviconFacebook').attr('content', dominio)
    $('#metatagFaviconTwitter').attr('content', dominio)

});









