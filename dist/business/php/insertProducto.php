<?php
header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

   include_once '../../db/conexion/Conexion.php';
    $conexion = new Conexion();
 
    $result = $conexion->getConexion()->query("insert into producto (codigo, descripcion, precio, cantidad) 
                            values (".$datos['codigo'].",'".$datos['descripcion']."',".$datos['precio'].",".$datos['cantidad'].")");
    if($result){
        $resp['valido'] = true;    
    } else {
    $resp['valido'] = false;}   
    
    echo json_encode($resp);


