//6: implement js bind function

Function.prototype.bind = function(context){
	let fn = this;
	let preArgs = [].slice.call(arguments,1);
	return function() {
		let currArgs = [].slice.call(arguments);
		let finalArgs = [].concat(preArgs,currArgs);
		return fn.apply(context,finalArgs);
	}
};

//test
cat = {
	sound: 'meow',
	speak: function() {
		console.log(this.sound);
	}
};
cat.speak();//meow

let speakFunction = cat.speak;
speakFunction();//undeifned

let speakFunctionBind = speakFunction.bind(cat);
speakFunctionBind();//meow