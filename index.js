//$ Costrutti condizionali

//% Sintassi inline
//if (1 + 1 == 2) console.log("É vero");
// Output: É vero

//% Sintassi tradizionale

/* let number = 0;
if (number > 0 ) {
    console.log("Numero positivo");
} else if (number == 0) {
    console.log("Zero");
} else {
    console.log("Numero negativo");
} // Output: Zero */

//% Ternary Operator

/* const number = -2;
const result = (number >= 0) ? "Positive" : "Negative";
console.log(result); //Negative */

/* const number = -2;
const result = number > 0 ? "Positive" : number == 0 ? "Zero" : "Negative";
console.log(result); //Negative */

//% Switch Case

let giorno = 3;
let nomeGiorno;

switch (giorno) {
  case 1:
    nomeGiorno = "Lunedì";
    break;
  case 2:
    nomeGiorno = "Martedì";
    break;
  case 3:
    nomeGiorno = "Mercoledì";
    break;
  case 4:
    nomeGiorno = "Giovedì";
    break;
  case 5:
    nomeGiorno = "Venerdì";
    break;
  case 6:
    nomeGiorno = "Sabato";
    break;
  case 7:
    nomeGiorno = "Domenica";
    break;
  default:
    nomeGiorno = "Giorno non valido";
}

console.log(nomeGiorno); // Output: "Mercoledì"