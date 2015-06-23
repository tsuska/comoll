#testovaci zmana

var path = require('path');
var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(bodyParser.json());

app.get('/suska', function(req, res){
  res.sendFile(path.join(__dirname, 'suska.html'));
});

app.post('/suska', function(req, res){
  io.emit('suska', req.body);
  res.json(req.body);
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

http.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port);
});
