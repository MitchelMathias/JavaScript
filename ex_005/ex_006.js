console.log('========== Bem vindo as Eleições ==========')

var idade = 18

if (idade < 16){
    console.log('Você não pode votar ainda...')
}
else if(idade < 18 || idade > 65){
    console.log('Seu voto é Opcional...')
}
else{
    console.log('Seu voto é Obrigatório...')
}