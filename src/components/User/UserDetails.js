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
  Button,
  Badge
} from "shards-react";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import UserAvatarUpdate from "./UserAvatarUpdate"


const AccountSchema =  Yup.object({
  feInputTitle: Yup.string().required('Required'),

  feFirstName: Yup.string()
    .min(2).max(20).required('Required'),

  feLastName: Yup.string()
    .min(2).max(20).required('Required'),
  
  feDob: Yup.date('Invalid Date').max(new Date(), "Are you a time traveler?!")
    .required('Required'),

  feInputGender: Yup.mixed().oneOf(['Male', 'Female', 'Other',['Non-Binary','Transgender']])
    .required('Required'),

  feEmail: Yup.string().email('Email is not valid').required('Required'),

  fePhone: Yup.number('Enter a valid Phone').required('Required').positive().integer(),

  feAddress: Yup.string().min(7).max(30).required('Required'),

  feCity: Yup.string(),

  feZipCode: Yup.number('Enter a valid code').positive().integer().required('Required'),

  feInputState: Yup.string().required('Required')
})

const PasswordSchema = Yup.object({
  feOldPassword: Yup.string().required('Required'),
  feNewPassword: Yup.string().required('Required'),
  feRetypePassword: Yup.string().required('Required')
})
const DatePickerField = ({ name, value, onChange }) => {
  return (
      <DatePicker
          selected={(value && new Date(value)) || null}
          dateFormat="dd-MMM-yyyy"
          className="form-control"
          maxDate={new Date()}
          //minDate={}
          disabledKeyboardNavigation
          showYearDropdown
          onChange={val => {
              onChange(name, val);
          }}
      />
  );
};

