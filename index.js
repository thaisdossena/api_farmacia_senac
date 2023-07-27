//npm install 
//npm install express - gera arquivo packagelock, framework express
//npm install nodemon 
//npm start
//ouvir - listener --> vai ouvir configurações do nosso servidor
//pegar - get == json --> banco de dados
//postar - post == json --> leitura do banco de dado e escrita
//body --> raw --> .json -->
//put

const fs = require('fs');
const express = require('express'); //puxa propriedades do framework
const server = express(); //recebe propriedades
const dados = require('./src/data/dados.json');

server.use(express.json());

//callback --> porta 3000
server.listen(3000, () => {
    console.log('Servidor está funcionando!');
});

//pasta raiz --> '/'
//handlers, manuseiam o código  --> REQ e RES
server.get('/',(req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});    

server.get('/clientes',(req, res) => {
    return res.json(dados.Clientes);
});

server.post('/clientes', (req, res) => {
    const novoUsuario = req.body;
        if (!novoUsuario.nome || !novoUsuario.telefone || !novoUsuario.email){
            return res.status(400).json({mensagem:"Dados incompletos!"});
        }//400 retorna um status ruim;

    dados.Clientes.push(novoUsuario);
    salvarDados(dados);

    return res.status(201).json({mensagem:"Novo usuário cadastrado"})//201 retorna novo usuário cadastrado;
});



server.get('/fornecedores',(req, res) => {
    return res.json(dados.Fornecedores);
});

server.get('/farmacia',(req, res) => {
    return res.json(dados.Farmacia);
});

server.get('/vendedores',(req, res) => {
    return res.json(dados.Vendedores);
});

server.get('/medicamentos',(req, res) => {
    return res.json(dados.Medicamentos);
});

server.get('/vendas',(req, res) => {
    return res.json(dados.Vendas);
});

//put === inserir dados
server.put('/dados/:id', (res, req) => {
    const clienteId = req.params.id;
    const cadastroCliente = req.body;
    
    const indiceCliente = dados.Clientes.findIndex(cliente => cliente.id === clienteId);

    if (indiceCliente === -1) {
        return res.status(404).json({mensagem:"Usuário não encontrado"})
    }

    dados.Clientes[indiceCliente] = cadastroCliente;

    salvarDados();

    return res.status(200).json({mensagem:"Usuário atualizado com sucesso", usuario:newUsuario})
});

function salvarDados(){
    fs.writeFileSync(__dirname + '/src/data/dados.json', JSON.stringify(dados, null, 2));
}






