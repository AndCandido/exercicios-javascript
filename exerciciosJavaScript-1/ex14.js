function vendas(fruta) {
    const frutasLower = fruta.toLowerCase()
    switch(frutasLower) {
        case 'maça':
            console.log("Não vendemos esta fruta aqui")
            break
        case 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break
        case 'melancia': 
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.log("Fruta inválida")
    }
}

vendas("maÇa")
vendas("kiWI")
vendas("meLANcia")
vendas("abc")