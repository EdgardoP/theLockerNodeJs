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

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'the_locker',
}, 'single'));

app.use(express.urlencoded({ extended: true }))

//routes
app.use('/', loginRoutes); //Pagina Login
app.use('/', principalRoutes); // Pagina Principal
app.use('/', registroRoutes); //Pagina Registro
app.use('/', ropaHombre); //Pagina Hombre


//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});