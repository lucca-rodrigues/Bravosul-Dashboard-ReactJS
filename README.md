# Bravosul Custom Dashboard

Oi tudo bem?
Meu nome é Bravosul Custom Dashboard!

O meu objetivo aqui é ser útil para o seu negócio, estou apto para:
- Listar seus produtos
- Criar seus produtos
- Editar seus produtos
- Remover seus produtos


Futuramente eu posso ter novas funcionalidades como:
- Exibir preço dos produtos
- Exibir estoque
- Ter integração com um método de pagamento
- virar uma loja online (E-commerce)


Mas vamos lá, vou te mostrar como funciona o meu passo a passo!

# Instruções:

- Para me instalar na sua máquina basta fazer um
```sh
git clone git@github.com:lucca-rodrigues/Bravosul-Dashboard-ReactJS.git
```

Depois entrar na pasta do projeto com:
```sh
cd Bravosul-Dashboard-ReactJS
```

obs: se você achar este nome muito complicado, você pode alterar o nome da pasta tranquilamente que eu não vou ficar triste 🙂

Agora que ja entrou na pasta, basta rodar
```sh
yarn install ou npm install
```

Depois que tiver instalado todas as dependências basta rodar
```
sh yarn start ou spm start
```

logo uma página será aberta em seu navegador com a url: http://localhost:3000 se não abrir automaticamente você pode clicar no link que será exibido no termal

Pronto agora eu ja estou te vendo! 🙂😉

Como você é novo aqui eu vou te explicar, eu funciono com autenticação de usuário com uma API da Bravosul.

Você dve estar vendo uma listagem de produtos né?
Essa listagem é de todos os produtos cadastrados e ativos dentro da plataforma, mas como você precisa acessar o painel vamos lá:

No canto superior direito, tem um botão com um link para "Área de membros", basta clicar neste botão e acessar o login com os seguintes dados:

```sh
{
  "email": "dev@bravosul.com.br",
  "password": "Brvsl@2020"
}
```
Clique em entrar e você ja deverá estar visualizando uma tela assim:

<img src="./src/Assets/dashboard.jpeg" alt="Dashboard" height="350">

Esta é a listagem de Produtos que você tem, existe uma separação de produtos ativos e inativos para facilitar o seu gerenciamento!

Nesta tela você pode ver os produtos, visualizar os detalhes dele, editar e remover. Basta clicar nos ícones respectivos que as ações serão executadas.

Obs: A MINHA API PODE FICAR INSTÁVEL AS VEZES, SE OCORRER ALGUM ERRO DE TOKEN VOCÊ PRECISA FAZER UM LOGGOUT DO SISTEMA E ENTRAR NOVAMENTE

Como eu sou uma versão incial, pode ser que ocorra alguns bugs mas por favor tenha paciência comigo pois estou tentando melhorar 😅😄.


# Dashboard:

  O Dashboard é bem simples, basta navegar no menu lateral entre "home" e "add new" para acessar as telas.
  Algumas navegaç~eos são feitas diretamente na listagem dos produtos, por isso o meu menú só tem os itens essênciais.

# Layout

O meu layout foi projetado pensando apenas na identidade visual da Bravosul e seu site atual, mas para uma v2.0 eu ja devo ter alguns paranauê de  UI e UX para melhorar ainda mais.


# Screenshots
Aqui vai algumas imagens minhas:

<img src="./src/Assets/list-products.jpeg" alt="Dashboard" height="350">
<img src="./src/Assets/login.jpeg" alt="Dashboard" height="350">
<img src="./src/Assets/dashboard.jpeg" alt="Dashboard" height="350">
<img src="./src/Assets/delete-products.jpeg" alt="Dashboard" height="350">
<img src="./src/Assets/create-and-edit.jpeg" alt="Dashboard" height="350">
<img src="./src/Assets/products-details.jpeg" alt="Dashboard" height="350">

