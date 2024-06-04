function leituraMatriz(mat){
    for(let i=0;i<3;i++){ // para cada linha
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe valor da posição ${i} ${j}`))
        }
    }
}

function calculaQtde1520(mat){
    let qtde = 0
    for(let i =0;i<3;i++){
        for(let j = 0;j<5;j++){
            if (mat[i][j] >= 15 && mat[i][j] <= 20){
                qtde++
            }
        }
    }
    alert(`A qtde de elemento é ${qtde}`)
}

function principal(){
    let matriz = []
    leituraMatriz(matriz)
    calculaQtde1520(matriz)
}