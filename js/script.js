$(document).ready(function(){

    //FUNCION PARA AGREGAR UN ELEMENTO AL TO-DO LIST
    $('#btnAdd').click(function(){
        var $valueElement = $('#boxInput').val();
        if($valueElement=== ""){
            alert('Ingrese una actividad al To-Do List');
        }else{
            $('ul').append(`<li>${$valueElement}<span class="fas fa-trash"></span></li>`);
            $('#boxInput').val("");
        }
    });

    //FUNCION PARA ELIMINAR UN ELEMENTO DEL TO-DO LIST
    $("ul").on("click", "span", function(){
        $(this).parent().remove();
    });
});