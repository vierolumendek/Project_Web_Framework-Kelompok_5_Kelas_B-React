import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function KetanMantan(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Stick to the Goodness"
            namaToko="KETAN MANTAN"
            ig="ketanmantan.mdc"
            time="18:30 - 22:00"
            link="https://www.instagram.com/ketanmantan.mdc/"
            gambar ="../images/ketanmantan1.jpg"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/mango.png"
                            nama="Mango Sticky Rice"
                            harga="Rp 20.000"
                            gambarHero ="../images/ketanmantan1.jpg"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/durian.png"
                            nama="Durian Sticky Rice"
                            harga="Rp 25.000"
                            gambarHero ="../images/ketanmantan1.jpg"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/lupis.png"
                            nama="Lupis Ketan"
                            harga="Rp 10.000"
                            gambarHero ="../images/ketanmantan1.jpg"
                        />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}