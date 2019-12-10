const express = require('express');
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/config.js');

app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: true }));

const dbUri =
    'mongodb+srv://' +
    global.config.db_user +
    ':' +
    encodeURIComponent(global.config.db_password) +
    '@' +
    global.config.database +
    '.mongodb.net/' +
    global.config.app_name +
    '?retryWrites=true&w=majority';

mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to DB!');
    })
    .catch(err => {
        console.log('ERROR:', err.message);
    });



app.get('/', (req, res) => {
    res.render('home');
})


app.listen(global.config.node_port, () => {
    console.log(
        global.config.app_name.toUpperCase() +
            ' Server has started on port ' +
            global.config.node_port
    );
});
