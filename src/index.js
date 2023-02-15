import './pages/index.css';
import { fishText } from './components/fish-text';
let randomText;
//----------------------------------------------------------------------------

const radioButtonEng = document.querySelector('.radio-input-eng');
const radioButtonRu = document.querySelector('.radio-input-ru');
const radioButtonParent = document.querySelectorAll('.language__label');
const textLanguageSection = document.querySelector('.text-language');

radioButtonEng.addEventListener('click', () =>{
    radioButtonEng.setAttribute('checked', 'checked');
    radioButtonParent[0].classList.add('radio_type_active');
    radioButtonParent[1].classList.remove('radio_type_active');
    radioButtonRu.removeAttribute('checked');
});

radioButtonRu.addEventListener('click', () =>{
    radioButtonRu.setAttribute('checked', 'checked');
    radioButtonParent[1].classList.add('radio_type_active');
    radioButtonParent[0].classList.remove('radio_type_active');
    radioButtonEng.removeAttribute('checked');
});

function getTextLanguage () {
    if (radioButtonParent[0].classList.contains('radio_type_active')) {
        randomText = fishText.getWords({count: 180, dataType: 'string', lang: 'eng', repeat: true});
    } else {
        randomText = fishText.getWords({count: 120, dataType: 'string', lang: 'rus', repeat: true});
    }
}

getTextLanguage();


//keyboard


//keys functionality
const keys = {
    188: '.ldotbtn',
    190: '.dotbtn',
    191: '.quest',
    32: '.space',
    186: '.doubledot',
    222: '.updot',
    27: '.esc',
    49: '.onebtn',
    50: '.twobtn',
    51: '.threebtn',
    52: '.fourbtn',
    53: '.fivebtn',
    54: '.sixbtn',
    55: '.sevenbtn',
    56: '.eightbtn',
    57: '.ninebtn',
    48: '.zerobtn',
    219: '.backbtn',
    221: '.backotherbtn',
    220: '.backanotherbtn',
    187: '.ravnobtn',
    81: '.qbtn',
    87: '.wbtn',
    69: '.ebtn',
    82: '.rbtn',
    84: '.tbtn',
    89: '.ybtn',
    85: '.ubtn',
    73: '.ibtn',
    79: '.obtn',
    80: '.pbtn',
    189: '.-btn',
    65: '.abtn',
    83: '.sbtn',
    68: '.dbtn',
    70: '.fbtn',
    71: '.gbtn',
    72: '.hbtn',
    74: '.jbtn',
    75: '.kbtn',
    76: '.lbtn',
    90: '.zbtn',
    88: '.xbtn',
    67: '.cbtn',
    86: '.vbtn',
    66: '.bbtn',
    78: '.nbtn',
    77: '.mbtn'
  };
  
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  
  function handleKeyDown(e) {
    const key = keys[e.keyCode];
    if (key) {
      document.querySelector(key).classList.add('key_type_active');
    } else {
      const key = `${e.key}btn`;
      const keyLow = key.toLowerCase();
      document.querySelector(`.${keyLow}`).classList.add('key_type_active');
    }
  }
  
  function handleKeyUp(e) {
    const key = keys[e.keyCode];
    if (key) {
      document.querySelector(key).classList.remove('key_type_active');
    } else {
      const key = `${e.key}btn`;
      const keyLow = key.toLowerCase();
      document.querySelector(`.${keyLow}`).classList.remove('key_type_active');
    }
  }
  


// switch background color
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.root');
const offBackgroudGradient = document.querySelector('.offbackground');
let theme = 'light';

function handleThemeChange() {
  if (theme === 'light') {
    body.setAttribute('style', 'background: #EFDECD;');
    offBackgroudGradient.textContent = 'theme: light';
    buttons.forEach((button) => {
      button.setAttribute('style', 'background: white; color: black;');
    });
    textLanguageSection.setAttribute('style', 'background: white;');
    theme = 'dark';
  } else {
    body.setAttribute('style', 'background: #1B1B1EFF');
    offBackgroudGradient.textContent = 'theme: dark';
    buttons.forEach((button) => {
      button.setAttribute('style', 'background: #111012FF; color: white;');
    });
    textLanguageSection.setAttribute('style', 'background: #111012FF; color: white;');
    theme = 'light';
  }
}

