import './About.css';

import Box from '@material-ui/core/Box';

const About = () => {
    return (
        <div className="about-container">
            <Box className="about-box">
                <h2>Sobre</h2>
                <p>Planeje sua vida de forma inteligente e eficiente</p>
                <button className="btn btn-primary">Comece agora</button>
            </Box>
        </div>
    );
};

export default About;
