

let array = [];

for ( let i = 0; i < 6; i++) {

    let numero = prompt("inserisci il numero");

    if (numero % 2 === 1 ) {
        array.push(numero);
    } else {
        console.log(`numero è pari`);
    }
}

console.log(array);
