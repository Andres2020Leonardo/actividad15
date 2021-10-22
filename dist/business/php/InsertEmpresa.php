<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);
 include_once './SessionEmpresa.php';
 include_once '../../db/conexion/Conexion.php';
$conexion = new Conexion();
if ($datos['op'] == "1") {
    if (!empty($datos['nit']) && !empty($datos['nombre']) && !empty($datos['propie']) && !empty($datos['direc']) && !empty($datos['tel'])) {
                include_once '../../db/conexion/Conexion.php';      

        $consulta = $conexion->getConexion()->prepare("INSERT INTO empresa (nit, nombre, propietario, direccion, telefono)
                                                    VALUES (?, ?, ?, ?, ?)");
        $consulta->bindParam(1, $datos['nit'], PDO::PARAM_INT);
        $consulta->bindParam(2, $datos['nombre'], PDO::PARAM_STR);
        $consulta->bindParam(3, $datos['propie'], PDO::PARAM_STR);
        $consulta->bindParam(4, $datos['direc'], PDO::PARAM_STR);
        $consulta->bindParam(5, $datos['tel'], PDO::PARAM_STR);
        if ($consulta->execute()) {
            $resp['exitoso'] = true;
            $resp['coment'] = "Insert exitoso";
            $sesion = new SessionEmpresa();
            $sesion->iniciarSesion();
            $nit = $datos['nit'];
            $_SESSION['nit']=$nit;
            $_SESSION['valid']="si";
            
        } else {
            $resp['exitoso'] = false;
            $resp['coment'] = "Fallo en el insert";
        }
    } else {
        $resp['exitoso'] = false;
        $resp['coment'] = "error no hay datos completos";
    }
    echo json_encode($resp);
} 
?>