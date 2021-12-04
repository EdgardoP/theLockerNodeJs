const controller = {}

controller.mostrarRegistro = (req, res) => {
    res.render('registro')
}

controller.mostrar = (req, res) => {
    res.render('login')
};
module.exports = controller;