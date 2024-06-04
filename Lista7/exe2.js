function leituraMatriz(mat){
    for(let i=0;i<2;i++){ // para cada linha
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe valor da posição ${i} ${j}`))
        }
    }
}
function calculaQtde1220(mat){
    let qtde
    for(let i =0;i<2;i++){ // para cada linha
        qtde = 0
        for(let j = 0;j<4;j++){
            if (mat[i][j] >= 12 && mat[i][j] <= 20){
                qtde++
            }
        }
        alert(`A qtde de elementos na linha ${i+1} é ${qtde}`)
    }
}
function calculaMediaPares(mat){
    let soma  = 0
    let qtde = 0
    for(let i =0;i<2;i++){ // para cada linha
        for(let j = 0;j<4;j++){
            if (mat[i][j] % 2 == 0){
                soma = soma + mat[i][j]
                qtde++
            }
        }
    }
    alert(`Média de pares ${soma/qtde}`)
}
function principal(){
    let matriz = []
    leituraMatriz(matriz)
    calculaQtde1220(matriz)
    calculaMediaPares(matriz)
}