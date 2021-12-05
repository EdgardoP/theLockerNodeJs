const controller = (req, res) => {
    /* req.getConnection((err, conn) => {
         conn.query("SELECT*FROM prenda WHERE clasificacionPrenda='Hombre'", (err, prenda) => {
             if (err) {
                 res.json(err)
             } else {
                 console.log(prenda)
             }
         })
     })*/
    res.render('ropaHombre')
};

module.exports = controller;