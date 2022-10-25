let chooseFirstNumber = prompt("Scegli un numero");
let chooseFirstNumberParsed = parseInt(chooseFirstNumber);
let chooseSecondNumber = prompt("Hai scritto: " + chooseFirstNumber + " Adesso scegli un secondo numero");
let chooseSecondNumberParsed = parseInt(chooseSecondNumber);
let chooseOperationNumber = prompt("Ora che hai scelto" + chooseFirstNumber + " e " + chooseSecondNumber + " scegli quale operazione vuoi svolgere tra: addizione, sottrazione, moltiplicazione, divisione, resto");

let addition = chooseFirstNumberParsed + chooseSecondNumberParsed;
let subtraction = chooseFirstNumberParsed - chooseSecondNumberParsed;
let multiplication = chooseFirstNumberParsed * chooseSecondNumberParsed;
let division = chooseFirstNumberParsed / chooseSecondNumberParsed;
let rest = chooseFirstNumberParsed % chooseSecondNumberParsed;

if (chooseOperationNumber === "addizione") {
  alert("Hai scelto l'addizione, il risultato è: " + addition);
  console.log(addition);
}else if (chooseOperationNumber === "sottrazione") {
  alert("Hai scelto la sottrazione, il risultato è: " + subtraction);
  console.log(subtraction);
} else if (chooseOperationNumber === "moltiplicazione") {
  alert("Hai scelto la moltiplicazione, il risuktato è: " + multiplication);
  console.log(multiplication);
} else if (chooseOperationNumber === "divisione") {
  alert("Hai scelto la divisione, il risultato è: " + division);
  console.log(division);
} else if (chooseOperationNumber === "resto") {
  alert("Hai scelto il resto, il risultato è: " + rest);
    console.log(rest);
} else {
  alert("L'operazione scelta non è disponibile");
  console.log("Errore");
}