function sorteio(n1){
    const random = Math.floor(Math.random() * (10 - 1) + 1) 
    return n1 === random ? `Parabéns! O número sorteiado foi ${random}` : `Que pena o número sorteido foi ${random}`
}

console.log(sorteio(10))
console.log(sorteio(7))
console.log(sorteio(4))
console.log(sorteio(4))
console.log(sorteio(4))
console.log(sorteio(4))