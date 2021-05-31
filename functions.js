//aplicativo de frases motivacionas

//declaração da função
//declaration
//function  statement
function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("A revisão é a mãe do aprendizado")
}

//executar a função
//rodar, chamar, invocar
//execute, run, call, invoke

createPhrases()
createPhrases()

//function expression
//function anonymous

//parâmetros (parameters)
const sum = function (number1, number2) {
    //ex. let number1 = 2
    //ex. let numer2 = 3
    console.log(number1 + number2)
}

sum(2, 3) //argumentos - arguments
sum(7, 9)

//retornando valores dentro da function
const sum2 = function (number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 15
let number2 = 20

sum2(7, 3) // não funciona porque precisa estar vinculado a uma variável ou console.log

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum2(number1, number2)}`)
console.log(`a soma é ${sum2(4, 5)}`) //argumentos diretos
console.log(`a soma é ${sum2}`) // return function expression

//função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)

//criação de uma function de multiplicação
const multiplicacao = function(number1, number2) {
    let total = number1 * number2
    return total
}


multiplicacao(5, 3) // não funciona porque precisa vincular ela a algum lugar variavel ou console.log

console.log(`a multiplicação de ${multiplicacao(5, 3)}`)

//multiplicação 2

function multiplicacao2(number1, number2){
    let total = number1 * number2
    return total
}

let number3 = 2
let number4 = 5
console.log(`${multiplicacao2(number3, number4)}`)
console.log(multiplicacao2) //return fucntion expression

// precisa atribuir a function em alguma variável, pra ter o retorno
let resultado = multiplicacao2(3, 5)

console.log(resultado)

//teste de escopo de função
let subject = "create video"

// subject de dentro do escopo troca o valor do parâmetro,
// se não tiver valor no parâmetro ele troca do escopo anterior
function createThink(subject) {
    subject = "study"
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)

//hoisting de function
sayMyName ()

// Hoisting na variável (ERRO)
/* const sayMyName = function () {
    console.log('Bruno')
} */

function sayMyName () {
    console.log('Bruno')
}


// Arrow functions
/* const sayMyName2 = () => {
    console.log('bruno')
}

sayMyName2() */

const sayMyName2 = (name) => {
    console.log(name)
}

sayMyName2('Bruno')

// callback
// o valor atribuído ao parâmetro é um argumento que no caso desse exemplo é um function, que é chamada de volta dentro da function, recebendo o nome do parâmetro
function sayMyName3 (name) {
    console.log('Antes da callback')

    name()

    console.log('Depois da callback')
}

sayMyName3 (
    () => {
        console.log('Estou em uma callback')
    }
)

//function constructor

function Person (name, idade, profissao) {
    this.name = name
    this.idade = idade
    this.profissao = profissao
    this.texto = function () {
        return this.name + " tem " + this.idade + " e é " + this.profissao + "."
    }
}

const lucas = new Person ('Lucas', 21, 'programador')
const sandro = new Person ('Sandro', 40, 'Destista')
console.log(lucas.texto())
console.log(sandro.texto())