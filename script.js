/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


// Chiedi all'utente il numero di chilometri da percorrere
let km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// Chiedi all'utente l'età del passeggero
let eta = parseInt(prompt("Qual è la tua età?"));

// Prezzo base per chilometro
const prezzoPerKm = 0.21;

// Calcola il prezzo totale senza sconti
let prezzoTotale = km * prezzoPerKm;

// Applica gli sconti in base all'età
if (eta < 18) {
    prezzoTotale *= 0.8; // Sconto del 20% per i minorenni
} else if (eta >= 65) {
    prezzoTotale *= 0.6; // Sconto del 40% per gli over 65
}

// Arrotonda il prezzo a due decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Stampa il prezzo finale
console.log(`Il prezzo totale del viaggio è: €${prezzoTotale}`);

