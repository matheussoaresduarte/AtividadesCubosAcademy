
let totalConta = 0;

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

for( let produto of cartao.produtosConsumidos){
     totalConta += produto.precoUnitario * produto.quantidade;
}

console.log(`Ola, ${cartao.nomeDoCliente} a sua fatura chegou, o valor total a ser pago é de: ${totalConta.toFixed(2 )}`);