console.log("test");
let square = (a) => a * a;
let a = 4;
let closureSquare = () => {return a*a}


var x = function() {
	this.val = 1;
	setTimeout(() => {
		this.val++;
		console.log(this.val);
	},1)
};

var xx = new x();
