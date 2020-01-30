# spell-it
  Servidor HTTP que recebe uma requisição com um número e retorna este por extenso.

  Neste projeto foram utilizados:
  - express.js um framework para o servidor http;
  - chai uma biblioteca asserções para utilizar nos testes;
  - chai-http uma biblioteca asserções HTTP para utilizar nos testes;
  - mocha um framework para realizar os testes;
  - nodemon utilizado para reinicializar o servidor a cada alteração no ambiente local;

## Requisitos
  - Node.js versão 13.6.0
  - NPM versão 6.13.6

## Inicialização

  Instalar dependencias:

```bash
$ npm install
```

  Inicializar o servidor:

```bash
$ npm start
```

## Utilização

  Com o servidor inicializado será possível utilizar as rotas:

  http://localhost:8000/number/{numero}

  Onde {numero} é o numeral que deseja enviar para o servidor retorná-lo por extenso em idioma Português.

  http://localhost:8000/number/{idioma}/{numero}

  Onde {idioma} representa o idioma nos formatos:
    - pt-BR
    - en-US
    - es-ES

  E {numero} é o numeral que deseja enviar para o servidor retorná-lo por extenso.

## Testes

  Instalar dependencias:

```bash
$ npm install
```

  Executar os testes:

```bash
$ npm test
```