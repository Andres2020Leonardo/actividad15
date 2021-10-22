<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

   include_once '../../db/conexion/Conexion.php';
    $conexion = new Conexion();
 
    $result = $conexion->getConexion()->query("INSERT INTO empleado (documento, nombres, direccion, telefono)
                            values (".$datos['documento'].",'".$datos['nombres']."','".$datos['direccion']."','".$datos['telefono']."')");
    if($result){
        $resp['valido'] = true;    
    } else {
    $resp['valido'] = false;}   
    
    echo json_encode($resp);

