function exe1(){
    let vetor = []
    // entrada de dados do usuário
    // vetor.push(x) adiciona x no final do vetor
    for(let i = 0; i < 6; i++){
        vetor.push(Number(prompt(`Informe o número ${i+1}`)))
       // vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
    // cria e adiciona elementos nos vetores pares e impares
    let pares = []
    let impares = []
    // percorre o vetor
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0){
            pares.push(vetor[i])
        }
        else {
            impares.push(vetor[i])
        }
    }
    console.log(`Qtde de pares ${pares.length} - ${pares}`)
    console.log(`Qtde de ímpares ${impares.length} - ${impares}`)
}

function exe2(){
    let vetor = []
    for(let i=0;i<7;i++){
        vetor.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    // criar os vetores mult2e3, mult2 mult3
    let mult2e3 = []; let mult2 = []; let mult3 = []
    // percorre o vetor
    for(let i=0;i<7;i++){
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
            mult2e3.push(vetor[i])
        }
        else if (vetor[i] % 2 == 0){
            mult2.push(vetor[i])
        }
        else if (vetor[i] % 3 == 0){
            mult3.push(vetor[i])
        }
    }
    console.log(`Múltiplos de 2 e 3: ${mult2e3}`)
    console.log(`Múltiplos de 2: ${mult2}`)
    console.log(`Múltiplos de 3: ${mult3}`)
}