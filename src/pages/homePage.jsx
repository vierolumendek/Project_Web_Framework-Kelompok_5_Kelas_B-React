import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/header";
import BodyHome from "../components/bodyHome";
import Footer from "../components/footer";

export default function HomePage() {
    return (
        <>
            <Header cnh='light text-danger' cnr='bg-danger text-light border border-light' />
            <BodyHome />
            <p className='text-center m-5'>Jika anda memiliki toko, anda dapat mendaftarkan toko anda <Link to="/signUpToko" className="text-danger">disini.</Link></p>
            <Footer />
        </>
    );
}