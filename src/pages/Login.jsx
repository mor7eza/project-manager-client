import React from "react";
import { Segment, Form, Header, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Segment raised className="login_form">
        <Header as="h2" icon textAlign="center">
          <Icon name="paper plane" circular />
          Project Manager
          <Header.Subheader>
            Enter your credentials below to do your job
          </Header.Subheader>
        </Header>
        <Divider />
        <Form noValidate>
          <Form.Input
            required
            name="email"
            label="Email:"
            placeholder="email..."
            type="text"
          />
          <Form.Input
            required
            name="password"
            label="Password:"
            placeholder="password..."
            type="password"
          />
          <Form.Button type="submit" primary fluid>
            Log in
          </Form.Button>
        </Form>
        <Divider horizontal>OR</Divider>
        <Header as="h5" textAlign="center">
          Don't have an account? <Link to="/register">Register Now</Link>
        </Header>
      </Segment>
    </div>
  );
};

export default Login;
