import React from 'react';
import { Link } from 'react-router-dom'
import {
    Dropdown,
    DropdownMenu,
  //  DropdownToggle,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink
} from 'shards-react'; 
//import { NavLink as RouteNavLink } from "react-router-dom"

class ClientMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 2,
            visible: false
        }
        this.toggleNotifications = this.toggleNotifications.bind(this);
    }

    toggleNotifications(){
        this.setState({ visible: !this.state.visible});
    }
    render(){
    return(
        <NavItem tag={Dropdown} toggle={this.toggleNotifications} className="my-auto">
        <NavLink 
            tag= {Link}
            to="#"
            className="nav-link-icon"
            onClick={this.toggleNotifications}
        >
            <div className="notifications nav-link-icon__wrapper">
                <i className="material-icons">more_horizontal</i>
            </div>
        </NavLink>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
            <DropdownItem tag={Link} to="/activity-monitor">Activity Monitor</DropdownItem>
            <DropdownItem tag={Link} to="/care-circle">Care Circle</DropdownItem>
            <DropdownItem tag={Link} to="/account-settings">Account Settings</DropdownItem>
            <DropdownItem tag={Link} to="#">Delete Client</DropdownItem>
        </Collapse>
        </NavItem>
    )
}
}

export default ClientMenu;