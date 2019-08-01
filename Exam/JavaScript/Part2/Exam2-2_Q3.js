//3: implement js array reduce function

Array.prototype.reduce = function(fn){

	let arr;

	for (let i = 0; i < this.length; i++) {

		if (arr !== undefined) {
			arr = fn.call(undefined, arr, this[i], i, this);
		} else {
			arr = this[i];
		}
	}

	return arr;
};

//tests
let numbers = [10, 20, 30, 40];
let result = numbers.reduce((a, b) => a + b);
console.log(result); // 100

