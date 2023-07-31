//npm install 
//npm install express - gera arquivo packagelock, framework express
//npm install nodemon 
//npm start
//ouvir - listener --> vai ouvir configurações do nosso servidor
//pegar - get == json --> banco de dados
//postar - post == json --> leitura do banco de dado e escrita
//body --> raw --> .json -->

//CRUD - C(create), R(read, nosso GET lendo dados), U(nosso PUT inserindo atualizações), D(DELETE)

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

// //clientes
// server.get('/clientes',(req, res) => {
//     return res.json(dados.Clientes);
// });

// //clientes post
// server.post('/clientes', (req, res) => {
//     const novoUsuario = req.body;
//         if (!novoUsuario.nome || !novoUsuario.telefone || !novoUsuario.email){
//             return res.status(400).json({mensagem:"Dados incompletos!"});
//         }//400 retorna um status ruim;

//     dados.Clientes.push(novoUsuario);
//     salvarDados(dados);

//     return res.status(201).json({mensagem:"Novo usuário cadastrado"})//201 retorna novo usuário cadastrado;
// });

// //clientes put
// server.put('/clientes/:id', (req, res) => {
//     const clienteId = parseInt(req.params.id);
//     const cadastroCliente = req.body;
    
//     const indiceCliente = dados.Clientes.findIndex(cliente => cliente.id === clienteId);

//     if (indiceCliente === -1) {
//         return res.status(404).json({mensagem:"Usuário não encontrado"})
//     }

//     dados.Clientes[indiceCliente].nome = cadastroCliente.nome || dados.Clientes[indiceCliente].nome;

//     dados.Clientes[indiceCliente].endereco = cadastroCliente.endereco || dados.Clientes[indiceCliente].endereco;

//     dados.Clientes[indiceCliente].email = cadastroCliente.email || dados.Clientes[indiceCliente].email;

//     dados.Clientes[indiceCliente].telefone = cadastroCliente.telefone || dados.Clientes[indiceCliente].telefone;
    
//     salvarDados(dados);

//     return res.json({mensagem:"Usuário atualizado com sucesso", cliente:dados.Clientes[indiceCliente]});
// });

// //clientes delete
// server.delete('/clientes/:id', (req, res) => {
//     const clienteId = parseInt(req.params.id);
    
//     dados.Clientes = dados.Clientes.filter(cliente => cliente.clienteId !== clienteId);

//     salvarDados(dados);
//     return res.status(200).json({ mensagem: "Usuário excluido com sucesso."});
// });

//fornecedores
server.get('/fornecedores',(req, res) => {
    return res.json(dados.Fornecedores);
});

//fornecedores post
server.post('/fornecedores', (req, res) => {
    const novoFornecedor = req.body;
        if (!novoFornecedor.nome || !novoFornecedor.telefone || !novoFornecedor.email){
            return res.status(400).json({mensagem:"Dados incompletos!"});
        }

    dados.Fornecedores.push(novoFornecedor);
    salvarDados(dados);

    return res.status(201).json({mensagem:"Novo fornecedor cadastrado"})
});

//fornecedores put
server.put('/fornecedores/:id', (req, res) => {
    const fornecerdorId = parseInt(req.params.id);
    const cadastroFornecedor = req.body;
    
    const indiceFornecedor = dados.Fornecedores.findIndex(fornecedor => fornecedor.id === fornecerdorId);

    if (indiceFornecedor === -1) {
        return res.status(404).json({mensagem:"Fornecedor não encontrado"})
    }

    dados.Fornecedores[indiceFornecedor].nome = cadastroFornecedor.nome || dados.Fornecedores[indiceFornecedor].nome;

    dados.Fornecedores[indiceFornecedor].endereco = cadastroFornecedor.endereco || dados.Fornecedores[indiceFornecedor].endereco;

    dados.Fornecedores[indiceFornecedor].email = cadastroFornecedor.email || dados.Fornecedores[indiceFornecedor].email;

    dados.Fornecedores[indiceFornecedor].telefone = cadastroFornecedor.telefone || dados.Fornecedores[indiceFornecedor].telefone;
    
    salvarDados(dados);

    return res.json({mensagem:"Fornecedor atualizado com sucesso", fornecedor:dados.Fornecedores[indiceFornecedor]});
});

