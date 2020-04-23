//JSnack 5: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente


for (var i = 0; i <= 10; i++) {
    var number = prompt('Inserisci un numero');
      console.log(number);
      number = Math.pow(number, 3);
      console.log(number);
}
