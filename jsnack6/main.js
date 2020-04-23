//JSnack 6: Stampa le potenze di 2 fino a 1000
for (var i = 0; i <= 1000; i++) {
    var potenza = i;
    var numero = 2;

    var risultato = Math.pow(numero, potenza);
 if (risultato < 1000) {
     console.log(risultato);
 }
}
