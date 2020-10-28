import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

class PasswordChange extends React.Component {
  state={
    feOldPassword:"EX@MPL#P@$$w0RD",
    feNewPassword:"EX@MPL#P@$$w0RD",
    feRetypePassword:"EX@MPL#P@$$w0RD"
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
}
  render(){
    const { title } = this.props;
    const {feOldPassword,feNewPassword,feRetypePassword} = this.state;
    return(
      <div className="mb-4">
      <CardHeader className="border-top">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
              <Form>
                <Row form>
                  {/* Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feOldPassword">Old Password</label>
                    <FormInput
                      type="password"
                      id="feOldPassword"
                      placeholder="Old Password"
                      value={feOldPassword}
                      onChange={this.handleChange('feOldPassword')}
                      autoComplete="current-password"
                    />
                  </Col>
                  {/* Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feNewPassword">New Password</label>
                    <FormInput
                      type="password"
                      id="feNewPassword"
                      placeholder="Password"
                      value={feNewPassword}
                      onChange={this.handleChange('feNewPassword')}
                    />
                  </Col>
                  {/* Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feRetypePassword">Retype New Password</label>
                    <FormInput
                      type="password"
                      id="feRetypePassword"
                      placeholder="Password"
                      value={feRetypePassword}
                      onChange={this.handleChange('feRetypePassword')}
                    />
                  </Col>
                </Row>
                <Button className="ml-auto d-table mr-3" theme="accent">Update Password</Button>
              </Form>
        </ListGroupItem>
      </ListGroup>
    </div>
    )
  }
} 

export default PasswordChange;
