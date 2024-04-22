function exe1e2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let nro4 = Number(document.getElementById("nro4").value)
    // calcula a média
    let media = (nro1 + nro2 + nro3 + nro4) / 4
    if (media >= 0 && media < 3){
        alert(`Reprovado com média ${media}`)
    }
    else if (media >= 3 && media < 7){
        alert(`Exame com média ${media}`)
    }
    else if (media >= 7){
        alert(`Aprovado com média ${media}`)
    }
    else {
        alert(`Impossível calcula a situação do aluno`)
    }
}
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    if (nro1 < nro2){
        alert(`O menor é ${nro1}`)
    }
    else if (nro2 < nro1){
        alert(`O menor é ${nro2}`)
    }
    else {
        alert(`Números são iguais`)
    }
}
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let maior
    if (nro1 > nro2 && nro1 > nro3){
        maior = nro1
    }
    else if (nro2 > nro1 && nro2 > nro3){
        maior = nro2
    }
    else if (nro3 > nro1 && nro3 > nro2){
        maior = nro3
    }
    else {
        maior = "não existe maior"
    }
    alert(`O maior número é ${maior}`)
}
function exe5(){
    let escolha = Number(document.getElementById("escolha").value)
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    switch(escolha){
        case 1: let media = (nro1 + nro2) / 2
                alert(`A média dos número é ${media}`)
                break
        case 2: let diferenca
                diferenca = (nro1 > nro2) ? nro1 - nro2 : nro2 - nro1
                alert(`A diferença entre os números é ${diferenca}`); 
                break;
        case 3: let produto; 
                produto = nro1 * nro2
                alert(`O produto entre os números é ${produto}`)
                break;
        case 4: if (nro2 != 0){
                    let divisao = nro1 / nro2
                    alert(`A divisão é ${divisao}`)
                }
                else {
                    alert(`Divisão por zero não é possível`)
                }
                break
        default: alert("Opção inválida")
    }
}

function exe6(){
    let escolha = document.getElementById("escolha").value
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    switch(escolha){
        case 'a': let potencia = Math.pow(nro1, nro2)
                alert(` Primeiro elevado ao segundo ${potencia}`)
                break
        case 'b': 
                let raizQ1 = Math.sqrt(nro1); 
                let raizQ2 = Math.sqrt(nro2);
                alert(`As raizes quadradas são ${raizQ1} e ${raizQ2}`); 
                break;
        case 'c':  
                let raizC1 = Math.sqrt(nro1); 
                let raizC2 = Math.sqrt(nro2);
                alert(`As raizes quadradas são ${raizC1} e ${raizC2}`); 
                break;
        default: alert("Opção inválida")
    }
}

/*
if (nro1 > nro2){
    diferenca = nro1 - nro2
}
else {
    diferenca = nro2 - nro1
}
*/

function exe10(){
    let custo = Number(document.getElementById("custo").value)
    // calcula % do distribuidor e % impostos
    let distribuidor
    let imposto
    if (custo < 12000){
        distribuidor = (custo * 5) / 100
        imposto = 0
    }
    else if (custo >= 12000 && custo <= 25000){
        distribuidor = (custo * 10) / 100
        imposto = (custo * 15) / 100
    }
    else {
        distribuidor = (custo * 15) / 100
        imposto = (custo * 20) / 100
    }
    // calcula preço final
    let final = custo + distribuidor + imposto
    alert(`O preço final ao consumidor é ${final}`)
}
function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    // calcula grupo de risco
    let risco
    if (idade < 20){
        if (peso < 60){
            risco = 9
        }
        else if (peso >= 60 && peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else {
            risco = "Impossível calcular"
        }
    }
    else if (idade >= 20 && idade <= 50){
        if (peso < 60){
            risco = 6
        }
        else if (peso >= 60 && peso <= 90){
            risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else {
            risco = "Impossível calcular"
        }
    }
    else if (idade > 50){
        if (peso < 60){
            risco = 3
        }
        else if (peso >= 60 && peso <= 90){
            risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else {
            risco = "Impossível calcular"
        }
    }
    else {
        risco = "Impossível calcular"
    }
    alert(`O grupo de risco é ${risco}`)
}