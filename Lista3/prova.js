function prova(){
    let opcao;
    let teams = 0; let email = 0; let papel = 0; let tantoFaz = 0
    do {
        opcao = prompt(`Informe T (Teams), P(Papel), E(Email) ou F(Tanto faz)`).toUpperCase()
        switch(opcao){
            case 'T': teams++; break;
            case 'P': papel++; break;
            case 'E': email++; break;
            case 'F': tantoFaz++; break;
            case 'X': alert("Votação encerrada")
            default: alert("Opção inválida")
        }
    }
    while (opcao != 'X')
    let total = teams + papel + email + tantoFaz
    alert(`Total de votos Teams ${teams}, Papel ${papel}, Email ${email} e Tanto faz ${tantoFaz}. % de votos em Tanto Faz ${tantoFaz/ total * 100}`)
    let conta = 1; let troca
    while (conta < 4){
        if (teams > papel){
            troca = teams; teams = papel; papel = troca
        }
        if (papel > email){
            troca = papel; papel = email; email = troca;
        }
        if (email > tantoFaz){
            troca = email; email = tantoFaz; tantoFaz = troca;
        }
        conta++
    }
    alert(`Ordem crescente: ${teams}, ${papel}, ${email} ${tantoFaz}`)
}
