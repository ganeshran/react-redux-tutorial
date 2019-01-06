function foo(one, two, three) { 
	console.log(three);
}
var arr = [1, 2, 3, 4, 5]

var [a, b, ...rest] = arr;

var arrOne = ['thing', 'otherThing'];

var arrTwo = ['foo', 'bar', ...arrOne, 'baz'];

console.log(arrTwo);
