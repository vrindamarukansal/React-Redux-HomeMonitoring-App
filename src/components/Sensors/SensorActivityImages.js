import React from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
} from "shards-react";

class SensorImages extends React.Component {
    render(){
        const {
            AllSensors
        } = this.props;

        return (
            <Row> 
              {AllSensors.map((post, idx) => (
                <Col lg="4" sm="12" className="mb-4 card-container" key={idx}>
                  <Card small className="card-post card-post--1">
                    <div
                      className="card-post__image card-post__image-full front"
                      style={{ backgroundImage: `url(${post.backgroundImage})` }}
                    >
                      <Badge
                        pill
                        className={post.current?`card-post__category bg-royal-blue`:`card-post__category bg-dark`}
                      >
                        {post.location}
                      </Badge>
                    </div>
                    <CardBody className="back">
                      <div className="card-text">
                        <p className="text-muted mb-1">CURRENT STATS</p>
                        <p className="mb-0"> 
                          Sensor Triggered {post.todayCount} times today
                        </p>
                        <p className="mb-4">
                          Last Trigger : {post.lastTrigger} for {post.lastTriggerDuration} mins
                        </p>
                        <p className="text-muted mb-1">SUMMARY STATS</p>
                        <p className="mb-0">
                          Sensor Triggers {post.summaryCount} times a day
                        </p>
                        <p className="mb-0">
                          Remains Active for around {post.summaryActive} mins
                        </p>
                      </div>
                      
                      <CardFooter className="border-top d-flex pb-0 pr-0">
                      <div className="my-auto ml-auto">
                      {post.location} Activity :
                      {post.status? <i className="fa fa-check ml-1"/>:<i className="fa fa-exclamation-circle text-danger ml-1"/>}
                      </div>
                    </CardFooter>
                  </CardBody>
                  </Card>  
                </Col>
              ))}
            </Row>
        );
    }
}

export default SensorImages;