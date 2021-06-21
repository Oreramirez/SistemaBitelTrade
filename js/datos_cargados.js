$(document).ready(function(){
    load(1);
});

function load(page){     
    $("#loader").fadeIn('slow');
    $.ajax({
        url:'./ajax/Tareas/prueba_action.php?action=ajax&page='+page,
        beforeSend: function(objeto){
            $('#loader').html('<img src="./img/ajax-loader.gif"> Cargando...');
        },
        success:function(data){
            $(".outer_div").html(data).fadeIn('slow');
            $('#loader').html('');
        }
    })
}