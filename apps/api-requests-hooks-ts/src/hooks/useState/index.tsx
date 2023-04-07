import { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    console.log("Estado inicial: ", count);

    return (
        <div>
            <p>Você clicou no botão {count} vezes.</p>
            <button onClick={handleClick}>Clique aqui!</button>
        </div>
    );

}

function Pessoa() {
    const [pessoa, setPessoa] = useState({ nome: 'Charles', idade: 40 });

    function handleClick() {
        setPessoa({ nome: 'Charles Borges', idade: 41 });
    }

    console.log("Estado inicial: ", pessoa);

    return (
        <div>
            <p>Meu nome é ' {pessoa.nome} ' e estou com ' {pessoa.idade} ' anos.</p>
            <button onClick={handleClick}>Clique aqui!</button>
        </div>
    );
}

function TodoList() {
    const [todos, setTodos] = useState(['Comprar Arroz', 'Passear com o cachorro', 'Fazer trabalho escolar']);

    function handleClick() {
        setTodos([...todos, 'Nova tarefa acrescentada']);
    }

    console.log("Estado inicial: ", todos);

    return (
        <div>
            <ul>
                {todos.map(todo =>
                    <li>{todo}</li>
                )
                }
            </ul>
            <button onClick={handleClick}>Adicionar todo</button>
        </div>
    );

}

export function ExportContador() {
    return Contador();
}

export function ExportPessoa() {
    return Pessoa();
}

export function ExportTodo() {
    return TodoList();
}