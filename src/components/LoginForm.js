import React from 'react';

import PropTypes from 'prop-types'
import { Formik, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import {
 //   NavLink,
    Form,
    FormInput,
    Button
  } from "shards-react";

// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


const LoginForm = (props) =>{
    const LoginSchema =  Yup.object({
        password: Yup.string()
          .min(4, 'Must be 8 characters or more')
          .required('Required'),
        username: Yup.string()
          .min(4).required('Required'),
      })
    return(
        <div>
          <Formik initialValues={{
                    username:'',
                    password:''
                 }}
                 validationSchema={LoginSchema}
                onSubmit={(values, actions)=>{
                    actions.setSubmitting(true)
                    window.location.href='/activity-monitor'
                  }}>
            {({ values, status, handleSubmit, isSubmitting, errors})=>(
            
              <Form onSubmit={handleSubmit}>

                <div className="form-group">
                    <Field 
                    name="username" 
                    as={FormInput}
                    placeholder="Enter username"/>
                    <ErrorMessage name="username" component="div" />
                </div>

                <div className="form-group">
                    <Field
                    name="password"
                    type="password"
                    as={FormInput}
                    placeholder="Enter password"/>
                    <ErrorMessage name="password" component="div" />
                </div>
                {status && status.msg && <div className="form-field">{status.msg}</div>}
                <Button disabled={isSubmitting} type="submit">Submit</Button>
                
              </Form>
            )}
          </Formik>
       </div>
    )
} 

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch=>( {
  loginUser: (userData,history)=> dispatch(loginUser(userData,history))
});



export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);