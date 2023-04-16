import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica para realizar o login
    };

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleForgotPassword = () => {
        // Lógica para redefinir a senha
    };

    return (
        <div className="login-container">
            <Form onSubmit={handleLogin} className="login-form shadow mx-auto mt-3">

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu usuário" value={username} onChange={(event) => setUsername(event.target.value)} className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" value={password} onChange={(event) => setPassword(event.target.value)} className="custom-input" />
                </Form.Group>

                <Form.Group controlId="rememberMe" className="mb-3">
                    <Form.Check type="checkbox" label="Lembrar" checked={rememberMe} onChange={handleRememberMe} className="custom-checkbox" />
                </Form.Group>

                <Row>
                    <Col>
                        <Button variant="primary" type="submit" className="custom-button custom-button-primary">Entrar</Button>
                    </Col>
                    <Col>
                        <Button variant="link" onClick={handleForgotPassword} className="custom-button custom-button-link">Esqueci a senha</Button>
                    </Col>
                </Row>

            </Form>
        </div>
    );
};

export default Login;
