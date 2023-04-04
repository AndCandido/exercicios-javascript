function contarPalavras(palavra) {
    const palavraArray =  palavra.split(' ')
    return palavraArray.length
}

console.log(contarPalavras('ola, mundo'))
console.log(contarPalavras('sou uma frase'))
console.log(contarPalavras('Me divirto aprendendo a programar'))