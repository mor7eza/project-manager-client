import React, { useState, useContext } from "react";
import { Segment, Form, Header, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";

import { AuthContext } from "../context/auth";

import { User } from "../graphql/queries";

const Login = (props) => {
  const context = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [loginUser, { loading }] = useLazyQuery(User.LOGIN_QUERY, {
    onCompleted({ login: { token } }) {
      context.login(token);
      props.history.push("/");
    },
    variables: values
  });

  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <div>
      <Segment raised className="login_form">
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          Project Manager
          <Header.Subheader>
            Enter your credentials below to do your job
          </Header.Subheader>
        </Header>
        <Divider />
        <Form
          noValidate
          onSubmit={onSubmitHandler}
          className={loading ? "loading" : ""}
        >
          <Form.Input
            required
            name="email"
            label="Email:"
            placeholder="email..."
            type="text"
            onChange={onChangeHandler}
          />
          <Form.Input
            required
            name="password"
            label="Password:"
            placeholder="password..."
            type="password"
            onChange={onChangeHandler}
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