offBackgroudGradient.addEventListener('click', handleThemeChange);
handleThemeChange();


//off and on backlight
const allKeys = document.querySelectorAll('.key');
const keyboardContainer = document.querySelector('.keyboard-container');
const themeButton = document.querySelector('.theme-button');
const offKeyboardBacklight = document.querySelector('.offkeyboardbacklight');

function handleOffBacklight() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'animation: none; color: black;');
        key.classList.add('key_type_no-backlight');
        if (themeButton.textContent == 'switch keyboard theme to light') {
            key.setAttribute('style', 'animation: none; color: white; background: #0C0C0CFF;');
            key.classList.add('key_type_no-backlight-dark');
        }
    });
    offKeyboardBacklight.removeEventListener('click', handleOffBacklight);
    offKeyboardBacklight.addEventListener('click', handleOnBacklight);
    if (allKeys[0].classList.contains('key_type_no-backlight')) {
        offKeyboardBacklight.textContent = 'on keyboard backlight';
    }
}

function handleOnBacklight() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'animation: color 10s linear infinite;');
        key.classList.remove('key_type_no-backlight');
        if (themeButton.textContent == 'switch keyboard theme to light') {
            key.setAttribute('style', 'animation: color 10s linear infinite; background: #0C0C0CFF;');
            key.classList.remove('key_type_no-backlight-dark');
        }
    });
    if (!allKeys[0].classList.contains('key_type_no-backlight')) {
        offKeyboardBacklight.textContent = 'off keyboard backlight';
    }
    offKeyboardBacklight.removeEventListener('click', handleOnBacklight);
    offKeyboardBacklight.addEventListener('click', handleOffBacklight);
}

handleOnBacklight();

//switch themes
function handleSwitchThemeDark() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'background: #0C0C0CFF;');
    });
    keyboardContainer.setAttribute('style', 'background: #151515FF;');
    themeButton.textContent = 'switch keyboard theme to light';
    themeButton.removeEventListener('click', handleSwitchThemeDark);
    themeButton.addEventListener('click', handleSwitchThemeLight);
    if (allKeys[0].classList.contains('key_type_no-backlight')) {
        handleOffBacklight();
    }
}

function handleSwitchThemeLight() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'background: white;');
    });
    keyboardContainer.setAttribute('style', 'background: #ccc;');
    themeButton.textContent = 'switch keyboard theme to dark';
    themeButton.removeEventListener('click', handleSwitchThemeLight);
    themeButton.addEventListener('click', handleSwitchThemeDark);
    if (allKeys[0].classList.contains('key_type_no-backlight')) {
        handleOffBacklight();
    }
}

handleSwitchThemeLight();

//keyboard

//---------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------------

//game logic


//text validation
const gameTemplate = document.querySelector('#game-template').content;
let placeHolderText = `${randomText}`;

//countdown selectors 
const gameoverTemplate = document.querySelector('#gameover').content;
const gameoverContainer = gameoverTemplate.querySelector('.gameover__container');
const gameoverContentConrainer = gameoverTemplate.querySelector('.gameover__content-container');
const gameoverWords = gameoverTemplate.querySelector('.gameover__words');
const gameoverLetters = gameoverTemplate.querySelector('.gameover__letters');
const timerTemplate = document.querySelector('#timer-template').content;
const countDownText = timerTemplate.querySelector('.timer__time-counter');
const timerContent = timerTemplate.querySelector('.timer');
const game = gameTemplate.querySelector('.game');

let text = placeHolderText.split(' ');
const templateForEachWord = document.querySelector('#words').content;
const templateSpan = templateForEachWord.querySelector('.word-place');
let placeHolder = gameTemplate.querySelector('.game__placeholder');
const gameText = gameTemplate.querySelector('.game__text');

//using cycle to add a number of word to classlist
function textAppending (text) {
    for (let i = 0; i < text.length; i++) { 
        const newSpan = templateSpan.cloneNode(true);
        newSpan.classList.add(`wordplace${i}`);
        newSpan.textContent = `${text[i]} `;
        placeHolder.append(newSpan);
    }
}

