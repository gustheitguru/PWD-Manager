console.log('hello world');

//including 3rd party modules to node package
var storage = require('node-persist');
storage.initSync();

storage.setItemSync('account', [{
	name:'Gus',
	balance: 10000000000,
	ANumber: '1j1kn34infc8n098n8'

}]);

// will save variable to system 

var name = storage.getItemSync('name');
console.log("save name is: " + name);


var account = storage.getItemSync('account');
console.log(account);

// use .push to add to accounts array
account.push({
	name:'Bob',
	balance: 1000234200,
	ANumber: '1j1kasdf4c4c498n8'
})

//Save using SetItemSync
storage.setItemSync('account', account);

console.log(account);
