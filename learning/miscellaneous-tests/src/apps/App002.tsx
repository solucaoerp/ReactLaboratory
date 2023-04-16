import { useState } from "react";
import { Footer } from "../components/Learning/Footer";
import { Header } from "../components/Learning/Header";

const App002 = () => {
    const [bg, setBg] = useState("#FF0000");

    let name = "Charles";
    let age = 43;

    const handleClick = () => {
        setBg("#0000FF");
    }

    return (
        <div style={{ backgroundColor: bg }}>
            <Header name={name} age={age} city="Fortaleza" state="CE" />
            <button onClick={handleClick} >Clique aqui</button>
            <Footer />
        </div>
    )
};

export default App002;