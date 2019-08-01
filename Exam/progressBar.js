
function view(container, model) {
	function render(data) {
		let element = container.querySelector('.barProgress');
		element.style.width = data + '%';
		element.innerHTML = data + '%';
	}

	//container.innerHTML = 
	model.subscribe(render);
    render();
}

function model() {
	let _subscriber;
	let	_data = 0;
	let _speed = 50;
	let	_interval;

	function _updateData() {
        _subscriber(_data);

        if (_data >= 100) {
        	clearInterval(_interval);
        } else {
        	_data++;
        }
	}	

	_interval =  setInterval(_updateData, _speed);

	return {
		subscribe: function(cb) {
			if (!_subscriber) {
				_subscriber = cb;
			}
		}
	}
}

let progressBarContainer = document.querySelector('.barFrame');
let progressBarModel = model();
let progressBarView = view(progressBarContainer, progressBarModel);