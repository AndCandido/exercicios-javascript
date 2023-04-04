function anoBixesto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else {
        return false
    }
}
console.log(anoBixesto(2008))

console.log(2008 % 4)