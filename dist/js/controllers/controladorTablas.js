let formRegistrovalores;
//varible para el modal de insertacion de datos
let variableOpcionInsert = "";
let variableOpcionUpdate = "";

window.onload = function () {

    mostrar();
    formRegistrovalores = document.getElementById('registroValores');
    formRegistrovalores.addEventListener('submit', function (event) {
        event.preventDefault();
        boton = document.getElementById('botonModalMulti').value;
        if (boton == 'modificar') {
            alert();
            modificarValores();

        }
        if (boton == 'insertarValores') {


            insertValores();
        }

    });



};
function limpiarForm() {
    formRegistrovalores.reset();
    document.getElementById('InputCampo1').readOnly = false;
}
function mostrarClientes() {

    (async () => {
        try {

            var datos = {op: 'mostrarTodos'};

            var init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            };
            var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/model/Cliente.php", init);
            if (response.ok) {
                var respuesta = await response.json();
                var nombre = respuesta.nomb;
                var documento = respuesta.docu;
                var direccion = respuesta.dir;
                var telefono = respuesta.tel;
                var contentBody = document.getElementById('contentCliente');
                var datos = "";
                for (var i = 0; i < documento.length; i++) {
                    datos = datos + "<tr>\n\
                                        <td >" + (i + 1) + "</td>\n\
                                        <td class='docCli'>" + documento[i] + "</td>\n\
                                        <td class='nombCli'>" + nombre[i] + "</td>\n\
                                        <td class='dirCli'>" + direccion[i] + "</td>\n\
                                        <td class='telCli'>" + telefono[i] + "</td>\n\
                                        <td>\n\
                                                <button data-bs-toggle='modal' data-bs-target='#exampleModal'   class='btn btn-info py-0 px-2' onclick='actualizar(" + documento[i] + ",3)' ><b>i</b></button>\n\
                                                <button class='btn btn-danger py-0 px-2' onclick='eliminarCliente(" + documento[i] + ")' > <b>X</b> </button>\n\
                                        </td>";


                }

                contentBody.innerHTML = datos;

            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message);
        }
    })();

}
function mostrarEmpleados() {

    (async () => {
        try {

            var datos = {op: 'mostrarTodos'};

            var init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            };
            var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/model/Empleado.php", init);
            if (response.ok) {
                var respuesta = await response.json();
                var nombre = respuesta.nomb;
                var documento = respuesta.docu;
                var direccion = respuesta.dir;
                var telefono = respuesta.tel;
                var contentBody = document.getElementById('contentEmpleado');
                var datos = "";
                for (var i = 0; i < documento.length; i++) {
                    datos = datos + "<tr>\n\
                                        <td>" + (i + 1) + "</td>\n\
                                        <td class='docEmp'>" + documento[i] + "</td>\n\
                                        <td class='nombEmp'>" + nombre[i] + "</td>\n\
                                        <td class='dirEmp'>" + direccion[i] + "</td>\n\
                                        <td class='telEmp'>" + telefono[i] + "</td>\n\
                                        <td>\n\
                                                <button data-bs-toggle='modal' data-bs-target='#exampleModal'   class='btn btn-info py-0 px-2' onclick='actualizar(" + documento[i] + ",2)' ><b>i</b></button>\n\
                                                <button class='btn btn-danger py-0 px-2' onclick='eliminarEmpleado(" + documento[i] + ")' > <b>X</b> </button>\n\
                                        </td>";


                }

                contentBody.innerHTML = datos;

            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message);
        }
    })();

}
function mostrarProductos() {

    (async () => {
        try {

            var datos = {op: 'mostrarTodos'};

            var init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            };
            var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/model/Producto.php", init);
            if (response.ok) {
                var respuesta = await response.json();

                var codigo = respuesta.codigo;
                var descripcion = respuesta.descripcion;
                var precio = respuesta.precio;
                var cantidad = respuesta.cantidad;
                var contentBody = document.getElementById('contentProducto');
                var datos = "";
                for (var i = 0; i < codigo.length; i++) {
                    datos = datos + "<tr>\n\
                                        <td>" + (i + 1) + "</td>\n\
                                        <td class='codProd'>" + codigo[i] + "</td>\n\
                                        <td class='desProd'>" + descripcion[i] + "</td>\n\
                                        <td class='preProd'>" + precio[i] + "</td>\n\
                                        <td class='candProd'>" + cantidad[i] + "</td>\n\
                                        <td>\n\
                                                <button class='btn btn-info py-0 px-2' data-bs-toggle='modal' data-bs-target='#exampleModal'  onclick='actualizar(" + codigo[i] + ", 1 )' ><b>i</b></button>\n\
                                                <button  class='btn btn-danger py-0 px-2' onclick='eliminarProducto(" + codigo[i] + ")' > <b>X</b> </button>\n\
                                        </td>";


                }

                contentBody.innerHTML = datos;

            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message);
        }
    })();

}
function agregar(valor) {
    switch (valor) {
        case 'cliente':
            const datos = new FormData(formRegistrovalores);
            document.getElementById('ModalLabel').innerHTML = "Agregar " + valor;
            document.getElementById('InputCampo1Label').innerHTML = "Documento";
            document.getElementById('InputCampo2Label').innerHTML = "Nombres";
            document.getElementById('InputCampo3Label').innerHTML = "Direccion";
            document.getElementById('InputCampo4Label').innerHTML = "Telefono";
            document.getElementById('botonModalMulti').value = "insertarValores";

            variableOpcionInsert = valor;
            break;
        case 'empleado':

            document.getElementById('ModalLabel').innerHTML = "Agregar " + valor;
            document.getElementById('InputCampo1Label').innerHTML = "Documento";
            document.getElementById('InputCampo2Label').innerHTML = "Nombres";
            document.getElementById('InputCampo3Label').innerHTML = "Direccion";
            document.getElementById('InputCampo4Label').innerHTML = "Telefono";
            document.getElementById('botonModalMulti').value = "insertarValores";
            variableOpcionInsert = valor;

            break;
        case 'producto':

            document.getElementById('ModalLabel').innerHTML = "Agregar " + valor;
            document.getElementById('InputCampo1Label').innerHTML = "Codigo";
            document.getElementById('InputCampo2Label').innerHTML = "Descripcion";
            document.getElementById('InputCampo3Label').innerHTML = "Precio";
            document.getElementById('InputCampo4Label').innerHTML = "Cantidad";
            document.getElementById('botonModalMulti').value = "insertarValores";

            document.getElementById('InputCampo2').type = "text";
            document.getElementById('InputCampo3').type = "number";
            document.getElementById('InputCampo4').type = "number";
            variableOpcionInsert = valor;

            break;
        default:

            break;
    }
}
function mostrar() {
    mostrarClientes();
    mostrarEmpleados();
    mostrarProductos();
}

