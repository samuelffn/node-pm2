# node-pm2

Aplicação simples em node apenas para entender o funcionamento do pm2.  

## Comandos para criação do projeto  
1) mkdir node-api (nome do diretório do projeto)  
2) cd node-api  
3) npm init -y (comando para criação do projeto)  
4) ls  
  
## Comando para executar o projeto  
Executando só com o node: **node server.js**  
Usando o nodemon: **npm run dev**  
  
## Acessar o projeto pelo navegador  
ip_da_aplicacao:porta  
Ex.:  **localhost:3001**  
  
## Dependências utilizadas no projeto  
npm install express  
npm install -D nodemon  
npm install cors  

## nodemon  
**npm install -D nodemon**  
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade: **"dev": "nodemon server.js"**  
3) No terminal executa a aplicação usando o comando: **npm run dev**  
Obs.: O npm run serve para executar os comandos que estão em script  
4) Ao executar a aplicação pela primeira vez ela vai criar o banco de dados.  

## cors  
**npm install cors**  
Permite que outros endereços acessem nossa API. Isso serve pra quando nossa aplicação estiver hostadada em algum servidor usando algum domínio. Basicamente ele previne o acesso de domínios que não sáo o mesmo domínio de outros softwares da nossa API. 
