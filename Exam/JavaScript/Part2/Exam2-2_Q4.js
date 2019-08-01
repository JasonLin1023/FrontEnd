//4: implement js debounce function

function debouce(fn, wait) {
	let inDebounce;
	return function() {
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => {fn.apply(this, arguments);}, wait)
	}
}



