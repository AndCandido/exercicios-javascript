function filtrarNumeros(array){
    const newArray = array.filter(e => typeof e === 'number')
    return newArray
}

console.log(filtrarNumeros([2, 'JavaScript', 5, 'Programação', 20, 1]))
console.log(filtrarNumeros(['JavaScript', 'Programação']))