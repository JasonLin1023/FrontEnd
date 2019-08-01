//1: implement js array filter function

Array.prototype.filter = function(fn){

	let arr = [];

	for (let i = 0; i < this.length; i++) {

		if (fn.call(fn, this[i], i, this)) {

			arr.push(this[i]);

		}

	}
	
	return arr;
	
};

//tests
let numbers = [1, 2, 3, 10, 12, 13];
let newNum = numbers.filter(fn => fn >= 10);
console.log(newNum); //[10, 12, 13]
