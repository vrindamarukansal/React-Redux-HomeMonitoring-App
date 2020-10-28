import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

const AdminPageTitle = ({ title, subtitle, className, ...attrs }) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    ""
  );

  return (
    <Col xs="12" sm="4" className={classes} { ...attrs }>
      <h3 className="page-title">{title}</h3>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
    </Col>
  )
};

AdminPageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string
};

export default AdminPageTitle;