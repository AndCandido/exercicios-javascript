function  removerVogais(palavra){
    return palavra.split('').filter(e => !(e === 'a') && !(e === 'e') && !(e === 'i') && !(e === 'o') && !(e === 'u')).join('')
    // return palavra.replace(/[aeiou]/ig, '')
}

console.log(removerVogais('slaaa'))
console.log(removerVogais('programador'))