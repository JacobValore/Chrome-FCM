# Chrome-FCM
This is a sample project to test out using Firebase Cloud Messaging with a Chrome Extension. The server is made with Node.js and can send commands which spin up the service worker whenever it is needed.

Initial Setup:
1.	From Firebase dashboard: Add project
2.	Project name: ChromeFCM
3.	Enable Google Analytics

Main Project Setup:
1. From project dashboard: Go to Project Settings -> Cloud Messaging -> Sender ID
2. Put the Sender ID in the chrome.gcm.register() call in extension/background.js
3. Run the extension to get the Registration ID from the console
4. Put the Registration ID into the RegistrationToken variable in node_server/Server.js
5. From project dashboard: Go to Project Settings -> Service Accounts
6. Generate new private key and put the file in the project
7. Put the path to the private key json file into the serviceAccount require statement in node_server/Server.js

Run the Project:
1. Reload the chrome extension.
2. Make sure all the node packages are installed using "npm install <package_name>".
    (Required packages: express, socket.io, firebase-admin)
		(Hint: If you do "node Server.js" it will tell you what package you are missing in the error.)
3. In the node_server folder, run "node Server.js" in the command line.
4. Open the extension's console.
5. Open http://localhost:8080/ in your browser.
6. Type a message into the message box and press "Send Message".
7. Check extension console to find the message you typed!