class UserAccountDetails extends React.Component {
  state={
    personal:{
      feInputTitle:"Mr.",
      feFirstName:'Mike',
      feLastName:'Ross',
      feEmail:'mikeross@familycarespacce.com',
      fePhone:'1234567890',
      feAddress:'#123, Street',
      feCity:'New York',
      feInputState:'City',
      feZipCode:'12345',
      feDob: "11-Apr-1990",
      feInputGender: "Male",
      feRole: "Care Administrator"
    },
    password:{
      feOldPassword:"",
      feNewPassword:"",
      feRetypePassword:"",
      }
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
              <UserAvatarUpdate src={require('./../../images/avatars/1.jpg')}/>
            </Col>

          </Row>
        </Form>
        
      </ListGroupItem>
      <ListGroupItem className="border-bottom py-4">
         <Formik initialValues={this.state.personal}
                 validationSchema={AccountSchema}
                 onSubmit={(values, actions)=>{
                    actions.setSubmitting(true)
                    console.log('submitted')
                    setTimeout(()=> {
                      alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false)
                        actions.setStatus({msg:'Account settings updated'})
                    },1000)
                  }}>
            {({ values, status, handleSubmit,setFieldValue, isSubmitting, errors})=>(
            <Form id="personal_details" onSubmit={handleSubmit}>
            <h6>Personal Details</h6>
                  <Row form>
                      <Col md="2" className="form-group">
                          <label htmlFor="feInputTitle">Title</label>
                          <Field name="feInputTitle" as={FormSelect} value={values.feInputTitle}>
                            <option value="Miss">Miss.</option>
                            <option value="Mrs">Mrs.</option>
                            <option value="Ms">Ms.</option>
                            <option value="Mr">Mr.</option>
                            <option value="Mstr">Mstr.</option>
                            <option value="Dr">Dr.</option>
                            <option value="Sir">Sir</option>
                            <option value="Sister">Sister</option>
                            <option value="Rev">Rev.</option>
                            <option value="Prof">Prof.</option>
                          </Field>
                          <ErrorMessage name="feInputTitle" component="div" />
                      </Col>
                      {/* First Name */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feFirstName">First Name</label>
                        <br></br>
                        <Field name="feFirstName" 
                                value={values.feFirstName}
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter first name"/>
                        <ErrorMessage name="feFirstName" component="div" />
                        
                      </Col>
                      {/* Last Name */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feLastName">Last Name</label>
                        <br></br>
                        <Field id="feLastName" 
                                value={values.feLastName} 
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter last name"/>
                        <ErrorMessage name="feLastName" component="div"/>
                      </Col>
                  </Row>
                  <Row form>           
                      {/*Gender*/}
                      <Col sm="12" md="4" lg="2" className="form-group">
                      <label htmlFor="feInputGender">Gender Identity</label>
                      <Field name="feInputGender" 
                              value={values.feInputGender}
                              as={FormSelect}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-Binary">Non-Binary</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Other">Other</option>
                      </Field>
                      <ErrorMessage name="feInputGender" component="div"/>
                    </Col>
                    {/* DoB */}
                    <Col sm="12" md="8" lg="4" className="form-group">
                        <label htmlFor="feDob">DoB</label>
                        <br/>
                        <DatePickerField name="feDob" 
                            placeholder="Enter Date of Bith"
                            value={values.feDob}
                            onChange={setFieldValue}/>
                    <ErrorMessage name="feDob" component="div"/>
                    </Col>  
                    <Col md="4" className="form-group">
                      <label htmlFor="feRole">
                        Account Type
                        
                      </label>
                      <Field name="feRole" 
                             value={'care_admin'}
                             as={FormSelect}>
                          <option value="family_member">Family Member</option>
                          <option>Resident</option>
                          <option>Family Administrator</option>
                          <option>Family Friend</option>
                          <option selected value="care_admin">Care Administrator</option>
                          <option>Care Provider</option>
                      </Field>
                      <ErrorMessage name="feRole" component="div"/>
                    </Col>
                  </Row>
                  <h6>Contact Details</h6>
                    <Row form>
                        {/* Email */}
                        <Col md="4" className="form-group">
                          <label htmlFor="feEmail">Email</label>
                          <br></br>
                          <Field name="feEmail" 
                                value={values.feEmail} 
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter email address"/>
                          <ErrorMessage name="feEmail" component="div"/>
                        </Col>
                        {/* Phone */}
                        <Col md="4" className="form-group">
                        <label htmlFor="fePhone">Phone</label>
                        <br></br>
                        <Field name="fePhone" 
                                value={values.fePhone} 
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter Contact Number"/>
                        <ErrorMessage name="fePhone" component="div"/>
                        </Col>
                    </Row>
                    <Row form>  
                          <Col md="10" className="form-group"> 
                          <label htmlFor="feAddress">Address</label>
                          <br></br>
                          <Field name="feAddress" 
                                value={values.feAddress} 
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter Address"/>
                        <ErrorMessage name="feAddress" component="div"/>
                          </Col>
                    </Row> 
                    <Row form>
                          {/* City */}
                          <Col md="4" className="form-group">
                            <label htmlFor="feCity">City</label>
                            <br></br>
                            <Field name="feCity" 
                                value={values.feCity} 
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter City"/>
                            <ErrorMessage name="feCity" component="div"/>
                          </Col>
                          {/* State */}
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputState">State</label>
                            <Field name="feInputState"
                                   value={values.feInputState}
                                   as={FormSelect}>
                              <option>Choose...</option>
                              <option>State</option>
                            </Field>
                          </Col>
                          {/* Zip Code */}
                          <Col md="2" className="form-group">
                            <label htmlFor="feZipCode">Zip</label>
                            <br></br>
                            <Field name="feZipCode" 
                                    value={values.feZipCode} 
                                    className="form-control"
                                    placeholder="Enter zip code"
                                    as={FormInput} />
                          </Col>
                     </Row>
            {status && status.msg && <Badge outline theme="success">{status.msg}</Badge>}
          <Button className="ml-auto d-table" theme="accent" disabled={isSubmitting} type="submit">Submit</Button>
          </Form>
          )}
          </Formik>
        </ListGroupItem>
        <ListGroupItem className="py-4">
        <h6>Change Password</h6>
              <Formik initialValues={this.state.password}
                 validationSchema={PasswordSchema}
                 onSubmit={(values, actions)=>{
                    actions.setSubmitting(true)
                    console.log('submitted')
                    setTimeout(()=> {
                      alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false)
                        actions.setStatus({msg:'Password updated'})
                    },2000)
                  }}>
            {({ values, status, handleSubmit,setFieldValue, isSubmitting, errors})=>(
              <Form id="password_update" onSubmit={handleSubmit}>
                <Row form>
                  {/* Password */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feOldPassword">Old Password</label>
                    <br></br>
                    <Field name="feOldPassword" 
                                value='' 
                                className="form-control"
                                as={FormInput}
                                placeholder="Enter Old Password"/>
                        <ErrorMessage name="feOldPassword" component="div"/>
                  </Col>
                  {/* Password */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feNewPassword">New Password</label>
                    <br></br>
                    <Field name="feNewPassword" 
                              value='' 
                              className="form-control"
                              as={FormInput}
                              placeholder="Enter New Password"/>
                      <ErrorMessage name="feNewPassword" component="div"/>
                  </Col>
                  {/* Retype Password */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feRetypePassword">Retype New Password</label>
                    <br></br>
                    <Field name="feRetypePassword" 
                              value='' 
                              className="form-control"
                              as={FormInput}
                              placeholder="Re-type new Password"/>
                      <ErrorMessage name="feRetypePassword" component="div"/>
                  </Col>
                </Row>
                {status && status.msg && <Badge outline theme="success">{status.msg}</Badge>}
            <Button className="ml-auto d-table" theme="accent" disabled={isSubmitting} type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
      </ListGroupItem>
    </ListGroup>
  </Card>
    )
  }
}

export default UserAccountDetails;
