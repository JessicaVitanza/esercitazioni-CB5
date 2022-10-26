// Creare un array che contenga, ordine: il vostro nome, cognome, età, titolo di studio

let arrayOfData = ["Jessica", "Vitanza", 27, "diploma scientifico"];
console.log(arrayOfData);

// Rimuovere l'età

arrayOfData.splice(2, 1);
console.log(arrayOfData);

// Inserire all'indice realativo all'età la data di nascita

arrayOfData.splice(2, 0, "28/07/1995");
console.log(arrayOfData);

// Modificare il nome e il cognome rendendo la stringa tutta in maiuscolo

arrayOfData[0] = arrayOfData[0].toUpperCase();
arrayOfData[1] = arrayOfData[1].toUpperCase();
console.log(arrayOfData);

// Creare un triangolo rettangolo capovolto di 7 righe di '#' che abbia la seguente struttura:

// #######
// ######
// #####
// ####
// ###
// ##
// #

let n = 7;
let str = "#";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    str += "#";
  }
  str += "\n";
}
console.log(str);



