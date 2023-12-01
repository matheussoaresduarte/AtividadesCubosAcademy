const cartao = {
    nomeDoCliente: "matheus",
    idadeDoCliente: 23,
    produtosConsumidos: [
         {
        nomeDoProduto: "pao integral",
        precoUnitario: 0.25,
        quantidade: 5,
        },
            
        {
        nomeDoProduto: "pneu",
        precoUnitario: 30.00,
        quantidade: 2,
        },
        
        {
        nomeDoProduto: "chinelo",
        precoUnitario: 17.90,
        quantidade: 3,
        },
    ],
};

console.log(cartao.nomeDoCliente);
console.log(cartao.idadeDoCliente);

cartao.idadeDoCliente = 25;
console.log(cartao.idadeDoCliente);

console.log(cartao.produtosConsumidos[0].nomeDoProduto);
console.log(cartao.produtosConsumidos[2].nomeDoProduto);

console.log(cartao.produtosConsumidos[0].precoUnitario);
console.log(cartao.produtosConsumidos[2].precoUnitario);


