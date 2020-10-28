import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col } from "shards-react";

class SmallStats extends React.Component {

  render() {
    const {smallStats} = this.props;

    return (
      smallStats.map((stats,idx)=>(
        <Col xs="12" md="3" lg="3">
          <Card small className="stats-small mb-4">
            <CardBody className="d-flex">
              <Col lg="2" className=" d-flex stat-icon">
                <i className="material-icons">{stats.icon}</i>
              </Col>
              <Col lg="10" className="flex-column m-auto">
                <div className="text-center">
                  <h6 className="stats-small__value count">{stats.value}</h6>
                  <span className="main-sidebar__nav-title mb-1" style={{fontSize:".75rem"}}>{stats.label}</span>
                </div>
              </Col>
            </CardBody>
          </Card>
        </Col>
      )) 
    );
  }
}

SmallStats.propTypes = {
  smallStats: PropTypes.array,
};

SmallStats.defaultProps = {
  smallStats: [
    {
      label: "Clients",
      value: "3",
      icon: "home",
    
    },
    {
      label: "Family Admins",
      value: "4",
      icon:"assignment_ind",
    
    },
    {
      label: "Care Providers",
      value: "8",
      icon: "supervised_user_circle",
    
    },
    {
      label: "family Members",
      value: "50",
      icon: "people",
    
    },
  ]
};

export default SmallStats;
