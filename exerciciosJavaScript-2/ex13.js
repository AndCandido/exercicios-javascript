function adiconarAtribulto(objeto, atribulto, valor){
    const newObj = Object.assign({}, objeto)
    newObj[atribulto] = valor
    return newObj
}

console.log(adiconarAtribulto({ nome: 'André', idade: 15 }, 'cidade', 'Placas'))