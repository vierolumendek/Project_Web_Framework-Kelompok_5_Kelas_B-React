import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function Daengcu(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Aneka Es & Dessert"
            namaToko="DAENGCU"
            ig="daengcu.manado"
            time="17:00 - 23:00"
            link="https://www.instagram.com/daengcu.manado/"
            gambar ="../images/daengcu3.jpg"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/babypancake.png"
                            nama="Baby Pancake"
                            harga="Rp 20.000"
                            gambarHero ="../images/daengcu3.jpg"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/eswaffle.png"
                            nama="Waffle Ice Cream"
                            harga="Rp 25.000"
                            gambarHero ="../images/daengcu3.jpg"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/mangga.png"
                            nama="Es Mangga Creamy"
                            harga="Rp 20.000"
                            gambarHero ="../images/daengcu3.jpg"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                                gambar="../images/teler.png"
                                nama="Es Teler"
                                harga="Rp 20.000"
                                gambarHero ="../images/daengcu3.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                                gambar="../images/kepalmilo.png"
                                nama="Es Kepal Milo"
                                harga="Rp 15.000"
                                gambarHero ="../images/daengcu3.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                                gambar="../images/durianmilo.png"
                                nama="Es Durian Milo"
                                harga="Rp 20.000"
                                gambarHero ="../images/daengcu3.jpg"
                            />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                                gambar="../images/alpukatmilo.png"
                                nama="Es Alpukat Kocok Milo"
                                harga="Rp 20.000"
                                gambarHero ="../images/daengcu3.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                                gambar="../images/escendol.png"
                                nama="Es Cendol (Durian + Nangka)"
                                harga="Rp 20.000"
                                gambarHero ="../images/daengcu3.jpg"
                            />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}