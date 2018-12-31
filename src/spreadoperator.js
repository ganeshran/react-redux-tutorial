function foo(one, two, three) { 
	console.log(two);
}
var arr = [0, 1, 2];
foo.apply(null, arr);
