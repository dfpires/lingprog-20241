function exe1(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    let imc = peso / (altura * altura)

    alert("Imc é " + imc.toFixed(2))
}