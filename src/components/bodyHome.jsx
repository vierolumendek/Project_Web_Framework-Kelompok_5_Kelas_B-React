import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResBtn from './resBtn';

export default function BodyHome(){
    return (
        <Container>
            <Row className='row-cols-1 row-cols-md-3 g-4'>
                <Col>
                    <ResBtn name='Pizza Yolo' link={'/yolo'} gambar="../images/yolo.png" />
                </Col>
                <Col>
                    <ResBtn name='Shake & Co' link={'/shakenCo'} gambar="../images/shakenco1.jpg" />
                </Col>
                <Col>
                    <ResBtn name="Keki'Snack" link={'/keki'} gambar="../images/kekis2.jpg"/>
                </Col>
            </Row>
            <Row className='row-cols-1 row-cols-md-3 g-4'>
                <Col>
                    <ResBtn name='Gultik Smansa' link={'/gultik'} gambar="../images/gultiksmansa.png"/>
                </Col>
                <Col>
                    <ResBtn name='Daengcu' link={'/daengcu'} gambar="../images/daengcu2.jpg"/>
                </Col>
                <Col>
                    <ResBtn name='Corndog Yuhuu' link={'/yuhu'} gambar="../images/yuhu.png"/>
                </Col>
            </Row>
            <Row className='row-cols-1 row-cols-md-3 g-4'>
                <Col>
                    <ResBtn name='Dehoki Steak' link={'/dehoki'} gambar="../images/dehoki.png"/>
                </Col>
                <Col>
                    <ResBtn name='Ketan Mantan' link={'/ketanMantan'} gambar="../images/ketanmantan.png"/>
                </Col>
            </Row>
        </Container>
    );
}