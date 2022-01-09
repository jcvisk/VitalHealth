$(document).ready(function () {

    //Inicializando WOW
    new WOW().init();

    //Obteniedo el año actual para el copyright
    /*
    copyright = new Date();
    update = copyright.getFullYear();
    document.getElementById('year').innerHTML = update;
    */

    //Cambiando colores del navbar
    $(window).scroll(function () {
        if ($("#nav").offset().top > 56) {
            //Cambiando color de navbar
            $("#nav").removeClass("bg-transparent");
            $("#nav").addClass("bg-glass");

            //cambiando color de letras del nav
            if ($('#header').hasClass("navbar-blue")) {
                $("#header").removeClass('navbar-blue');
                $("#header").addClass('flag');
            }

        } else {
            //Cambiando color de navbar
            $("#nav").removeClass("bg-glass");
            $("#nav").addClass("bg-transparent");

            //cambiando color de letras del nav
            if ($('#header').hasClass("flag")) {
                $("#header").addClass('navbar-blue');
                $("#header").removeClass('flag');
            }
        }
    });

    /*
    Haciendo que el nav abarque toda la pantalla al desplegarse
    */
    $('#nav-toggler').click(function () {
        $("#header").toggleClass('align-start');

        $("#nav").toggleClass('align-start');
        $("#nav").toggleClass('bg-glass-toggle');
    });

    /*
    Obteniendo el hight del header y agregandolo al div separador
    */
    let navHeight = $('#header').height();
    $('#separator').css("height", navHeight);


    //Agregando la clase active en la seccion en la que se encuentra
    /*
    let url = $(location).attr('href');
    $('.nav-link').each(function(i, obj) {
        if (obj == url) {
            $(this).parent().addClass('active');
        }
    });
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









