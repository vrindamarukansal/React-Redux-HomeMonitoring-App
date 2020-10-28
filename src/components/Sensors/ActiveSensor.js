import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Badge
} from "shards-react";

class ActiveSensor extends React.Component {
    render(){
        const {
            SensorData
        } = this.props;
        return (
               SensorData.map((post,idx) => (
                post.current && 
                <Card small className="h-100 card-post card-post--aside card-post--1" key={idx}>
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.backgroundImage})` }}
                  >
                    <Badge
                        pill
                        className={`card-post__category bg-royal-blue`}
                      />
                  </div>
                  <CardBody className="pt-0">
                  <CardHeader className="border-bottom pl-0">
                    <h6 className="m-0">Last Trigger : {post.location}</h6>
                    <div className="block-handle" />
                  </CardHeader>
                      <div className="card-text d-inline-block mt-4">
                        <p className="text-muted mb-1">CURRENT STATS</p>
                        <p className="mb-0"> 
                          Sensor Triggered {post.todayCount} times today
                        </p>
                        <p className="mb-4">
                          Last Trigger time : {post.activeSince}
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
                      Activity : 
                      {post.status?<i className="fa fa-check ml-1" />:<i className="fa fa-exclaimation-circle ml-1 text-danger" />} 
                       
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>  
                 
              ))
        );
    }
}

export default ActiveSensor;