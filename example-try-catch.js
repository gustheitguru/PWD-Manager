function doWork () {
	// throw error that say 'unable to do work'
	throw new Error('unable to do work');
}

try{
	//call do work
	doWork();
// throw new Error('Unable to do the thing you wanted!');

} catch (e) {
	console.log(e.message);
} finally {
	console.log('Finally block executed!');
}

console.log('try catch ended');