//Importação do módulo Express
const express = require('express');

//O path ajuda o código a lidar com caminhos do sistema opreacional
const path = require('path');

const app = express();

//Porta do LocalHost definida
const PORT = 3000;

//Esse Middleware, assim como os outros serve para interceptar as requisições antes que cheguem nas rotas finais, nessa linha ela configura o Express para servir arquivos estáticos, como o HTML
app.use(express.static(path.join(__dirname, 'public')));

//Nesse Middleware, o Express vai ser permitido para interpretar dados de fomulários via Post
app.use(express.urlencoded({ extended: true}));

//Quando rodar a localhost 3000 já é enviado ao index.html
app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

//Roda a página contato
app.get('/contato' , (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));
})

//Recebe os dados de contato.html, extrai os objetos de req.body e envia uma resposta html
app.post('/contato', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;
    res.send(`
        <h1>Mensagem recebida!</h1>
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
        <p>Mensagem: ${mensagem}</p>
        <a href="/">Voltar ao início</a>
    `);
});

//Acessa os dados req.query e exibe a resposta html
app.get('/sugestao', (req, res) => {
    const { nome, ingredientes } = req.query;
    res.send(`
        <h1>Obrigado pela sugestão!</h1>
        <p>Nome de lanche: ${nome}</p>
        <a href="/"> Voltar ao cardápio</a>
    `);
});

//Le o arquivo json e simula uma API rest
app.get('/api/lanches', (req, res) => {
    const lanches = require('./public/data/lanches.json');
    res.json(lanches);
});


//Quando não encontra nenhuma rota
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})


//Inicia o servidor e mostra no console
app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});
