import React, { useEffect } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/PageTitle";
import SensorActivity from "../components/Sensors/SensorActivityImages";
import ActiveSensor from "../components/Sensors/ActiveSensor";
import QuickSensorStatus from "../components/Sensors/QuickSensorStatus";
import VisitsOverview from "../components/Sensors/VisitsOverview";
import Notifications from "../components/Notifications"
import ClientMenu from '../components/admin/ClientMenu'
import MyTooltip from "../components/Tooltip"

import {getSensorItems} from "../redux/actions/dataActions"
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const ActivityMonitor = (props) => {
    const {sensors}= props.data;
    const {currRole} = props.user;
    const {getSensorItems}=props
    useEffect(() => {
        getSensorItems();
    },[getSensorItems])

    

    return(
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
        <Col xs="10"><PageTitle/></Col>
            {
                {
                    "user":  <Col xs="2" className="d-inline-flex notifications">
                                    <Notifications/>
                                    </Col>,
                    "admin": <Col xs='2' className='d-inline-flex notifications'>
                                    <ClientMenu/>
                                 </Col>

                }[currRole]
            }
        </Row>
        <Row>
            <Col lg="6" md="12" sm="12" className="mb-4">
                <ActiveSensor SensorData={sensors}/>
            </Col>
            <Col lg="3" md="6" sm="12" className="mb-4">
                <QuickSensorStatus SensorStatus={sensors}/>
            </Col>
            <Col lg="3" md="6" sm="12" className="mb-4">
                <VisitsOverview />
            </Col>
        </Row>

        <Row>
            <Col sm="12" className="d-flex">
                <h4 className="mb-4 page-title">All Checkpoints</h4>   
                <MyTooltip message="Hover mouse on an image to see sensor activity"/>
            </Col>
        </Row> 
        <SensorActivity AllSensors={sensors}/>
        
    </Container>
    )
};

ActivityMonitor.propTypes = {
    getSensorItems: propTypes.func.isRequired,
    data: propTypes.object.isRequired,
    currRole: propTypes.object
  }
  
  const mapStateToProps = (state) =>({
     data: state.data,
     user: state.user
  })
  
  const mapDispatchToProps = dispatch => ({
    getSensorItems: () => dispatch(getSensorItems())
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ActivityMonitor);