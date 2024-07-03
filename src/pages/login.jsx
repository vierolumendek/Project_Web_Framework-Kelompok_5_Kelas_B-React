import { Form, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer"
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Login(){
    const navigate = useNavigate();

    return (
        <>
            <Header cnh='light text-danger' cnr='bg-danger text-light border border-light'/>
            <Container className="rounded bg-light text-dark p-5 shadow">
                <h3 className="text-center mb-4">Login Flambox</h3>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button variant="danger" className="w-100 mt-3" onClick={() => navigate('/akun')} >Login</Button>
                <p className='mt-3 text-center'>Jika anda belum mempunyai akun, anda bisa Sign Up <Link to="/signUp" class="text-danger">Disini.</Link></p>
            </Container>
            <Footer/>
        </>
    );
}