let vetorInt = [1, 2, 3, 4]
let vetorStr = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]


function concatenar (...args) {
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInt, vetorDouble, vetorStr))
console.log(concatenar(vetorDouble, vetorStr))