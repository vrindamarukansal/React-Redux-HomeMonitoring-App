import React from "react";
import {
    Card,
    CardBody,
    ListGroup,
    CardHeader,
    ListGroupItem,
    Badge
} from "shards-react";

class VisitsOverview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            VisitHistory : [
                {
                    date: "8 Jan 2020",
                    visitor: "Sierra Brooks",
                    status: 2
                },
                {
                    date: "4 Jan 2020",
                    visitor: "Sierra Brooks",
                    status: 0
                },
                {
                    date: "31 Dec 2019",
                    visitor: "Sierra Brooks",
                    status: 1
                }
            ]

        }
    }    
        render(){
            const {
                VisitHistory
            } = this.state;
            return(
                <Card small className="h-100">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Visit Log</h6>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <ListGroup small flush className="border-left timeline">
                        {VisitHistory.map((post,idx) => (
                        <ListGroupItem key={idx} className="px-0 pl-3">
                                <div className="mb-1 text-semibold text-fiord-blue">
                                    {post.date}
                                    <span className="text-muted mx-1">BY</span>
                                    {post.visitor}
                                </div>
                            <div className="mb-1">
                                <span className="text-muted mr-1">
                                
                                {
                                    {
                                        0: <Badge pill theme="danger">Incomplete</Badge>,
                                        1: <Badge pill theme="success">Completed</Badge>,
                                        2: <Badge pill theme="primary">Scheduled</Badge>

                                    }[post.status]
                                }
                                </span>
                            </div>
                        </ListGroupItem>
                         ))}
                    </ListGroup>    
                  </CardBody>
                </Card> 
            )
        }
     

}

export default VisitsOverview;
