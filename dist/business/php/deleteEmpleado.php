<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

   include_once '../../db/conexion/Conexion.php';
    $conexion = new Conexion();
 
    $result = $conexion->getConexion()->query("DELETE FROM empleado WHERE (documento = ".$datos['documento'].")");

                
    if($result){
        $resp['valido'] = true;    
    } else {
    $resp['valido'] = false;}   
    
    echo json_encode($resp);

