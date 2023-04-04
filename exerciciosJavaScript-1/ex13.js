function dia(dia) {
    switch (dia) {
        case 1:
            console.log(`Hoje dia ${dia} é fim de semana`)
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log(`Hoje dia ${dia} é um dia útil`)
            break
        case 7:
            console.log(`Hoje dia ${dia} é fim de semana`) 
            break
        default: 
            console.log('Dia inválido')
    }  
}

dia(1)
dia(2)
dia(3)
dia(4)
dia(5)
dia(6)
dia(7)
dia('a')