function checarAnoBissexto(ano){
    const anoBissexto = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0
    return anoBissexto
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(2004))