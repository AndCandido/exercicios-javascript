function contarCaractere(carac, frase){
    return [...frase].filter(e => e === carac).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))