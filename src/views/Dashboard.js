import React, { useEffect } from "react";
import { Container, Row, Col } from "shards-react";
import AdminPageTitle from "../components/admin/AdminPageTitle";
//import SmallStats from "../components/admin/SmallStats";
import QuickFacilityStatus from "../components/admin/QuickFacilityStatus";
import {getSensorItems} from "../redux/actions/dataActions"
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const Dashboard = (props) => {
    const {sensors}= props.data;
    useEffect(()=>{
        props.getSensorItems();
     //   console.log(props)
    },[])
    return(
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <AdminPageTitle sm="4" title="Dashboard" subtitle="Care Administrator" className="text-sm-left" />
        </Row>
        <Row className="d-none d-md-flex">
            <SmallStats/>
        </Row>
        <Row>
            <Col lg="4" md="12" sm="12" className="mb-4">
                <QuickFacilityStatus/>
            </Col>
        </Row>
        <Row>
            <Col sm="12">
 
            </Col>
        </Row> 
        
    </Container>
    )
};

Dashboard.propTypes = {
    getSensorItems: propTypes.func.isRequired,
    data: propTypes.object.isRequired
  }
  
  const mapStateToProps = (state) =>({
     data: state.data
  })
  
  const mapDispatchToProps = dispatch => ({
    getSensorItems: () => dispatch(getSensorItems())
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);