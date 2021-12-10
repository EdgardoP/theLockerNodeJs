 let nombreCliente;
 let correoCliente;
 let numeroCliente;
 let password;


 let validarFormulario = () => {
     nombreCliente = document.getElementById("nombreCliente").value;
     correoCliente = document.getElementById("correoCliente").value;
     numeroCliente = document.getElementById("numeroCliente").value;
     password = document.getElementById("password").value;
     let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     if (nombreCliente == "" || correoCliente == "" || numeroCliente == "" || password == "") {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "Parece que has dejado un campo vacio o has ingresado datos incorrectos, porfavor, rellena los campos y vuelve a intentarlo."
     } else if (!emailRegex.test(correoCliente)) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "Asegurate de haber ingresado un correo valido, porfavor, rellena los campos y vuelve a intentarlo."
     } else if (!(/^\d{9}$/.test(numeroCliente))) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "El numero de telefono que has ingresado no es valido, rellena los campos y vuelve a intentarlo."
     } else if (isNaN(numeroCliente)) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "El numero de telefono que has ingresado contiene posee letras o caracteres especiales, rellena los campos y vuelve a intentarlo."
     } else if (nombreCliente.length < 3) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "Tu nombre de usuario no puede tener menos de dos caracteres, rellena los campos y vuelve a intentarlo."
     } else if (password.length < 8) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "Tu contraseña no puede tener menos de 8 caracteres, rellena los campos y vuelve a intentarlo."
     } else {
         console.log("Validacion ejecutada");
     }
 }

 let validarFormularioLogin = () => {
     correoCliente = document.getElementById("correoClienteLogin").value;
     password = document.getElementById("passwordLogin").value;
     let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     if (correoCliente == "" || password == "") {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "Parece que has dejado un campo vacio o has ingresado datos incorrectos, porfavor, rellena los campos y vuelve a intentarlo."
     } else if (!emailRegex.test(correoCliente)) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "Asegurate de haber ingresado un correo valido, porfavor, rellena los campos y vuelve a intentarlo."
     } else if (password.length < 8) {
         event.preventDefault();
         abrirModal();
         mensaje.innerHTML = "La contraseña que has ingresado no es valida, ingresala de nuevo."
     } else {
         console.log("Validacion ejecutada");
     }
 }


 let abrirModal = () => {
     var modal = document.getElementById("myModal");
     var btn = document.getElementById("myBtn");
     var span = document.getElementsByClassName("close")[0];
     modal.style.display = "block";
     span.onclick = function() {
         modal.style.display = "none";
     }
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
 }