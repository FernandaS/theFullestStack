var express = require('express');
var bodyParser = require('body-parser');
// var database = require('./server-assets/database');
var cors = require('cors');
var app = express();
var port = 3000;

//Mongo Setup
var mongoose = require('mongoose');
var Friend = require('./server-assets/Friend/friendCtrl');

var databaseReference = 'mongodb://localhost/theFullesStack';
var connection = mongoose.connection;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/friends', Friend.getFriends);
app.post('/friends/new', Friend.addFriend);
app.delete('/friends/:id', Friend.unFriend);






mongoose.connect(databaseReference);
connection.once('open', function (){
app.listen(port, function(){
	console.log('Everything is working and I am connected on port ' + port);
});

})










