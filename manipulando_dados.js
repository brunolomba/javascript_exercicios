/* type conversion (typecasting) vc Type coersion 

* Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5)
console.log(Number('9') + 5)

//Manipulação de Strings e Números

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = 'paralelepipedo'
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

// Transformar um número quebrado com 2 cassa decimais e trocar ponto e vírgula

let number3 = 345.2344
console.log(number.toFixed(2).replace(".", ",")) // deixa de ser um number e vira uma string

// Transformar letras minúsculas em maiúsculas, faça o contrário disso tbm

let frase = "Programar é muito bacana"
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())

// Verificar se o texto contém a palavra específica

let frase2 = "Eu quero viver o amor"
console.log(frase2.includes("amor")) // CaseSensitive Amor daria false, amor da true

// Separe um texto que contem espaços, em um novo array onde cada texto é um posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let myArray = frase2.split(" ") // divide em um array
console.log(myArray)
let frase2ComUnderscore = myArray.join("_") // Adiciona o Underscore entre os itens do array
console.log(frase2ComUnderscore.toLowerCase())

// Criar Array com contrutor

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

//Array Vazio mas com marcação dos espaços
let myArrayVazio = new Array(10)
console.log(myArrayVazio)

//Contar elementos do Array
console.log(['a', 'b', 'c'].length)

console.log([
    'a',
    {type: 'array'},
    function() {return 'Alo'}
].length)

console.log([
    'a',
    {type: 'array'},
    function() {return 'Alo'}
][1].type) // acessando o elemento 1 e acessando o type

console.log([
    'a',
    {type: 'array'},
    function() {return 'Alo'}
][2]()) // acessando o elemento 2 e rodando a function

// Transformar uma cadeia de caracteres em elementos de um array

let word2 = 'manipulação'
console.log(Array.from(word2))

// Manipulando Arrays

let techs = ['html', 'css', 'js']

// Adicionar um item no fim
techs.push('node.js')
// Adicionar no começo
techs.unshift('sql')
// Remover do fim
techs.pop()
// Remover do começo
techs.shift()
// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// Remover 1 ou mais items em qualquer posição do array
console.log(techs.splice(1,1))
// Encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)