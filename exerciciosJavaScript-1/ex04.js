function div(dividendo, divisor) {
    let res = [
        dividendo / divisor,
        dividendo % divisor
    ]
    return res
}

console.log(div(11, 4))

/*
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)
*/