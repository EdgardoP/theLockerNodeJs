const controller = {};
controller.mostrarCarrito = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`${consulta}'${localStorage.getItem('correoCliente')}'`, (err, carrito) => {
            if (err) {
                res.json(err)
            } else {
                console.log(carrito)
                res.render('carrito', {
                    data: carrito
                })
            }
        })
    })
};
const consulta ="select" + 
" the_locker.carrito.idCarrito," +
" the_locker.cliente.nombreCliente , "+
" the_locker.prenda.nombrePrenda , "+
" the_locker.prenda.imagenPrenda, "+
" the_locker.prenda.precioPrenda,"+
" the_locker.prenda.descripcionPrenda," +
" the_locker.prenda.clasificacionPrenda,"+
" the_locker.prenda.tallaPrenda"+
" from the_locker.carrito "+
" inner join the_locker.cliente "+
" on carrito.idCliente = cliente.correoCliente"+
" inner join the_locker.prenda"+
" on carrito.idPrenda = prenda.Idprenda"+
" where idCliente ="

module.exports = controller;