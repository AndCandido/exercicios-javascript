function objetoParaArray(objeto){
    const newArray = Object.entries(objeto)
    return newArray
}

console.log(objetoParaArray({ nome: 'Ana', idade: 29}))
console.log(objetoParaArray({ nome: 'João', idade: 30}))
console.log(objetoParaArray({ falar(){return 'ola'}, nome: 'função'}))