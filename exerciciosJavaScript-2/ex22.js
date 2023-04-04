function menorNumero(array){

    return Math.min(...array)

    // return array.reduce((acm, atual) => acm < atual ? acm : atual)

    // let menor = array[0]
    // array.forEach(e => {
    //     if(e < menor) menor = e
    // })
    // return menor
}

console.log(menorNumero([10, 2, 5, 35]))
console.log(menorNumero([10, 2, 5, 0]))
console.log(menorNumero([10, 2, -5, -10]))