function insertValores() {

    const datos = new FormData(formRegistrovalores);


    switch (variableOpcionInsert) {
        case 'producto':


            var codigo = datos.get('InputCampo1');
            var descripcion = datos.get('InputCampo2');

            var precio = datos.get('InputCampo3');
            var cantidad = datos.get('InputCampo4');


            (async () => {
                try {

                    var datos = {codigo: codigo, descripcion: descripcion, precio: precio, cantidad: cantidad};

                    var init = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(datos)
                    };
                    var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/insertProducto.php", init);
                    if (response.ok) {
                        var respuesta = await response.json();

                        if (respuesta.valido) {
                            document.getElementById('alertTablas').innerHTML = "Producto ingresado Exitosamente";
                            document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                            document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                            document.getElementById('cerrarModal').click();
                            setTimeout(function () {
                                document.getElementById('alertTablas').style = "display:none"
                            }, 3000);
                            document.getElementById('registroValores').reset();

                        } else {
                            document.getElementById('alertTablasError').innerHTML = "Error al ingresar producto";
                            document.getElementById('alertTablasError').className = "alert alert-danger w-25 fixed-bottom";
                            document.getElementById('alertTablasError').style = "display:block; float: bottom;float: left;position: fixed";
                            setTimeout(function () {
                                document.getElementById('alertTablasError').style = "display:none"
                            }, 3000);
                        }
                        mostrar();

                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                    console.log("Error al realizar la petición AJAX: " + err.message);
                }
            })();


            break;
        case 'cliente':


            var documento = datos.get('InputCampo1');
            var nombres = datos.get('InputCampo2');

            var direccion = datos.get('InputCampo3');
            var telefono = datos.get('InputCampo4');


            (async () => {
                try {

                    var datos = {documento: documento, nombres: nombres, direccion: direccion, telefono: telefono};

                    var init = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(datos)
                    };
                    var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/insertCliente.php", init);
                    if (response.ok) {
                        var respuesta = await response.json();
                        alert(respuesta.valido);
                        if (respuesta.valido) {
                            alert('si');
                            document.getElementById('alertTablas').innerHTML = "Cliente ingresado Exitosamente";
                            document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                            document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                            document.getElementById('cerrarModal').click();
                            setTimeout(function () {
                                document.getElementById('alertTablas').style = "display:none"
                            }, 3000);
                            document.getElementById('registroValores').reset();

                        } else {
                            document.getElementById('alertTablasError').innerHTML = "Error al ingresar Cliente";
                            document.getElementById('alertTablasError').className = "alert alert-danger w-25 fixed-bottom";
                            document.getElementById('alertTablasError').style = "display:block; float: bottom;float: left;position: fixed";
                            setTimeout(function () {
                                document.getElementById('alertTablasError').style = "display:none"
                            }, 3000);
                        }
                        mostrar();

                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                    console.log("Error al realizar la petición AJAX: " + err.message);
                }
            })();


            break;
        case 'empleado':


            var documento = datos.get('InputCampo1');
            var nombres = datos.get('InputCampo2');

            var direccion = datos.get('InputCampo3');
            var telefono = datos.get('InputCampo4');


            (async () => {
                try {

                    var datos = {documento: documento, nombres: nombres, direccion: direccion, telefono: telefono};

                    var init = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(datos)
                    };
                    var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/insertEmpleado.php", init);
                    if (response.ok) {
                        var respuesta = await response.json();

                        if (respuesta.valido) {
                            document.getElementById('alertTablas').innerHTML = "Empleado ingresado Exitosamente";
                            document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                            document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                            document.getElementById('cerrarModal').click();
                            setTimeout(function () {
                                document.getElementById('alertTablas').style = "display:none"
                            }, 3000);
                            document.getElementById('registroValores').reset();
                        } else {
                            document.getElementById('alertTablasError').innerHTML = "Error al ingresar Empleado";
                            document.getElementById('alertTablasError').className = "alert alert-danger w-25 fixed-bottom";
                            document.getElementById('alertTablasError').style = "display:block; float: bottom;float: left;position: fixed";
                            setTimeout(function () {
                                document.getElementById('alertTablasError').style = "display:none"
                            }, 3000);
                        }
                        mostrar();
                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                    console.log("Error al realizar la petición AJAX: " + err.message);
                }
            })();


            break;
        default:

            break;
    }

}


