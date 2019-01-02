let dragon = (name, size, element) => 
	name + ' is a ' +
		size + ' dragon that breathes ' + 
		element + '!'

let dragonNew = 
	name => 
	size => 
	element =>
	name + ' is a ' +
	size + ' dragon that breathes ' + 
	element + '!'

dragon = _.curry(dragon);

console.log(dragonNew('ganesh')('huge')('fire'));

