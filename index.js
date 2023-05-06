//$ Costrutti condizionali

//! Block Scope
/*
let sum = null, a = 5, b = 10;

if(a > 3  &&  b != 12) {
  sum = a + b; //15
}
console.log(sum);
 */
/* let sum = null, a = 5, b = 10;
let string = "Sono visibile perché sono nel contesto globale"

//console.log(b);
if(a > 3 && b != 12) {
    sum = a + b;
  //console.log(string);
  let string = "Non sono visibile fuori dal blocco"
  //console.log(string);
}
//console.log(string);
console.log(sum); */


//% Sintassi inline

//if (1 + 1 == 2) console.log("É vero");
// Output: É vero

//% Sintassi tradizionale

/* let number = 0;
if (number > 0) {
    console.log("Numero positivo");
} else if (number == 0) {
    console.log("Zero");
} else {
    console.log("Numero negativo");
} // Output: Zero */

//% Ternary Operator

//const number = -2;
/* const result = (number >= 0) ? "Positive" : "Negative";
console.log(result); //Negative */

//const number = -2;
/* const result = (number > 0) ? "Positive" : (number == 0) ? "Zero" : "Negative";
console.log(result); */ //Negative

//% Switch Case

/* let giorno = 3;
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
console.log(nomeGiorno); // Output: "Mercoledì" */



//$ Costrutti Ciclici

//% Ciclo for

/* for (let i = 1; i <= 5; i++) {
  console.log(`Istruzione numero ${i}`);
}
 */

//% break

/* for (let i = 1; i <= 5; i++) {
  if(i === 3) {
    break;
  }
  console.log(`Istruzione numero ${i}`);
} */

//% continue
/*
for (let i = 1; i <= 5; i++) {
  if(i === 3) {
    continue;
  }
  console.log(`Istruzione numero ${i}`);
}
 */

//% Ciclo while
/* let number = 1;
while(number <=5){
  console.log(`Istruzione numero ${number}`);
  number++;
} */

//% Ciclo do while
/* let number = 30000000000;
do {
  console.log(`Istruzione numero ${number}`);
  number++;
} while (number <=5)
*/

//% Ciclo foreach

//* con un parametro
//let array = ["Marco", "Paolo", "Sara", "Ester"];
/* array.forEach(function(element) {
  console.log(`Ciao ${element}`);
}); */

//* con due parametri
/* array.forEach(function(element, pippo) {
  console.log(`Ciao ${element} con id: ${pippo+10}`)
});
 */
//* con arrow function

//let array = [1,2,3,4,5];
/* array.forEach((element, index) => {
  console.log(`Ciao ${element} con id: ${index+1}`)
});
*/

//% Ciclo for in
//! Sconsigliato

/* let array = ["Marco", "Paolo", "Sara", "Ester"];
//let array = [0,1,2,3,4];
for (nome in array) {
  console.log(typeof nome);
  console.log(`Nome: ${array[nome]}, posizione array: ${nome}`);
} */

//% Ciclo for of
/* let array = ["Marco", "Paolo", "Sara", "Ester"];
//let array = [1,2,3,4];
for (let pippo of array) {
  console.log(`Posizione elemento: ${pippo}`);
} */

/* let a = 10, b = "ciao";
const result = ((a >= 10 && a < 30) &&
(b == null || b == "saluta")) ?
"tutto vero" : "tutto falso";

console.log(result); //tutto falso */

//(true && true) && (false || false)
//true && false
//false


