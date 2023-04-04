function simboloMais(quantidade){
    let resultado = ''
    for(let i = 0; i < quantidade; i++){
        resultado+= '+'
    }
    return resultado
    //return "+".repeat(quantidade)
}

console.log(simboloMais(5))