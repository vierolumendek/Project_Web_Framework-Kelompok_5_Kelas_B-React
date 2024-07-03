import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Hero({text, namaToko, time, gambar, ig, link}){
    return (
        <Container>
            <div className="rounded mx-auto d-block text-light p-5" style={{
                backgroundImage: `url(${gambar})`,
                height: '400px'
            }}>
                <h4 className="d-flex">{text}</h4>
                <h1 className="d-flex justify-content-start">{namaToko}</h1>
            </div>
            <div className="d-inline-flex gap-3">
                <div className="bg-danger rounded d-inline-flex p-2">
                    <p className="text-light"><i className="bi bi-clock-fill"></i> Operational Hour:  {time}</p>
                </div>
                <Link to={link} className="align-content-center" target="_blank" style={{textDecoration: 'none'}}>
                    <p className="text-dark"><i class="bi bi-instagram"> {ig}</i></p>
                </Link>
            </div>
        </Container>
    );
}