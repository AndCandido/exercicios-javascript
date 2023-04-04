function repetir(valor, repeticao){
    const valorFinal = []
    for(let i = 0; i < repeticao; i++){
        valorFinal.push(valor)
    }
    return valorFinal
}

console.log(repetir("Programação", 5))
console.log(repetir(3, 5))
console.log(repetir(false, 5))