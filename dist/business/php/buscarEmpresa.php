<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);
 include_once '../../db/conexion/Conexion.php';
$conexion = new Conexion();
if ($datos['op'] == "2") {
    if (!empty($datos['nit'])) {
                include_once '../../db/conexion/Conexion.php';      
                $nit =$datos['nit'];
        $consulta = $conexion->getConexion()->query("SELECT * FROM empresa where nit = '$nit'");
      
        
        if ($consulta->execute()) {
            $resp['validacion'] = true;
            foreach ($consulta as $value){
            $resp['nit'] = $value['nit'];
            $resp['nombre'] = $value['nombre'];
            $resp['propietario'] = $value['propietario'];
            $resp['dir'] = $value['direccion'];
            $resp['tel'] = $value['telefono'];
            }
            echo json_encode($resp);
        } else {
            $resp['validacion'] = false;
            $resp['coment'] = "Fallo en el insert";
            echo json_encode($resp);
        }
    } else {
        $resp['validacion'] = false;
        $resp['coment'] = "error no hay datos completos";
        echo json_encode($resp);
    }
    
} 
