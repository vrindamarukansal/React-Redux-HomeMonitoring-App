import React,{Fragment, useState} from "react";
import {ListGroup, ListGroupItem, Modal,
    InputGroup,
    InputGroupAddon,
    FormInput,
    Button, } from "shards-react";

const AlertLogs =()=>{
const [visible, setVisible] = useState(false)
const [commentText, setCommentText] = useState("")
const handleChange = (event) => {
    setCommentText(event.target.value)
  }
return(
<div>
<a href="#none" onClick={()=>(setVisible(true))}>
    view
</a>
<Modal open={visible} toggle={()=>{setVisible(!visible)}} centered={true}>
    <ListGroup flush>
        <ListGroupItem>
            <strong>Cause (12:00PM): </strong>Fridge door opened for more than 10 mins
        </ListGroupItem>
        <ListGroupItem>
            <strong>Mike Ross (12:05PM): </strong> Assigned action item to Ali Kerry
        </ListGroupItem>
        <ListGroupItem>
            <strong>Ali Kerry (12:10PM): </strong> Accepted action item
        </ListGroupItem>
        <ListGroupItem>
            <strong>Ali Kerry (12:30PM): </strong> Action taken. Alert resolved 
        </ListGroupItem>
    </ListGroup>
    <Fragment>
      <InputGroup>
        <FormInput
          placeholder="Add a comment"
          value={commentText}
          onChange={handleChange}
        />
        <InputGroupAddon type="append">
          <Button theme="secondary">
            Post
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Fragment>
</Modal>
</div>
)
}

export default AlertLogs