function eliminarProducto(codigo) {
    (async () => {
        try {

            var datos = {codigo: codigo};

            var init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            };
            var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/deleteProducto.php", init);
            if (response.ok) {
                var respuesta = await response.json();

                if (respuesta.valido) {
                    document.getElementById('alertTablas').innerHTML = "Producto eliminado Exitosamente";
                    document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    document.getElementById('cerrarModal').click();
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none"
                    }, 3000);
                    document.getElementById('registroValores').reset();

                } else {
                    document.getElementById('alertTablas').innerHTML = "Error al eliminar producto";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none"
                    }, 3000);
                }
                mostrar();

            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message);
        }
    })();

}

function eliminarCliente(documento) {
    (async () => {
        try {

            var datos = {documento: documento};

            var init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            };
            var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/deleteCliente.php", init);
            if (response.ok) {
                var respuesta = await response.json();

                if (respuesta.valido) {
                    document.getElementById('alertTablas').innerHTML = "Cliente eliminado Exitosamente";
                    document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    document.getElementById('cerrarModal').click();
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none"
                    }, 3000);
                    document.getElementById('registroValores').reset();

                } else {
                    document.getElementById('alertTablas').innerHTML = "Error al eliminar Cliente";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none"
                    }, 3000);
                }
                mostrar();

            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message);
        }
    })();
    //eliminarEmpleado
}
function eliminarEmpleado(documento) {
    (async () => {
        try {

            var datos = {documento: documento};

            var init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            };
            var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/deleteEmpleado.php", init);
            if (response.ok) {
                var respuesta = await response.json();

                if (respuesta.valido) {
                    document.getElementById('alertTablas').innerHTML = "Empleado eliminado Exitosamente";
                    document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    document.getElementById('cerrarModal').click();
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none"
                    }, 3000);
                    document.getElementById('registroValores').reset();

                } else {
                    document.getElementById('alertTablas').innerHTML = "Error al eliminar Empleado";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none"
                    }, 3000);
                }
                mostrar();

            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message);
        }
    })();
    //eliminarEmpleado
}

