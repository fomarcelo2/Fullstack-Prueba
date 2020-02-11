$(document).ready(function(){
   
     jugadores("");

     
    
});


function jugadores(method){
    var Ids ="";
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users" + method,
        data: "",
        contentType: "application/Json; charset=utf-8",
        dataType: 'Json',


        success: function (r) {


                for (i in r) {
                    $("#cuerpo").append('<tr><th scope="row">'+r[i].id+'</th><td>'+r[i].name+'</td><td>'+r[i].username+'</td><td>'+r[i].email+'</td><td>'+r[i].phone+'</td><th scope="col" class="text-primary" id=""><a href="javascript:pasarVariables(\'editar.html\','+r[i].id+')">Editar</a> </th><th scope="col" class="text-primary"><a href="eliminar.html">Eliminar</a> </th></tr>')
 
                
                }

            
        },
        error: function (r) {
            
            
        },
        failure: function (r) {

        }
    });
} 

function pasarVariables(pagina, nombres) {
    // pagina +="?";
    // nomVec = nombres.split(",");
    // for (i=0; i<nomVec.length; i++)
    //   pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    // pagina = pagina.substring(0,pagina.length-1);
    // location.href=pagina;

    console.log(pagina +" " +  nombres)
  }


function myFunction(){
    $("#id01").css("display", "inline");
    $("#nombre").focus();
}


function guardar(){
    var idMax = 0;
    var nombre;
    var usuario;
    var correo;
    var telefono;
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        data: "",
        contentType: "application/Json; charset=utf-8",
        dataType: 'Json',


        success: function (r) {


                for (i in r) {
                   
                     idMax = idMax + 1; 
                                
                }

                guardarDatos(idMax);
        },
        error: function (r) {
            
            
        },
        failure: function (r) {

        }
        
    });

    function guardarDatos(v){
        idMax1 = v;
    idMax1 +=1;
    nombre = $("#nombre").val();
    usuario = $("#username").val();
    correo = $("#correo").val();
    telefono = $("#telefono").val();

    $("#cuerpo").append('<tr><th scope="row">'+idMax1+'</th><td>'+nombre+'</td><td>'+usuario+'</td><td>'+correo+'</td><td>'+telefono+'</td><th scope="col" class="text-primary" id=""><a href="javascript:pasarVariables(\'editar.html\','+idMax1+')">Editar</a> </th><th scope="col" class="text-primary"><a href="eliminar.html">Eliminar</a> </th></tr>')
    $("#id01").css("display", "none");
     $("#nombre").val("");
     $("#username").val("");
     $("#correo").val("");
     $("#telefono").val("");
    }

    

}