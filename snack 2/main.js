let parola1 = prompt("Please enter first word")
let parola2 = prompt("Please enter second word")


let lunghezza1 = parola1.length;
let lunghezza2 = parola2.length;

if (lunghezza1 > lunghezza2) {

    document.write(`${parola2} è più corta di ${parola1}`);

} else if (lunghezza1 < lunghezza2) {

    document.write(`${parola1} è più corta di ${parola2}`);

} else {

    document.write(`${parola1} hanno la stessa lunghezza ${parola2}`);

}