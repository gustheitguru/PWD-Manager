// pulls in Yargs NPM app
// var argv = require('yargs').argv;

//how to maker yargs required
var argv = require('yargs')
	.command('hello', 'Greeting the user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'your last name goes here',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;


var command = argv._[0];

console.log(argv);

// this will print hello wolrd if Hello is passed in with the csript from CMD
// if (argv._[0] === 'hello') {
// 	console.log('hello world');
// };


if (command === 'hello' & typeof argv.name !== 'undefined' & typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname +'!');
} else if (command === 'hello' & typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('hello world');
};

;