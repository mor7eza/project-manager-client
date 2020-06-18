import React from "react";
import { Segment, Header, Form } from "semantic-ui-react";

const Register = () => {
  return (
    <div>
      <Segment raised className="login_form">
        <Header as="h2" textAlign="center">
          Join us
          <Header.Subheader>
            Register an account and start doing
          </Header.Subheader>
        </Header>
        <Form noValidate>
          <Form.Input
            required
            name="fullName"
            label="Full Name:"
            placeholder="full name..."
            type="text"
          />
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
          <Form.Input
            required
            name="confirmPassword"
            label="Confirm Password:"
            placeholder="confirm password..."
            type="password"
          />
          <Form.Checkbox
            label="I agree to the Term and Conditions"
            name="terms"
          />
          <Form.Button fluid primary type="submit">
            Register
          </Form.Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Register;
