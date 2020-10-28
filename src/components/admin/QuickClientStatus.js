
import React from "react";
import { Link } from "react-router-dom"
import {
    Card,
    CardBody,
    ListGroup,
    CardHeader,
    ListGroupItem
} from "shards-react";
import PropTypes from "prop-types";

class QuickClientStatus extends React.Component {
    render(){
        const {
            quickStats
        } = this.props;
        return (
                <Card small className="h-100">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Quick Status</h6>
                  </CardHeader>
                  <CardBody className="pt-0">
                  <ListGroup small flush>
                        {quickStats.map((stats,idx) => (
                            <ListGroupItem action className="d-flex px-0">
                            <div className="blog-comments__avatar mr-3">
                                <img src={stats.image} alt={stats.name} />
                            </div>
                             <div>
                                <Link className="card-post__author-name text-fiord-blue" to="/activity-monitor">
                                    {stats.name}
                                </Link>{" "}
                                <p className="main-sidebar__nav-title">{stats.facility_code}</p>
                             </div>
                            <span className="ml-auto my-auto text-right text-semibold text-reagent-gray">
                            {stats.status? <i className="fa fa-check ml-1"/>:<i style={{fontSize:1+'rem'}} className="fa fa-exclamation-circle text-danger ml-1"/>}
                            </span>
                            </ListGroupItem>
                         ))}
                    </ListGroup>  
                  </CardBody>
                </Card>  
              );
    }
}

QuickClientStatus.propTypes = {
    quickStats: PropTypes.array,
  };
  
  QuickClientStatus.defaultProps = {
    quickStats: [
      {
        image: require("../../images/avatars/4.jpg"),
        name: "John Doe",
        url: "/activity-monitor",
        facility_code:"FC001",
        status:true
      
      },
      {
        image: require("../../images/avatars/5.jpg"),
        name: "Angela Ross",
        url: "/activity-monitor",
        facility_code:"FC002",
        status:true
      
      },
      {
        image: require("../../images/avatars/6.png"),
        name: "Alexander",
        url: "/activity-monitor",
        facility_code:"FC003",
        status:false
      
      },
    ]
  };

export default QuickClientStatus;