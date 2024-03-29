    //% Costrutti condizionali

    //, Sintassi inline

    // if (1 + 1 == 2) console.log("É vero");
    // if (true) console.log("É vero");
    // É vero

    //, Sintassi tradizionale

    /* let number = 0;
    if (number > 0) {
        console.log("Positivo: Maggiore di zero");
    } else if (number == 0) {
        console.log("Zero");
    } else {
        console.log("Negativo: Minore di zero");
    } // Zero */

    /* let semaforo = "rosa";
    if (semaforo == "rosso") {
        console.log("Fermarsi");
    } else if (semaforo == "giallo") {
        console.log("Rallentare e fermarsi");
    } else if (semaforo == "verde"){
        console.log("Passare");
    } else {
        console.log("Valore inserito non valido");
    } // Valore inserito non valido */



    //, Ternary Operator

    // (5 + 5 == 10) ? console.log("É vero") : console.log("É falso");
    // É vero


    /* const result = !0 ? "positivo" : "negativo";
    console.log("Il risultato è ", result);
    // Il risultato è positivo */

    /* const result = 5 < 0 ? "positivo" : 0 == 0 ? "zero" : "negativo";
    console.log(result); // zero */


    //, Switch Case

    /* let giorno = 3;
    let nomeGiorno; */

    /* switch (giorno) {
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
    console.log(nomeGiorno); // "Mercoledì" */

    /* switch (giorno = 6) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        nomeGiorno = "Giorno lavorativo";
        break;
    case 6:
    case 7:
        nomeGiorno = "Fine settimana";
        break;
    default:
        nomeGiorno = "Giorno non valido";
    }
    console.log(nomeGiorno); // "Fine settimana" */



    //% Costrutti Ciclici

    //, for

    /* for (let i = 1; i <= 5; i++) {
    console.log(`Istruzione numero ${i}`);
    }
    */

    //, break

    /* for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        break;
    }
    console.log(`Istruzione numero ${i}`);
    } */

    //, continue
    /*
    for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(`Istruzione numero ${i}`);
    }
    */

    //, while
    /* let number = 1;
    while(number <=5){
    console.log(`Istruzione numero ${number}`);
    number++;
    } */

    //, do while
    /* let number = 30000000000;
    do {
    console.log(`Istruzione numero ${number}`);
    number++;
    } while (number <=5)
    */

    //, forEach()

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

    //, for in

    /*
    let array = ["Marco", "Paolo", "Sara", "Ester"];
    for (let key in array) {
    console.log(`Nome: ${array[key]}, posizione array: ${key}`);
    }
    */

    //, for of
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


    //% Condizioni composte
    //(true && true) && (false || false)
    //true && false
    //false
