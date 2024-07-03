import { Container, Row, Col, Card  } from 'react-bootstrap';
import OrderBtn from './orderBtn';

export default function Menu({nama, harga, gambar, gambarHero}) {
    return (
        <>
            <Card className='shadow border-0 mb-3'>
                <Card.Body>
                    <Row className='g-0'>
                        <Col className='col-8'>
                            <Card.Body>
                                <h5 className='mt-xxl-3 ms-xxl-3'>{nama}</h5>
                                <h5 className='ms-xxl-3'>{harga}</h5>
                            </Card.Body>
                        </Col>
                        <Col className='col-4'>
                            <img src={gambar} alt="" className='img-fluid'/>
                        </Col>
                        <div className='d-flex justify-content-center mt-2'>
                            <OrderBtn gambarHero={gambarHero} gambar={gambar} namaMenu={nama} harga={harga}/>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}