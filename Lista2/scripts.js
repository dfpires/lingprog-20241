function exe1(){
    // converte em número o valor fornecido pelo usuário
    let nro1 = Number(document.getElementById("nro1").value)
    // converte em número o valor fornecido pelo usuário
    let nro2 = Number(document.getElementById("nro2").value)

    let diferenca = nro1 - nro2

    alert("Diferença é " + diferenca)
}
function exe2(){
    // converte em número o valor fornecido pelo usuário
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let imc = peso / (altura * altura)
    alert(`O Seu IMC é ${imc.toFixed(2)}`)
    let classificacao
    let grau
    if (imc < 18.5 && imc >= 0){
        classificacao = "magreza"
        grau = 0
    }
    else if (imc >= 18.5 && imc < 25){
        classificacao = "normal"
        grau = 0
    }
    else if (imc >= 25 && imc < 30){
        classificacao = "sobrepeso"
        grau = 1
    }
    else if (imc >= 30 && imc < 40){
        classificacao = "Obesidade"
        grau = 2
    }
    else if (imc >= 40){
        classificacao = "Obesidade Grave"
        grau = 3
    }
    else {
        classificacao = "Valores não permitem classificar"
        grau = "Valores não permitem classificar"
    }
    alert(`A classificação é ${classificacao} e o grau é ${grau}`)
}
function exe9(){
    let bMenor = Number(document.getElementById("bMenor").value)
    let bMaior = Number(document.getElementById("bMaior").value)
    let altura = Number(document.getElementById("altura").value)

    // calcula área do trapézio
    let area = ((bMenor + bMaior) * altura) / 2

    alert("Área do trapézio " + area)
    // usando template string
    alert(`Área do trapézio ${area}`)
}