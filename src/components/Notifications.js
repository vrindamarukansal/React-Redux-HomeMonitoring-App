import React from 'react';
import { Link } from 'react-router-dom'
import { Badge,
    Dropdown,
    DropdownMenu,
  //  DropdownToggle,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink
} from 'shards-react'; 
//import { NavLink as RouteNavLink } from "react-router-dom"

class Notifications extends React.Component{
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
                <i className="material-icons">notifications</i>
                <Badge pill theme="danger">
                 {this.state.count}
                </Badge>
            </div>
        </NavLink>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
            <DropdownItem tag={Link} to="/family-feed">Your post was approved</DropdownItem>
            <DropdownItem tag={Link} to="/family-feed">Your comment was declined</DropdownItem>
            <DropdownItem tag={Link} to="/family-feed">Sierra Brooks added a new post</DropdownItem>
        </Collapse>
        </NavItem>
    )
}
}

export default Notifications;