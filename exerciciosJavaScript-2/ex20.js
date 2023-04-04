function calcularMedia1(array){
    let media = array.reduce((acm, atual) => acm + atual) / array.length
    return media
}

console.log(calcularMedia1([0, 10]))
console.log(calcularMedia1([5, 5, 5, 6]))
console.log(calcularMedia1([1, 2, 3, 4, 5]))