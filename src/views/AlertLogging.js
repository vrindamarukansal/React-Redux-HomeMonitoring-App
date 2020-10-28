import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, CardBody, ListGroup, ListGroupItem, Modal, } from "shards-react";
import AdminPageTitle from "../components/admin/AdminPageTitle";
import AlertLogs from '../components/AlertLogs'
import {getAlertItems} from "../redux/actions/dataActions"
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const AlertLogging = (props) => {
  const {alerts} = props.data;
  const {currRole} = props.user;
  const {getAlertItems}=props
  const [visible, setVisible] = useState(false)
  const [visible1, setVisible1] = useState(false)


  useEffect(() => {
      getAlertItems(currRole);
  },[currRole,getAlertItems])

  return(
  <Container fluid className="main-content-container px-4 pb-4">
            <Row noGutters className="page-header py-4">
            <Col xs="10">
              <AdminPageTitle sm="4" title="Alert Logs" subtitle="Active and Past Alerts" className="text-sm-left" />
            </Col>
        </Row>

        <Row>
      <Col>
        <Card small className="mb-4 overflow-scroll">
          
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Client
                  </th>
                  <th scope="col" className="border-0">
                    Sensor
                  </th>
                  <th scope="col" className="border-0">
                  <span>Created At</span><br/><span></span>
                  </th>
                  <th scope="col" className="border-0">
                    Assigned To
                  </th>
                  <th scope="col" className="border-0">
                    <span>Resolved At</span><br/><span>(in mins)</span>
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
              {alerts.map((alert,idx)=>(
                  <tr>
                  <td>{idx}</td>
                  <td>{alert.name}</td>
                  <td>{alert.sensor}</td>
                  <td>{alert.created_date} <br/> {alert.created_time}</td>
                  {alert.status?<td className='text-danger'>Active</td>:
                  <td>{alert.resolve_date} <br/> {alert.resolve_time}</td>}
                  <td>
                    <a href='#none' onClick={()=>(setVisible(true))}>
                      <i className='material-icons mr-2'>edit</i>
                    </a>
                    {alert.assigned}
                  </td>
                  <td>
                    <a href='#none' onClick={()=>(setVisible1(true))}>
                      <i className='material-icons mr-2'>edit</i>
                    </a>
                    {alert.status?<span className='text-danger'>Pending</span>:<span className='text-success'>Resolved</span>}
                    </td>
                  <td><AlertLogs/></td>
                </tr>
              ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Modal open={visible} toggle={()=>{setVisible(!visible)}} centered={true}>
    <ListGroup flush>
        <ListGroupItem>
            Ali Kerry
        </ListGroupItem>
        <ListGroupItem>
            Angela Ross
        </ListGroupItem>
        <ListGroupItem>
            Jerry Nathan
        </ListGroupItem>
    </ListGroup>
    </Modal>
    <Modal open={visible1} toggle={()=>{setVisible1(!visible1)}} centered={true}>
    <ListGroup flush>
        <ListGroupItem>
            <span className='text-success'>Resolved</span>
        </ListGroupItem>
        <ListGroupItem>
           <span className='text-danger'>Pending</span>
        </ListGroupItem>
    </ListGroup>
    </Modal>
  </Container>
  )
  }

  AlertLogging.propTypes = {
    getAlertItems: propTypes.func.isRequired,
    data: propTypes.object.isRequired,
    currRole: propTypes.object
  }
  
  const mapStateToProps = (state) =>({
     data: state.data,
     user: state.user
  })
  
  const mapDispatchToProps = dispatch => ({
    getAlertItems: ( currRole) => dispatch(getAlertItems(currRole))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AlertLogging);
