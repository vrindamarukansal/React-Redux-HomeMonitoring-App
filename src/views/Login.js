import React from "react";
import { Container,Card, CardBody, CardHeader} from "shards-react";
import LoginForm from "../components/LoginForm";

const Login = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <Card className="card-login card-post--aside card-post--1">
          <div className="card-post__image"
                style={{ backgroundImage: `url(${require('./../images/content-management/17.jpeg')})`}}
          />
          <CardBody>
            <CardHeader><h5>Login to Smart Home Portal</h5></CardHeader>
            <LoginForm/>
          </CardBody>  
        </Card>
      </div>
    </div>
  </Container>
);

export default Login;
