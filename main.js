// $("h1").hide(); esconder elemento

// $document.ready(function) 

$(function(){

    // $("p").css({"background-color": "red"}); poner fondo rojo en párrafos
    
    // $("#id").css({"background-color": "red"}); poner fondo rojo en id
    
    // $(".class").css({"background-color": "red"}); poner fondo rojo en clase

    // $(".btn-hide").dblclick(function(){
    //     alert("OK");
    //     $(".class").hide();
    // })
    // $(".btn-show").click(function(){
    //     alert("OK");
    //     $(".class").show();
    // })


    // $(".class").mouseleave(function(){
    //     alert("OK");
    //     $(".class").fadeOut();
    // })
    // $("#id").mouseleave(function(){
    //     alert("OK");
    //     $(".class").fadeIn();
    // })
    
    
    // $(".class").mouseleave(function(){
        
    //     $(".class").SlideDown();
    // });

    // $("#id").mouseleave(function(){
    //     alert("OK");
    //     $(".class").SlideUp();
    // });

    $(".btn-hide").click(function(){

        // alert($(".class").text());
        //alert($(".class").attr("title"));

        $("#id").append("<strong>hola programadores</strong>");
        $("#id").after("<strong>crea segundo parrafo</strong>");
    });

});
