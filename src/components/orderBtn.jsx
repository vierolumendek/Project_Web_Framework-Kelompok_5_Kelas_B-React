import { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';

export default function OrderBtn({gambarHero, gambar, namaMenu, harga  }){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [tambah, setTambah] = useState(1);
    const [kurang, setKurang] = useState(0);

    function tmblTambah(){
        setTambah(tambah + 1);
    }

    function tmblKurang(){
        setKurang(kurang - 1);
    }

    // let jumlah = tambah + kurang;
    let jumlah = function(){
        hasil = tambah + kurang;
        if(hasil > 0){
            tmblTambah();
            tmblKurang();
            return {hasil};
        }else{
            tmblTambah(0);
            tmblKurang(0);
            return hasil;
        }
    }

    return (
        <>
            <Button variant="outline-danger w-75" onClick={handleShow}>
                Order
            </Button>

            <Modal show={show} onHide={handleClose} animation={true} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={gambarHero} alt="Hero Modal" className='img-fluid mr-1 rounded mb-3' />
                    <Container className='border rounded d-flex justify-content-between p-2'>
                        <span className='d-inline-block'>
                            <img src={gambar} alt="Modal" className='w-25'/>
                            <h6>{namaMenu}</h6>
                        </span>
                        <span className='d-flex align-items-center gap-3'>
                            <i className="btn bi bi-dash-circle-fill rounded-circle text-danger" onClick={tmblKurang}></i>
                            <span className='bg-light  rounded p-2 border border-2 border-secondary-subtle'>{tambah+kurang}</span>
                            <i className="btn bi bi-plus-circle-fill rounded-circle text-danger" onClick={tmblTambah}></i>
                        </span>
                    </Container>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <div className="bg-danger text-light rounded">
                        <p className='m-2'>{harga}</p>
                    </div>
                    <Button variant="success" onClick={handleClose}><i class="bi bi-arrow-right-circle-fill"></i></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}