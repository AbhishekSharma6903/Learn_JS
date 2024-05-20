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