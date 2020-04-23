//JSnack 5: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

var number = prompt('Inserisci un numero');

for (var i = 1; i <= number; i++) {

    var result = Math.pow(i, 3);
    console.log(result);
}