let counterOfCorrectWords = 0;
let counterOfWords = -1;

function gameValidation(gameTemplate, placeHolder) {
    const inputText = gameTemplate.querySelector('.game__text');
    const configForFindWord = `.wordplace`;
    function handleKeydownEvent(event) {
    if (event.keyCode === 32) {
        const inputTextArray = inputText.value.split(' ');
        counterOfWords++;
        const currentWord = inputTextArray[inputTextArray.length - 1];
        const correctWordClass = placeHolder.querySelector(`${configForFindWord}${counterOfWords}`);
        let correctWord = correctWordClass.textContent.trim();
        if (currentWord == correctWord) {
            correctWordClass.classList.add('game__text_type_correct');
            counterOfCorrectWords++;
        } else if (currentWord != correctWord) {
            correctWordClass.classList.add('game__text_type_incorrect');
        }
        function getCurrentText() {
            let currentText = '';
            for (let i = counterOfWords + 1; i > 0; i--) {
                currentText += placeHolder.querySelector(`${configForFindWord}${i - 1}`).textContent;
            }
            currentText = currentText.split(' ').reverse().join(' ').substring(1);
            inputText.value = currentText;
        }
        getCurrentText();
        /* console.log(correctWordClass.offsetLeft);
        console.log(correctWordClass.offsetTop); */
        } else if (event.keyCode === 8) {
        function getCurrentTextLength(event) {
            let currentText = '';
            for (let i = counterOfWords + 1; i > 0; i--) {
                currentText += placeHolder.querySelector(`${configForFindWord}${i - 1}`).textContent;
            }
            currentText = currentText.split(' ').reverse().join(' ').substring(1).length;
            if (currentText + 1 >= gameText.value.length && gameText.value.length > 1) {
                event.preventDefault();
                return false;
            }
        }
        getCurrentTextLength(event);
    }
    if (placeHolderText.length <= gameText.value.length || countDownText.textContent == '0:01') {
        gameText.removeEventListener('keydown', handleKeydownEvent);
    }
}
function checkTimer() {
    setInterval(function() {
      if (placeHolderText.length <= gameText.value.length || countDownText.textContent == '0:01') {
        gameText.removeEventListener('keydown', handleKeydownEvent);
    }
    }, 1000);
  }
  
  checkTimer();
    gameText.addEventListener('keydown', handleKeydownEvent);
}

//start game functionality
const startGameButton = document.querySelector('.start-game-button');
const buttonContainer = document.querySelector('.button-container');
const content = document.querySelector('.content');
const keyboardSuggestTemplate = document.querySelector('#keyboard-suggest').content;
const keyboardSuggestContent = keyboardSuggestTemplate.querySelector('.keyboard__suggest');


startGameButton.addEventListener('click', () => {
    getTextLanguage();
    placeHolderText = randomText;
    text = placeHolderText.split(' ');
    textAppending(text);
    gameValidation(gameTemplate, placeHolder);
    startGameButton.setAttribute('style', 'animation: scaling 0.4s ease; animation-delay: 0s;');
    addGame(startGameButton, gameTemplate, timerTemplate, buttonContainer);
    document.addEventListener('keydown', addCountDown);
});


function addGame(firstRemove, prepend, append, secondRemove) {
    counterOfWords = -1;
    setTimeout(() => {
        firstRemove.remove();
        secondRemove.remove();
        content.prepend(prepend);
        content.append(append);
        gameText.focus();
        content.append(keyboardSuggestTemplate);
        gameStartSuggestionShow();
    }, 400);
}

function gameStartSuggestionShow() {
    document.addEventListener('keydown', function (e) {
        gameStart();
        if (e.keyCode === 9) {
            e.preventDefault();
            return false;
        }
    });
}

function gameStart() {
    gameText.focus();
    keyboardSuggestContent.setAttribute('style', 'animation: scaling 0.4s ease;');
    setTimeout(() => {
        keyboardSuggestContent.remove();
    }, 400);
}

//countdown functionality

