import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormFeedback,
  Button
} from "shards-react";
import InputDate from "./InputDate";
import UserAvatarUpdate from "./UserAvatarUpdate"
import {InputText} from 'primereact/inputtext';
import CareStaffDetails from "./CareStaffDetails";

class FamilyMemberDetails extends React.Component {
  constructor(props){
    super(props);
    this. state={
      feFirstName:'John',
      feLastName:'Doe',
      feEmail:'janedoe@example.com',
      fePhone:'1234567890',
      feAddress:'#123, Street',
      feCity:'New York',
      feInputState:'',
      feZipCode:'12345',
      feDob: "7-Jun-1987",
    }
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
}
  render(){
    const { title } = this.props;
    return(
    <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="border-bottom py-4">
        <Form>
          <Row form>
            <Col sm="12">
              <UserAvatarUpdate src={require('./../../images/avatars/4.jpg')}/>
            </Col>

          </Row>
        </Form>
        
      </ListGroupItem>
      <ListGroupItem className="border-bottom py-4">
            <Form id="personal_details">
                  <Row form>
                            {/* First Name */}
                            <Col md="4" className="form-group">
                            <label htmlFor="feFirstName">First Name</label>
                            <br></br>
                            <InputText id="feFirstName" value={this.state.feFirstName} className="form-control" required
                                        keyfilter="alpha" onChange={this.handleChange('feFirstName')} />
                            
                            </Col>
                            {/* Last Name */}
                            <Col md="4" className="form-group">
                            <label htmlFor="feLastName">Last Name</label>
                            <br></br>
                            <InputText id="feLastName" value={this.state.feLastName} className="form-control" required
                                        keyfilter="alpha" onChange={this.handleChange('feLastName')} />
                            
                            </Col>
                            {/* Email */}
                          <Col md="4" className="form-group">
                          <label htmlFor="feEmail">Email</label>
                          <br></br>
                            <InputText id="feEmail" value={this.state.feEmail} className="form-control" required validateOnly
                                        keyfilter="email" onChange={this.handleChange('feEmail')} />
                          </Col>
                    </Row>
                    <Row form>
                        {/* Phone */}
                        <Col md="4" className="form-group">
                        <label htmlFor="fePhone">Phone</label>
                        <br></br>
                            <InputText id="fePhone" value={this.state.fePhone} className="form-control" required
                                        keyfilter="pint" onChange={this.handleChange('fePhone')} />
                        </Col>
                        {/* DoB */}
                        <Col md="4" className="form-group">
                            <label htmlFor="feDob">DoB</label>
                            <div><InputDate/></div>
                            
                        </Col> 
                    </Row>
                 <Row form>  
                      <Col md="12" className="form-group"> 
                      <label htmlFor="feAddress">Address</label>
                      <br></br>
                      <InputText id="feAddress" value={this.state.feAddress} className="form-control" required
                                 onChange={this.handleChange('feAddress')}/>
                      </Col>
                </Row> 
                <Row form>
                      {/* City */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feCity">City</label>
                        <br></br>
                        <InputText id="feCity" value={this.state.feCity} className="form-control" required
                                 onChange={this.handleChange('feCity')} />
                      </Col>
                      {/* State */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feInputState">State</label>
                        <FormSelect id="feInputState"
                                    onChange={this.handleChange('feInputState')}>
                          <option>Choose...</option>
                          <option>...</option>
                        </FormSelect>
                      </Col>
                      {/* Zip Code */}
                      <Col md="2" className="form-group">
                        <label htmlFor="feZipCode">Zip</label>
                        <br></br>
                            <InputText id="feZipCode" value={this.state.feZipCode} className="form-control" required
                                        keyfilter="pint" onChange={(e) => this.setState({feZipCode: e.target.value})} />
                      </Col>
              </Row>
              <Button className="ml-auto d-table" theme="accent">Update Details</Button>
            </Form>
      </ListGroupItem>
      <ListGroupItem className="py-4">
              <h6>Care Assistant</h6>
              <Form id="carestaff_member">
                <Row form>
                  <CareStaffDetails/>
                </Row>
              </Form>
      </ListGroupItem>
    </ListGroup>
  </Card>
    )
  }
}

export default FamilyMemberDetails;
