function aluno(codigo, nota1, nota2, nota3) {
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(1)
    if(media < 5) {
        console.log(`O aluno ${codigo} com sua média de ${media} está REPROVADO`)
    } else if(media >= 5) {
        console.log(`O aluno ${codigo} com sua média de ${media} esetá APROVADO`)
    }
}

aluno(332, 7,3.5,4.2)

/*
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
*/