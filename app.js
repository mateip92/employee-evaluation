var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')
//    db = require('./routes/services/db'),

var app = express();

//app.set('db', db.instance);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

//
//app.use('/api/attendance', attendanceApi);

app.listen(3000, '0.0.0.0', function() {
    // print a message when the server starts listening
    console.log("server starting on " + 3000);
});
