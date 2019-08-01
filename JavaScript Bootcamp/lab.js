// This is the Filter Lab

/*
let weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
let goOutside = weather.filter(temp => temp>70);
console.log(goOutside);
*/

// This is the Map Lab
//Example1
/*
let numbers = [2, 4, 6, 8, 10, 12];
let double = numbers.map(mult => mult*2).map(mult => mult +1);
console.log(double);
*/
//Example2
/*
let greeting = ['hi', 'hello', 'hey', 'thanks'];
let shout = greeting.map(salutation => salutation.toUpperCase());
console.log(shout);

let greetingLowerCase = shout.map(salutation => salutation.toLowerCase());
console.log(greetingLowerCase);

let hiShout = shout.shift();
console.log(hiShout);
*/

//This is the Reduce Lab
//Example1
/*
let homeruns = [
{batter: 12},
{batter: 21},
{batter: 28},
{batter: 42},
{batter: 31},
{batter: 22},
{batter: 17},
{batter: 16},
{batter: 5}
];

let totalHomers = homeruns.reduce(function(a, b) {
	console.log('accumulative', a, 'current', b);
	return a + b.batter;
}, 0);

console.log(totalHomers);
*/
//Example2
/*
let numbers = [5, 10, 15, 20, 25];

let total = numbers.reduce(function(x, y) {
	console.log(x, y);
	return x + y;
});
console.log(total);

let largest = numbers.reduce(function(acc, curr) {
	if (acc > curr) {
		return acc;
	} else {
		return curr;
	}
});
console.log(largest);
*/

//Example3
/*
let numbers = [1, 2, 3, 4];
let triples = numbers.map(number => number * 3).reduce((a, b) => a + b, 0);
console.log(triples);
*/

//Identify Unique String
 function unique(string argument) {
 	
 }
































