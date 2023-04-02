import { useState, useEffect } from 'react';

function ContadorUseEffect() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("Estado inicial: ", count);
    }, []);

    return (
        <div>
            <p>Você clicou no botão {count} vezes.</p>
            <button onClick={handleClick}>Clique aqui!</button>
        </div>
    );
};

const ConsumerAPis = () => {
    const [resourceType, setResourceType] = useState("posts");

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.log(json));

    }, []);

    const changeResourceType = (resourceType: any) => {
        setResourceType(resourceType);
    };

    return (
        <div>
            <h1>{resourceType}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>
        </div>

    );
};

export function ExportContadorUseEffect() {
    return ContadorUseEffect();
}

export function ExportConsumerAPis() {
    return ConsumerAPis();
}