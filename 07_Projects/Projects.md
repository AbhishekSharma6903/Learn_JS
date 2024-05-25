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

## Project 3 : digital clock 
Main Js code :
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 : Random Number Guess Game
Main Js code :
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let guessRec = [];
let newGuess = 1;

let PlayFlag = true;

if (PlayFlag) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    guessRec.push(guess);
    if (newGuess === 11) {
      washout(guess);
      finalPrint(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      finalPrint(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    finalPrint(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    finalPrint(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    finalPrint(`Number is TOOO High`);
  }
  washout(guess)
}

function washout(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  newGuess++;
  remain.innerHTML = `${11 - newGuess} `;
}

function finalPrint(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  remain.innerHTML = '<p>no more chances</p>'
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p);
  PlayFlag = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessRec = [];
    newGuess = 1;
    guessSlot.innerHTML = '';
    remain.innerHTML = `${11 - newGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    PlayFlag = true;
  });
}


```
