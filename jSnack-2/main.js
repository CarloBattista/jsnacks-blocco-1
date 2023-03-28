/*



*/

const primaParola = prompt("Inserisci la prima parola");

console.log(primaParola.length)

const secondoParola = prompt("Inserisci la seconda parola");

console.log(secondoParola.length)

if (primaParola.length > secondoParola.length) {
    console.log("la prima parola è più lunga della seconda")
} else if (secondoParola.length > primaParola.length) {
    console.log("la seconda parola è più lunga della prima")
} else {
    console.log("le parole sono lunghe uguali")
}