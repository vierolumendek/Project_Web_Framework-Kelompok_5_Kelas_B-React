import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function Gultik(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Rasa Istimewa di Setiap Sudut"
            namaToko="GULTIK SMANSA"
            ig="gultiksmansamdo"
            time="15:00 - 00:00"
            link="https://www.instagram.com/gultiksmansamdo/"
            gambar ="../images/gultik.png"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/kecil.png"
                            nama="Gultik Kecil"
                            harga="Rp 15.000"
                            gambarHero ="../images/gultik.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/besar.png"
                            nama="Gultik Besar"
                            harga="Rp 25.000"
                            gambarHero ="../images/gultik.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/kulit.png"
                            nama="Sate Kulit"
                            harga="Rp 6.000"
                            gambarHero ="../images/gultik.png"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                                gambar="../images/ampelahati.png"
                                nama="Sate Ampela Hati"
                                harga="Rp 6.000"
                            gambarHero ="../images/gultik.png"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                                gambar="../images/telurpuyuh.png"
                                nama="Sate Telur Puyuh"
                                harga="Rp 6.000"
                            gambarHero ="../images/gultik.png"
                            />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}