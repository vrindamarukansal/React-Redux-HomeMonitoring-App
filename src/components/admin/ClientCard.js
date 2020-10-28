import React,{useState} from "react";
import { Link } from "react-router-dom"
import { Card, CardImg, CardBody, ListGroup, ListGroupItem, Modal } from "shards-react";

const ClientCard =({client})=>{
const [visible, setVisible] = useState(false)
const cardActions = [
    { text: "Activity Monitor", link: `/activity-monitor`},
    { text: "Care Circle", link:'/care-circle' },
    { text: "Account Settings", link:'/account-settings'},
    { text: "Delete Client", link:'/delete'}
  ]
return(
<Card small>
<a href="#none" onClick={()=>(setVisible(true))}>
    <CardImg top src={require(`../../images/avatars/${client.avatar}`)}/>
</a>
<CardBody>
    <ListGroup small flush>
        <ListGroupItem className="px-0 py-2">
        <strong>Client: </strong>{client.full_name}
        </ListGroupItem>
        <ListGroupItem className="px-0 py-2">
            <strong>Status: </strong>{client.status}
        </ListGroupItem>
        <ListGroupItem className="px-0 py-2">
            <strong>Address: </strong>{client.address}<br/>{client.city}
        </ListGroupItem>
        <ListGroupItem className="px-0 py-2">
            <strong>Phone: </strong>{client.phone}
        </ListGroupItem>
    </ListGroup>
</CardBody>
<Modal open={visible} toggle={()=>{setVisible(!visible)}} centered={true}>
    <ListGroup flush>
        {cardActions.map((action) => (
            <ListGroupItem tag={Link} to={action.link} onClick={()=>setVisible(false)}>
            {action.text}
            </ListGroupItem>
        ))}
        <ListGroupItem tag={Link} onClick={()=>setVisible(false)}>Cancel</ListGroupItem>
    </ListGroup>
</Modal>
</Card>
)
}

export default ClientCard