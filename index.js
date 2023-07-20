//npm install 
//npm install express - gera arquivo packagelock, framework express
//npm install nodemon 
//ouvir - listener --> vai ouvir configurações do nosso servidor
//pegar - get == json --> banco de dados
//postar - post == json --> leitura do banco de dado e escrita


const express = require('express'); //puxa propriedades do framework
const server = express(); //recebe propriedades
const dados = require('./src/data/dados.json');

//pasta raiz --> '/'
//handlers, manuseiam o código  --> REQ e RES
server.get('/',(req, res) => {
});    

server.get('/dados',(req, res) => {
    return res.json(dados.Clientes);
});



//callback --> porta 3000
server.listen(3000, () => {
    console.log('Servidor está funcionando!');
});





