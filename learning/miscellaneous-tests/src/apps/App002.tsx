import { Footer } from "../components/Learning/Footer";
import { Header } from "../components/Learning/Header";

const App002 = () => {
    let name = "Charles";
    let age = 43;

    const handleClick = () => {
        alert("handleClick");
    }

    return (
        <div>
            <Header name={name} age={age} city="Fortaleza" state="CE" />
            <button onClick={handleClick} >Clique aqui</button>
            <Footer />
        </div>
    )
};

export default App002;