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
function exe3(){
    let produtos = []
    let estoque = []
    for(let i=0; i< 10; i++){
        produtos.push(prompt(`Informe o código do produto`))
        estoque.push(Number(prompt(`Informe a qtde em estoque`)))
    }
    let cliente = Number(prompt(`Informe o código do cliente`))
    while (cliente != 0){
        let codigoCompra = prompt(`Informe código do produto`)
        let qtdeCompra = Number(prompt(`Informe qtde do produto`))
        // percorre o vetor
        let index = produtos.indexOf(codigoCompra)
        if (index == -1){
            console.log('Produto não encontrado')
        }
        else if (estoque[index] >= qtdeCompra){
                estoque[index] -= qtdeCompra // estoque[index] = estoque[index] - qtdeCompra
                console.log('Compra realizada com sucesso')
        }
        else {
            console.log("Estoque insuficiente")
        }
        cliente = Number(prompt(`Informe novo código do cliente. 0 para encerrar`))
    }
    console.log(`Códigos ${produtos} - Estoque ${estoque}`)
}

// função anônima -> função sem nome
// declaração de uma variável que é uma função
let mensagem = function (){
    console.log('bom dia')
}

mensagem() // programação com paradigma funcional

let add = function (a, b) {
    return a + b
}
add(10, 7)

let add2 = (a, b) => a + b

let vetor = ["monza", "celta", "gol", "palio", "onix"]

for(let i=0;i<vetor.length;i++){
    console.log(vetor[i])
}

vetor.forEach( (elemento) => console.log(elemento))


let filtro = [10, 11, 3, 20, 5];

let filtro2 = filtro.filter( (elemento) => elemento > 10);

let array = [10, 11, 3, 20, 5];

const greaterThanTen = array.find(element => element > 10);

console.log(greaterThanTen)//11

 array = [10, 11, 3, 20, 5];

const includesTwenty = array.includes(20);

console.log(includesTwenty)//true

function exe4(){
        let vetor = []
        for(let i=0;i<5;i++){
            vetor.push(Number(prompt(`Informe o número ${i+1}`)))
        }
        if (vetor.includes(30)){
            vetor.forEach((elemento, posicao) => {
                if (elemento == 30){
                    console.log(posicao)
                }
            })
        }
        else {
            console.log('Não existe elemento 30')
        }
}

function exe5(){
    let logica = []
    let linguagem = []
    let interseccao = []
    for(let i=0;i<10;i++){
        logica.push(Number(prompt(`Informe número de matrícula do aluno ${i+1}`)))
    }
    for(let i=0;i<5;i++){
        linguagem.push(Number(prompt(`Informe número de matrícula do aluno ${i+1}`)))
    }
    // para cada elemento do vetor de lógica
    logica.forEach ( (elemento) => {
        // verifica se elemento está incluído em linguagem
        if (linguagem.includes(elemento)) {
            // insere no vetor de intersecção
            interseccao.push(elemento)
        }
    })
    console.log(interseccao)
}

function exe6(){
    let nomes = []
    let vendas = []
    let comissoes = []
    let receber = []
    for(let i=0;i<5;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        comissoes.push(Number(prompt(`Informe a comissão do vendedor ${i+1}`)))
    }
    
    for(let i=0;i<5;i++){
        receber[i] = vendas[i] * comissoes[i]/100
    }
    let maiorReceber = receber[0]
    let menorReceber = receber[0]
    for(let i=1;i<5;i++){
        if (receber[i] > maiorReceber){ // encontrei algo maior
            maiorReceber = receber[i]
        }
        if (receber[i] < menorReceber){ // encontrei algo menor
            menorReceber = receber[i] 
        }
    }
    let nomeMaiorValor = nomes[receber.indexOf(maiorReceber)]
    console.log(`Maior valor ${maiorReceber} e o nome do maior valor ${nomeMaiorValor}`)
    let nomeMenorValor = nomes[receber.indexOf(menorReceber)]
    console.log(`Menor valor ${menorReceber} e o nome do menor valor ${nomeMenorValor}`)
}

function exe7(){
    let vetor = []
    let negativos = []
    let soma = 0
    // leitura dos dados
    for(let i=0;i<10;i++){
        vetor.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    // percorre o vetor em busca de elementos positivos e negativos
    vetor.forEach( (elemento) => {
        if (elemento >= 0){
            soma += elemento
        }
        else {
            negativos.push(elemento)
        }
    })
    console.log(`A soma ${soma}`)
    console.log(`Negativos ${negativos}`)
}

function exe8(){
    let nomes = []
    let notas = []
    for(let i=0;i<7;i++){
        nomes.push(prompt(`Informe o nome do aluno ${i+1}`))
        notas.push(Number(prompt(`Informe a média do aluno ${i+1}`)))
    }
    // percorre o vetor para calcular e mostra o nome do aluno com maior média
    
}