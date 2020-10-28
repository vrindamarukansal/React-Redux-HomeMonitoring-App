import React from "react";
import { Container } from "shards-react";
import MainNavbar from "../components/Navbar/MainNavbar";
import Footer from "../components/Footer";

const UnauthLayout = ({ children}) => (
    <Container fluid>
                <MainNavbar/>    
                {children}
                <Footer/>   
    </Container>
);

export default UnauthLayout;