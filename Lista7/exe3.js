function leituraMatriz(mat){
    for(let i=0;i<6;i++){
        mat[i] = [] // cria vetor
        for(let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Informe elemento ${i+1}${j+1}`))
        }
    }
}
function calculaMenorMaior(mat){
    let menor = mat[0][0]; let maior = mat[0][0]
    let linhaMenor = 0; let colunaMenor = 0;
    let linhaMaior = 0; let colunaMaior = 0;
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (mat[i][j] > maior){
                maior = mat[i][j]; linhaMaior = i; colunaMaior = j;
            }
            if (mat[i][j] < menor){
                menor = mat[i][j]; linhaMenor = i; colunaMenor = j;
            }
        }
    }
}
function principal(){
    let matriz = []
    leituraMatriz(matriz)
    calculaMenorMaior(matriz)
}