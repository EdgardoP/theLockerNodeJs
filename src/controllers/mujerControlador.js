const controller = {};

controller.mostrarRopaMujer = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT*FROM prenda WHERE clasificacionPrenda='Mujer'", (err, prenda) => {
            if (err) {
                res.json(err)
            } else {
                console.log(prenda)
                res.render('ropaMujer', {
                    data: prenda
                })
            }
        })
    })
};

module.exports = controller;