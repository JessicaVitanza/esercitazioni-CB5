// Funzioni operazioni
function somma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  
  function sottrazione(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }
  
  function divisione(num1, num2){
    return parseInt(num1) / parseInt(num2);
  }
  
  function moltiplicazione(num1, num2){
    return parseInt(num1) * parseInt(num2);
  }

  //export { somma, sottrazione, divisione, moltiplicazione }

  module.exports.somma = somma;
  module.exports.sottrazione = sottrazione;
  module.exports.moltiplicazione = moltiplicazione;
  module.exports.divisione = divisione;

