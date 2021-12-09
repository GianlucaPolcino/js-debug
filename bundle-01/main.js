/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// Questo è un ciclo for incorretto, infatti si dichiara l'index uguale a zero e successivamente maggiore di 5, non facendo mai iniziare il ciclo.

for (let i = 0; i > 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// Questa è una funzione con degli errori: il parametro num della funzione a riga 22 non contiene una uguaglianza ma una dichiarazione incorretta, senza let o const.

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// Questa è un'altra funzione contenente un ciclo for, in questo caso è presente una virgola invece del punto e virgola

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1) il punto e virgola successivo l'incremento dell'indice; 
// 2) la dichiarazione al posto dell'uguaglianza a riga 63; 
// 3) il ciclo inoltre non comprende l'interezza della lunghezza dell'array;
// 4) il push all'index evenNumbers è incorretto, in quanto si popola con i numeri corrispondenti all'indice e non l'indice stesso;
// 5) il return dovrebbe essere fuori dal ciclo for;
// 6) dovrebbe esserci almeno un console log per restituire i numeri pari;
// 7) c'è un punto e virgola dopo il ciclo for;


function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;

}


console.log(displayEvenNumbers()); 