function actualizar(valor, op) {
    switch (op) {
        case 2:
            document.getElementById('ModalLabel').innerHTML = "Actualizar Empleado";

            let doc1 = document.getElementsByClassName('docEmp');
            let nomb1 = document.getElementsByClassName('nombEmp');
            let dir1 = document.getElementsByClassName('dirEmp');
            let tel1 = document.getElementsByClassName('telEmp');
            for (var i = 0; i < doc1.length; i++) {

                if (valor == parseInt(doc1[i].innerText)) {


                    document.getElementById('InputCampo1Label').innerHTML = "Documento";
                    document.getElementById('InputCampo1').value = doc1[i].innerText;
                    document.getElementById('InputCampo1').readOnly = true;
                    document.getElementById('InputCampo2Label').innerHTML = "Nombres";
                    document.getElementById('InputCampo2').value = nomb1[i].innerText;
                    document.getElementById('InputCampo3Label').innerHTML = "Direccion";
                    document.getElementById('InputCampo3').value = dir1[i].innerText;
                    document.getElementById('InputCampo4Label').innerHTML = "Telefono";
                    document.getElementById('InputCampo4').value = tel1[i].innerText;
                    document.getElementById('botonModalMulti').value = "modificar";
                    document.getElementById('botonModalMulti').innerHTML = "Actualizar";


                }

            }



            variableOpcionUpdate = op;
            break;
        case 3:

            document.getElementById('ModalLabel').innerHTML = "Actualizar Cliente";

            let doc = document.getElementsByClassName('docCli');
            let nomb = document.getElementsByClassName('nombCli');
            let dir = document.getElementsByClassName('dirCli');
            let tel = document.getElementsByClassName('telCli');
            for (var i = 0; i < doc.length; i++) {

                if (valor == parseInt(doc[i].innerText)) {


                    document.getElementById('InputCampo1Label').innerHTML = "Documento";
                    document.getElementById('InputCampo1').value = doc[i].innerText;
                    document.getElementById('InputCampo1').readOnly = true;
                    document.getElementById('InputCampo2Label').innerHTML = "Nombres";
                    document.getElementById('InputCampo2').value = nomb[i].innerText;
                    document.getElementById('InputCampo3Label').innerHTML = "Direccion";
                    document.getElementById('InputCampo3').value = dir[i].innerText;
                    document.getElementById('InputCampo4Label').innerHTML = "Telefono";
                    document.getElementById('InputCampo4').value = tel[i].innerText;
                    document.getElementById('botonModalMulti').value = "modificar";
                    document.getElementById('botonModalMulti').innerHTML = "Actualizar";


                }

            }



            variableOpcionUpdate = op;


            break;
        case 1:
            let cod = document.getElementsByClassName('codProd');
            let des = document.getElementsByClassName('desProd');
            let pre = document.getElementsByClassName('preProd');
            let can = document.getElementsByClassName('candProd');
            for (var i = 0; i < cod.length; i++) {

                if (valor == parseInt(cod[i].innerText)) {

                    document.getElementById('ModalLabel').innerHTML = "Actualizar Producto";
                    document.getElementById('InputCampo1Label').innerHTML = "Codigo";
                    document.getElementById('InputCampo1').value = cod[i].innerText;
                    document.getElementById('InputCampo1').readOnly = true;
                    document.getElementById('InputCampo2Label').innerHTML = "Descripcion";
                    document.getElementById('InputCampo2').value = des[i].innerText;
                    document.getElementById('InputCampo3Label').innerHTML = "Precio";
                    document.getElementById('InputCampo3').value = pre[i].innerText;
                    document.getElementById('InputCampo4Label').innerHTML = "Cantidad";
                    document.getElementById('InputCampo4').value = can[i].innerText;
                    document.getElementById('botonModalMulti').value = "modificar";
                    document.getElementById('botonModalMulti').innerHTML = "Actualizar";
                }

            }


            document.getElementById('InputCampo2').type = "text";
            document.getElementById('InputCampo3').type = "number";
            document.getElementById('InputCampo4').type = "number";
            variableOpcionUpdate = op;

            break;
        default:

            break;
    }
}

