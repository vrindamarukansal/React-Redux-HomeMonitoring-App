import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

const SidebarNavItems=(props)=> {
    const { navItems: items } = props;
    return (
      <div className="nav-wrapper"> 
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <NavItem key={idx}>
              {item.subtitle? 
                (
                  <h6 className={item.className}>
                    {item.title}
                  </h6>
                ):
                ( <NavLink tag={RouteNavLink} to={item.to} className={item.className}>
                {item.htmlBefore && (
                  <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                  />
                )}
                {item.title && <span>{item.title}</span>}
                {item.htmlAfter && (
                  <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                  />
                )}
              </NavLink>
                )
                }
            </NavItem>
          ))}
        </Nav>
      </div>
    )
  }

export default SidebarNavItems;
