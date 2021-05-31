/*  ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let saldos = {
    receitas: [2000, 500, 1000],
    despesas: [90, 200, 400, 1300, 100]
}

somaReceitas = (saldos.receitas[0] + saldos.receitas[1] + saldos.receitas[2])
console.log(somaReceitas)

somaDespesas = (saldos.despesas[0] + saldos.despesas[1] + saldos.despesas[2] + saldos.despesas[3] + saldos.despesas[4])
console.log(somaDespesas)

resultado = somaReceitas - somaDespesas
console.log(resultado)

if (resultado >= 0) {
    console.log('A família está com saldo positivo')
} else {
    console.log('A família está com saldo negativo')
}

//Exercício feito pelo Mayk Brito

// Receitas e Despesas
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.24, 128.45, 176.87, 1450.00]
}

// Função para somar os valor dos Arrays
function sum(array) {
    let total = 0

    //Laço para somar os valores
    for (let value of array)
        total += value
    return total
}

// Função para validar o saldo negativo ou positivo
function calculateBalance() {
    // Soma das Receitas e Despesas
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    // Resultado das receitas e Despesas
    const total = calculateIncomes - calculateExpenses

    // Validador do saldo
    const itsOk = total >= 0

    let balanceText = 'negativo'
    // IF para validar saldo positivo
    if (itsOk) {
        balanceText = 'positivo'
    }
    // Print do Saldo com texto sobre positivo e negativo
    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

//Chamando a função
calculateBalance()

//Exercício Refeito para fixação
// Receitas e Despesas
    let saldoFamilia = {
        receitas: [2000, 1000, 500, 200],
        despesas: [1500, 500, 200, 180, 100, 300]
    }

// Função para somar os valor dos Arrays
function soma(array){
    let total = 0
    //Laço para somar os valores
    for (let valor of array)
        total = total + valor
        return total
}

// Função para validar o saldo negativo ou positivo
function calcularbalanco () {
    // Soma das Receitas e Despesas
    const somaReceitas = soma(saldoFamilia.receitas)
    const somaDespesas = soma(saldoFamilia.despesas)
    // Resultado das receitas e Despesas
    const total = somaReceitas - somaDespesas

    // Validador do saldo
    const saldoPositivo = total >= 0
    let textoSaldo = 'negativo'

    // IF para validar saldo positivo
    if (saldoPositivo){
        textoSaldo = 'positivo'
    }
    // Print do Saldo com texto sobre positivo e negativo
    console.log(`O saldo da família é ${textoSaldo}: ${total} R$`)
}

//Chamando a função
calcularbalanco()