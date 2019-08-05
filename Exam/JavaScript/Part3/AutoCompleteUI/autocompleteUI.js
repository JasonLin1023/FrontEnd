let view = function(container, model) {
  // construct HTML for autocomplete   
  let _inputDom = document.createElement('input'),
      _optionsDom = document.createElement('div');
  
  _inputDom.setAttribute('type', 'text');
  _inputDom.setAttribute('placeholder', 'State');
  _optionsDom.setAttribute('class', 'options');

  container.appendChild(_inputDom);
  container.appendChild(_optionsDom);
  // initial setup done
  
  _inputDom.addEventListener('keyup', function(e){
     let text = e.target.value;
     
     model.filterOptions(text);
  }); 

  function render(data){
     if(!data || !data.length) {
        _optionsDom.style.display = 'none';
     } else {
        _optionsDom.innerHTML = '';

        for(let option of data) {
           let singleOption = document.createElement('div');
           singleOption.innerHTML = option;
           
           _optionsDom.appendChild(singleOption);
        }
        _optionsDom.style.display = 'block';
     }
  }
  
  model.subscribe(render);
};

let model = function(config){
  let _subscriber,
      _options = config.options || [];
  
  
  function filterOptions(key){
    let result = [], _key = key.toUpperCase();
    
    if(_key != '') {
      for(let option of _options){
         if(option.indexOf(_key) > -1) {
            result.push(option);
         }
      }
    }

    _subscriber(result);
  }
  
  return {
    subscribe: function(fn) {
      if(!_subscriber) _subscriber = fn;
    },
    filterOptions: filterOptions
  }
};

let autoCompleteContainer = document.querySelector('.auto-complete');

let config = {
  options: [
    'CA',
    'AZ',
    'WA',
    'NY',
    'OR',
    'TX',
    'TS',
    'ML',
    'MX'
  ]
};
let autoCompleteModel = model(config);

let autoCompleteView = view(autoCompleteContainer, autoCompleteModel);


