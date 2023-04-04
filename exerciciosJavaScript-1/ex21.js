function planoSaude(idade = 1){
    let custo = 100
    if(idade < 10) {
        custo += 80
    } else if(idade < 30) {
        custo += 50
    } else if(idade < 60) {
        custo += 95
    } else if (idade >= 60) {
        custo += 130
    } else {
        return console.log('Idade inválido')
    }
    console.log(`O seu plano de saúde custará R$ ${custo}`)
}

planoSaude(1)
planoSaude(11)
planoSaude(31)
planoSaude(62)
planoSaude('')
planoSaude('a')