let time = 58;

function addCountDown() {
    countDownText.textContent = `0:59`;
    setInterval(updateCountDown, 1000);
    document.removeEventListener('keydown', addCountDown);
}

let inputLength = gameText.value.length - 1;

function updateCountDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    countDownText.textContent = `${minutes}:${seconds}`;
    time--;
    if (countDownText.textContent == '0:00' || placeHolderText.length <= inputLength) {
        timerContent.setAttribute('style', 'animation: scaling 0.4s ease');
        game.setAttribute('style', 'animation: scaling 0.4s ease');
        const correctWordsLetters = placeHolder.querySelectorAll('.game__text_type_correct');
        let counterOfLetters = 0;
        for (let i = 0; i < correctWordsLetters.length; i++) {
            counterOfLetters = counterOfLetters + correctWordsLetters[i].textContent.length;
        }
        gameoverWords.textContent = `${counterOfCorrectWords} words / per min`;
        gameoverLetters.textContent = `${counterOfLetters} letters / per min`;
        countDownText.textContent = '';
        countDownText.textContent = '';
        inputLength = 0;
        setTimeout(() => {
            gameoverContentConrainer.setAttribute('style', 'animation: scaling-reverse 0.4s ease;');
            timerContent.remove();
            game.remove();
            content.prepend(gameoverContentConrainer);
            document.removeEventListener('keydown', addCountDown);
        }, 400);
    }
}

//gameover functionality
function checkGameOver(gameText) {
    gameText.addEventListener('input', checkInputForGameOver);
}

function checkInputForGameOver() {
    if (countDownText.textContent == '0:00' || placeHolderText.length <= gameText.value.length - 1) {
        timerContent.setAttribute('style', 'animation: scaling 0.4s ease');
        game.setAttribute('style', 'animation: scaling 0.4s ease');
        const correctWordsLetters = placeHolder.querySelectorAll('.game__text_type_correct');
        let counterOfLetters = 0;
        for (let i = 0; i < correctWordsLetters.length; i++) {
            counterOfLetters = counterOfLetters + correctWordsLetters[i].textContent.length;
        }
        gameoverWords.textContent = `${counterOfCorrectWords} words / per min`;
        gameoverLetters.textContent = `${counterOfLetters} letters / per min`;
        setTimeout(() => {
            gameoverContentConrainer.setAttribute('style', 'animation: scaling-reverse 0.4s ease;');
            timerContent.remove();
            game.remove();
            content.prepend(gameoverContentConrainer);
            document.removeEventListener('keydown', addCountDown);
        }, 400);
    }
}

checkGameOver(gameText);


//restart game functionality
const restartGameButton = gameoverTemplate.querySelector('.gameover__button');
restartGameButton.addEventListener('click', function () {
    placeHolder.replaceChildren();
    gameoverContentConrainer.setAttribute('style', 'animation: scaling 0.4s ease;');
    setTimeout(() => {
        gameoverContentConrainer.remove();
        timerContent.setAttribute('style', 'animation: scaling-reverse 0.4s ease;');
        keyboardSuggestContent.setAttribute('style', 'animation: scaling-reverse 0.4s ease');
        inputLength = gameText.value.length - 1;
    }, 400);
    game.setAttribute('style', 'animation: scaling-reverse 0.4s ease;');
    restartGame();
    addGame(gameoverContainer, game, '', gameoverContainer);
    content.prepend(keyboardSuggestContent);
    let gameTextRestart = game.querySelector('.game__text');
    checkGameOver(gameTextRestart);
});

function restartGame() {
    gameText.value = '';
    getTextLanguage();
    placeHolderText = randomText;
    text = placeHolderText.split(' ');
    counterOfWords = -1;
    counterOfCorrectWords = 0;
    textAppending(text);
    placeHolder = game.querySelector('.game__placeholder');
    gameValidation(game, placeHolder);
    document.addEventListener('keydown', addTimerAfterRestart);
}

function addTimerAfterRestart() {
    countDownText.textContent = `1:00`;
    time = 59;
    content.append(timerContent);
    document.removeEventListener('keydown', addTimerAfterRestart);
}