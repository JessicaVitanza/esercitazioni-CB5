"use strict"

function somma (a, b) {
    return a + b;
}

function moltiplica (a, b) {
    return a * b;
}

function sottrai (a, b) {
    return a - b;
}

function dividi (a, b) {
    return a / b;
}

const myArgs = process.argv.slice(2);
const operator = myArgs[0] 
const num1 = parseFloat(myArgs[1]);
const num2 = parseFloat(myArgs[2]);


switch (operator) {
    case 'somma':
        let _somma = somma(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _somma);
        break;

    case 'sottrai':
        let _sottrai = sottrai(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _sottrai);
        break;

    case 'dividi':
        let _dividi = dividi(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _dividi);
        break;

    case 'moltiplica':
        let _moltiplica = moltiplica(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _moltiplica);
        break;
    default:
            console.log('Sorry, that is not something I know how to do.');
}
