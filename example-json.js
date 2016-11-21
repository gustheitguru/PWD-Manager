var person = {
	name: 'Gus',
	age: '35'
}

// turning object above into string
var personJSON = JSON.stringify(person);

console.log(person);
console.log(typeof person);
console.log(personJSON);
console.log(typeof personJSON);


// Turn JSON string into JS object
var personObject = JSON.parse(personJSON)

console.log(personObject);
console.log(typeof personObject);


//Challenge Area
console.log('Challenge Area');

var animal = '{"name": "Gizmo"}';


// User JSON.parse to make animal into JS Object
var animalObject = JSON.parse(animal);
console.log(animalObject);
console.log(typeof animalObject);
//add age prop
animalObject.age = 5;
console.log(animalObject);
console.log(typeof animalObject);

// convert it to JSON and print to screen JSON.Stringify
var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
console.log(typeof animalJSON);