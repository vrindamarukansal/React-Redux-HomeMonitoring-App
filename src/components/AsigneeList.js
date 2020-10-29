import React, {useEffect} from "react";
import { ListGroup, ListGroupItem, Button} from "shards-react";
import {getStaffList, changeAlertAsignee} from "../redux/actions/dataActions"
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const AsigneeList = (props)=>{
    const {source, id, setAsigneeEditable}= props;
    const {staff} = props.data
    const {getStaffList, changeAlertAsignee}= props
    useEffect(()=> {
        getStaffList();
    },[])

    function handleSubmit(newAsignee){
        if(source==='alerts')
            changeAlertAsignee(id, newAsignee)
        setAsigneeEditable(false)

    }
    return(
            <ListGroup>
                {staff.map((member)=>(
                    <ListGroupItem>
                        <Button theme='transparent' href='#' onClick={()=>handleSubmit(member.name)}>
                        {member.name}
                        </Button>
                    </ListGroupItem>

                ))}
            </ListGroup>
    )
}

AsigneeList.propTypes = {
    getStaffList: propTypes.func.isRequired,
    changeAlertAsignee: propTypes.func.isRequired,
    data: propTypes.object.isRequired,
    alertId: propTypes.string.isRequired
  }
  
  const mapStateToProps = (state) =>({
     data: state.data,
  })
  
  const mapDispatchToProps = dispatch => ({
    getStaffList: () => dispatch(getStaffList()),
    changeAlertAsignee: (alertId, newAsignee) => dispatch(changeAlertAsignee(alertId, newAsignee))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AsigneeList);
