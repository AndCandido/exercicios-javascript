function vendas(modelo) {
    const modeloFormat = modelo.toLowerCase()
    switch (modeloFormat) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

vendas('haTCH')
vendas('seDaNs')
vendas('motocicletAs')
vendas('caminhonetES')
vendas('hilux')