// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognomi = ['Bianchi','Neri','Rossi','Verdi','Gialli'];

var utenti = prompt('Inserisci il tuo cognome');

cognomi.push(utenti);

cognomi.sort();
console.log(cognomi);

console.log('Posizione cognome:', cognomi.indexOf(utenti) + 1);