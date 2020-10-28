import React,{useEffect} from "react";
import { withRouter } from "react-router-dom"
import { Navbar, Form, FormSelect} from "shards-react";
import classNames from "classnames";
import PropTypes from "prop-types"
import { getCurrentUser, setCurrentRole } from "../../redux/actions/userActions";
import {connect} from 'react-redux'

const UserArea = (props) => {
    const {currRole}= props.user;
    const {getCurrentUser}= props;
    useEffect(() => {
        getCurrentUser(currRole)
    }, [currRole, getCurrentUser])
    const classes = classNames(
        props.className,
        "m-auto",
        "d-table",
        "text-center"
    );

    const {full_name, avatar, role} = props.user.currUser
    
    const handleChange=(e)=>{
        let selection = e.target.value
        props.setCurrentRole(selection)
        props.history.push(`/dashboard/${selection}`)
    }
    return(
        <Navbar className={classes}>
            <img
            className="rounded-circle"
            src={avatar}
            alt="User Avatar"
            width="110px"
            />
            <div className="d-none d-md-block">
            <h6 className="mb-0">{full_name}</h6>
            <p className="main-sidebar__nav-title mb-0">{role}</p>
            </div>
            <Form id="roles" className="mt-2">
                <FormSelect name="feRole" 
                        value={currRole}
                        onChange={handleChange}>
                    <option value=''>Select a role</option>
                    <option value="user">Family Member</option>
                    <option value="admin">Care Administrator</option>
                </FormSelect>
            </Form>
        </Navbar>
    );
};

UserArea.propTypes = {
    user: PropTypes.object.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
    setCurrentRole: PropTypes.func.isRequired,
    className: PropTypes.string,
};

  
  const mapStateToProps = (state) =>({
     user: state.user
  })
  
  const mapDispatchToProps = dispatch => ({
    getCurrentUser: (role) => dispatch(getCurrentUser(role)),
    setCurrentRole: (role) => dispatch(setCurrentRole(role))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserArea));
