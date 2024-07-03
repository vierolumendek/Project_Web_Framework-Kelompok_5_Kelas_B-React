import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col,  Form, Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import FormAkun from "../components/formAkun";

export default function Akun(){
    const navigate = useNavigate();

    return (
        <>
            <Header cnh='light text-danger' cnr='bg-danger text-light border border-light'/>
            <Container className="rounded bg-light border text-dark justify-content-between p-5 shadow">
                <Row>
                    <Col className="col-md-5">
                        <Row className="border rounded shadow p-3">
                            <Col className="col-md d-flex justify-content-center">
                                <img src="../images/Logo.png" alt="" />
                            </Col>
                            <Col className="col-md-8 d-grid align-items-center">
                                <p>Ganti foto profile</p>
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Control type="file" size="lg" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <FormAkun />
                    </Col>
                </Row>
                <div className="d-flex justify-content-between mt-3">
                    <Button variant="danger" className=" mb-3" onClick={() => navigate('/')}>Simpan</Button>
                    <Button variant="outline-danger" className="mb-3" onClick={() => navigate('/')}>Logout</Button>
                </div>
            </Container>
            <Footer/>
        </>
    );
}