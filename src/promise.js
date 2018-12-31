console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('ticket');
	}, 3000);
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
	console.log('husband');
	console.log('wife');
	return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
	console.log('husband get butter');
	console.log('wife get butter');
	return new Promise((resolve,reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
