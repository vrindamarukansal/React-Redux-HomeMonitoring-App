import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
//import { Col } from "shards-react";

const PageTitle = ({title, userAvatarSrc, className}) => {
    const classes = classNames(
        className,
        "text-center",
        "text-md-left",
        "page-header",
        "d-inline-flex"
    );

    return(
        <div className={classes}>
            <img 
                className="user-avatar rounded-circle mr-4" 
                src={userAvatarSrc}
                alt="User Avatar"/>
            <div className="my-auto d-block">
                <h6 className="page-title">{title}</h6>
                <span className="main-sidebar__nav-title mb-0">Resident</span>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    userAvatarSrc: PropTypes.string
};

PageTitle.defaultProps = {
    title: "John Doe",
    userAvatarSrc: require("./../images/avatars/4.jpg")
}

export default PageTitle;
