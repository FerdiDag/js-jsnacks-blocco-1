//JSnack 6: Stampa le potenze di 2 fino a 1000

var numero = 2;
var risultato = 0;
var limite = 1000;
for (var i = 0; risultato <= limite; i++) {
    var potenza = i;
    risultato = Math.pow(numero, potenza);
    if (risultato <= limite) {
        console.log(risultato);
    }
}
