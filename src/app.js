const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();

//importing routes
const principalRoutes = require('./routes/principal');
const loginRoutes = require('./routes/login');
const registroRoutes = require('./routes/registro');
const ropaHombre = require('./routes/hombre');
const ropaMujer = require('./routes/mujer');
const ropaInfantil = require('./routes/nino')
const explorar = require('./routes/explorar')
const carrito = require('./routes/carrito')
    //settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'the_locker',
}, 'single'));

app.use(express.urlencoded({ extended: true }))

//routes
app.use('/', loginRoutes); //Pagina Login
app.use('/', principalRoutes); // Pagina Principal
app.use('/', registroRoutes); //Pagina Registro
app.use('/', ropaHombre); //Pagina Hombre
app.use('/', ropaMujer); //Pagina Mujer   
app.use('/', ropaInfantil) //ropaInfantil
app.use('/', explorar) //Explorar
app.use('/', carrito) //carrito

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});