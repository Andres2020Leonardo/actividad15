<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);
class Empleado{
function getEmpleados() {

    include_once '../../../db/conexion/Conexion.php';
    $conexion = new Conexion();
    return $conexion->getConexion()->query('SELECT documento, nombres, direccion, telefono FROM empleado');
}
function ingresarEmpleado($doc) {
    
}
}
if ($datos['op'] = 'mostrarTodos') {
    $resp['vali'] = false;
    $empleado = new Empleado();
    $result = $empleado->getEmpleados();
    $resp['docu'] = [];
    $resp['nomb'] = [];
    $resp['dir'] = [];
    $resp['tel'] = [];
    if ($result->execute()) {
        $resp['vali'] = true;
        foreach ($result as $row) {            
            array_push($resp['docu'],$row['documento']);
            array_push($resp['nomb'],$row['nombres']);
            array_push($resp['dir'],$row['direccion']);
            array_push($resp['tel'],$row['telefono']);
        }
    }
    echo json_encode($resp);
}
?>