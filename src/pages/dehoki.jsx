import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function Dehoki(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Grill to Thrill Your Taste Buds"
            namaToko="Dehoki Steak"
            ig="dehokisteak.mdo"
            time="18:00 - Finish"
            link="https://www.instagram.com/shakenco.mdc/"
            gambar ="../images/dehoki1.png"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/bbq.png"
                            nama="Chicken Steak BBQ Sauce"
                            harga="Rp 25.000"
                            gambarHero ="../images/dehoki1.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/mushroom.png"
                            nama="Chicken Steak Mushroom Sauce"
                            harga="Rp 25.000"
                            gambarHero ="../images/dehoki1.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/blackpepper.png"
                            nama="Chicken Steak Black-Pepper Sauce"
                            harga="Rp 25.000"
                            gambarHero ="../images/dehoki1.png"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/chickensausage.png"
                            nama="Chicken Sausage"
                            harga="Rp 17.000"
                            gambarHero ="../images/dehoki1.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/cornribs.png"
                            nama="Corn Ribs"
                            harga="Rp 15.000"
                            gambarHero ="../images/dehoki1.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/onionrings.png"
                            nama="Onion Rings"
                            harga="Rp 15.000"
                            gambarHero ="../images/dehoki1.png"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                                gambar="../images/potatowedges.png"
                                nama="Potato Wedges"
                                harga="Rp 15.000"
                            gambarHero ="../images/dehoki1.png"
                            />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}