alert();
let formularioRegistro;


    formularioRegistro = document.getElementById('formularioRegistro');

    formularioRegistro.addEventListener('submit', function (event) {
        event.preventDefault();
        insertEmpresa();
    });


function insertEmpresa() {

    const datos = new FormData(formularioRegistro);
    var nit = datos.get('campo_nit');
    var nombre = datos.get('campo_nombre');
    var propietario = datos.get('campo_propietario');
    var direccion = datos.get('campo_direccion');
    var telefono = datos.get('campo_telefono');    
    
  (async () => {
    try {
        
        var datos = { nit: nit, nombre: nombre, propie: propietario, direc: direccion, tel: telefono, op: '1'};

        var init = {            
            method: "POST",
            headers: {            
                'Content-Type': 'application/json'
            },      
            body: JSON.stringify(datos) 
        };        
        var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/InsertEmpresa.php", init);
        if (response.ok) {            
            var respuesta = await response.json();  
                
            if(respuesta.exitoso){
                document.getElementById('contentRegistro').style = "display:none";
                document.getElementById('contentFactura').style = "display: block";
                   
                  
                    buscarEmpresa(nit);
            }
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        console.log("Error al realizar la petición AJAX: " + err.message);
    }
})();

}
function buscarEmpresa(nit){
    if((nit)!=""){
    document.getElementById('contentRegistro').style = "display:none";
    document.getElementById('contentFactura').style = "display: block";
    (async () => {
    try {
        
        var datos = { nit: (nit), op: '2'};

        var init = {            
            method: "POST",
            headers: {            
                'Content-Type': 'application/json'
            },      
            body: JSON.stringify(datos) 
        };        
        var response = await fetch("http://" + document.domain + "/" + window.location.pathname + "/dist/business/php/buscarEmpresa.php", init);
        if (response.ok) {            
            var respuesta = await response.json();            
            if(respuesta.validacion){
               
               document.getElementById('nombre_factura_empresa').innerHTML = ""+respuesta.nombre+"";
               document.getElementById('propietario_factura_empresa').innerHTML = ""+respuesta.propietario+"";
               document.getElementById('nit_factura_empresa').innerHTML = ""+respuesta.nit+"";
               document.getElementById('direccion_factura_empresa').innerHTML =""+respuesta.dir+"";
               document.getElementById('telefono_factura_empresa').innerHTML = ""+respuesta.tel+"";
               var fecha = new Date();
               document.getElementById('dia_fc').innerHTML = ""+fecha.getDay()+"";
               document.getElementById('mes_fc').innerHTML = ""+fecha.getMonth()+"";
               document.getElementById('anio_fc').innerHTML = ""+fecha.getFullYear()+"";
               console.log("hla:"+respuesta.nombre);
            }
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        console.log(nit + "Error al realizar la petición AJAX: " + nit + err.message);
    }
})();
}}


