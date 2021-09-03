function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply (a, b) {
    return a*b;
}
function devide(a, b) {
    return a/b;
}
function operate(a, b) { //WORKS IF OPERATOR IS A STRING!!!!
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break
        case '/':
            return devide(a,b);
            break;
    }
}

let dislpayValue = document.getElementById('display');
dislpayValue.textContent = '';

let numberButtons = document.querySelectorAll('.number-button');

for (let i =0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', e => {
        dislpayValue.textContent += numberButtons[i].textContent;
    })
}
let cleaeButton = document.getElementById('clear');
cleaeButton.addEventListener('click', e => {
    dislpayValue.textContent = '';
    operator = '';
    firstValue = null;
    secondValue = null;
});

let plusButton = document.getElementById('plus');
let subtButton = document.getElementById('subt');
let multiButton = document.getElementById('multi');
let divideButton = document.getElementById('divide');
let equalsButton = document.getElementById('equals');

let firstValue = null;
let secondValue = null;
let operator = '';

plusButton.addEventListener('click', e => {
    if (operator!='') {
        let splitedDisplay = dislpayValue.textContent.split(` ${operator}`)
        secondValue = parseInt(splitedDisplay[1]);
        dislpayValue.textContent = `${operate(firstValue, secondValue)}`;
    }
    firstValue = parseInt(dislpayValue.textContent);
    operator = '+';
    dislpayValue.textContent += ` ${operator} `;   
})

subtButton.addEventListener('click', e => {
    if (operator!='') {
        let splitedDisplay = dislpayValue.textContent.split(` ${operator}`)
        secondValue = parseInt(splitedDisplay[1]);
        dislpayValue.textContent = `${operate(firstValue, secondValue)}`;
    } 
    firstValue = parseInt(dislpayValue.textContent);
    operator = '-';
    dislpayValue.textContent += ` ${operator} `;
})

multiButton.addEventListener('click', e => {
    if (operator!='') {
        let splitedDisplay = dislpayValue.textContent.split(` ${operator}`)
        secondValue = parseInt(splitedDisplay[1]);
        dislpayValue.textContent = operate(firstValue, secondValue);
    } 
    firstValue = parseInt(dislpayValue.textContent);
    operator = '*';
    dislpayValue.textContent += ` ${operator} `;
})

divideButton.addEventListener('click', e => {
    if (operator!='') {
        let splitedDisplay = dislpayValue.textContent.split(` ${operator}`)
        secondValue = parseInt(splitedDisplay[1]);
        dislpayValue.textContent = operate(firstValue, secondValue);
    }
    firstValue = parseInt(dislpayValue.textContent);
    operator = '/';
    dislpayValue.textContent += ` ${operator} `;    
})

equalsButton.addEventListener('click', e => {
    let splitedDisplay = dislpayValue.textContent.split(` ${operator}`)
    if (!splitedDisplay[1] == '') {
        dislpayValue.textContent -= `${parseInt(splitedDisplay[0])}`;
    } else {
    secondValue = parseInt(splitedDisplay[1]);
    if (Number.isInteger(operate(firstValue, secondValue))) {
    dislpayValue.textContent = operate(firstValue, secondValue);
    } else {
        dislpayValue.textContent = operate(firstValue, secondValue).toFixed(7);
    }
    operator = '';
}
})

