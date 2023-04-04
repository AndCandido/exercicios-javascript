function calculadora(num1, operador, num2) {
    switch(operador) {
        case '+':
            return num1 + num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        case '-':
            return num1 - num2
        default:
            return 'Valor inválido'
    }
}

console.log(calculadora(5,'+', 11))
console.log(calculadora(5,'*', 11))
console.log(calculadora(5,'/', 11))
console.log(calculadora(5,'-', 11))
console.log(calculadora(5,'5', 11))
console.log(calculadora(5,'.', 11))
console.log(calculadora(5,'*', 11))
