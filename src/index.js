const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Settings
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// View routes
app.use(require('./routes/index.js'));

// Public
app.use(express.static(path.join(__dirname, '../public')));

// Starting
app.listen(app.get('port'), () => {
    console.log('Server is on port', app.get('port'));
});