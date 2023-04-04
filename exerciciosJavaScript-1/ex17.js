function planoSalario(plano, salario) {
    const planoFormat = plano.toLowerCase()
    switch (planoFormat) {
        case 'a':
            return (salario * (1 + 0.1)).toFixed(2)
        case 'b':
            return (salario * (1+ 0.15)).toFixed(2)
        case 'c':
            return (salario * (1+ 0.20)).toFixed(2)
        default:
            return 'Plano inválido'
    }
}

console.log(planoSalario('A', 5200))
console.log(planoSalario('b', 5200))
console.log(planoSalario('c', 5200))
console.log(planoSalario('d', 5200))