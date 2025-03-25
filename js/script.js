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

// Definizione di funzione che genera un numero random da 1 a 5.
function generateRandomNumber(){
    return Math.floor(Math.random() * 5) + 1
}

// Definizione di funzione per determinare se la somma del numero random e il numero inserito è pari o dispari.
function checkEvenOrOdd(number){
    if(number % 2 === 0){
        return `pari`;
    }

    return `dispari`;
}

// Inserisco il numero
let userNumber = parseInt(prompt(`Inserisco il numero`));

// Genero il numero del pc
let pcNumber = generateRandomNumber();

// Sommo i due numeri
let sum = userNumber + pcNumber;

let checkWinner = checkEvenOrOdd(sum);
console.log(checkWinner);



