const soma = e => e.reduce((acl, atual) => acl + atual)
const getMedia = e => soma(e) / e.length

function recerberMelhorEstudante(objeto) {
    const estudantes = Object.entries(objeto)
    const alunoComMedia = estudantes.map(e => {
        const aluno = e[0]
        const notas = e[1]
        const mediaAluno = getMedia(notas)
        return {aluno: aluno, media: mediaAluno}
    })
    const alunoMaiorMedia = alunoComMedia.sort((e, a) => a.media - e.media)
    return alunoMaiorMedia[0]
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))