# lista-atividades

﻿# back-end

Você precisa apenas acessar o arquivo config/ConfigurationBd.json

E configurar o  banco de dados de sua escolha.

para rodar o projeto 

Primeiro rode o comando **npm i -f**

Um banco de dados ja deve está criado, logo em seguida rode o comando **npx sequelize-cli db:migrate**

Dessa forma o mesmo ira criar as tabelas do projeto para você.

no termino rode o comando **npm run dev**

o arquivo .env contem algumas configurações adicionais, o mesmo tem um parametro chamado **environmentType** onde pode se definir o comportamento do projeto, principalmente onde e qual o banco será usado.

environmentType=dev --**development**
environmentType=pro --**production**
environmentType=test --**test**

caso não informado será usado dev como padrão.


﻿# front-end

O projeto em si está ok, não nessessario efetuar muitas configurações.

Apenas roda o comando **npm i -f**

e logo em seguida **npm run start**

o mesmo deve abrir uma pagina web no seu navegador na porta **4200**
