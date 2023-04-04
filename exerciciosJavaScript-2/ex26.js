function buscarPalavraSemelhante(palavra, array){
    return array.filter(e => e.includes(palavra))
}

console.log(buscarPalavraSemelhante("pro", ['programação', 'jogar', 'repropagando']))
