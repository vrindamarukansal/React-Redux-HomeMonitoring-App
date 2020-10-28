import React from "react";
import { Tooltip } from "shards-react";
import propTypes from 'prop-types'

export default class MyTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <span>
        <i className="material-icons tooltip-icon ml-1 " id="tooltip">help</i>
        <Tooltip
          placement="right"
          open={this.state.open}
          target="#tooltip"
          toggle={()=>this.toggle("right")}
        >
          {this.props.message}
        </Tooltip>
      </span>
    );
  }
}

MyTooltip.propTypes={
  message: propTypes.string.isRequired
}