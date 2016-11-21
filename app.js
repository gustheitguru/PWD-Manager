console.log('Starting PWD Manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Get the user account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			Username: {
				demand: true,
				alias: 'un',
				description: 'your Username goes here',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'your password goes here',
				type: 'string'
			}
			masterPassword: {
				demand: 'true',
				alias: 'm',
				description: 'master Password',
				type: 'string'
			}			
		}).help('help');
	})
	.command('get', 'Create account', function (yargs){
				yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];
// -- PWD Manager 2 Data --
// create 
// -Name
// -UserName
// -PWD
// get 
// - name of account
// -- use example-args.js
// ------------------------------



function createAccount (account){

	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined'){
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account){
		if (account.name === accountName){
			matchedAccount = account;
		}
	});

	return matchedAccount;

}


if (command === 'create') {
	var createAccount = createAccount({
		name: argv.name,
		UserName: argv.Username,
		pwd: argv.password
	});
	console.log('Account was created');
	console.log(createAccount);
} else if (command === 'get'){
	var fetchAccount = getAccount(argv.name);

	if (typeof fetchAccount === 'undefined') {
		console.log('Account Not found');
	} else if (true) {
		console.log('Account Found');
		console.log(fetchAccount);
	}
}

// -- PWD Manager 1 Data --
// createAccount({
// 	name: 'FaceBook',
// 	username: 'gus@csha.net',
// 	pwd: 'Password123'
// });

// var fbAccount = getAccount('FaceBook');
// console.log(fbAccount);

// Account Name FaceBook
//account.Username User12
//Account.pwd Password123!

// ------------------------------