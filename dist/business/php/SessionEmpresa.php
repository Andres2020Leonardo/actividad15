<?php


class SessionEmpresa {
    function iniciarSesion() {
        session_start();
        
    }  
    function cerrarSesion(){
        session_destroy();
    }
}
?>