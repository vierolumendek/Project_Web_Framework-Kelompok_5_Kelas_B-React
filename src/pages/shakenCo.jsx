import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function ShakenCo(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Cocobuddy"
            namaToko="SHAKE & CO"
            ig="shakemco.mdc"
            time="14:00 - 22:00"
            link="https://www.instagram.com/shakenco.mdc/"
            gambar ="../images/snco.png"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/original.png"
                            nama="Original"
                            harga="Rp 17.000"
                            gambarHero="../images/snco2.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/oreo.png"
                            nama="Oreo"
                            harga="Rp 17.000"
                            gambarHero="../images/snco2.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/kopyor.png"
                            nama="Kopyor"
                            harga="Rp 17.000"
                            gambarHero="../images/snco2.png"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                                gambar="../images/gulamerah.png"
                                nama="Gula Merah"
                                harga="Rp 17.000"
                            gambarHero="../images/snco2.png"
                            />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}