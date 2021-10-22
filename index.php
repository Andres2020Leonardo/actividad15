<?php
session_start();
?>


<!DOCTYPE html>
<html>
    <head>
        <title>FACTURA</title>
        <link rel="stylesheet" type="text/css" href="dist/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="dist/css/estilos.css">
        <script type="text/javascript" src="dist/js/bootstrap.bundle.js"></script>
        <script src="dist/js/controllers/registroEmpresa.js" type="text/javascript"></script>
        <script src="dist/js/controllers/controladorTablas.js" type="text/javascript"></script>
        
    </head>
    <body>
        <div class="" role="alert" id= "alertTablas" style="display: none">

        </div>
        <div class="container-fluid">
            <div id="contentRegistro" class="row m-0 mt-4 justify-content-center">
                <div class="col-4 border p-4 mt-4">
                    <h3 class="text-center">Información Empresa </h3>

                    <form id="formularioRegistro" action="" method="POST" accept-charset="utf-8">
                        <label class="d-block mt-3" for="campo_nombre">Nombre: </label>
                        <input class="form-control" id="campo_nombre" type="text" name="campo_nombre" required >

                        <label class="d-block mt-3" for="campo_nit">Nit: </label>
                        <input class="form-control" id="campo_nit" type="number" name="campo_nit" required >

                        <label class="d-block mt-3" for="campo_propietario">Propietario: </label>
                        <input class="form-control" id="campo_propietario" type="text" name="campo_propietario" required >

                        <label class="d-block mt-3" for="campo_direccion">Direccion: </label>
                        <input class="form-control" id="campo_direccion" type="text" name="campo_direccion" required >

                        <label class="d-block mt-3" for="campo_telefono">Telefono: </label>
                        <input class="form-control" id="campo_telefono" type="number" name="campo_telefono" required >

                        <div class="row justify-content-center">
                            <button type="submit" class="col-6 btn btn-primary mt-3">CONTINUAR</button>
                        </div>
                    </form>
                </div>

            </div>
            <div id="contentFactura" style="display:none;">
                <div class="row m-0 pt-4 justify-content-center">
                    <div class="col-5 border p-3">
                        <div class="row m-0">
                            <div class="col-7 p-0">


                                <h1 id ="nombre_factura_empresa" class="text-center text-dark"><u>Mi Empresa</u></h1>
                                <h6 id="propietario_factura_empresa" class="text-center m-0">Fulano de Tal</h6>
                                <p  class="text-center m-0">NIT: <u style="text-decoration: none" id="nit_factura_empresa">000000000-1</u> Regimén Simplificado</p>
                            </div>
                            <div class="col-5 p-0">
                                <p class="text-small text-center">
                                    Distribuimos todo tipo de productos <br>
                                    Brindamos un sin fin de servicios <br>
                                    <b>Ventas al por mayor y al detal.</b>
                                </p>
                                <p class="text-small text-center mb-0">
                                    <b>
                                        Tel: <u id="telefono_factura_empresa" style="text-decoration: none">000000000</u> <br>
                                        <u id="direccion_factura_empresa" style="text-decoration: none" >Calle 00 N° 00 - 00</u>
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div class="row m-0 mt-2 justify-content-center">
                            <div class="col-4 m-0 p-0">
                                <table class="table table-bordered m-0">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="p-1">DIA</th>
                                            <th class="p-1">MES</th>
                                            <th class="p-1">AÑO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center p-1" id="dia_fc">00</td>
                                            <td class="text-center p-1" id="mes_fc">00</td>
                                            <td class="text-center p-1" id="anio_fc">00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col ms-3 p-0">
                                <div class="row m-0">
                                    <div class="col-5 p-0 pe-2">
                                        <h4 class="text-end m-0">FACTURA VENTA</h4>
                                    </div>
                                    <div class="col m-0 ms-3 border p-2">
                                        <h3 class="text-danger text-center m-0">N° 0123</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 mt-2">
                            <div class="col-7 p-0 w-50">
                                <label class="label-cliente " for="campo_cliente" style="margin-right: 5%">Señor(a):  </label>
                                <input class="input-nit-cliente " id="campo_cliente" type="text">
                            </div>
                            <div class="col-5 p-0 w-50">
                                <label  class="label-nit-cliente " for="campo_cliente_cc">NIT/CC.</label>
                                <input  class="input-nit-cliente  " id="campo_cliente_cc" type="text">
                            </div>

                            <div class="col-7 p-0 w-50">
                                <label class="label-cliente direccion" for="campo_cliente_direccion" style="margin-right: 5%">Dirección: </label>
                                <input class="input-cliente " id="campo_cliente_direccion" type="text">
                            </div>
                            <div class="col-5 p-0 w-50">
                                <label  class="label-nit-tel" for="campo_cliente_tel">TEL/CEL.</label>
                                <input class="input-cliente " id="campo_cliente_tel" type="text">
                            </div>
                        </div>
                        <div class="m-0 mt-3 p-0 ">
                            <table class="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        <th class="text-center p-1">CODIGO</th>
                                        <th class="text-center p-1">CANT.</th>
                                        <th class="text-center p-1">PRECIO</th>
                                        <th class="text-center p-1">DESCRIPCION</th>
                                        <th class="text-center p-1">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="row m-0 mt-3 justify-content-end">
                                <div class="col-5 p-0">
                                    <div class="row m-0">
                                        <h5 class="col-4 p-0 pe-2 pt-2 text-end">TOTAL:</h5>
                                        <div class="col-8 p-0">
                                            <input class="form-control" type="number" name="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col ms-3 p-0">

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#cliente" type="button" role="tab" aria-controls="home" aria-selected="true">Clientes</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#empleado" type="button" role="tab" aria-controls="profile" aria-selected="false">Empleados</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#producto" type="button" role="tab" aria-controls="contact" aria-selected="false">Productos</button>
                            </li>
                        </ul>
                        <div class="tab-content borderCompleto h-95" id="myTabContent">
                            <div class="tab-pane fade show active p-3" id="cliente" role="tabpanel" aria-labelledby="home-tab">
                                <table class="table table-bordered table-sm">
                                    <thead class="bg-success text-light">
                                        <tr class="text-center">
                                            <th class="py-2">N°</th>
                                            <th class="py-2">DOCUMENTO</th>
                                            <th class="py-2">NOMBRES</th>
                                            <th class="py-2">DIRECCION</th>
                                            <th class="py-2">TELEFONO</th>
                                            <th class="py-2">OP.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentCliente" class="text-center" >
                                    </tbody>
                                </table>
                                <div class="row justify-content-end m-0">
                                    <button   class="btn btn-success col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="agregar('cliente');limpiarForm()"><b>AGREGAR</b></button>
                                </div>

                            </div>
                            <div class="tab-pane fade p-3" id="empleado" role="tabpanel" aria-labelledby="profile-tab">

                                <table class="table table-bordered table-sm">
                                    <thead class="bg-primary text-light">
                                        <tr class="text-center">
                                            <th class="py-2">N°</th>
                                            <th class="py-2">DOCUMENTO</th>
                                            <th class="py-2">NOMBRES</th>
                                            <th class="py-2">DIRECCION</th>
                                            <th class="py-2">TELEFONO</th>
                                            <th class="py-2">OP.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentEmpleado" class="text-center" >


                                    </tbody>
                                </table>
                                <div class="row justify-content-end m-0">
                                    <button class="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="agregar('empleado');limpiarForm()"><b>AGREGAR</b></button>
                                </div>

                            </div>
                            <div class="tab-pane fade p-3" id="producto" role="tabpanel" aria-labelledby="contact-tab">

                                <table class="table table-bordered table-sm">
                                    <thead class="bg-secondary text-light">
                                        <tr class="text-center">
                                            <th class="py-2">N°</th>
                                            <th class="py-2">CODIGO</th>
                                            <th class="py-2">DESCRIPCION</th>
                                            <th class="py-2">PRECIO</th>
                                            <th class="py-2">CANTIDAD</th>
                                            <th class="py-2">OP.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentProducto" class="text-center" >

                                    </tbody>
                                </table>
                                <div class="row justify-content-end m-0" >
                                    <button class="btn btn-secondary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="agregar('producto');limpiarForm()"><b>AGREGAR</b></button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Button trigger modal -->
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form name="" id="registroValores" method="POST">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label for="InputCampo1" class="form-label" id="InputCampo1Label"></label>
                                <input type="number" class="form-control" id="InputCampo1"  name="InputCampo1">

                            </div>
                            <div class="mb-3">
                                <label for="InputCampo2" class="form-label" id="InputCampo2Label"></label>
                                <input type="text" class="form-control" id="InputCampo2" name="InputCampo2">

                            </div>
                            <div class="mb-3">
                                <label for="InputCampo3" class="form-label" id="InputCampo3Label"></label>
                                <input type="text" class="form-control" id="InputCampo3" name="InputCampo3">

                            </div>
                            <div class="mb-3">
                                <label for="InputCampo4" class="form-label" id="InputCampo4Label"></label>
                                <input type="text" class="form-control" id="InputCampo4" name="InputCampo4">

                            </div>
                            <div class="" role="alert" id= "alertTablasError" style="display: none">

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cerrarModal">Cerrar</button>
                            <button type="submit" class="btn btn-primary" id="botonModalMulti" value="">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        



        <?php
        if (isset($_SESSION['valid'])) {
            buscarEmpresa($_SESSION['nit']);
        }

        function buscarEmpresa($nit) {
            echo "<script type='text/javascript' >buscarEmpresa('$nit');</script>";
        }
        ?>
    </body>
</html>
