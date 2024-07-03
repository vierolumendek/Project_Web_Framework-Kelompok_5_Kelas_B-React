import { Link } from "react-router-dom";

export default function ResBtn({name, link, gambar}){
    return(
        <div className="position-relative m-3">
            <Link to={link}>
                <img src={gambar} alt="" className='img-fluid darken-image'/>
                <div className='overlay-text'>{name}</div>
            </Link>
        </div>
    );
}