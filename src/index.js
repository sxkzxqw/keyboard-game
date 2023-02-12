import './pages/index.css';
import { fishText } from './components/fish-text';
console.log(fishText);
let randomText = fishText.getWords({count: 180, dataType: 'string', lang: 'eng', repeat: true});
//----------------------------------------------------------------------------

//keyboard

// keyup functionality
document.addEventListener('keyup', function(e) {
    handleKeyUp(e);
});

function handleKeyUp(e) {
    switch (e.keyCode) {
        case 188:
            document.querySelector('.ldotbtn').classList.remove('key_type_active');
        break;
        case 190:
            document.querySelector('.dotbtn').classList.remove('key_type_active');
        break;
        case 191:
            document.querySelector('.quest').classList.remove('key_type_active');
        break;
        case 32:
            document.querySelector('.space').classList.remove('key_type_active');
        break;
        case 186:
            document.querySelector('.doubledot').classList.remove('key_type_active');
        break;
        case 222:
            document.querySelector('.updot').classList.remove('key_type_active');
        break;
        case 27:
            document.querySelector('.esc').classList.remove('key_type_active');
        break;
        case 49:
            document.querySelector('.onebtn').classList.remove('key_type_active');
        break;
        case 50:
            document.querySelector('.twobtn').classList.remove('key_type_active');
        break;
        case 51:
            document.querySelector('.threebtn').classList.remove('key_type_active');
        break;
        case 52:
            document.querySelector('.fourbtn').classList.remove('key_type_active');
        break;
        case 53:
            document.querySelector('.fivebtn').classList.remove('key_type_active');
        break;
        case 54:
            document.querySelector('.sixbtn').classList.remove('key_type_active');
        break;
        case 55:
            document.querySelector('.sevenbtn').classList.remove('key_type_active');
        break;
        case 56:
            document.querySelector('.eightbtn').classList.remove('key_type_active');
        break;
        case 57:
            document.querySelector('.ninebtn').classList.remove('key_type_active');
        break;
        case 48:
            document.querySelector('.zerobtn').classList.remove('key_type_active');
        break;
        case 219:
            document.querySelector('.backbtn').classList.remove('key_type_active');
        break;
        case 221:
            document.querySelector('.backotherbtn').classList.remove('key_type_active');
        break;
        case 220:
            document.querySelector('.backanotherbtn').classList.remove('key_type_active');
        break;
        case 187:
            document.querySelector('.ravnobtn').classList.remove('key_type_active');
        break;
        default:
            let key = `${e.key}btn`;
            let keyLow = key.toLowerCase();
            document.querySelector(`.${keyLow}`).classList.remove('key_type_active');
        break;
    }
}

//keydown functionality
document.addEventListener("keydown", function (e) {
    handleKeyDown(e);
});

