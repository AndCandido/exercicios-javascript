function imprimirImpares(inicio = 0, fim = 100) {
    if(inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim    
    }

    let valorImpares = []

    for(let i = inicio; i < fim; i++) {
        if(i % 2 == 1) {
            valorImpares.push(i)
        }
    }

    return valorImpares
}

console.log(imprimirImpares(5, 30))
console.log(imprimirImpares(30, 5))

/*
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)*/
