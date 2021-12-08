const controller = {}

controller.mostrarRegistro = (req, res) => {
    res.render('registro')
}

controller.mostrar = (req, res) => {
    res.render('login')
};

controller.inicioSesion = (req, res) => {
    const username = req.body.correoCliente;
    const password = req.body.password;
    if (typeof window === 'undefined' || localStorage === null) {
        var localStorage = require('node-')
    }
    // localStorage.setItem("correoCliente", JSON.stringify(username));
    console.log(username)
    console.log(password)
    if (username && password) {
        req.getConnection((err, conn) => {
            conn.query("select*from cliente where correoCliente=? and password=?", [username, password], (err, results, rows) => {
                if (results.length > 0) {
                    console.log(results);
                    res.render('principal', {
                        data: results[0]
                    })
                } else {
                    alert("No ingreso bien los datos")
                }
            })

        })
    }

};

module.exports = controller;

// window.onload = (event) => {
//     const nombre = document.getElementById("NombreUsuario")
//     console.log(nombre.innerHTML);
//     localStorage.setItem("NombreUsuario", JSON.stringify(nombre.innerHTML));
//     console.log("Objeto Guardado en localstorage");
//     console.log(JSON.parse(localStorage.getItem("NombreUsuario")));
// };

// localStorage.setItem('correoCliente', username);
// console.log(JSON.parse(localStorage.getItem("correoCliente")));