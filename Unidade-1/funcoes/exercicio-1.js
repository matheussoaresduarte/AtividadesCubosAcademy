const pessoa = {
    nome: "matheus",
    idade: 23,
    profissao: "desenvolvedor",
    altura: 1.70,
}


function apresentaPessoa(pessoa){
 console.log(`ola, meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)   
}

apresentaPessoa(pessoa);