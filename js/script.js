/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

//scrivo un programma che stampi i unemri da 1 a 100 in cosole.

for (let i = 1; i <= 100; i++) {

    //I multipli di 3 e di 5 avranno la scritta FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz")
        
    //I multipli di 3 avranno la scritta Fizz
    } else if (i % 3 === 0) {
        console.log ("Fizz");

    //I multipli di 5 avranno la scritta Buzz
    } else if (i % 5 === 0) {
        console.log ("Buzz");

    //tutti gli altri
    } else {
        console.log (i);
    }
}