//fornecedores delete
server.delete('/fornecedores/:id', (req, res) => {
    const fornecedorId = parseInt(req.params.id);
    
    dados.Fornecedores = dados.Fornecedores.filter(fornecedor => fornecedor.fornecedorId !== fornecedorId);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Usuário excluido com sucesso."});
});

//farmácia
server.get('/farmacia',(req, res) => {
    return res.json(dados.Farmacia);
});

//farmácia post
server.post('/farmacia', (req, res) => {
    const novaFarmacia = req.body;
        if (!novaFarmacia.nome || !novaFarmacia.telefone || !novaFarmacia.email){
            return res.status(400).json({mensagem:"Dados incompletos!"});
        }

    dados.Clientes.push(novaFarmacia);
    salvarDados(dados);

    return res.status(201).json({mensagem:"Novo usuário cadastrado"})
});

//farmácia put 
server.put('/farmacia/:id', (req, res) => {
    const farmaciaId = parseInt(req.params.id);
    const cadastroFarmacia = req.body;
    
    const indiceFarmacia = dados.Farmacia.findIndex(farmacia => farmacia.id === farmaciaId);

    if (indiceFarmacia === -1) {
        return res.status(404).json({mensagem:"Usuário não encontrado"})
    }

    dados.Farmacia[indiceFarmacia].nome = cadastroFarmacia.nome || dados.Farmacia[indiceFarmacia].nome;

    dados.Farmacia[indiceFarmacia].endereco = cadastroFarmacia.endereco || dados.Farmacia[indiceFarmacia].endereco;

    dados.Farmacia[indiceFarmacia].email = cadastroFarmacia.email || dados.Farmacia[indiceFarmacia].email;

    dados.Farmacia[indiceFarmacia].telefone = cadastroFarmacia.telefone || dados.Farmacia[indiceFarmacia].telefone;
    
    salvarDados(dados);

    return res.json({mensagem:"Usuário atualizado com sucesso", farmacia:dados.Farmacia[indiceFarmacia]});
});

//farmácia delete
server.delete('/farmacia/:id', (req, res) => {
    const farmaciaId = parseInt(req.params.id);
    
    dados.Farmacia = dados.Farmacia.filter(farmacia => farmacia.farmaciaId !== farmaciaId);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Usuário excluido com sucesso."});
});

//vendedores
server.get('/vendedores',(req, res) => {
    return res.json(dados.Vendedores);
});

//vendedores post
server.post('/vendedores', (req, res) => {
    const novoVendedor = req.body;
        if (!novoVendedor.nome || !novoVendedor.telefone || !novoVendedor.email){
            return res.status(400).json({mensagem:"Dados incompletos!"});
        }

    dados.Vendedores.push(novoVendedor);
    salvarDados(dados);

    return res.status(201).json({mensagem:"Novo usuário cadastrado"})
});

//vendedores put
server.put('/vendedores/:id', (req, res) => {
    const vendedorId = parseInt(req.params.id);
    const cadastroVendedor = req.body;
    
    const indiceVendedor = dados.Vendedores.findIndex(v => v.id === vendedorId);

    if (indiceVendedor === -1) {
        return res.status(404).json({mensagem:"Usuário não encontrado"})
    }

    dados.Vendedores[indiceVendedor].nome = cadastroVendedor.nome || dados.Vendedores[indiceVendedor].nome;

    dados.Vendedores[indiceVendedor].endereco = cadastroVendedor.endereco || dados.Vendedores[indiceVendedor].endereco;

    dados.Vendedores[indiceVendedor].email = cadastroVendedor.email || dados.Vendedores[indiceVendedor].email;

    dados.Vendedores[indiceVendedor].telefone = cadastroVendedor.telefone || dados.Vendedores[indiceVendedor].telefone;
    
    salvarDados(dados);

    return res.json({mensagem:"Usuário atualizado com sucesso", cliente:dados.Vendedores[indiceVendedor]});
});

//vendedores delete
server.delete('/vendedores/:id', (req, res) => {
    const vendedorId = parseInt(req.params.id);
    
    dados.Vendedores = dados.Vendedores.filter(v => v.vendedorId !== vendedorId);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Usuário excluido com sucesso."});
});


