import React from "react";
import { Container, Button} from "shards-react";

const Errors = (props) => {
  return(
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>This page doesn't exist</h3>
        <p>Or you don't have access to it</p>
        <Button pill
        onClick={()=>{props.history.goBack();}}
        >&larr; Go Back</Button>
      </div>
    </div>
  </Container>
  )
  }

export default Errors;
