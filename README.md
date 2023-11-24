# mba-full-06-grupo-02

Grupo número da disciplina de Full Digital Project - Bootcamp

- Pasta db:
    - Conteúdo do container MySQL
    - Conteúdo do container phpMyAdmin que permite fazer administração do banco MySQL atráves de página "localhost:8080".
    - Script start.sh: Contém o comando docker-compose para criar e iniciar todos os serviços.
        Deve ser iniciado com ./start.sh, no terminal, dentro da pasta db.
    - Script stop.sh: Contém o comando docker-compose para encerrar e remover todos os serviços.
        Deve ser iniciado com ./stop.sh, no terminal, dentro da pasta db.

- Pasta prisma_ORM
    - Conteúdo da modelagem do banco de dados no arquivo schema.prisma.
    - Conteúdo das queries no arquivo index.ts dentro da pasta src.          


Back-end comandos
-

```sh
npm install
```

```sh
npx prisma migrate dev
```

```sh
npm run start:dev
```


Front-end comandos
-

```sh
npm install
```

```sh
npm run dev
```


Links Sistema
-

PHP MyAdmin => http://localhost:8080

Banco de dados => http://localhost:3306

Back-end => http://localhost:3030

Front-end => http://localhost:3000

