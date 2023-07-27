const fs = require('fs');
const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');


server.use(express.json());

server.listen(3000, () =>{
    console.log("Servidor está funcionando!");
});

server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});

server.get('/usuarios', (req, res) => {
    return res.json(dados.Usuarios);
});

server.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;

    if(!novoUsuario.nome || !novoUsuario.idade || !novoUsuario.curso){
        return res.status(400).json({mensagem: "Dados incompletos, tente novamente."});
    }

    dados.Usuarios.push(novoUsuario);
    salvarDados(dados);

    return res.status(201).json({mensagem: "Novo usuário cadastrado com sucesso"});
    
})

server.get('/cursos', (req, res) => {
    return res.json(dados.Cursos);
});

//put === inserir dados
server.put('/usuarios/:id',  (req, res) => {
    const usuarioId = req.params.id;
    const newUsuario = req.body;

    const indiceUsuario = dados.Usuarios.findIndex(usuario => usuario.id === usuarioId);

    if (indiceUsuario === -1){
        return res.status(404).json({mensagem:"Usuário não encontrado"});
    }
    
    dados.Usuarios[indiceUsuario] = newUsuario;

    salvarDados();

    return res.status({mensagem: "Usuário atualizado com sucesso", usuario:newUsuario});
})

function salvarDados(){
    fs.writeFileSync(__dirname + '/src/data/dados.json', JSON.stringify(dados));
}