import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import ChartModal from "../components/chartModal";
import Hero from "../components/hero";
import Menu from "../components/menu";

export default function Yolo({hero}){
    return(
        <>
            <Header chart={<ChartModal gambar={hero}/>}/>
            <Hero
                text="Another one bites of crust"
                namaToko="PIZZA YOLO"
                ig="pizza_yolo2023"
                time="09:00 - 00:00"
                link="https://www.instagram.com/pizza_yolo2023/"
                gambar ="../images/pizza.png"
            />
            <Container className="mt-3">
                <h1 className="mt-4 mb-4">Salty Pizza</h1>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/TunaBumbuRW.png"
                            nama="Tuna Bumbu RW"
                            harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/CakalangFufu.png"
                            nama="Cakalang Fufu"
                            harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/AyamSuir.png"
                            nama="Ayam Suir"
                            harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                                gambar="../images/SosisAyam.png"
                                nama="Sosis Ayam"
                                harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                                gambar="../images/SosisSapi.png"
                                nama="Sosis Sapi"
                                harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                            />
                    </Col>
                    <Col lg="4">
                        <Menu
                                gambar="../images/ChessePizza.png"
                                nama="Cheese Pizza"
                                harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                            />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/PizzaDuaRasa.png"
                            nama="Pizza Dua Rasa"
                            harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                </Row>
                <h1 className="mt-4 mb-4">Sweet Pizza</h1>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/PizzaChocoChesse.png"
                            nama="Pizza Chocolate Cheese"
                            harga="Rp 35.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                        gambar="../images/PizzaChocoChipsVanilla.png"
                        nama="Pizza Choco Chips Vanilla"
                        harga="Rp 40.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                    <Col lg="4">
                        <Menu
                            gambar="../images/PizzaOreo.png"
                            nama="Pizza Oreo"
                            harga="Rp 40.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Menu
                            gambar="../images/PizzaLotus.png"
                            nama="Pizza Lotus"
                            harga="Rp 40.000"
                            gambarHero="../images/Rectangle53.png"
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}