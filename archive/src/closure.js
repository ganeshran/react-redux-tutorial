let f  = () => {
	let i = 1;
	let j = 2;
	return () => {
		console.log(i);
	}
}

f()();
