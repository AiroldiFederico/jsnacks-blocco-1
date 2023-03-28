

// chiedi all'utente di inserire il primo numero
let parola1 = prompt("Inserisci la prima parola:");

// chiedi all'utente di inserire il secondo numero
let parola2 = prompt("Inserisci la seconda parola:");



if (parola1.length < parola2.length) {
    console.log(`La prima parola ${parola1} è più corta della seconda: ${parola2}`)
} else if (parola1.length > parola2.length){
     console.log(`La seconda parola ${parola2} è più corta della prima:  ${parola1}`)
}