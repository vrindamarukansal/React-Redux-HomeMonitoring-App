import React from "react";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/Navbar/MainNavbar";
import MainSidebar from "../components/Sidebar/MainSideBar";
import Footer from "../components/Footer";

const DefaultLayout = ({ children}) => (
    <Container fluid>
        <Row>
            <MainSidebar/>
            <Col
                className="main-content p-0"
                lg={{ size: 10, offset: 2 }}
                md={{ size: 9, offset: 3 }}
                sm= "12"
                tag= "main"
            >
                <MainNavbar/>    
                {children}
                <Footer/>
            </Col>    
        </Row>
    </Container>
);

export default DefaultLayout;