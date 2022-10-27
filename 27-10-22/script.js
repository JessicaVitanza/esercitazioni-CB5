// calcolatrice con il PROMPT, così da permettere all'utente di scegliere sia i numeri che l'operazione

  let firstNumber = prompt("Scegli un numero");
  let firstNumberParsed = parseInt(firstNumber);
  let secondNumber = prompt("Hai scritto: " + firstNumber + " Adesso scegli un secondo numero");
  let secondNumberParsed = parseInt(secondNumber);
  let operationNumber = prompt("Ora che hai scelto " + firstNumberParsed + " e " + secondNumberParsed + " scegli quale operazione vuoi svolgere tra: + , - , * , / , %");

function calculator(firstNumberParsed, secondNumberParsed) {
      if (operationNumber === "+") {
        return firstNumberParsed + secondNumberParsed;
      } else if (operationNumber === "-") {
        return firstNumberParsed - secondNumberParsed;
      } else if (operationNumber === "*") {
        return firstNumberParsed * secondNumberParsed;
      } else if (operationNumber === "/") {
        return firstNumberParsed / secondNumberParsed;
      } else if (operationNumber === "%") {
        return firstNumberParsed % secondNumberParsed;
      } else {
        return "Operazione non disponibile";
      }
}
  console.log("il risultato è: " + calculator(firstNumberParsed, secondNumberParsed));
  alert("il risultato è: " + calculator(firstNumberParsed, secondNumberParsed));



  // ------------ OBJECT ------------

  const plant = {
    firstName: "Monstera", 
    lastName: " Deliciosa",
    family: "Araceae",
    minTemperature: 18,
    maxTemperature: 30,
    easyPlant: true,
    commonProblems: ["Leaves turning brown", "Wilting plant", "Yellowing leaves or black stems"],
    similar: {
      first: "Monstera Adansonii",
      second: "Monstera Dubia",
      third: "Monstera Minima",
    },
    fullName: function() {
        return this.firstName + this.lastName;
      }
  };


  console.log("Object:", plant);
  console.log("Full Name:", plant.fullName());
  console.log("Family:", plant.family);
  console.log("Min temperature:", plant.minTemperature, "°C");
  console.log("Max temperature:", plant.maxTemperature, "°C");
  console.log("It's an easy plant:", plant.easyPlant);
  console.log("All common problems:", plant.commonProblems);
  console.log("One common problem:", plant.commonProblems[2]);
  console.log("All similar plants:", plant.similar);
  console.log("One similar plant:", plant.similar.third);
  console.log("Keys:", Object.keys(plant));
  console.log("Values:", Object.values(plant));
