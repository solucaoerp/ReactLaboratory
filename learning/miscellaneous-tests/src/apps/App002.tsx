import { useState } from "react";
import { Footer } from "../components/Learning/Footer";
import { Header } from "../components/Learning/Header";

const App002 = () => {
    const [bg, setBg] = useState("#FF0000");
    const [name, setName] = useState("Charles");
    const [age, setAge] = useState(43);

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

            <Footer />
        </div>
    )
};

export default App002;