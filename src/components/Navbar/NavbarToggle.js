import React from "react";
import {connect} from "react-redux"
import {openSidebar} from "../../redux/actions/uiActions"
import propTypes from "prop-types"

const NavbarToggle =(props)=> (
      <nav className="nav">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#_" onClick={props.openSidebar} className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none d-lg-none text-right pr-0">
          <i className="material-icons">&#xE5D2;</i>
        </a>
      </nav>
    )

NavbarToggle.propTypes=()=>({
  openSidebar: propTypes.func.isRequired
})

const mapDispatchToProps=(dispatch)=>({
  openSidebar:()=> dispatch(openSidebar()),
})

export default connect(null,mapDispatchToProps)(NavbarToggle)