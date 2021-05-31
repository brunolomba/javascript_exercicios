// Expressões e Operadores

let number = 1

// Operador binário
console.log(number + 1)

// Operador unário
console.log(++number)
console.log(--number)
console.log(typeof number)

// Operador ternário
console.log(false ? 'alo' : 'nada')

// New
let name = new String('Bruno')
name.surName = 'Lomba'
let age = new Number(32)
console.log(name, age)

let date = new Date('2020-11-09')
console.log(date)

//typeof
console.log(typeof 'Bruno')

//delete
const person = {
    name: 'Bruno',
    age: 32
}

delete person.age
console.log(person)

//Operadores aritiméticos
//multiplicação
console.log(3.2 * 5)
//divisão
console.log(9 / 3)
//soma
console.log(9 + 3)
//subtração
console.log(9 - 3)

//resto da divisão
let remainder
remainder = 11 % 9
console.log(remainder)
//incremento
let increment = 0
console.log(increment++) //incrementando depois, então valor mostrado é zero
console.log(increment)
console.log(++increment) // incrementado antes, adiciona o valor no console

//decremento
let decrement = 0
decrement--
console.log(--decrement)

//exponencial
console.log(3 ** 3)

//Gruping operator ( )
let total = 2 + 3 * 5
console.log(total) // segue a regra da matemátcia

let total2 = (2 + 3) * 5
console.log(total2)

//Operadores de comparação

let one = 1
let two = 2

// == igual
console.log( one == 1) // true
console.log( one == '1') // true
//!= Diferente
console.log( one != 1) // false
console.log( one != 2) // true
// === Estritamente igual
console.log( one === 1) // true
console.log( one === '1') // false

//!== Estritamente diferente
console.log( two === 2) // true
console.log( two === '2') // false
// > Maior
console.log( one > two) // false
// >= Maior igual
console.log( one >= 1) //true
// < Menor
console.log( one < two) // true
// <= Menor igual
console.log( one <= two) //true

//Oeradores de atribuição (Assignment)

let x

// assignment
x = 1

// addition assignment
//x = x + 2
x += 2

// subtraction assignment
//x = x - 2
x -= 2

// multiplication assignment
//x = x * 2
x *= 2

// division assignment
//x = x / 2
x /= 2

// remainder, exponetiation
//x = x % 2
x %= 2

//x = x ** 2
x **= 2
console.log(x)

// Operadores lógicos
let pao = true
let queijo = false

// AND &&
console.log(pao && queijo)// precisa de todos true

// OR ||
console.log(pao || queijo) // precisa de um true

// NOT !
console.log(!pao) // negando, trocando o valor

// Operador ternário
// conodition ? value1 : value2

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

const niceBreakfast2 = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast2)

//Maior de 18
let age2 = 16
const canDrive = age2 >= 18 ? 'can drive' : "can´t drive"
console.log(canDrive)

// String operator
//comparison (comparação)
console.log('a' == 'b') // false
console.log('a' == 'a') // true

//concatenation
// retorna a união dos Strings

let alpha = 'alpha'
console.log(alpha + 'bet')
alpha += 'bet'
console.log(alpha)

/*  Operador precedence
 Precedência de operadores

 * Grouping                 ( )
 * Negação e incremento     ! ++ --
 * multiplicação            * /
 * Adição subtração         + -
 * Relacional               < <= > >=
 * AND                      &&
 * OR                       ||
 * Condicional              ?:
 * Assignment (atribuição)  = += -= *=
 */