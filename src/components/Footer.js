import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Nav, NavItem, NavLink } from "shards-react"
import { Link } from "react-router-dom"

const Footer = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex pt-2 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        <Nav className="d-flex">
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
)

Footer.propTypes = {

  contained: PropTypes.bool,
  menuItems: PropTypes.array,
  copyright: PropTypes.string,
}

Footer.defaultProps = {
  contained: false,
  copyright: "Copyright © 2020 Family CareSpace",
  menuItems: [
    {
      title: "Services",
      to: "#",
    },
    {
      title: "About",
      to: "#",
    },
    {
      title: "Privacy Policy",
      to: "#",
    },
    {
      title: "Terms and Conditions",
      to: "#",
    },
  ],
}

export default Footer
