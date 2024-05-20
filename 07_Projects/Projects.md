# Project related to DOM

## Project 1 : Color Changer on Click 
Main Js code :
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (action) {
    console.log(action);
    console.log(action.target);
    if (action.target.id === 'grey') {
      body.style.backgroundColor = action.target.id;
    }
    if (action.target.id === 'white') {
      body.style.backgroundColor = action.target.id;
    }
    if (action.target.id === 'blue') {
      body.style.backgroundColor = action.target.id;
    }
    if (action.target.id === 'yellow') {
      body.style.backgroundColor = action.target.id;
    }
  });
});

```

## Project 2 : BMI calculator 
Main Js code :
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height <0 || isNaN(height)){
    result.innerHTML = `Please give a valid height not ${height}`
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight not ${weight}`
  }
  else{
    const ans = (weight/ ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${ans}</span>`
  }
})
```