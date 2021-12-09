const controller = {};

const listaCarrito = " select the_locker.prenda.nombrePrenda " +
    " from the_locker.carrito " +
    " inner join the_locker.prenda " +
    " on the_locker.carrito.idPrenda = the_locker.prenda.idPrenda " +
    " where the_locker.carrito.idCliente = ";

let listaElementos = null;

controller.mostrarExplorar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`${listaCarrito} '${localStorage.getItem('correoCliente')}'`, (err, lista) => {
            if (err) {
                res.json(err)
            } else {
                listaElementos = lista;
            }
        })
    })
    req.getConnection((err, conn) => {
        conn.query("SELECT*FROM prenda", (err, prenda) => {
            if (err) {
                res.json(err)
            } else {
                console.log(prenda)
                localStorage.setItem('pagina', "explorar");
                res.render('explorar', {
                    data: prenda,
                    dataLista: listaElementos
                })
            }
        })
    })
};

module.exports = controller;