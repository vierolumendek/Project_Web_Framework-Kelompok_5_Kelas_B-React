import { Form, Container, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer"
import FormToko from '../components/formToko';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function SignUpToko(){
    const navigate = useNavigate();

    return (
        <>
            <Header cnh='light text-danger' cnr='bg-danger text-light border border-light'/>
            <Container className="rounded bg-light text-dark p-5 shadow">
                <h3 className="text-center mb-3">Sign Up Toko Flambox</h3>
                <FormToko/>
                <Button variant="danger" className="w-100 mt-3" onClick={() => navigate('/akunToko')} >Sign Up</Button>
                <p className='text-center mt-3'>Jika anda belum mempunyai akun, anda bisa Sign Up <Link to="/loginToko" class="text-danger">Disini.</Link></p>
            </Container>
            <Footer/>
        </>
    );
}