const controller = {}

controller.list = (req, res) => {
    const data = req.body
    console.log(data);
    res.render('principal')
};

/*controller.ropaHombre = (req, res) => {
    res.render('ropaHombre')
}*/

module.exports = controller;