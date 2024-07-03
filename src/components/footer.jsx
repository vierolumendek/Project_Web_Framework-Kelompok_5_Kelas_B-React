import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer(){
    return (
        <Row className='bg-danger text-light p-5 mt-3'>
            <Col md>
                <img src="../images/Logo.png" alt="" />
                <h3>Flambox</h3>
            </Col>
            <Col className='d-md-grid justify-content-center mt-3' md>
                <h4>About Us</h4>
                <h5>Kelompok 5 Kelas B</h5>
                <br />
                <h6>Viero Lumendek / 210211060119</h6>
                <h6>Jessica Lang / 210211060026</h6>
            </Col>
        </Row>
    );
}