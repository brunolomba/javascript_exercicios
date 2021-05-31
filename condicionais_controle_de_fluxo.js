// control flow (controle de fluxo)

// if...else

let temperature = 37.5

if (temperature >= 37.5) {
    console.log('está com febre alta!')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('está com febre moderada')
} else {
    console.log('Saudável')
}

// Usar as condicionais em variáveis para deixar o código mais explicativo
let temperature2 = 36.5
let highTemperature = temperature2 >= 37.5
let mediumTemperature = temperature2 < 37.5 && temperature2 >= 37

if (highTemperature) {
    console.log('está com febre alta!')
} else if (mediumTemperature) {
    console.log('está com febre moderada')
} else {
    console.log('Saudável')
}

//Swith

let expression = 'a'

switch (expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        default:
            console.log('Não implementado')
            break;
    }

    return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(4, '-', 8))
console.log(calculate(4, '*', 8))
console.log(calculate(4, '/', 8))
console.log(calculate(4, '%', 8))

// throw (disparar, lançar)
function sayMyName(name) {
    if (name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')   
}

// try... catch (try = tentar / catch = pegar)
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('depois do try catch')

// Estrutura de repetição
// FOR
for (let i = 1; i <= 10; i++)
    console.log(i)

//break
for (let a = 10; a > 0; a--) {
    if (a < 5) {
        break;
    }
    console.log(a)
}

//continue 
for (let b = 10; b > 0; b--) {
    if (b === 5) {
        continue;// ele ignora o número 5 e continua a execução
    }
    console.log(b)
}

//While
let z = 0;
while (z < 10) {
    console.log(z)

    z++;
}
console.log(z)

let x = 49405845485
while (x > 10) {
    console.log(x)

    x /= 35;
}

// For of

let name = 'Bruno'
let names = ['Lucas', 'Sandro', 'Maria']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}

//For in
let person = {
    name: 'John',
    age:30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    //console.log(person['name'])
    //console.log(person.name)
    console.log(person[property])
}