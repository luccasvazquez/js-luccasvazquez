




function solicitar_usuario () {
    
    
    let usuario = prompt("Ingrese su nombre de usuario");
    let password = prompt("Ingrese su contraseña");

    if (usuario != "" && password != "") {
            
            alert("Bienvenido/a a nuestro sitio " + usuario);
            
    }
    else {

            alert("Error: Usuario y/o contraseña no ingresado");
    
    }

    console.log("Bienvenido/a a nuestro sitio " + usuario)
}

solicitar_usuario();

