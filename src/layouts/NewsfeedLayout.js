import React from "react";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/Navbar/MainNavbar";
import MainSidebar from "../components/Sidebar/MainSideBar";
import Footer from "../components/Footer";

const NewsfeedLayout = ({ children}) => (
    <Container fluid>
        <Row>
            <Col xs="12">   
                <MainNavbar/>
            </Col>    
        </Row>
        <Row>
            <MainSidebar/>
            {children}  
        </Row>
        <Row>
            <Col xs="12">
                <Footer/>
            </Col>
        </Row>
    </Container>
);

export default NewsfeedLayout;