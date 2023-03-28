
let somma = 0

for( let i = 0; i < 10; i++ ){
     
    const numero = parseInt(prompt('dammi un numero'))

    somma += numero

}

document.write(`${somma} è la somma dei numeri che mi hai dato`);