import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Container, Offcanvas} from 'react-bootstrap';

export default function Header({chart, cnh, cnr, nvg}){
    const navigate = useNavigate();

    return (
        <>
            <Container className='card text-light bg-danger text-center mb-5 mx-auto p-4 rounded-top-0'>
                <h5>Flambox</h5>
                <p>Flamboyan Street</p>
            </Container>

            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-danger mb-3" data-bs-theme="dark">
                    <Container fluid>
                        <Navbar.Brand onClick={() => navigate('/')}>
                            <img src="../images/Logo.png" alt="" className='w-50'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="bg-danger"
                        >
                            <Offcanvas.Header closeButton className='light'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-light'>
                                Flambox
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        {chart}
                                        <Button variant={`${cnh ? cnh : 'outline-light'} m-1`} onClick={() => navigate('/')}>Home</Button>
                                        <p className={`${cnr ? cnr : 'text-danger bg-light'} text-center m-1 p-2 rounded`}>Restaurant</p>
                                        <Button variant='light text-danger  m-1'onClick={() => navigate('/login')}>Login</Button>
                                    </Nav>
                                </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}