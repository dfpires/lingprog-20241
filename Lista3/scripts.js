function calculaMedia(){
    let n = Number(prompt("Informe a qtde de alunos"))
    let conta = 1
    let nota
    let soma = 0
    while (conta <= n){
        nota = Number(prompt(`Informe a nota do aluno ${conta}`))
        soma = soma + nota
        conta++
    }
    console.log(`A média das notas é ${soma/n}`)
}
function exe1(){
    let A, B, C, D
    let contaGeral = 1
    while (contaGeral < 6){
        A = Number(prompt("Informe o valor de A"))
        B = Number(prompt("Informe o valor de B"))
        C = Number(prompt("Informe o valor de C"))
        D = Number(prompt("Informe o valor de D"))
        let conta = 1
        let aux
        while (conta < 4){
            if (A > B){
                aux = A; A = B; B = aux;
            }
            if (B > C){
                aux = B; B = C; C = aux;
            }
            if (C > D){
                aux = C; C = D; D = aux;
            }
            conta++
        }
        alert(`Ordem crescente ${A}, ${B}, ${C} e ${D}`)
        alert(`Ordem decrescente ${D}, ${C}, ${B} e ${A}`)
        contaGeral++
    }
}

function exe2(){
    let lucro = 0
    let qtde = 120
    const despesa = 200
    let aux = ""
    for(let preco = 5.0; preco >= 1; preco = preco - 0.50){
        lucro = (preco * qtde) - despesa
        aux = aux + (`<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${despesa} </td> <td> ${lucro} </td> </tr>`)
        qtde += 26 // qtde = qtde + 26
    }
    document.getElementById("corpoTabela").innerHTML = (aux)
}
function exe3(){
    let f1= 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    for(let cont = 1; cont<=8; cont++){
        let idade = Number(prompt("Informe sua idade"))
        if (idade >= 0 && idade <= 15){
            f1++
        }
        else if (idade > 15 && idade <= 30){
            f2++
        }
        else if (idade > 30 && idade <= 45){
            f3++
        }
        else if (idade > 45 && idade <= 60){
            f4++
        }
        else if (idade > 60){
            f5++
        }
    }
}
function exe4(){
    let numero
    do{
        numero = Number(prompt('Informe um número'))
    }
    while (numero < 0 || numero > 10)
    let saida = ""
    for(let cont = 0; cont <= 10; cont++){
        saida += (`${numero} x ${cont} = ${numero*cont} \n`)
    }
    alert(saida)
}
function exe5(){
    for(let numero = 1; numero <= 10; numero++){
        console.log(`Tabuada do ${numero}`)
        for(let aux = 0; aux <=10; aux++){
            console.log(`${numero} x ${aux} = ${numero*aux}`)
        }
    }
}
function exe6(){
    let valor, codigo
    let totalVista = 0
    let totalPrazo = 0
    for(let conta = 1; conta<=5;conta++){
        do {
            codigo = prompt(`Informe código da transação`).toUpperCase() // maiúsculo
        }
        while (codigo != 'V' && codigo != 'P')
        do {
            valor = Number(prompt('Informe valor da transação'))
        }
        while (valor < 0)
        if (codigo == 'V'){
            totalVista += valor
        }
        else {
            totalPrazo += valor
        }
    }
    console.log(`Total a vista ${totalVista} e total a prazo ${totalPrazo}`)
    console.log(`Total geral ${totalPrazo + totalVista}`)
    console.log(`Total da 1a. parcela ${totalPrazo / 3}`)
}
function exe21(){
    let codigo
    let votos1 = 0; let votos2 = 0; let votos3 = 0; let votos4 = 0;
    let votosNulos = 0; let votosBranco = 0; 
    do {
        codigo = Number(prompt("Informe o código do candidato"))
        switch(codigo){
            case 1: votos1++
                break
            case 2: votos2++
                break
            case 3: votos3++
                break
            case 4: votos4++
                break
            case 5: votosNulos++
                break
            case 6: votosBranco++
                break
            case 0: alert("A votação está encerrada")
                break
            default: alert("Opção inválida, tente novamente")
        }
    }
    while (codigo != 0)
    let totalVotos = votos1 + votos2 + votos3 + votos4 + votosBranco + votosNulos
    console.log(`Votos no candidato 1: ${votos1}`)
    console.log(`Votos no candidato 2: ${votos2} \n Votos no candidato 3: ${votos3}`)
    console.log(`Votos no candidato 4: ${votos4}`)
    console.log(`Votos em branco ${votosBranco}, Votos nulo ${votosNulos} % de votos em branco ${votosBranco/totalVotos*100} & de votos nulos ${votosNulos/totalVotos*100}`)
}