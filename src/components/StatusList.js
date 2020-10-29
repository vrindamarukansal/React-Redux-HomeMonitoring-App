import React, {useEffect} from "react";
import { ListGroup, ListGroupItem, Button} from "shards-react";
import {changeAlertStatus} from "../redux/actions/dataActions"
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const AsigneeList = (props)=>{
    const {source, id, setStatusEditable}= props;
    const {changeAlertStatus}= props

    function handleSubmit(newStatus){
        if(source==='alerts')
            changeAlertStatus(id, newStatus)
            setStatusEditable(false)

    }
    return(
            <ListGroup>
                    <ListGroupItem>
                        <Button theme='transparent' onClick={()=>handleSubmit(true)}>
                        Pending
                        </Button>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button theme='transparent' onClick={()=>handleSubmit(false)}>
                        Resolved
                        </Button>
                    </ListGroupItem>
            </ListGroup>
    )
}

AsigneeList.propTypes = {
    changeAlertStatus: propTypes.func.isRequired,
    data: propTypes.object.isRequired,
    alertId: propTypes.string.isRequired
  }
  
  const mapStateToProps = (state) =>({
     data: state.data,
  })
  
  const mapDispatchToProps = dispatch => ({
    changeAlertStatus: (alertId, newStatus) => dispatch(changeAlertStatus(alertId, newStatus))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AsigneeList);
