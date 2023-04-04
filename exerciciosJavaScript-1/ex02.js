function triangulo(a, b, c) {
    if(a === b && b === c) {
        console.log('É um triângulo Equilátero')
    } else if (a === b || b === c || a === c) {
        console.log('É um triângulo Isósceles')
    } else {
        console.log('É um triângulo Escaleno')
    }
}

triangulo(1, 4, 6)