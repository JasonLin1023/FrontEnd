//2: implement js array map function

Array.prototype.map = function(fn){

	let arr = [];

	for (let i = 0; i < this.length; i++) {

		arr.push(fn(this[i], i, this));

	}
	
	return arr;

};

//tests
let arrs = [1.24,3.3,9.45];
let roundToInt = arrs.map(fn => Math.round(fn));
console.log(roundToInt); // [ 1, 3, 9 ]