/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

//Primo bonus: Crea un container nel DOM , aggiungendo attraverso la funzione append() un elemento html con il numero o la stringa corretta da mostrare.

/*const userContainer = document.querySelector(".container"); //bonus 1
userSpan = document.createElement("span");
userContainer.append(userSpan);

//scrivo un programma che stampi i unemri da 1 a 100 in cosole.
for (let i = 1; i <= 100; i++) {

    //I multipli di 3 e di 5 avranno la scritta FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        userSpan.append( "FizzBuzz");
        console.log ("FizzBuzz");
        
    //I multipli di 3 avranno la scritta Fizz
    } else if (i % 3 === 0) {
        userSpan.append( "Fizz");
        console.log ("Fizz");

    //I multipli di 5 avranno la scritta Buzz
    } else if (i % 5 === 0) {
        userSpan.append( "Buzz");
        console.log ("Buzz");

    //tutti gli altri
    } else {
        userSpan.append( i);
        console.log (i);
    }

    userSpan = document.querySelector("span");
    userBr = document.createElement("br");
    userSpan.append(userBr);
}
*/

/*Secondo bonus: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

const userContainer = document.querySelector(".container");

//scrivo un programma che stampi i unemri da 1 a 100 in cosole.
for (let i = 1; i <= 100; i++) {

    //I multipli di 3 e di 5 avranno la scritta FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        square = `<div class="square red">FizzBuzz</div>`;
        console.log ("FizzBuzz");
        
    //I multipli di 3 avranno la scritta Fizz
    } else if (i % 3 === 0) {
        square = `<div class="square green">Fizz</div>`;
        console.log ("Fizz");

    //I multipli di 5 avranno la scritta Buzz
    } else if (i % 5 === 0) {
        square = `<div class="square yellow">Buzz</div>`;
        console.log ("Buzz");

    //tutti gli altri
    } else {
        square = `<div class="square">${i}</div>`;
        console.log (i);
    }

    userContainer.innerHTML += square;
}