import { Link, useNavigate } from "react-router-dom";
import { Container, Row , Col, Form, FloatingLabel, InputGroup, Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import FormToko from "../components/formToko";

export default function AkunToko(){
    const navigate = useNavigate();

    return (
        <>
            <Header cnh='light text-danger' cnr='bg-danger text-light border border-light'/>
            <Container className="container rounded bg-light border text-dark justify-content-between p-5 mb-3 shadow">
                <Row>
                    <Col className="col-md-6">
                        <Row className="border rounded shadow p-3 mb-3">
                            <Col className="col-md d-flex justify-content-center">
                                <img src="../images/Logo.png" alt="fotoprofile" className="rounded-circle border bg-light mb-3"/>
                            </Col>
                            <Col className="col-md-8 d-grid align-items-center">
                                <p>Ganti foto profile</p>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" size="lg"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <FormToko/>
                        <Form.Group controlId="formTime">
                                <Row>
                                        <Form.Label className="mt-3">Pilih Waktu</Form.Label>
                                    <Col>
                                        <Form.Text>Buka</Form.Text>
                                        <Form.Control type="time" name="time" />
                                    </Col>
                                    <Col>
                                        <Form.Text>Tutup</Form.Text>
                                        <Form.Control type="time" name="time" className="" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Link Instagram"
                                className="mb-3 mt-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                    </Col>
                    <Col className="col-md-6">
                        <Container className="p-4 rounded shadow">
                            <h5>Tambah Produk</h5>
                            <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nama Produk"
                                    className="mb-3 mt-3"
                                >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                                <Form.Control
                                placeholder="Harga Produk"
                                aria-label="Price"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <FloatingLabel controlId="floatingTextarea2" label="Deskripsi produk">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                className="mb-3"
                                />
                            </FloatingLabel>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" size="lg"/>
                            </Form.Group>
                            <Button variant="danger" className="w-100">Tambah</Button>
                        </Container>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between mt-3">
                    <Button variant="danger" className="mb-3" onClick={() => navigate('/')}>Simpan</Button>
                    <Button variant="outline-danger" className="mb-3" onClick={() => navigate('/')}>Logout</Button>
                </div>
            </Container>
            <Footer/>
        </>
    );
}