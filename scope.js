##global variables
const globe = 'Earth';

const globular = () => {
	##block scope variables
	let block = 'Neighborhood';
	console.log(block);
}

console.log(globe);
console.log(globular());
console.log(block);