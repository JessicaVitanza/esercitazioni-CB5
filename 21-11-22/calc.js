"use strict"

function addizione (a, b) {
    return a + b;
}

function moltiplicazione (a, b) {
    return a * b;
}

function sottrazione (a, b) {
    return a - b;
}

function divisione (a, b) {
    return a / b;
}

const myArgs = process.argv.slice(2);
const operator = myArgs[0] 
const num1 = parseFloat(myArgs[1]);
const num2 = parseFloat(myArgs[2]);


switch (operator) {
    case 'addizione':
        let _addizione = addizione(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _addizione);
        break;

    case 'sottrazione':
        let _sottrazione = sottrazione(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _sottrazione);
        break;

    case 'divisione':
        let _divisione = divisione(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _divisione);
        break;

    case 'moltiplicazione':
        let _moltiplica = moltiplicazione(num1, num2);
        console.log("Il risultato di " + operator + " è : " + _moltiplica);
        break;
    default:
            console.log('Sorry, that is not something I know how to do.');
}
