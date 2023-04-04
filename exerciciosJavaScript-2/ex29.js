function filtrarPorQuantidadeDeDigitos(array, qtdDigitos){
    const arra1 = array.filter(e => String(e).length === qtdDigitos)
    return arra1
}

console.log(filtrarPorQuantidadeDeDigitos([2, 323, 34, 5, 67, 0, -10], 2))