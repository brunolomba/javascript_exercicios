//Escopo global, não usar
var nome = "Bruno"
console.log(typeof nome, nome)

//Escopo local
let idade = 28

    {//da pra atualizar uma variavel dentro do escopo
        idade = 32
        console.log(idade)

        //usando typeof para saber o tipo de variavel
        console.log(typeof idade)
    }

// não pode ser alterada futuramente
const isHuman = true

//abrir multiplas variaveis
let cachorro, gato, Papagaio

cachorro = "Bolt"
gato = "Manu"
papagaio = "José"

console.log (cachorro, gato, papagaio)


//array
let animals = ["Cachorro", "Gato", "Papagaio"]

console.log(animals)

//Objeto
let pessoa = {
    name: "Carlos",
    age: 52,
    nacionalidade: "brasileiro"
}
console.log(pessoa)

// concatenação com formatação
console.log(`${pessoa.name} tem ${pessoa.age} e é ${pessoa.nacionalidade}.`)

//variavel array sem estar definida
let estudantes = []

//atribuindo um objeto para um array
estudantes = [pessoa]

console.log(estudantes)

console.log(estudantes[0])

//definindo outra pessoa
let pessoa2 = {
    name: "Carla",
    age: 27,
    nacionalidade: "mexicana"
}

//adicionando mais um pessoa ao array
estudantes[1] = pessoa2

console.log(estudantes)
