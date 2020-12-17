const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const {
    file,
} = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/api', function (req, res) {
    res.end('file catcher example');
});

app.use("/public", express.static(path.join(__dirname, 'public')));

file(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Node.js server is running on port ' + PORT);
});

