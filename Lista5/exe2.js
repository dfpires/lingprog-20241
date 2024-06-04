function leituraDados(vet){
    for(let i=0;i<5;i++){
        let objeto = {
            salario: Number(prompt(`Informe salário do habitante ${i+1}`)),
            idade: Number(prompt(`Informe idade do habitante ${i+1}`)),
            filhos: Number(prompt(`Informe nro de filhos do habitante ${i+1}`)),
            sexo: prompt(`Informe sexo do habitante (M/F)`).toUpperCase()
        }
        // inserir objeto no vetor
        vet.push(objeto)
    }
}
function calculaMediaSalario(vet){
    let somaSalario = 0
    vet.forEach((objeto) => {
        somaSalario = somaSalario + objeto.salario
    })
    console.log(`A média de salário ${somaSalario/5}`)
}
function calculaMediaFilhos(vet){
    let somaFilhos = 0
    vet.forEach((objeto) => {
        somaSalario = somaSalario + objeto.salario
        somaFilhos = somaFilhos + objeto.filhos
    })
    console.log(`A média de filhos ${somaFilhos/5}`)
}
function calculaMaiorSalario(vet){
    let maiorSalario = vet[0].salario // maior salário é do 1o. hab 
    vet.forEach((objeto) => {
        if (objeto.salario > maiorSalario){
            maiorSalario = objeto.salario
        }
    })
    console.log(`O maior salário é ${maiorSalario}`)
}
function calculaMulheres(vet){
    let contaMulheres1000 = 0
    vet.forEach((objeto) => {
        if (objeto.sexo == 'F' && objeto.salario > 1000){
            contaMulheres1000++
        } 
    })
    console.log(`% de mulheres salário > 1000 ${contaMulheres1000/5*100}`)
}

function exe2(){
    let vetor = []
    leituraDados(vetor)
    calculaMediaSalario(vetor)
    calculaMediaFilhos(vetor)
    calculaMaiorSalario(vetor)
    calculaMulheres(vetor)
}
