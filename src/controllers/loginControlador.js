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
    console.log(username)
    console.log(password)
    if (username && password) {
        req.getConnection((err, conn) => {
            conn.query("select*from cliente where correoCliente=? and password=?", [username, password], (err, results, rows) => {
                if (results.length > 0) {
                    console.log(rows)
                    res.render('principal')
                } else {
                    alert("No ingreso bien los datos")
                }
            })
        })
    }

};

module.exports = controller;