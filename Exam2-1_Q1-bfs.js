var array = [1, 2, [3, 4, [5, 6, 0]], 4, [3, 7], 0];
let result=flattern(array);
console.log(result);

function flattern(array) {
	let res=[];
	let queue = array;
	while(queue.length) {
		let pop=queue.shift(1);
		if (Array.isArray(pop)) {

			queue.push.apply(queue,pop);
		}
		else {
			
			res.push(pop);
		}
	}
	return res;
}