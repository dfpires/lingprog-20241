function leituraDados(vet, mat){
    for(let i=0;i<3;i++){
        vet[i] = prompt(`Informe nome`)
        mat[i] = [] // cria cada vetor da matriz
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}
function calculaMediaAlunos(vet, mat){
    let soma 
    for(let i=0;i<3;i++){
        soma = 0 // novo aluno, zera a soma das notas
        for(let j=0;j<5;j++){
            soma = soma + mat[i][j]
        }
        if ((soma / 5) > 6){
            alert(`${vet[i]} foi aprovado com nota ${soma/5}`)
        }
        else if ((soma/5) > 3){
            alert(`${vet[i]} ficou de exame com nota ${soma/5}`)
        }
        else {
            alert(`${vet[i]} foi reprovado com nota ${soma/5}`)
        }
    }
}
function calculaMediaProvas(mat){
    let soma 
    for(let j=0;j<5;j++){ // para cada coluna
        soma = 0
        for(let i=0;i<3;i++){ // para cada linha
            soma = soma + mat[i][j]
        }
        alert(`Prova ${j+1} teve média ${soma/3}`)
    }
}
function principal(){
    let vetor = []
    let matriz = []
    leituraDados(vetor, matriz)
    calculaMediaAlunos(vetor, matriz)
    calculaMediaProvas(matriz)
}