function handleKeyDown(e) {
    switch (e.keyCode) {
        case 188:
            document.querySelector('.ldotbtn').classList.add('key_type_active');
        break;
        case 190:
            document.querySelector('.dotbtn').classList.add('key_type_active');
        break;
        case 191:
            document.querySelector('.quest').classList.add('key_type_active');
        break;
        case 32:
            document.querySelector('.space').classList.add('key_type_active');
        break;
        case 186:
            document.querySelector('.doubledot').classList.add('key_type_active');
        break;
        case 222:
            document.querySelector('.updot').classList.add('key_type_active');
        break;
        case 27:
            document.querySelector('.esc').classList.add('key_type_active');
        break;
        case 49:
            document.querySelector('.onebtn').classList.add('key_type_active');
        break;
        case 50:
            document.querySelector('.twobtn').classList.add('key_type_active');
        break;
        case 51:
            document.querySelector('.threebtn').classList.add('key_type_active');
        break;
        case 52:
            document.querySelector('.fourbtn').classList.add('key_type_active');
        break;
        case 53:
            document.querySelector('.fivebtn').classList.add('key_type_active');
        break;
        case 54:
            document.querySelector('.sixbtn').classList.add('key_type_active');
        break;
        case 55:
            document.querySelector('.sevenbtn').classList.add('key_type_active');
        break;
        case 56:
            document.querySelector('.eightbtn').classList.add('key_type_active');
        break;
        case 57:
            document.querySelector('.ninebtn').classList.add('key_type_active');
        break;
        case 48:
            document.querySelector('.zerobtn').classList.add('key_type_active');
        break;
        case 219:
            document.querySelector('.backbtn').classList.add('key_type_active');
        break;
        case 221:
            document.querySelector('.backotherbtn').classList.add('key_type_active');
        break;
        case 220:
            document.querySelector('.backanotherbtn').classList.add('key_type_active');
        break;
        case 187:
            document.querySelector('.ravnobtn').classList.add('key_type_active');
        break;
        default:
            let key = `${e.key}btn`;
            let keyLow = key.toLowerCase();
            document.querySelector(`.${keyLow}`).classList.add('key_type_active');
        break;
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
    theme = 'dark';
  } else {
    body.setAttribute('style', 'background: #1B1B1EFF');
    offBackgroudGradient.textContent = 'theme: dark';
    buttons.forEach((button) => {
      button.setAttribute('style', 'background: #111012FF; color: white;');
    });
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
const placeHolderText = `${randomText}`;

const text = placeHolderText.split(' ');
const templateForEachWord = document.querySelector('#words').content;
const templateSpan = templateForEachWord.querySelector('.word-place');
const placeHolder = gameTemplate.querySelector('.game__placeholder');
const gameText = gameTemplate.querySelector('.game__text');

//using cycle to add a number of word to classlist
for (let i = 0; i < text.length; i++) { 
    const newSpan = templateSpan.cloneNode(true);
    newSpan.classList.add(`wordplace${i}`);
    newSpan.textContent = `${text[i]} `;
    placeHolder.append(newSpan);
}

const inputText = gameTemplate.querySelector('.game__text');

/* inputText.addEventListener('input', function(event) {
    checkTextAccordance(event);
}); */

/* const everySymbolInText = placeHolderText.split('');
function checkTextAccordance(event) {
    let inputLength = inputText.value.length;
    let currentInputLength = inputLength - 1;
    let inputSymbol = event.data;
    if (inputSymbol == everySymbolInText[currentInputLength]) {
        inputText.classList.remove('game__text_type_incorrect');
        inputText.classList.add('game__text_type_correct');
    } else if (inputSymbol != everySymbolInText[currentInputLength]) {
        inputText.classList.remove('game__text_type_correct');
        inputText.classList.add('game__text_type_incorrect');
    }
} */



let counterOfWords = -1;
let counterOfCorrectWords = 0;
const configForFindWord = `.wordplace`;
gameText.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        const inputTextArray = inputText.value.split(' ');
        counterOfWords++;
        const currentWord = inputTextArray[inputTextArray.length - 1];
        const correctWordClass = placeHolder.querySelector(`${configForFindWord}${counterOfWords}`);
        const correctWord = correctWordClass.textContent.trim();
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
});


//start game functionality
const startGameButton = document.querySelector('.start-game-button');
const buttonContainer = document.querySelector('.button-container');
const content = document.querySelector('.content');
const keyboardSuggestTemplate = document.querySelector('#keyboard-suggest').content;
const keyboardSuggestContent = keyboardSuggestTemplate.querySelector('.keyboard__suggest');
const timerTemplate = document.querySelector('#timer-template').content;


startGameButton.addEventListener('click', () => {
    startGameButton.setAttribute('style', 'animation: scaling 0.4s ease; animation-delay: 0s;');
    addGame();
    document.addEventListener('keydown', addCountDown);
});


function addGame() {
    setTimeout(() => {
        startGameButton.remove();
        buttonContainer.remove();
        content.prepend(gameTemplate);
        content.append(timerTemplate);
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
const gameoverTemplate = document.querySelector('#gameover').content;
const gameoverText = gameoverTemplate.querySelector('.gameover__result');
let time = 58;
const countDownText = timerTemplate.querySelector('.timer__time-counter');
const timerContent = timerTemplate.querySelector('.timer');
const game = gameTemplate.querySelector('.game');
const gameRestartButton = gameTemplate.querySelector('.gameover__button');

function addCountDown(e) {
    countDownText.textContent = `0:59`;
    setInterval(updateCountDown, 1000);
    document.removeEventListener('keydown', addCountDown);
}

function updateCountDown(e) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    countDownText.textContent = `${minutes}:${seconds}`;
    time--;
}

function checkGameOver() {
    gameText.addEventListener('input', checkInputForGameOver);
}

function checkInputForGameOver() {
    if (countDownText.textContent == '0:00' || placeHolderText.length <= gameText.value.length - 1) {
        timerContent.setAttribute('style', 'animation: scaling 0.4s ease');
        game.setAttribute('style', 'animation: scaling 0.4s ease');
        gameoverText.textContent = `Your result: ${counterOfCorrectWords} words / per min`;
        setTimeout(() => {
            timerContent.remove();
            game.remove();
            content.prepend(gameoverTemplate);
        }, 400);
    }
}

checkGameOver();