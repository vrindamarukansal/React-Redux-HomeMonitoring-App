import React from "react";
import { Container, Button, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import AdminPageTitle from "../components/admin/AdminPageTitle";
import ClientMenu from '../components/admin/ClientMenu'

const CareCircle = (props) => {
  return(
  <Container fluid className="main-content-container px-4 pb-4">
            <Row noGutters className="page-header py-4">
            <Col xs="10">
              <AdminPageTitle sm="4" title="Resident" subtitle="Care Circle" className="text-sm-left" />
            </Col>
            <Col xs='2' className='d-inline-flex notifications'>
                <ClientMenu/>
            </Col>
        </Row>

        <Row>
      <Col>
        <Card small className="mb-4 overflow-scroll">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Care Staff</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Full Name
                  </th>
                  <th scope="col" className="border-0">
                    Role
                  </th>
                  <th scope="col" className="border-0">
                    Address
                  </th>
                  <th scope="col" className="border-0">
                    Gender
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                  <th scope="col" className="border-0">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Ali Kerry</td>
                  <td>Family Admin</td>
                  <td>Russian Federation, Gdańsk</td>
                  <td>Female</td>
                  <td>any@email.com</td>
                  <td>107-0339</td>
                  <td><a href="#_">edit</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark Angela</td>
                  <td>Care Provider</td>
                  <td>Borghetto di Vara, Estonia</td>
                  <td>Male</td>
                  <td>any@email.com</td>
                  <td>1-660-850-1647</td>
                  <td><a href="#_">edit</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry Nathan</td>
                  <td>Care Provider</td>
                  <td>Braunau am Inn, Cyprus</td>
                  <td>Male</td>
                  <td>some@gmail.com</td>
                  <td>214-4225</td>
                  <td><a href="#_">edit</a></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
      <Row>
      <Col>
        <Card small className="mb-4 overflow-scroll">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Family Members</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Full Name
                  </th>
                  <th scope="col" className="border-0">
                    Address
                  </th>
                  <th scope="col" className="border-0">
                    Gender
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                  <th scope="col" className="border-0">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali Kerry</td>
                  <td>Russian Federation, Gdańsk</td>
                  <td>Female</td>
                  <td>any@email.com</td>
                  <td>107-0339</td>
                  <td><a href="#_">edit</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark Angela</td>
                  <td>Borghetto di Vara, Estonia</td>
                  <td>Male</td>
                  <td>any@email.com</td>
                  <td>1-660-850-1647</td>
                  <td><a href="#_">edit</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry Nathan</td>
                  <td>Braunau am Inn, Cyprus</td>
                  <td>Male</td>
                  <td>some@gmail.com</td>
                  <td>214-4225</td>
                  <td><a href="#_">edit</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Angela Colt</td>
                  <td>Bad Hersfeld,Liberia</td>
                  <td>Female</td>
                  <td>some@email.com</td>
                  <td>1-848-473-7416</td>
                  <td><a href="#_">edit</a></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  )
  }

export default CareCircle;
