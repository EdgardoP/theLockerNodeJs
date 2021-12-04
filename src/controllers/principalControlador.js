const controller = {}

controller.list = (req, res) => {
    const data = req.body
    console.log(data);
    res.render('principal')
};

module.exports = controller;