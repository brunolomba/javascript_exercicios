/* ### Celcius em fahrenheit

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// Conversão Celcius
function celcius(temperatura) {
    let graus = Number(temperatura) 
    resultadoFarenheit = (graus - 32) * 5 / 9
    return resultadoFarenheit
}

celcius('50')
console.log(resultadoFarenheit)

//Conversão Fahrenheit
function fahrenheit(temperatura) {
    let graus = Number(temperatura)
    resultadoCelcius = graus * 9 / 5 + 32
    return resultadoCelcius
}
fahrenheit('10')
console.log(resultadoCelcius)

// Exercício resolvido pelo Mayk Brito
// tranformDegree('50F')
function tranformDegree(degree) {
    // Identificar Celcius ou Farenheit
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // Fluxo de Erro
    if(!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // Fluxo Ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Fluxo Alternativo C -> F
    if (celciusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''))
        formula = celcius => celcius * 9 / 5 + 32
        degreeSign = 'F'
    }
    // Retornar Graus e Classificação
    return formula(updatedDegree) + degreeSign
}

//Try...Catch
try {
    console.log(tranformDegree('50F'))
    console.log(tranformDegree('10C'))
    tranformDegree('40Z')
} catch (error) {
    console.log(error)
}

//Exercício Refeito para memorizar
// tranformDegree('50F')
function transformarGraus(graus) {
    // Identificar Celcius ou Farenheit
    const existeF = graus.toUpperCase().includes('F')
    const existeC = graus.toUpperCase().includes('C')

    // Fluxo de Erro
    if(!existeF && !existeC)
        throw new Error('Grau não identificado')

    // Fluxo Ideal F -> C
    let grauAtualizado = Number(graus.toUpperCase().replace('F', ''))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let sinalGrau = 'C'

    // Fluxo Alternativo C -> F
    if(existeC) {
    grauAtualizado = Number(graus.toUpperCase().replace('C', ''))
    formula = celcius => celcius * 9/5 + 32
    sinalGrau = 'F'
    }

    // Retornar Graus e Classificação
    return formula(grauAtualizado) + sinalGrau

}

//Try...Catch
try {
    console.log(transformarGraus('50f'))
    console.log(transformarGraus('10c'))
    console.log(transformarGraus('50z'))
} catch (error) {
    console.log(error)
}