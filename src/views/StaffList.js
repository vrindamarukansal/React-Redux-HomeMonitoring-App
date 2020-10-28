import React from "react";
import { Container, Row, Col, Button, Card, CardImg, CardBody,ListGroup,ListGroupItem} from "shards-react";
import AdminPageTitle from "../components/admin/AdminPageTitle";
import PropTypes from 'prop-types'

const StaffList = (props) => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <AdminPageTitle title="Staff" subtitle="overview" className="text-sm-left"/>
            <Button className='ml-auto d-table'>Add new Staff</Button>
        </Row>
        <Row>
            {props.careproviders.map((careprovider,idx)=>(
                <Col xs="12" sm="6" md="4" lg="3" className="mb-4">
                    <Card small>
                        <CardImg top src={require(`../images/avatars/${careprovider.avatar}`)}/>
                        <CardBody>
                            <ListGroup small flush>
                                <ListGroupItem className="px-0 py-2">
                                <strong>Name: </strong>{careprovider.full_name}
                                </ListGroupItem>
                                <ListGroupItem className="px-0 py-2">
                                    <strong>Code: </strong>{careprovider.facility_code}
                                </ListGroupItem>
                                <ListGroupItem className="px-0 py-2">
                                    <strong>Address: </strong>{careprovider.address}<br/>{careprovider.city}
                                </ListGroupItem>
                                <ListGroupItem className="px-0 py-2">
                                    <strong>Phone: </strong>{careprovider.phone}
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col> 
            ))}

        </Row>
    </Container>
);

StaffList.propTypes = {
    careproviders: PropTypes.array,
  };
  
  StaffList.defaultProps = {
      careproviders:[
        {
            username: "johndoe",
            full_name: "Ali Kerry",
            avatar: "2.jpg",
            facility_code:"CP001",
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "angelaross",
            full_name: "Clark Angela",
            avatar: "3.jpg",
            facility_code:"CP002",
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "alexander",
            full_name: "Jerry Nathan",
            avatar: "1.jpg",
            facility_code:"CP003",
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
      ]

  }

export default StaffList;