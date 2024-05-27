function exe2(){
    let vetor = []
    for(let i=0;i<5;i++){
        let objeto = {
            salario: Number(prompt(`Informe salário do habitante ${i+1}`)),
            idade: Number(prompt(`Informe idade do habitante ${i+1}`)),
            filhos: Number(prompt(`Informe nro de filhos do habitante ${i+1}`)),
            sexo: prompt(`Informe sexo do habitante (M/F)`).toUpperCase()
        }
        // inserir objeto no vetor
        vetor.push(objeto)
    }
    // média de salário da população e média de filhos
    let somaSalario = 0
    let somaFilhos = 0
    let maiorSalario = vetor[0].salario // maior salário é do 1o. hab 
    let contaMulheres1000 = 0
    vetor.forEach((objeto) => {
        somaSalario = somaSalario + objeto.salario
        somaFilhos = somaFilhos + objeto.filhos
        if (objeto.salario > maiorSalario){
            maiorSalario = objeto.salario
        }
        if (objeto.sexo == 'F' && objeto.salario > 1000){
            contaMulheres1000++
        } 
    })
    console.log(`A média de salário ${somaSalario/5}`)
    console.log(`A média de filhos ${somaFilhos/5}`)
    console.log(`O maior salário é ${maiorSalario}`)
    console.log(`% de mulheres salário > 1000 
                ${contaMulheres1000/5*100}`)
}
