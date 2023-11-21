// faça um programa que calcula e imprime na tela a soma dos itens de um array.

const numeros = [1, 2, 3, 4, 5, 6, 7];

let somaDoArray = 0;

for (let index = 0; index < numeros.length; index++){
    somaDoArray += numeros[index];
}

console.log(`a soma total do array é : ${somaDoArray}`);