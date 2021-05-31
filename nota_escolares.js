/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo ABC

* de 90 pra cima    - A
* entre 80 - 89     - B 
* entre 70 - 79     - C
* entre 60 - 69     - D
* menor que - 60    - F

*/

/*
let notaAluno = 56

let notaA = notaAluno >= 90 && notaAluno <= 100
let notaB = notaAluno >= 80 && notaAluno < 90
let notaC = notaAluno >= 70 && notaAluno < 80
let notaD = notaAluno >= 60 && notaAluno < 70
let notaE = notaAluno < 60 && notaAluno >= 0

let notaFinal;

if (notaA) {
    notaFinal = 'Nota A - acima de 90'
} else if (notaB) {
    notaFinal = 'Nota B - entre 80 e 89'
} else if (notaC) {
    notaFinal = 'Nota C - entre 70 e 79'
} else if (notaD) {
    notaFinal = 'Nota D - entre 60 e 69'
} else if (notaE) {
    notaFinal = 'Nota E - abaixo de 60'
} else {
    notaFinal = 'Não é uma nota válida'
}

return notaFinal
*/

function nota(notaAluno) {
    let notaA = notaAluno >= 90 && notaAluno <= 100
    let notaB = notaAluno >= 80 && notaAluno < 90
    let notaC = notaAluno >= 70 && notaAluno < 80
    let notaD = notaAluno >= 60 && notaAluno < 70
    let notaE = notaAluno < 60 && notaAluno >= 0

    let notaFinal;

    if (notaA) {
        notaFinal = 'Nota A - acima de 90'
    } else if (notaB) {
        notaFinal = 'Nota B - entre 80 e 89'
    } else if (notaC) {
        notaFinal = 'Nota C - entre 70 e 79'
    } else if (notaD) {
        notaFinal = 'Nota D - entre 60 e 69'
    } else if (notaE) {
        notaFinal = 'Nota E - abaixo de 60'
    } else {
        notaFinal = 'Não é uma nota válida'
    }

    return notaFinal
}

console.log(nota(-1))
console.log(nota(0))
console.log(nota(120))
console.log(nota(50))
console.log(nota(75))
console.log(nota(87))
console.log(nota(94))
