const controller = {};
const consulta = "select" +
    " the_locker.carrito.idCarrito," +
    " the_locker.cliente.nombreCliente , " +
    " the_locker.prenda.nombrePrenda , " +
    " the_locker.prenda.imagenPrenda, " +
    " the_locker.prenda.precioPrenda," +
    " the_locker.prenda.descripcionPrenda," +
    " the_locker.prenda.clasificacionPrenda," +
    " the_locker.prenda.tallaPrenda" +
    " from the_locker.carrito " +
    " inner join the_locker.cliente " +
    " on carrito.idCliente = cliente.correoCliente" +
    " inner join the_locker.prenda" +
    " on carrito.idPrenda = prenda.Idprenda" +
    " where estadoCarrito = 'reservado' and idCliente ="

controller.mostrarCarrito = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query(`${consulta}'${localStorage.getItem('correoCliente')}'`, (err, carrito) => {
            if (err) {
                res.json(err)
            } else {
                console.log(carrito)
                localStorage.setItem('pagina', "carrito");
                res.render('carrito', {
                    data: carrito
                })
            }
        })
    })
};

controller.guardarCarrito = (req, res) => {
    const { id } = req.params;
    console.log(id);
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO the_locker.carrito (idCliente, idPrenda, estadoCarrito) VALUES ('${localStorage.getItem('correoCliente')}', '${id}',"reservado");`, (err, cliente) => {
            if (err) {
                res.json(err)
            } else {
                console.log("Agregado correctamente")
                res.redirect(`/${localStorage.getItem('pagina')}`);
            }
        })
    })
}

controller.eliminarProducto = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM carrito where idCarrito = ? ', [id], (err, rows) => {
            res.redirect(`/${localStorage.getItem('pagina')}`);
        })
    })
}

controller.pagarCarrito = (req, res) => {
    //const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query(`UPDATE the_locker.carrito SET estadoCarrito = 'pagado' WHERE (idCliente= '${localStorage.getItem('correoCliente')}');`, (err, rows) => {
            res.redirect('/carrito')
        })
    })
}


module.exports = controller;