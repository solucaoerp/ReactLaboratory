import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <a href="https://www.linkedin.com/in/charles-bm/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
                <a href="https://github.com/solucaoerp" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
            </div>
            <div className="footer__center">
                <a href="https://github.com/solucaoerp" target="_blank" rel="noreferrer" className="my-auto">&copy; 2023 IBRPlanner</a>
            </div>
            <div className="footer__right">
                <a href="mailto:solucao.erp@gmail.com" className="social-icon"><MdEmail /></a>
            </div>
        </footer>
    );
}

export default Footer;
