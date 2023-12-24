let string = "esta string vai ser invertida";

function inverteString(string) {
    let texto = string.split("");
    texto.reverse();
    let textoInvertido = "";
    for(let letra of texto){
        textoInvertido += letra
    };
    return console.log(textoInvertido);
};

inverteString(string);