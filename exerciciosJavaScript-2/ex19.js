const array1 = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]
const array2 = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

function getValor(array){
    return array.map(e => e.preco).reduce((acm, atual) => acm + atual)

    // let valorFinal = 0
    // array.forEach(e => {
    //     valorFinal += e.preco
    // })
    // return valorFinal
}

console.log(getValor(array1))
console.log(getValor(array2))