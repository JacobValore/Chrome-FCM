// You can find this ID by going to your Firebase project settings
// and going to the "Cloud Messaging" tab.
chrome.gcm.register(["704490568068"], (registration_id) => {
	console.log("Registration ID: ", registration_id);
	if(chrome.runtime.lastError)
		console.log("Registration Failed");
});

// This will execute whenever FCM sends a message to this extension.
// Even when the service worker is inactive
chrome.gcm.onMessage.addListener((message) => {
	console.log("Message: ", message);
});

// This will send a message to FCM when the action icon is clicked.
chrome.action.onClicked.addListener((tab) => {
	console.log(tab);
	var message = {type: "GetUserID", extraInfo: 42};
	chrome.gcm.send(message, (messageID) => {
		console.log("MessageID: ",messageID);
	});
});

//This will execute if it was not possible to send a message to the FCM server.
chrome.gcm.onSendError((error) => {
	console.log(error);
});
