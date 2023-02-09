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



const allKeys = document.querySelectorAll('.key');
const keyboardContainer = document.querySelector('.keyboard-container');
const themeButton = document.querySelector('.theme-button');
const offKeyboardBacklight = document.querySelector('.offkeyboardbacklight');

offKeyboardBacklight.addEventListener('click', () => {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'animation: none; color: black; text-shadow: none;');
        key.classList.add('key_type_no-backlight');
    });
    offKeyboardBacklight.textContent = 'on keyboard backlight';
});

function handleOffBacklight() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'animation: none; color: black;');
        key.classList.add('key_type_no-backlight');
        if (themeButton.textContent == 'switch keyboard theme to light') {
            key.setAttribute('style', 'animation: none; color: white; background: #0C0C0CFF;');
            key.classList.add('key_type_no-backlight-dark');
        }
    });
    offKeyboardBacklight.textContent = 'on keyboard backlight';
    offKeyboardBacklight.removeEventListener('click', handleOffBacklight);
    offKeyboardBacklight.addEventListener('click', handleOnBacklight);
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
    offKeyboardBacklight.textContent = 'off keyboard backlight';
    offKeyboardBacklight.removeEventListener('click', handleOnBacklight);
    offKeyboardBacklight.addEventListener('click', handleOffBacklight);
}

handleOnBacklight();

function handleSwitchThemeDark() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'background: #0C0C0CFF;');
    });
    keyboardContainer.setAttribute('style', 'background: #151515FF');
    themeButton.textContent = 'switch keyboard theme to light';
    themeButton.removeEventListener('click', handleSwitchThemeDark);
    themeButton.addEventListener('click', handleSwitchThemeLight);
}

function handleSwitchThemeLight() {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'background: white;');
    });
    keyboardContainer.setAttribute('style', 'background: #ccc;');
    themeButton.textContent = 'switch keyboard theme to dark';
    themeButton.removeEventListener('click', handleSwitchThemeLight);
    themeButton.addEventListener('click', handleSwitchThemeDark);
}

handleSwitchThemeLight();