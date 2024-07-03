import { useState } from 'react';
import { Button, Modal, Container } from 'react-bootstrap';

export default function ChartModal({gambar}) {
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

    return (
        <>
            <Button variant="outline-light m-1" onClick={handleShow}>
                <i class="bi bi-cart4"></i>
            </Button>

            <Modal show={show} onHide={handleClose} animation={true} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={gambar} alt="" className='img-fluid mr-1 rounded mb-3' />
                    <Container className='border rounded d-flex justify-content-between p-2 mb-3'>
                        <span className="d-inline-block">
                            <img src="../images/TunaBumbuRW.png" alt="" className="rounded w-25"/>
                            <h6>Tuna Bumbu RW</h6>
                        </span>
                        <span className="mt-3">
                            <button className="btn rounded-circle text-danger" onClick={tmblKurang}><i className="bi bi-dash-circle-fill"></i></button>
                                <span className="bg-light rounded p-2">{tambah + kurang}</span>
                            <button className="btn rounded-circle text-danger" onClick={tmblTambah}><i className="bi bi-plus-circle-fill"></i></button>
                        </span>
                    </Container>
                    <Container className='border rounded d-flex justify-content-between p-2 mb-3'>
                        <span className="d-inline-block">
                            <img src="../images/CakalangFufu.png" alt="" className="rounded w-25"/>
                            <h6>Cakalang Fufu</h6>
                        </span>
                        <span className="mt-3">
                            <button className="btn rounded-circle text-danger"><i className="bi bi-dash-circle-fill text-danger"></i></button>
                                <span className="bg-light rounded p-2">1</span>
                            <button className="btn rounded-circle text-danger"><i className="bi bi-plus-circle-fill text-danger"></i></button>
                        </span>
                    </Container>
                    <Container className='border rounded d-flex justify-content-between p-2 mb-3'>
                        <span className="d-inline-block">
                            <img src="../images/AyamSuir.png" alt="" className="rounded w-25"/>
                            <h6>Ayam Suir</h6>
                        </span>
                        <span className="mt-3">
                            <button className="btn rounded-circle text-danger"><i className="bi bi-dash-circle-fill text-danger"></i></button>
                                <span className="bg-light rounded p-2">1</span>
                            <button className="btn rounded-circle text-danger"><i className="bi bi-plus-circle-fill text-danger"></i></button>
                        </span>
                    </Container>
                    <div className="form-floating mb-3" controlId="floatingSelect" label="Tipe Pemesanan">
                        <select className="form-select" aria-label="Floating label select example">
                            <option selected>Pesan Antar</option>
                            <option value="1">Ambil Sendiri</option>
                        </select>
                        <label for="floatingSelect">Tipe Pemesanan</label>
                    </div>
                    <div class="form-floating mb-3" controlId="floatingSelect" label="Tipe Pemesanan">
                        <select class="form-select" aria-label="Floating label select example">
                            <option selected>COD</option>
                        </select>
                        <label for="floatingSelect">Metode Pembayaran</label>
                    </div>
                    <div className="border border-1 p-3 m-auto rounded shadow">
                        <div className="d-flex justify-content-between">
                            <p>Harga</p>
                            <p>Rp 105.000</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Biaya Pengiriman</p>
                            <p>Rp 2.000</p>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between fw-bold">
                            <p>Total Pembayaran</p>
                            <p>Rp 107.000</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}