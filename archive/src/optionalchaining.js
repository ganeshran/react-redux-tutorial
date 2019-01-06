let total = 0;

for(let i = 0;i<=3;i++){
	total += i;
}

console.log(total);

let add = (n) => {
	if (n <= 0) 
		return 0;
	return n + add(n-1);
}

console.log(add(10));
