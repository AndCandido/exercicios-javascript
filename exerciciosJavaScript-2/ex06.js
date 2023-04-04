function inverso(valor){
    if(typeof valor === 'boolean') return !valor
    if(typeof valor === 'number') return -valor
    else
    return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(inverso(false))
console.log(inverso(true))
console.log(inverso(134))
console.log(inverso('123'))