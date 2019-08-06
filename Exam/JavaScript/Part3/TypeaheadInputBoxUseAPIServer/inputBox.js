const DIRECTION = {
    UP: 'up',
    DOWN: 'down'
} 
let _currentFocus = -1;


function view(container, model){
    let _input = document.createElement('input'),
    _options = document.createElement('div');
    
    _input.setAttribute('type', 'text');
    _options.setAttribute('class', 'options');
    
    container.appendChild(_input);
    container.appendChild(_options);
    
    let cb = debouce(model.fetchData, 100);
    
    _input.addEventListener('keyup', function(e){

        let inputText = e.target.value;
        if(e.keyCode != 13)
        cb(inputText);
    });

    container.addEventListener('keyup', function(e) {
     let keyCode = e.keyCode;
     if(keyCode === 38) {
            // UP
            model.arrowKey(DIRECTION.UP);
        } else if(keyCode === 40) {
            // DOWN
            model.arrowKey(DIRECTION.DOWN);
        } 
        else if (keyCode === 13) {
                _input.value = document.querySelector('.typeahead-active').innerHTML;
                _options.style.display = 'none';
        }
    });
    
    function render(data, currentFocus){
        if(!data || !data.length) {
            _options.style.display = 'none';
        } else {
            _options.innerHTML = '';
            
            for(let i=0;i<data.length;i++) {
                let item = data[i];

                let singleOption = document.createElement('div');
                singleOption.innerHTML = item;
                
                if(i == currentFocus) {
                    singleOption.setAttribute('class', 'typeahead-active');
                }

                _options.addEventListener('click', function(e) {
                _input.value = e.target.innerHTML;
                _options.style.display = 'none';
                });
                
                _options.appendChild(singleOption);
            }
            
            _options.style.display = 'block';
        }
    }
    
    model.subscribe(render);
}



function model(){
    let _subscriber, _cache={}, _data;
    
    function _fetchData(text){

        if(_cache[text]) {
            apiBack(_cache[text]);
        } else {
            fetch('https://swapi.co/api/people/?search=' + text)
            .then(response => response.json())
            .then(function(json){
                _cache[text] = json;
                apiBack(json);
            });
        }
    }
    
    function apiBack(json) {
        let names = json.results.map(function(item){
            return item.name;
        });
        
        _data = names;
        
        _subscriber(_data, _currentFocus);
    }
    
    function _arrowKey(direction){
        // update _currentFocus
        
        if(direction === DIRECTION.DOWN) {
            _currentFocus++;
            
            _currentFocus = _currentFocus > _data.length-1 ?  0 : _currentFocus;
        } else if (direction === DIRECTION.UP) {
            _currentFocus--;
            
            _currentFocus = _currentFocus < 0 ? _data.length-1 : _currentFocus;
        }
        
        _subscriber(_data, _currentFocus);
    }

    return {
        subscribe: function(fn) {
            if(!_subscriber) _subscriber = fn;
        },
        fetchData: _fetchData,
        arrowKey: _arrowKey
    }
}


function debouce(fn, wait) {
    let _timer;

    return function(...args){
        clearTimeout(_timer);

        _timer = setTimeout(function(){
            fn.apply(null, args);
        }, wait);
    };
}


let typeAheadContainer = document.querySelector('.typeahead-container');
let typeAheadModel = model();

let typeAheadView = view(typeAheadContainer, typeAheadModel);
