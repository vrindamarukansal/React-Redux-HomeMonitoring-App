
import React from "react";
import {
    Card,
    CardBody,
    ListGroup,
    CardHeader,
    ListGroupItem
} from "shards-react";

class QuickSensorStatus extends React.Component {
    render(){
        const {
            SensorStatus
        } = this.props;
        return (
                <Card small className="h-100">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Sensor Activity</h6>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <ListGroup small flush>
                        {SensorStatus.map((post,idx) => (
                        <ListGroupItem key={idx} className="d-flex px-0">
                            <span className="text-semibold text-fiord-blue">{post.location}</span>
                            <span className="ml-auto text-right text-semibold text-reagent-gray">
                            {post.status? <i className="fa fa-check ml-1"/>:<i style={{fontSize:1+'rem'}} className="fa fa-exclamation-circle text-danger ml-1"/>}
                            </span>
                        </ListGroupItem>
                         ))}
                    </ListGroup>    
                  </CardBody>
                </Card>  
              );
    }
}

export default QuickSensorStatus;