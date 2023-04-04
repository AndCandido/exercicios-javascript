function removerPropriedade(objeto, propriedade) {
    const newObj = {...objeto}
    // const newObj = Object.assign({}, objeto)
    delete newObj[propriedade]
    return newObj
}

const pessoa = {
    nome: 'Ana',
    idade: 25,
    cidade: 'São Paulo',
    estado: 'bahia'
}
const carro = {
    modelo: 'F4U',
    velMax: 270,
    velAtual: 0
}

console.log(pessoa)
console.log(carro)

console.log(removerPropriedade(pessoa, 'estado'))
console.log(removerPropriedade(carro, 'velAtual'))