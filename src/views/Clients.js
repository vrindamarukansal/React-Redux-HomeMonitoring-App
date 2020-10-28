import React from "react";
import { Container, Row, Col, Button} from "shards-react";
import AdminPageTitle from "../components/admin/AdminPageTitle";
import ClientCard from "../components/admin/ClientCard"
import PropTypes from 'prop-types'

const Clients = (props) => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <AdminPageTitle title="Clients" subtitle="overview" className="text-sm-left"/>
            <Button className='ml-auto d-table'>Add new Client</Button>
        </Row>
        <Row>
            {props.clients.map((client)=>(
                <Col xs="12" sm="6" md="4" lg="3" className="mb-4">
                    <ClientCard client={client}/>
                </Col> 
            ))}

        </Row>
    </Container>
);

Clients.propTypes = {
    clients: PropTypes.array,
  };
  
  Clients.defaultProps = {
    clients:[
        {
            username: "johndoe",
            full_name: "John Doe",
            avatar: "4.jpg",
            status:true,
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "angelaross",
            full_name: "Angela Ross",
            avatar: "5.jpg",
            status:false,
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "alexander",
            full_name: "Alexander",
            avatar: "6.png",
            status:true,
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "johndoe",
            full_name: "John Doe",
            avatar: "4.jpg",
            status:true,
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "angelaross",
            full_name: "Angela Ross",
            avatar: "5.jpg",
            status:true,
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
        {
            username: "alexander",
            full_name: "Alexander",
            avatar: "6.png",
            status:true,
            phone:"123456789",
            address: "Block #12, Street, Area",
            city:"City, State, #Pin",
            email:"any@email.com"
        },
      ]

  }

export default Clients;