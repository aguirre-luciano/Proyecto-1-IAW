function estilo(archivo){
    $("#estilo").attr("href",archivo);
};

$(document).ready(function(){
    $("#estilo1").click(function (){
        estilo("../css/estilo1.css");
    localStorage.estilo="estilo1.css";
});});

$(document).ready(function(){
    $("#estilo2").click(function (){
        estilo("../css/estilo2.css");
        localStorage.estilo="estilo2.css";
});});


//COOKIES
$(document).ready(function(){
    if(localStorage.getItem("estilo")===null){
        localStorage.estilo="estilo1.css";
    }
    $("#estilo").attr("href","../css/"+localStorage.estilo);    
});