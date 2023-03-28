/*--------------------SNACK 1----------------------*/


// chiedi all'utente di inserire il primo numero
// let numero1 = prompt("Inserisci il primo numero:");

// chiedi all'utente di inserire il secondo numero
// let numero2 = prompt("Inserisci il secondo numero:");

// converti i valori inseriti in numeri
// numero1 = parseFloat(numero1);
// numero2 = parseFloat(numero2);

// controlla quale numero è maggiore
// if (numero1 > numero2) {
//     console.log("Il numero maggiore è: " + numero1);
//   } else if (numero2 > numero1) {
//     console.log("Il numero maggiore è: " + numero2);
//   } else {
//     console.log("I numeri sono uguali.");
//   }


/*--------------------SNACK 2----------------------*/
  
// chiedi all'utente di inserire il primo numero
// let parola1 = prompt("Inserisci la prima parola:");

// chiedi all'utente di inserire il secondo numero
// let parola2 = prompt("Inserisci la seconda parola:");



// if (parola1.length < parola2.length) {
//     console.log(`La prima parola ${parola1} è più corta della seconda: ${parola2}`)
// } else if (parola1.length > parola2.length){
//      console.log(`La seconda parola ${parola2} è più corta della prima:  ${parola1}`)
// } else {
//     console.log(`le parole sono lunghe uguali`)
// }


/*----------------SNACK 3---------------------------*/

// let somma = 0;


// for ( let i = 0; i < 10; i++ ) {

//     const numero = parseFloat(prompt('scrivi il numero'));

//     somma += numero

// }

// console.log(`la somma dei numeri è: ${somma}`)


/*--------------------SNACK 4-----------------------*/


let array = [];

for ( let i = 0; i < 6; i++) {

    let numero = parseFloat(prompt("inserisci il numero"));

    if (numero % 2 != 0 ) {
        array.push(numero);
    } else {
        console.log(`numero è pari`);
    }
}

console.log(array);

