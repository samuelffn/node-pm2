# node-pm2

Aplicação simples em node apenas para entender o funcionamento do pm2.  

## Comandos para criação do projeto  
1) mkdir node-api (que será o nome do diretório do projeto)  
2) cd node-api  
3) npm init -y (comando para criação do projeto)  
4) ls (observe que foi criado um arquivo chamado package.json)  
  
## Comando para executar o projeto  
Esta aplicação pode ser executada de 3 formas diferentes:  
1- Executando só com o node: **node server.js**  
2- Usando o nodemon: **npm run dev**  
    2.1- Para parar utilize o Ctrl + c    
3- Startando utilizando o pm2:  **pm2 start app.js**  
    3.1- Parando utilizando o pm2: **pm2 stop app.js**  

## Acessar o projeto pelo navegador  
ip_da_aplicacao:porta  
Ex.:  **localhost:3001/api**  
  
## Dependências utilizadas no projeto  
npm install express  
npm install -D nodemon 
npm install -g pm2  
  
## express
**npm install express**
O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. É com o Express que criamos a API do projeto.  
  
## nodemon  
**npm install -D nodemon**  
Dependência para ser utilizada apenas no ambiente de desenvolvimento, por isso o -D.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade: **"dev": "nodemon server.js"**  
3) No terminal executa a aplicação usando o comando: **npm run dev**  
Obs.: O npm run serve para executar os comandos que estão em script   
  
## pm2  
**npm install -g pm2**  
Link: https://www.npmjs.com/package/pm2  
o -g na instalação significa Global, ou seja, poderemos executar o pm2 de qualquer lugar, ou seja, qualquer outra aplicação e não apenas nesta.   
O pm2 é utilizado para gerenciar processos de uma aplicação, cuidando do start, stop, restart, logs, monitoramento da aplicação, dentre outras coisas. Para mais informações consulte o link deixado acima.  
Com o pm2 você sua aplicação não fica dependente do terminal para funcionar. Você pode fechar o terminal e ela vai continuar funcionando. Você terá total autonomia, podendo mandar iniciar ou para quando quiser. Neste caso, não precisaríamos mais utilizar o nodemon para startar a aplicação e nem o Ctrl + c para parar a mesma.  
PM2 é um gerenciador de processo de produção para aplicativos Node.js com um balanceador de carga integrado. Ele permite que você mantenha os aplicativos ativos para sempre, recarregue-os sem tempo de inatividade e facilita as tarefas comuns de administração do sistema.   
Não é ideal para usar durante o desenvolviento, porque diferente do nodemon, cada alteração feita no código será necessário parar e depois iniciar ou será necessário utilizar o reload all para que o sistema seja recarregado. É possível iniciar o pm2 utilizando variáveis de ambiante, como por exemplo Dev, Prod, etc.     
### Alguns comandos:  
**pm2 start app.js**: Vai iniciar o serviço da aplicação  
**pm2 stop app.js**: Vai parar o serviço da aplicação  
**pm2 reload all**: Vai restartar o serviço da aplicação  
**pm2 delete all**: Apaga todo o histórico de scripts executados  
**pm2 logs**:  Exibe os logs da aplicação. Para fechar os logs: Ctrl + c    

Faça um teste, mande executar a aplicação com o start e feche o terninal: Você verá que a aplicação continua funcionando no navegador.  
Depois mande a aplicação para de executar com o stop: Você verá que a aplicação parou de funcionar no navegador.  
