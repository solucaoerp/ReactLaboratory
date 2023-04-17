import { useState } from "react";
import { Footer } from "../components/Learning/Footer";
import { Header } from "../components/Learning/Header";

const App002 = () => {
    const [bg, setBg] = useState("#0000FF");
    const [name, setName] = useState("Charles");
    const [age, setAge] = useState(43);

    const [list, setList] = useState([
        "conteudo 001 da lista",
        "conteudo 002 da lista",
        "conteudo 003 da lista",
    ]);

    const handle20 = () => {
        setAge(20);
        setBg("#00ff00");
    }

    const handle43 = () => {
        setAge(43);
        setBg("#0000FF");
    }

    return (
        <div style={{ backgroundColor: bg }}>
            <Header name={name} age={age} city="Fortaleza" state="CE" />

            {age === 43 && (
                <>
                    <button onClick={handle20} >Estou com 20 anos.</button>
                    demais informações de 20 anos...
                </>
            )}

            {age === 20 &&
                <button onClick={handle43} >Estou com 43 anos.</button>
            }

            <hr />
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <hr />

            <Footer />
        </div>
    )
};

export default App002;