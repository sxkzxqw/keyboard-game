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
            const thisButton = document.querySelector(`.${keyLow}`);
            thisButton.querySelector('.key-text').classList.add('key-text_type_active');
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

const allKeys = document.querySelectorAll('.key');

const offKeyboardBacklight = document.querySelector('.offkeyboardbacklight');
offKeyboardBacklight.addEventListener('click', () => {
    allKeys.forEach((key) => {
        key.setAttribute('style', 'animation: none; color: black; text-shadow: none;');
        key.classList.add('key_type_no-backlight');
    });
    offKeyboardBacklight.textContent = 'on keyboard backlight';
});

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.root');
const offBackgroudGradient = document.querySelector('.offbackground');
offBackgroudGradient.addEventListener('click', () => {
    body.setAttribute('style', 'animation: none; background: white;');
    offBackgroudGradient.textContent = 'on background gradient';
    buttons.forEach((button) => {
        button.setAttribute('style', 'background: black; color: white;');
    })
});