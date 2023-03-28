
let numeridispari = [
]

let numeripari = [
]


for( let i = 0; i < 6; i++ ){
     
    const numero = parseInt(prompt('dammi un numero'))

    if (numero % 2 == 0) {

        numeripari.push(numero)

    } else {

        numeridispari.push(numero)

    }
    
    console.log(`${numeridispari}`)

}

document.write(`(${numeridispari} questi sono i numeri dispari)  `);

document.write(`(${numeripari} questi sono i numeri pari)`);