function modificarValores() {

    const datos = new FormData(formRegistrovalores);


    switch (variableOpcionUpdate) {
        case 1:


            var codigo = datos.get('InputCampo1');
            var descripcion = datos.get('InputCampo2');
            var precio = datos.get('InputCampo3');
            var cantidad = datos.get('InputCampo4');

            (async () => {
                try {

                    var datos = {codigo: codigo, descripcion: descripcion, precio: precio, cantidad: cantidad};

                    var init = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(datos)
                    };
                    var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/updateProducto.php", init);
                    if (response.ok) {
                        var respuesta = await response.json();
                        
                        if (respuesta.valido) {
                            document.getElementById('alertTablas').innerHTML = "Producto actualizado Exitosamente";
                            document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                            document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                            document.getElementById('cerrarModal').click();
                            setTimeout(function () {
                                document.getElementById('alertTablas').style = "display:none"
                            }, 3000);
                            document.getElementById('registroValores').reset();

                        } else {
                            document.getElementById('alertTablasError').innerHTML = "Error al actualizar producto";
                            document.getElementById('alertTablasError').className = "alert alert-danger w-25 fixed-bottom";
                            document.getElementById('alertTablasError').style = "display:block; float: bottom;float: left;position: fixed";
                            setTimeout(function () {
                                document.getElementById('alertTablasError').style = "display:none";
                            }, 3000);
                        }
                        mostrar();

                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                    console.log("Error al realizar la petición AJAX: " + err.message);
                }
            })();


            break;
        case 'cliente':


            var documento = datos.get('InputCampo1');
            var nombres = datos.get('InputCampo2');

            var direccion = datos.get('InputCampo3');
            var telefono = datos.get('InputCampo4');


            (async () => {
                try {

                    var datos = {documento: documento, nombres: nombres, direccion: direccion, telefono: telefono};

                    var init = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(datos)
                    };
                    var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/insertCliente.php", init);
                    if (response.ok) {
                        var respuesta = await response.json();
                        alert(respuesta.valido);
                        if (respuesta.valido) {
                            alert('si');
                            document.getElementById('alertTablas').innerHTML = "Cliente ingresado Exitosamente";
                            document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                            document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                            document.getElementById('cerrarModal').click();
                            setTimeout(function () {
                                document.getElementById('alertTablas').style = "display:none"
                            }, 3000);
                            document.getElementById('registroValores').reset();

                        } else {
                            document.getElementById('alertTablasError').innerHTML = "Error al ingresar Cliente";
                            document.getElementById('alertTablasError').className = "alert alert-danger w-25 fixed-bottom";
                            document.getElementById('alertTablasError').style = "display:block; float: bottom;float: left;position: fixed";
                            setTimeout(function () {
                                document.getElementById('alertTablasError').style = "display:none"
                            }, 3000);
                        }
                        mostrar();

                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                    console.log("Error al realizar la petición AJAX: " + err.message);
                }
            })();


            break;
        case  2:


            var documento = datos.get('InputCampo1');
            var nombres = datos.get('InputCampo2');

            var direccion = datos.get('InputCampo3');
            var telefono = datos.get('InputCampo4');


            (async () => {
                try {

                    var datos = {documento: documento, nombres: nombres, direccion: direccion, telefono: telefono};

                    var init = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(datos)
                    };
                    var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/updateEmpleado.php", init);
                    if (response.ok) {
                        var respuesta = await response.json();

                        if (respuesta.valido) {
                            document.getElementById('alertTablas').innerHTML = "Empleado ingresado Exitosamente";
                            document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                            document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                            document.getElementById('cerrarModal').click();
                            setTimeout(function () {
                                document.getElementById('alertTablas').style = "display:none"
                            }, 3000);
                            document.getElementById('registroValores').reset();
                        } else {
                            document.getElementById('alertTablasError').innerHTML = "Error al ingresar Empleado";
                            document.getElementById('alertTablasError').className = "alert alert-danger w-25 fixed-bottom";
                            document.getElementById('alertTablasError').style = "display:block; float: bottom;float: left;position: fixed";
                            setTimeout(function () {
                                document.getElementById('alertTablasError').style = "display:none"
                            }, 3000);
                        }
                        mostrar();
                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                    console.log("Error al realizar la petición AJAX: " + err.message);
                }
            })();


            break;
        default:

            break;
    }

}
alert();