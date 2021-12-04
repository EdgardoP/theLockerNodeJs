const registroController = {}

registroController.mostrar = (req, res) => {
    res.render('registro')
};

registroController.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente set ?', [data], (err, cliente) => {
            console.log(cliente);
            res.render('login')
        })
    })
}

module.exports = registroController;