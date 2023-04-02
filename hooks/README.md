# Requisições

## XMLHttpRequest

É uma API nativa do JavaScript para fazer requisições HTTP assíncronas. Ele retorna uma resposta que pode ser tratada com onload e onerror para lidar com os dados recebidos.

Exemplo:

```javascript
function makeRequest(url: string, callback: (data: any) => void) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    } else {
      console.error(`Request failed. Status: ${xhr.status}`);
    }
  };
  xhr.send();
}

```

No exemplo acima usamos a classe XMLHttpRequest para fazer uma requisição GET para a URL especificada. No evento onload, estamos verificando se a requisição foi bem sucedida (status 200) e, se for o caso, estamos convertendo o resultado em um objeto JSON e passando o objeto para o callback especificado.

IMPORTANTE! É importante ressaltar que o XMLHttpRequest é uma tecnologia antiga e, embora ainda possa ser usada, existem opções mais modernas e fáceis de usar, como o fetch e o axios. As demais serão apresentadas na sequência.

## fetch

O método fetch é uma API nativa do JavaScript que permite fazer requisições HTTP. Ele retorna uma promise que pode ser tratada com then() e catch() para lidar com os dados recebidos. Ele permite que você envie e receba dados de um servidor de forma assíncrona. É uma alternativa simples e leve ao Axios.

Exemplo: 

```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

```

No exemplo acima, usamos a função fetch para fazer uma requisição GET para a URL "https://api.example.com/data". Em seguida, convertemos a resposta em JSON usando o método json(). Finalmente, exibimos os dados recebidos no console.

## fetch com hooks

O Fetch pode ser utilizado com os Hooks do React, o que torna o código mais legível e fácil de manter. Com os Hooks, podemos criar uma função que faz a requisição e armazena os dados no estado do componente.

Existem vários hooks em React que utilizam o método fetch para fazer requisições HTTP. Alguns exemplos são useEffect, useReducer, useContext, useCallback, entre outros. Esses hooks são muito úteis para fazer requisições HTTP em componentes React.

Exemplo: 

```javascript
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

```

No exemplo acima, usamos o Hook useEffect para fazer a requisição no momento em que o componente é montado. Em seguida, estamos armazenando os dados recebidos no estado do componente usando o Hook useState. Finalmente, renderizamos os dados na tela usando um loop.

## Axios

O Axios é uma biblioteca externa que simplifica o processo de fazer requisições HTTP. Ele oferece uma interface simples e poderosa para trabalhar com APIs.

É uma biblioteca muito utilizada em React para fazer requisições HTTP. Ela é fácil de usar e pode ser configurada globalmente para utilizar uma URL base e interceptadores. O axios também suporta a criação de requisições GET, POST, PUT, DELETE, entre outras, e possui uma grande quantidade de opções para lidar com os dados recebidos.

Exemplo:

```javascript
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/data")
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

```

No exemplo acima estamos usando a biblioteca Axios para fazer uma requisição GET para a URL "https://api.example.com/data". Na sequência armazenamos os dados recebidos no estado do componente usando o Hook useState. Finalmente, renderizamos os dados na tela usando um loop.

# Hooks

Hooks são uma nova adição ao React 16.8 que permitem que você use o estado e outras funcionalidades do React sem escrever uma classe. Eles são funções que permitem que você use o estado e outros recursos do React em componentes funcionais.

Com os Hooks, você pode usar o estado em um componente funcional, permitindo que ele tenha um comportamento dinâmico, como um componente de classe. Isso ajuda a simplificar o código, tornando-o mais fácil de entender e manter.

## useState Hook

É usado para adicionar estado a um componente funcional no React. Ele retorna um par de valores: o valor atual do estado e uma função que pode ser usada para atualizar esse estado.

Para usar o useState, você pode declará-lo no início do seu componente funcional, passando o valor inicial do estado como argumento. Por exemplo:

```javascript
import { useState } from 'react';

function MeuComponente() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou no botão {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui!</button>
    </div>
  );
}

```


## Documentos e Artigos Recomendados

- [React: StrictMode (OLD Docs)](https://legacy.reactjs.org/docs/strict-mode.html "React: StrictMode (OLD Docs)")
- [React: StrictMode (NEW Docs)](https://react.dev/reference/react/StrictMode "React: StrictMode (NEW Docs)")
- [Por que o useEffect é executado duas vezes?](https://josiaspereira.com.br/por-que-o-useeffect-e-executado-duas-vezes/ "Por que o useEffect é executado duas vezes?")

## Vídeos Recomendados

- [JavaScript Promise - entenda a base](https://youtu.be/7KFduI7VLOM "JavaScript Promise - entenda a base")

