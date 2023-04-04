function somarNumeros(array){
    const total = array.reduce((acm, atual) => {
        return acm + atual
    })
    return total
}

console.log(somarNumeros([10,20,30]))
console.log(somarNumeros([1, 2, 3, 4]))
console.log(somarNumeros(['ola', 20, 3]))