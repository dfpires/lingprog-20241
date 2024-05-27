// criando um objeto
let produto = {
    codigo: 10,
    nome: "biscoito",
    preco: 5.90
}
// acessando os valores do objetos
console.log(produto.codigo)
console.log(produto.nome)
console.log(produto.preco)
console.log(produto)

// objeto aluno
let aluno = {
    ra: 123,
    nome: "Marcelo",
    rg: "123-x",
    nota: 6.4   
}
console.log(aluno)


// entrade de 3 alunos
for(let i=0;i<3;i++){
    let aluno = {
        ra: Number(prompt('Informe ra do aluno')),
        nome: prompt('Informe nome do aluno'),
        rg: prompt('Informe rg do aluno'),
        nota: Number(prompt('Informe nota do aluno'))
    }
    console.log(aluno.nome, aluno.nota)
}

// vetor de objetos
let vetor = []
for(let i=0;i<3;i++){
    let aluno = {
        ra: Number(prompt('Informe ra do aluno')),
        nome: prompt('Informe nome do aluno'),
        rg: prompt('Informe rg do aluno'),
        nota: Number(prompt('Informe nota do aluno'))
    }
    vetor.push(aluno)
}
// calcula a média das notas dos alunos
let soma = 0
vetor.forEach( (objeto) => {
    soma = soma + objeto.nota
})
console.log(soma/3)
