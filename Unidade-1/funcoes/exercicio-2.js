function analisaIdade(idade){
    if (idade <= 21){
        return "jovem";
    }else if(idade >= 22 && idade <= 65){
        return "adulto(a)";
    }else{
        return "idoso(a)";
    }
}                         

console.log(analisaIdade(23));