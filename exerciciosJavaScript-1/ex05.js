function conversao(valor) { 
    return `R$ ${valor.toFixed(2).replace('.', ',')}`
}

console.log(conversao(0.33333333))


/*
function formatarValorDecimal(valorDecimal) {
    const valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)
*/