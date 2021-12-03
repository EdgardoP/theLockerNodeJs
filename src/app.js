const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();

//importing routes
const principalRoutes = require('./routes/principal');


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
    database: '',
}, 'single'));

//routes
app.use('/', principalRoutes); // Pagina Principal

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});