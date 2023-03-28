/*

L'utente inserisce due numeri in successione, con due prompt. 
Il software stampa il maggiore.

*/

const primoNumero = parseInt(prompt("Inserisci il primo numero"));

console.log(primoNumero)

const secondoNumero = parseInt(prompt("Inserisci il secondo numero"));

console.log(secondoNumero)

if (primoNumero > secondoNumero) {
    console.log("Il primo numero è maggiore del secondo");
} else if (secondoNumero > primoNumero) {
    console.log("Il secondo numero è maggiore del primo");
} else {
    console.log("I numeri sono uguali");
}