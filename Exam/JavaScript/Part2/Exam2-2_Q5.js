//5: implement js throttle function

function throttle(fn, limit) {
	let inThrottle;
	return function() {
		if (!inThrottle) {
			fn.apply(this, arguments);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	}
}
