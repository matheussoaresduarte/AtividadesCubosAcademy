 const palavra = "a barata da vizinha"
 
 let contadorDeA = 0;

 for (let letra of palavra){ 
    if (letra === "a"){
        contadorDeA ++;
    }
}

console.log(`o numero de vezes que a letra A aparece em ${palavra} é: ${contadorDeA}`);