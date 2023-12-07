
const pessoa = {
    nome: "matheus",
    idade: 23,
    profissao: "desenvolvedor",
    altura: 1.70,
}

function analisaIdade(idade){
    if (idade <= 21){
        return "jovem";
    }else if(idade >= 22 && idade <= 65){
        return "adulto(a)";
    }else{
        return "idoso(a)";
    }
}                      




function apresentaPessoa(pessoa){
 console.log(`ola, meu nome é ${pessoa.nome}, sou um ${analisaIdade(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)   
}

apresentaPessoa(pessoa)