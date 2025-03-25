// Esercizio 1 - Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Definizione di funzione che controlla se la parola è palindroma
function checkPalindroma(string){
    let check = string.split(``).reverse().join(``);

    // Controllo se la parola inserita è uguale a quella generata.
    if(string === check){
       console.log(`La parola inserita è palindroma`)
    }
    else{
       console.log(`La parola inserita non è palindroma`)
    }
}

// Permetto all'utente di inserire la parola
let word = prompt(`Inserisci la parola`);

// Eseguo la funzione
checkPalindroma(word);




// Esercizio 2 - Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.