var animals = [
	{name: 'test', species: 'rabbit'},
	{name: 'new', species: 'rabbit'},
	{name: 'abc', species: 'fish'},
	{name: 'def', species: 'cat'},
]

var orders = [
	{amount: 250},
	{amount: 500},
	{amount: 100},
	{amount: 200},
	{amount: 300},
]

var totalAmount = orders.reduce((sum, order) => {
	console.log("Hello", sum, order);
	return sum + order.amount}, 0
);

console.log(totalAmount);
