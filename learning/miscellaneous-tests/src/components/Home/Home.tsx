import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content">
                    <h1>Bem-vindo ao IBRPlanner</h1>
                    <p>Planeje sua vida de forma inteligente e eficiente</p>
                    <Link to="/login" className="btn btn-primary">Comece agora</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
