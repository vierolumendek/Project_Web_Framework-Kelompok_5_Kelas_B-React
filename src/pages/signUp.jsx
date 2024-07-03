import { Form, Container, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormAkun from '../components/formAkun';

export default function SignUp(){
    const navigate = useNavigate();

    return (
        <>
            <Header cnh='light text-danger' cnr='bg-danger text-light border border-light'/>
            <Container className="rounded bg-light text-dark p-5 shadow">
                <h3 className="text-center mb-4">Sign Up Flambox</h3>
                <FormAkun />
                <Button variant="danger" className="w-100 mt-3" onClick={() => navigate('/akun')} >Sign Up</Button>
                <p className='mt-3 text-center'>Jika anda sudah mempunyai akun, anda bisa Login <Link to="/login" class="text-danger">Disini.</Link></p>
            </Container>
            <Footer/>
        </>
    );
}