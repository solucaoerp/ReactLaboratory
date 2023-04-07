# DOTEC [Documentos Técnicos]

### Sobre o Terminal de Lançamentos
Integração da equipe de Trabalho em ambiente multicamadas.

### Recursos
- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger

### Linguagens Utilizadas
##### DOTEC usa vários projetos de código aberto para funcionar corretamente:
- [Spring Framework] - O Spring é um framework open source para a plataforma Java
- [React (JavaScript)] - Biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas Web.

## Instalando as Dependências do package.json
```sh
npm install
e quando necessário...
npm audit fix --force
```

## Ferramentas Utilizadas
- [VSCode]
- [Spring Tool Suite 4]
- [Banco de Dados PostgreSQL]
- [Dillinger]

### Comandos e Dependências [REACT]
#### Criando o Projeto
```sh
npx create-react-app my-app
```
#### Iniciando / Rodando o Projeto
```sh
npm start
```
#### Dependência: React Router DOM | Gerenciador de Rotas
```sh
npm install react-router-dom
ou
npm install react-router-dom@6
```

#### Dependência: Styled Components | Transforma CSS em Componentes
```sh
npm install --save styled-components
```

#### Dependência: Axios | cliente HTTP baseado em Promises para fazer requisições
```sh
npm install --save axios
```

#### Dependência: Moment | Tratamento e Manipulação de Datas/Hora
```sh
npm install --save moment
```

#### Dependência: Bootstrap | componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design
```sh
npm install --save bootstrap
npm install --save reactstrap react react-dom
```

#### Dependência: react-app-rewired / Babel | Configurar o Babel sem eject para utilizar caminhos relativos no import [Link-Path]
```sh
npm install --save react-app-rewired --dev
npm install --save babel-plugin-root-import --dev
```

#### Biblioteca Mozilla: Intl.NumberFormat | Formatação de números
```sh
const number = 123456.789;
console.log(new Intl.NumberFormat('pt-BRE', { style: 'currency', currency: 'BRL' }).format(number));
```

## Plugins
| Plugin | README |
| ------ | ------ |
| Simple React Snippets | [Link-SrS] |
| ESLint | [Link-EsT] |
| Spring Boot Extension Pack | [Link-SbE] |

> Nota: `--capt-add=SYS-ADMIN` é necessário para renderização!

## Portas Padrão
| App | Porta | URL/URI | 
| ------ | ------ | ------ |
| Servidor | 8081 | http://ip-server:8081 |
| Cliente | 3000 | http://ip-client:3000 |

Exemplo Alternativo (Servidor):
```sh
127.0.0.1:8081
```
Exemplo Alternativo (Cliente):
```sh
127.0.0.1:3000
```

## Fontes:
- [Mozilla]
- [Moment]
- [Axios]
- [Spring Framework]
- [React]
- [Styled Components]
- [Dillinger]
- [Link-Path]

## License
MIT

**.~cb**

[//]: # (Estes são links de referência usados no corpo desta nota e são removidos quando o processador de remarcação faz seu trabalho. Não há necessidade de formatar corretamente porque não deve ser visto. http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Mozilla]: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat>
   [Moment]: <https://momentjs.com/>
   [Axios]: <https://axios-http.com/docs/intro>
   [Spring Framework]: <https://spring.io/why-spring>
   [React]: <https://pt-br.reactjs.org/>
   [Styled Components]: <https://styled-components.com/docs>
   
   [VSCode]: <https://code.visualstudio.com/>
   [Spring Tool Suite 4]: <https://spring.io/>
   [Banco de Dados PostgreSQL]: <https://www.postgresql.org/>
   [Dillinger]: <https://dillinger.io/>
   
   [git-repo-url]: <https://github.com/solucaoerp/ReactLaboratory.git>
   
   [git-repo-dev]: <https://github.com/solucaoerp>
   
   [Link-SrS]: <https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets>
   [Link-EsT]: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
   [Link-SbE]: <https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack>

   [Link-Path]: <https://youtu.be/lAV1-19hHqw>