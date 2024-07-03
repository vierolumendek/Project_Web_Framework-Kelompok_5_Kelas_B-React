import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function Keki(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Jasuke X Pokis"
            namaToko="KEKI SNACK"
            ig="kekis.317"
            time="17:00 - 23:00"
            link="https://www.instagram.com/kekis.317/"
            gambar ="../images/kekis.png"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/jasuke.png"
                            nama="Jasuke"
                            harga="Rp 10.000"
                            gambarHero="../images/kekis.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/pokis.png"
                            nama="Pokis"
                            harga="Rp 15.000"
                            gambarHero="../images/kekis.png"
                        />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}