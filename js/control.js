$(document).ready(function () {

    jugadores("");



});

//Listar todos los usuarios
function jugadores(method) {
    var Ids = "";
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users" + method,
        data: "",
        contentType: "application/Json; charset=utf-8",
        dataType: 'Json',


        success: function (r) {


            for (i in r) {
                $("#cuerpo").append('<tr><th scope="row">' + r[i].id + '</th><td>' + r[i].name + '</td><td>' + r[i].username + '</td><td>' + r[i].email + '</td><td>' + r[i].phone + '</td><th scope="col" class="text-primary" id=""><a href="javascript:editar(' + r[i].id + ')">Editar</a> </th><th scope="col" class="text-primary"><a href="javascript:eliminar(' + r[i].id + ')">Eliminar</a> </th></tr>')


            }


        },
        error: function (r) {


        },
        failure: function (r) {

        }
    });
}


//funcion eliminar
function eliminar(valorId) {
    $("#cuerpo").empty();
    var id = 1;


    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        data: "",
        contentType: "application/Json; charset=utf-8",
        dataType: 'Json',


        success: function (r) {


            for (i in r) {
                if (id != valorId) {

                    $("#cuerpo").append('<tr><th scope="row">' + r[i].id + '</th><td>' + r[i].name + '</td><td>' + r[i].username + '</td><td>' + r[i].email + '</td><td>' + r[i].phone + '</td><th scope="col" class="text-primary" id=""><a href="javascript:editar(' + r[i].id + ')">Editar</a> </th><th scope="col" class="text-primary"><a href="javascript:eliminar(' + r[i].id + ')">Eliminar</a> </th></tr>')
                }
                id += 1;

            }


        },
        error: function (r) {


        },
        failure: function (r) {

        }
    });
}

//funcion para detectar elemento a editar
function editar(valorId) {


    var urls = "https://jsonplaceholder.typicode.com/users/" + valorId


    $.ajax({
        type: "GET",
        url: urls,
        data: "",
        contentType: "application/Json; charset=utf-8",
        dataType: 'Json',


        success: function (r) {


            //   for (i in r) {
            //       if (id != valorId) {

            //           $("#cuerpo").append('<tr><th scope="row">'+r[i].id+'</th><td>'+r[i].name+'</td><td>'+r[i].username+'</td><td>'+r[i].email+'</td><td>'+r[i].phone+'</td><th scope="col" class="text-primary" id=""><a href="javascript:pasarVariables('+r[i].id+')">Editar</a> </th><th scope="col" class="text-primary"><a href="javascript:eliminar('+r[i].id+')">Eliminar</a> </th></tr>')
            //       }
            //       id+=1;

            //   }

            var idMax = r.id;
            var nombres = r.name;
            var usuarios = r.username;
            var correos = r.email;
            var telefonos = r.phone;

            
            $("#iDUsuario").val(idMax);
            $("#nombres").val(nombres);
            $("#usernames").val(usuarios);
            $("#correos").val(correos);
            $("#telefonos").val(telefonos);
            $("#iDUsuario").prop('disable', true);
            $("#id02").css("display", "inline");




        },
        error: function (r) {


        },
        failure: function (r) {

        }
    });
}

//editar elemento
function editarValores() {
    var num = 1;
    $("#cuerpo").empty();
    idSel = $("#iDUsuario").val();
    nombre = $("#nombres").val();
    usuario = $("#usernames").val();
    correo = $("#correos").val();
    telefono = $("#telefonos").val();
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        data: "",
        contentType: "application/Json; charset=utf-8",
        dataType: 'Json',


        success: function (r) {


            for (i in r) {
                if (num != idSel) {

                    $("#cuerpo").append('<tr><th scope="row">' + r[i].id + '</th><td>' + r[i].name + '</td><td>' + r[i].username + '</td><td>' + r[i].email + '</td><td>' + r[i].phone + '</td><th scope="col" class="text-primary" id=""><a href="javascript:editar(' + r[i].id + ')">Editar</a> </th><th scope="col" class="text-primary"><a href="javascript:eliminar(' + r[i].id + ')">Eliminar</a> </th></tr>')
                } else {

                    $("#cuerpo").append('<tr><th scope="row">' + idSel + '</th><td>' + nombre + '</td><td>' + usuario + '</td><td>' + correo + '</td><td>' + telefono + '</td><th scope="col" class="text-primary" id=""><a href="javascript:editar(' + idSel + ')">Editar</a> </th><th scope="col" class="text-primary"><a href="javascript:eliminar(' + idSel + ')">Eliminar</a> </th></tr>')
                }

                num += 1;
            }

            $("#id02").css("display", "none");

        },
        error: function (r) {


        },
        failure: function (r) {

        }
    });

}

//mostrar formulario para ingresar nuevo usuario
function myFunction() {
    $("#id01").css("display", "inline");
    $("#nombre").focus();
}

//Guardar nuevo usuario
function guardar() {
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

    function guardarDatos(v) {
        idMax1 = v;
        idMax1 += 1;
        nombre = $("#nombre").val();
        usuario = $("#username").val();
        correo = $("#correo").val();
        telefono = $("#telefono").val();

        $("#cuerpo").append('<tr><th scope="row">' + idMax1 + '</th><td>' + nombre + '</td><td>' + usuario + '</td><td>' + correo + '</td><td>' + telefono + '</td><th scope="col" class="text-primary" id=""><a href="javascript:editar(' + idMax1 + ')">Editar</a> </th><th scope="col" class="text-primary"><a href="javascript:eliminar(' + idMax1 + ')">Eliminar</a> </th></tr>')
        $("#id01").css("display", "none");
        $("#nombre").val("");
        $("#username").val("");
        $("#correo").val("");
        $("#telefono").val("");
    }


}