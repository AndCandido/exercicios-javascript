function numerosPares(array){
    const newArray = array.filter((e, i) => e % 2 === 0 && i % 2 === 0)
    return newArray
}

console.log(numerosPares([2, 4, 6, 8, 10]))
console.log(numerosPares([1, 2, 3, 4, 5]))
console.log(numerosPares([10, 70, 22, 43]))