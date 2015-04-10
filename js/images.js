function cambiarImagen(id,ruta){
     $("#"+id).children(1).attr("src",ruta);
};

$(document).ready(function(){
    $('#RemeraAzul').click( function (){
        cambiarImagen(1,"../images/Modelo Original/RemeraVerdeAgua.png");
});});

$(document).ready(function(){
    $("#RemeraRoja").click( function (){
        cambiarImagen(1,"../images/Modelo 2/RemeraRoja.png");            
});});

    

    

    

