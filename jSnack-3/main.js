let somma = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseInt(prompt("Inserisci un numero:"));
  somma += numero;
}

console.log("La somma di tutti i numeri inseriti è: " + somma);