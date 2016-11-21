//to install crypto you need the following package
// npm install crypto-js@3.1.5 --save

var crypto = require('crypto-js');


var secretMessage = 'I hid the chips under the couch';
var secretKey = '123abc';

// Encrypt command takes 2 options phrase and key for encryption
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log('encryptedMessage');
console.log(encryptedMessage);

//Decrypt message takes 2 options EncryptedMEssage and key for decryption 
//this will convert encrypted phrase into bytes
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
console.log('bytes');
console.log(bytes);

//you will have to convert the bytes into a string
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log("decryptedMessage");
console.log(decryptedMessage);


//adding a string of data
var secretMessages = {
	name: 'Gus',
	secretName: 'Skitzo'
}

// Encrypt command takes 2 options phrase and key for encryption
var encryptedMessages = crypto.AES.encrypt(JSON.stringify(secretMessages), secretKey);
console.log('encryptedMessages');
console.log(encryptedMessages);

var bytes = crypto.AES.decrypt(encryptedMessages, secretKey);
var decryptedMessages = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log("decryptedMessages");
console.log(decryptedMessages);
console.log(decryptedMessages.secretName);