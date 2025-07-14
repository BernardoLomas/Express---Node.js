# 🍔 DevBurger - Cardápio Digital Gourmet

Projeto desenvolvido para atividade 1 da etapa 1 do curso Journey Backend promovido pela WebTech Network em parceria coma a LEVTY com foco em desevolvimento de habilidade em Node.js e Express.

O **DevBurger** é um protótipo de cardápio digital para uma hamburgueria fictícia, onde os usuários podem visualizar os lanches disponíveis, enviar sugestões de novos sabores e entrar em contato com a equipe.
---

## 📁 Estrutura do Projeto
devburger/
├── public/
│ ├── css/
│ │ └── styles.css
│ ├── images/
│ │ └── (imagens dos lanches e do autor)
│ ├── data/
│ │ └── lanches.json
│ └── 404.html
│
├── views/
│ ├── index.html
│ ├── contato.html
│ ├── agradecimento.html
│ └── contato-recebido.html
│
├── package.json
├── server.js
└── README.md
---

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
git clone <URL-do-repo>

2. Instale as depedências:
npm install

3. Inicie o servidor:
npm start

4. Acesso no navegador:
http://localhost:3000

🌐 Rotas Disponíveis

/	 - GET - 	Página principal com o cardápio e o formulário de sugestão
/sugestao -	GET	- Processa a sugestão e exibe uma página de agradecimento personalizada
/contato	- GET	- Página com formulário de contato
/contato	- POST -	Processa o contato e exibe os dados enviados
/contato-recebido	- GET -	Página acessada após redirecionamento do contato (PRG)
/api/lanches - GET - Retorna um JSON com os lanches cadastrados
Rota inválida	-	Exibe uma página 404 customizada

📝 Funcionalidades

✅ Visualização dos lanches disponíveis em cards estilizados;
✅ Envio de sugestões via formulário (GET);
✅ Envio de mensagens via formulário de contato (POST);
✅ Respostas personalizadas com os dados enviados;
✅ Rota de API simulada com dados em JSON;
✅ Página de erro 404;
✅ Layout responsivo com HTML, CSS, Bootstrap e Font Awesome.

👨‍💻 Autor
Bernardo Lomas
Estudante de Sistemas de Informação - PUC Minas
Apaixonado por tecnologia e desenvolvimento de software.

📚 Tecnologias Utilizadas
Node.js
Express
HTML5 + CSS3
Bootstrap 5
Font Awesome
JSON

## Prints da aplicação

### Home
![HomePage](public\images\Home.png)

### Home
![HomePage2](public\images\Home2.png)

### Formulário de contato
![Contato](public\images\Contato.png)