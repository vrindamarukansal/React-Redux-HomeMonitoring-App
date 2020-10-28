import React from "react";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";
import AppLogo from "./AppLogo";
import NavbarToggle from "./NavbarToggle";

const MainNavbar = () => {
    const classes = classNames(
        "main-navbar",
        "bg-white",
        "sticky-top"
    );

    return (
        <div className={classes}>
            <Container fluid className="p-0">
                <Navbar type="light" className="align-items-stretch bg-white flex-md-nowrap p-0">
                    <div className="px-4 d-md-flex d-lg-flex w-100">
                        <AppLogo/>
                        <NavbarToggle/> 
                    </div>   
                </Navbar>
            </Container>
        </div>
    )
}

export default MainNavbar;