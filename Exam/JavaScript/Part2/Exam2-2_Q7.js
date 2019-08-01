/*7: given an array and print output data at schedule

Let input = [{
Value: ‘a’,
Time: 2000
},
{
Value: ‘b’,
Time: 1000
},
{
Value: ‘c’,
Time: 3000
},
...
];

We need to output ‘a’ after 2 seconds, output ‘b’ 1 second after ‘a’, and output ‘c’ 3 seconds after ‘b’

for example we start at 10:00am

10:00:02 -> ‘a’
10:00:03 -> ‘b’
10:00:06 -> ‘c’
*/



function printTasks(list) {
	let index = 0;
	let today = new Date(); 

	function getTime() {
		let today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		// add a zero in front of numbers<10
		m = checkTime(m);
		s = checkTime(s);
		console.log(h + ":" + m + ":" + s);
	}

	function checkTime(i) {
		if (i < 10) {
		i = "0" + i;
		}
		return i;
	}

	function printTask() {
		if (!list[index]) return;
		setTimeout (() => {getTime(); console.log(" => " + "'" + list[index].Value + "'"); index++; printTask();}, list[index].Time);
	}
	printTask();
	return;
}

let input = [{
	Value: "a",
	Time: 2000
},
{
	Value: "b",
	Time: 1000
},
{
	Value: "c",
	Time: 3000
},
];

printTasks(input);