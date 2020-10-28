import React from "react";
import { Container, Button, NavLink } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

const Logout = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>401</h2>
        <h3>You are not signed in to the portal</h3>
        <p>Please go to login page and sign in.</p>
        <NavLink tag={RouteNavLink} to="/login" >
        <Button pill>Login &rarr;</Button>
        </NavLink>
      </div>
    </div>
  </Container>
);

export default Logout;
