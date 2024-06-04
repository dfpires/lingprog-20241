function cadastraDados(vet){
    for(let i =0; i<5;i++){
        let objeto = {
            sexo: prompt(`Informe o sexo F ou M`).toUpperCase(),
            altura: Number(prompt(`Informe a altura`)),
            idade: Number(prompt(`Informe a idade`)),
            olhos: prompt(`Informe a cor dos olhos: A, V ou C`).toUpperCase(),
        }
        vet.push(objeto) // na verdade, estamos inserindo em vetor
    }
}
function calculaMediaIdade(vet){
    let somaIdade = 0
    let qtdeIdade = 0
    vet.forEach( (objeto) => {
        if (objeto.olhos == 'C' && objeto.altura > 1.60){
            somaIdade = somaIdade + objeto.idade
            qtdeIdade++
        } 
    })
    console.log(`A média de idade é ${somaIdade/qtdeIdade}`)
}
function calculaMaiorIdade(vet){
    let maiorIdade = vet[0].idade
    vet.forEach( (objeto) => {
        if (objeto.idade > maiorIdade){
            maiorIdade = objeto.idade
        }
    })
    console.log(`Maior idade ${maiorIdade}`)
}

function calculaMulheres(vet){
    let qtde = 0
    vet.forEach((objeto) => {
        if (objeto.sexo == 'F')
            if ((objeto.idade >=20 && objeto.idade <= 45) || (objeto.olhos == 'V' && objeto.altura < 1.70)){
                qtde++
            }
    })
    console.log(`A qtde é ${qtde}`)
}
function calculaHomens(vet){
    let qtde = 0
    vet.forEach((objeto) => {
        if (objeto.sexo == 'M'){
            qtde++
        }
    })
    console.log(`% de homens ${qtde/5*100}`)
}

function exe3(){
    // declara o vetor
    let vetor = []
    cadastraDados(vetor) // passando um objeto, pois vetor é um objeto
    calculaMediaIdade(vetor)
    calculaMaiorIdade(vetor)
    calculaMulheres(vetor)
    calculaHomens(vetor)
}