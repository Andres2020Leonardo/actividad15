<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);
$opcion =$datos['op']; 
class Producto{
function getProductos() {
  
    include_once '../../../db/conexion/Conexion.php';
    $conexion = new Conexion();
    return $conexion->getConexion()->query('SELECT codigo, descripcion, precio, cantidad FROM producto');
}

}
if (strcmp($opcion, 'mostrarTodos') === 0){
    $resp['vali'] = false;
    $produto = new Producto();
    $result = $produto->getProductos();
    $resp['codigo'] = [];
    $resp['descripcion'] = [];
    $resp['precio'] = [];
    $resp['cantidad'] = [];
    if ($result->execute()) {
        $resp['vali'] = true;
        foreach ($result as $row) {            
            array_push($resp['codigo'],$row['codigo']);
            array_push($resp['descripcion'],$row['descripcion']);
            array_push($resp['precio'],$row['precio']);
            array_push($resp['cantidad'],$row['cantidad']);
        }
    }
    echo json_encode($resp);
}else{
    
}
    



