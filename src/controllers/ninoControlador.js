const controller = {};

controller.mostrarRopaInfantil = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT*FROM prenda WHERE clasificacionPrenda='Infantil'", (err, prenda) => {
            if (err) {
                res.json(err)
            } else {
                console.log(prenda)
                res.render('ropaNino', {
                    data: prenda
                })
            }
        })
    })
};

module.exports = controller;