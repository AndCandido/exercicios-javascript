function cardapio(codigo, quantidade = 1) {
    switch(codigo) {
        case 100:
            console.log(`${quantidade} Cachorro Quente, total: R$ ${(3.00 * quantidade).toFixed(2)}`)
            break
        case 200:
            console.log(`${quantidade} Hambúrguer Simples, total: R$ ${(4.00 * quantidade).toFixed(2)}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer, total: R$ ${(5.50 * quantidade).toFixed(2)}`)
            break
        case 400:
            console.log(`${quantidade} Bauru, total: R$ ${(7.50 * quantidade).toFixed(2)}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante, total: R$ ${(3.50 * quantidade).toFixed(2)}`)
            break
        case 600:
            console.log(`${quantidade} Suco, total: R$ ${(2.80 * quantidade).toFixed(2)}`)
            break
        default:
            console.log('Não trabalhamos com este produto')

    }
}

cardapio(100, 2)
cardapio(200, 2)
cardapio(300, 2)
cardapio(400, 2)
cardapio(500, 2)
cardapio(600, 2)
cardapio(700, 2)