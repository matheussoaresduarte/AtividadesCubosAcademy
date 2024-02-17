const {instrutores} = require('../bancodedados')


const listarIntrutores = (req, res) => {
    return res.status(200).json(instrutores)
};

const obterInstrutor = (req, res) => {
    const {id} = req.params;

    const instrutorSelecionado = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if(!instrutorSelecionado){
        return res.status(404).json({message: "Instrutor nao encontrado"})
    };
    return res.status(200).json(instrutorSelecionado);
}

const cadastrarInstrutores = (req, res) => {
     const {nome , email, status } = req.body;

     if(!nome){
        return res.status(400).json({message: 'O nome é obrigatorio'})
     };

     if(!email){
        return res.status(400).json({message: 'O email é obrigatorio'})
     };

     const instrutor = {
        id : instrutores.length++,
        nome : nome,
        email : email,
        status : status ?? true,
     };

     instrutores.push(instrutor);

     return res.status(201).json(instrutor)
}

module.exports = {
    listarIntrutores,
    obterInstrutor,
    cadastrarInstrutores,
}


