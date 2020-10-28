import React, {useEffect} from "react";
import classNames from "classnames";
import { Col} from "shards-react";

import UserArea from "./UserArea";
import SidebarToggleMenu from "./SidebarToggleMenu";
import SidebarNavItems from "./SidebarNavItems";
import {connect} from "react-redux"
import {getSidebarItems} from "../../redux/actions/uiActions"
import propTypes from "prop-types"


const MainSidebar = (props)=>{
    const {menuVisible, navItems}= props.UI
    const{currRole}=props.user
    const {getSidebarItems}=props;
    useEffect(()=>{
        getSidebarItems(currRole)
    },[currRole, getSidebarItems])

    const classes = classNames(
        "main-sidebar",
        "px-0",
        "col-12",
        menuVisible && "open"
      );

    return(
        <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
    >
        <SidebarToggleMenu/>
        <UserArea className="text-nowrap"/>
        <SidebarNavItems navItems={navItems}/>
    </Col>
    )
}
MainSidebar.propTypes = {
    getSidebarItems: propTypes.func.isRequired,
    UI: propTypes.object.isRequired,
    user: propTypes.object.isRequired
  }

const mapStateToProps = (state)=>({
    UI: state.UI,
    user: state.user
})

const mapDispatchToProps=(dispatch)=>({
    getSidebarItems: (role)=> dispatch(getSidebarItems(role))
})

export default connect(mapStateToProps,mapDispatchToProps)(MainSidebar);