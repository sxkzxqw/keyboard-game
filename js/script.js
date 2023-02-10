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

function handleOffBackground() {
        body.setAttribute('style', 'animation: none; background: #EFDECD;');
        offBackgroudGradient.textContent = 'on background gradient';
        buttons.forEach((button) => {
            button.setAttribute('style', 'background: black; color: white;');
        });
        offBackgroudGradient.removeEventListener('click', handleOffBackground);
        offBackgroudGradient.addEventListener('click', handleOnBackground);
}

function handleOnBackground() {
        body.setAttribute('style', 'animation: gradient 10s ease infinite; background: linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045);');
        offBackgroudGradient.textContent = 'off background gradient';
        buttons.forEach((button) => {
            button.setAttribute('style', 'background: white; color: black;');
        });
        offBackgroudGradient.removeEventListener('click', handleOnBackground);
        offBackgroudGradient.addEventListener('click', handleOffBackground);
}

handleOnBackground();


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


//removing empty strokes in array
/* const arrayOfPlaceHolderWords = word.filter(function (word) { 
    return word.length > 0;
}); */

const placeHolderText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo veritatis, sapiente doloribus placeat reprehenderit 
quasi voluptas ipsam quos perferendis laudantium expedita quidem minima cum temporibus consequuntur praesentium tenetur quas?
Consequatur quae deleniti voluptate dolore consectetur! Voluptatum vel accusamus aut. Iure fugit nisi reiciendis quos repudiandae 
exercitationem adipisci sed, tenetur deserunt, rem voluptas odio, expedita laborum sint culpa ex cumque?
At illo quibusdam ratione eos blanditiis quisquam eius doloribus molestiae ipsam, ea temporibus earum laudantium? Magnam similique 
reprehenderit placeat, provident quidem aperiam impedit illum deserunt enim voluptate laborum, id rem.
Dolor perspiciatis itaque optio? Enim animi consequatur, totam repellendus recusandae, provident accusamus accusantium placeat, 
sequi modi optio voluptas repudiandae! Modi animi cum sint saepe ea, consequuntur repellat pariatur ducimus tempore.
Nam, illo, eum accusamus inventore temporibus voluptate obcaecati, impedit doloremque ipsam et dolorum illum doloribus fuga. 
Ab autem at nostrum, repudiandae, aspernatur sed ullam, nulla optio facilis reiciendis obcaecati iusto.`;

const text = placeHolderText.split(' ');
const templateForEachWord = document.querySelector('#words').content;
const templateSpan = templateForEachWord.querySelector('.word-place');
const placeHolder = document.querySelector('.game__placeholder');

function addWordToSpan(word) {
        const newSpan = templateSpan.cloneNode(true);
        newSpan.textContent = `${word} `;
        placeHolder.append(newSpan);
}

text.forEach(function(text) {
    addWordToSpan(text);
});

const inputText = document.querySelector('.game__text');

inputText.addEventListener('input', function(event) {
    checkTextAccordance(event);
});

const everySymbolInText = placeHolderText.split('');
function checkTextAccordance(event) {
    let inputLength = inputText.value.length;
    let currentInputLength = inputLength - 1;
    let inputSymbol = event.data;
    console.log(inputSymbol == everySymbolInText[currentInputLength]);
    if (inputSymbol == everySymbolInText[currentInputLength]) {
        inputText.classList.remove('game__text_type_incorrect');
        inputText.classList.add('game__text_type_correct');
    } else if (inputSymbol != everySymbolInText[currentInputLength]) {
        inputText.classList.remove('game__text_type_correct');
        inputText.classList.add('game__text_type_incorrect');
    }
}