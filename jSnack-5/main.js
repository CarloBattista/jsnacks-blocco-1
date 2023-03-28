let array = [];

for (let i = 1; i <= 6; i++) {
    const numero = parseInt(prompt("Inserisci un numero:"));
    if (numero % 2 !== 0) {
        array.push(numero);
    }
}

console.log("I numeri dispari inseriti sono: " + array);

console.log(array)