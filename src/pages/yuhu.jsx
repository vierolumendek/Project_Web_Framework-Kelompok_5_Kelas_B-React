import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import ChartModal from "../components/chartModal";

export default function Yuhu(){
    return(
        <>
            <Header chart={<ChartModal/>} />
            <Hero
            text="Best In Town"
            namaToko="CORNDOG YUHUU"
            ig="corndogyuhuu"
            time="17:00 - 22:00"
            link="https://www.instagram.com/corndogyuhuu/"
            gambar ="../images/yuhuu.jpg"
            />
            <Container className="mt-3">
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/ori.png"
                            nama="Corndog Moza Original"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/coklat.png"
                            nama="Corndog Moza Chocolate"
                            harga="Rp 15.000"
                                gambarHero ="../images/yuhuu.jpg"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/kentang.png"
                            nama="Corndog Moza Kentang"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/sosisktg.png"
                            nama="Corndog Moza Sosis Kentang"
                            harga="Rp 20.000"
                            gambarHero ="../images/yuhuu.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/tiramisu.png"
                            nama="Corndog Moza Tiramisu"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/greentea.png"
                            nama="Corndog Moza Greentea"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                            />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/taro.png"
                            nama="Corndog Moza Taro"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/vanilla.png"
                            nama="Corndog Moza Vanilla"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/mix.png"
                            nama="Corndog Moza Mix Varian"
                            harga="Rp 15.000"
                            gambarHero ="../images/yuhuu.jpg"
                            />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}