<?php

$datos = json_decode(file_get_contents("php://input"), true);

   include_once '../../db/conexion/Conexion.php';
    $conexion = new Conexion();
    $cod = $datos['precio'];
    $desc = $datos['descripcion'];
    $pre = $datos['precio'];
    $can = $datos['cantidad'];
    $result = $conexion->getConexion()->query("UPDATE producto SET descripcion = $desc, precio = '$pre', cantidad = '$can' WHERE (codigo = '$cod');");
                          
    if($result->execute()){
        
        $resp['valido'] = true;    
    } else {
    $resp['valido'] = false;}   
    
    echo json_encode($resp);