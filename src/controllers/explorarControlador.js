const controller = {};

controller.mostrarExplorar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT*FROM prenda", (err, prenda) => {
            if (err) {
                res.json(err)
            } else {
                console.log(prenda)
                res.render('explorar', {
                    data: prenda
                })
            }
        })
    })
};

module.exports = controller;