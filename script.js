//cargando el documento html
$( document ).ready(function() {
    $("#menos").click(function(){
        //obtiene el valor del contador y al mismo tiempo lo convierte en numero entero
        var c = parseInt($("#contador").text());
        //if(c>0){}
        //incrementa el valor del contador y al mismo tiempo asigna el nuevo valor
        $("#contador").text(c-1)
    });
    $("#mas").click(function(){
        //obtiene el valor del contador y al mismo tiempo lo convierte en numero entero
        var c = parseInt($("#contador").text());
        //if(c<10){ }
        //incrementa el valor del contador y al mismo tiempo asigna el nuevo valor
        $("#contador").text(c+1)
    });
    $("#reset").click(function(){
        //asigna el valor del contador en 0
        $("#contador").text(0)
    });
});
