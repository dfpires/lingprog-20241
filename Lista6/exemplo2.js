// parâmetros de uma função
// passagem de parâmetro por valor (passando um tipo de dado primitivo)
/*function soma10(a){
    a = a + 10
}
let b = 20
soma10(b)
console.log(b) // qual o valor de b que será exibido?*/

// passagem de parâmetro por referência (passando um objeto)
function soma10(a){ // a é um vetor
   for(let i=0;i<a.length;i++){
        a[i] = a[i] + 10
   }
}

let b = [1, 2, 3, 4, 5]
soma10(b)
console.log(b)

