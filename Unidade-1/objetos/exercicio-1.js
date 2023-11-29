const pessoa = {
    nome:'jose',
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "juninho"],
}

if (pessoa.temCNH) {
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} de altura, possui CNH e os seguintes apelidos: ${pessoa.apelidos}`)
}else{
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} de altura, não possui CNH e os seguintes apelidos: ${pessoa.apelidos}`)
}