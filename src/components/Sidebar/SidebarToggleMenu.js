import React from "react";
import {connect} from "react-redux"
import {closeSidebar} from "../../redux/actions/uiActions"
import propTypes from "prop-types"

const SidebarToggleMenu = (props)=>{
        return(
                <a
                className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                href="#_"
                onClick={()=>props.closeSidebar()}
                >
                     <i className="material-icons">&#xE5C4;</i>
                </a>
        )
    }

SidebarToggleMenu.propTypes=()=>({
    closeSidebar: propTypes.func.isRequired
})

const mapDispatchToProps=(dispatch)=>({
    closeSidebar:()=> dispatch(closeSidebar()),
})

export default connect(null,mapDispatchToProps)(SidebarToggleMenu)