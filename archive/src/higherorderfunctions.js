function triple(x) {
	return x * 3;
}
var trippleFn = function(x) {
	return x * 3;
}
var waffle = trippleFn;

var animals = [
	{name: 'test', species: 'rabbit'},
	{name: 'new', species: 'rabbit'},
	{name: 'abc', species: 'fish'},
	{name: 'def', species: 'cat'},
];

var isRabbit = (x) => x.species === 'rabbit';
var rabbits = animals.filter(x => x.species === 'rabbit');

console.log(animals.filter(isRabbit));
	/*
for(var i = 0; i < animals.length; i++){
	if (animals[i].species === 'rabbit')
		rabbits.push(animals[i]);

}*/


