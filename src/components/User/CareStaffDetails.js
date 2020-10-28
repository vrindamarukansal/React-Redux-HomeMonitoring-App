import React from "react";
//import {Row,Col} from 'shards-react'
import propTypes from 'prop-types'

class CareStaffDetails extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const{avatar, name,accountType}= this.props;
    return (
      <div className="d-flex">
        <img
          className="mb-3 mr-3 rounded-circle"
          src={avatar}
          alt={name}
          width="110"
        />
    <div className="text-left my-auto">
    <h4 className="mb-0">{name}</h4>
      <span className="main-sidebar__nav-title d-block">{accountType}</span>
    </div>
    </div>
    )
  }
} 

CareStaffDetails.propTypes={
  avatar: propTypes.string,
  name:propTypes.string.isRequired,
  accountType: propTypes.string.isRequired
}

export default CareStaffDetails;
