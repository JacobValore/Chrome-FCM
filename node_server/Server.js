const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Firebase Setup
const admin = require("firebase-admin");
const serviceAccount = require("./fcm-private-key.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

// Start Server
const server_port = process.env.PORT || 8080;
server.listen(server_port, function(){
	console.log("listening on port " + server_port);
});
app.get('*', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// I got this token by running the chrome extension and checking the console
const registrationToken = '<RegistrationID>';
io.on('connection', function(socket){
	socket.on('send_FCM_message', function(data){
		var message = {token: registrationToken, data: data};
		admin.messaging().send(message).then((response) => {
			console.log('Successfully sent message:', response);
		}).catch((error) => {
			console.log('Error sending message:', error);
		});
	});
});
