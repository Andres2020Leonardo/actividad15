<?php

class Conexion {
    
    private $hots="localhost:3305";
    private $user = "root";
    private $dbName = "ventas";
    private $pass = "";
    
    public function getConexion() {
        return new PDO("mysql:host=$this->hots;dbname=$this->dbName", $this->user, $this->pass);
    }
    
}

?>