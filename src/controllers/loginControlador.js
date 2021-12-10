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
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
    localStorage.setItem('correoCliente', username);

    if (username && password) {
        req.getConnection((err, conn) => {
            conn.query("select*from cliente where correoCliente=? and password=?", [username, password], (err, results, rows) => {
                if (results.length > 0) {
                    console.log("Resultado de filtrar");
                    console.log(results);
                    localStorage.setItem('nombreCliente', results[0].nombreCliente);
                    localStorage.setItem('correoCliente', results[0].correoCliente);
                    localStorage.setItem('password', results[0].password);
                    res.render('principal', {
                        data: results[0]
                    })
                } else {
                    res.render('login')
                }
            })

        })
    }

};

module.exports = controller;