//medicamentos
server.get('/medicamentos',(req, res) => {
    return res.json(dados.Medicamentos);
});

//medicamentos post
server.post('/medicamentos', (req, res) => {
    const novoMedicamento = req.body;
        if (!novoMedicamento.nome || !novoMedicamento.fabricante || !novoMedicamento.preco || !novoMedicamento.quantidade){
            return res.status(400).json({mensagem:"Dados incompletos!"});
        }

    dados.medicamentos.push(novoMedicamento);
    salvarDados(dados);

    return res.status(201).json({mensagem:"Novo usuário cadastrado"})
});

//medicamentos put
server.put('/medicamentos/:id', (req, res) => {
    const medicamentoId = parseInt(req.params.id);
    const cadastroMedicamento = req.body;
    
    const indiceMedicamento = dados.Medicamentos.findIndex(medicamentos => medicamentos.id === medicamentoId);

    if (indiceMedicamento === -1) {
        return res.status(404).json({mensagem:"Usuário não encontrado"})
    }

    dados.Medicamentos[indiceMedicamento].nome = cadastroMedicamento.nome || dados.Medicamentos[indiceMedicamento].nome;

    dados.Medicamentos[indiceMedicamento].fabricante = cadastroMedicamento.fabricante || dados.Medicamentos[indiceMedicamento].fabricante;

    dados.Medicamentos[indiceMedicamento].preco = cadastroMedicamento.preco || dados.Medicamentos[indiceMedicamento].preco;

    dados.Medicamentos[indiceMedicamento].quantidade = cadastroMedicamento.quantidade || dados.Medicamentos[indiceMedicamento].quantidade;
    
    salvarDados(dados);

    return res.json({mensagem:"Usuário atualizado com sucesso", medicamento:dados.Medicamentos[indiceMedicamento]});
});

//medicamentos delete
server.delete('/vendas/:id', (req, res) => {
    const medicamentoId = parseInt(req.params.id);
    
    dados.Medicamentos = dados.Medicamentos.filter(m => m.medicamentoId !== medicamentosId);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Usuário excluido com sucesso."});
});

//vendas
server.get('/vendas',(req, res) => {
    return res.json(dados.Vendas);
});

//vendas post
server.post('/vendas', (req, res) => {
    const novaVenda = req.body;
        if (!novaVenda.id_medicamento || !novaVenda.id_cliente || !novaVenda.data){
            return res.status(400).json({mensagem:"Dados incompletos!"});
        }

    dados.Vendas.push(novaVenda);
    salvarDados(dados);

    return res.status(201).json({mensagem:"Novo usuário cadastrado"})
});

//vendas put
server.put('/dados/:id', (req, res) => {
    const vendasId = parseInt(req.params.id);
    const cadastroVendas = req.body;
    
    const indiceVendas = dados.Vendas.findIndex(v => v.id === vendasId);

    if (indiceVendas === -1) {
        return res.status(404).json({mensagem:"Usuário não encontrado"})
    }

    dados.Vendas[indiceVendas].id_medicamento = cadastroVendas.id_medicamento || dados.Vendas[indiceVendas].id_medicamento;

    dados.Vendas[indiceVendas].endereco = cadastroVendas.endereco || dados.Vendas[indiceVendas].endereco;

    dados.Vendas[indiceVendas].data = cadastroVendas.data || dados.Vendas[indiceVendas].data;

    dados.Vendas[indiceVendas].id_cliente = cadastroVendas.id_cliente || dados.Vendas[indiceVendas].id_cliente;
    
    salvarDados(dados);

    return res.json({mensagem:"Usuário atualizado com sucesso", cliente:dados.Vendas[indiceVendas]});
});

//vendas delete
server.delete('/dados/:id', (req, res) => {
    const vendasId = parseInt(req.params.id);
    
    dados.Vendas = dados.Vendas.filter(v => v.vendasId !== vendasId);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Usuário excluido com sucesso."});
});


//função retorna dados
function salvarDados(){
    fs.writeFileSync(__dirname + '/src/data/dados.json', JSON.stringify(dados, null, 2));
}





