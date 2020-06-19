import React, { useState, useContext } from "react";
import { Segment, Header, Form, Message } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";

import { AuthContext } from "../context/auth";
import { User } from "../graphql/mutations";

const Register = (props) => {
  const { login } = useContext(AuthContext);

  const [errors, setErrors] = useState(null);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [register, { loading }] = useMutation(User.CREATE_USER_MUTATION, {
    onCompleted({ createUser: { token } }) {
      login(token);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register();
  };

  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Segment raised className="login_form">
        <Header as="h2" textAlign="center">
          Join us
          <Header.Subheader>
            Register an account and start doing
          </Header.Subheader>
        </Header>
        <Form
          error={errors ? 1 : 0}
          noValidate
          className={loading ? "loading" : ""}
          onSubmit={onSubmitHandler}
        >
          <Form.Input
            required
            name="fullName"
            label="Full Name:"
            placeholder="full name..."
            type="text"
            onChange={onChangeHandler}
            error={errors && Object.keys(errors).includes("fullName")}
          />
          <Form.Input
            required
            name="email"
            label="Email:"
            placeholder="email..."
            type="text"
            onChange={onChangeHandler}
            error={errors && Object.keys(errors).includes("email")}
          />
          <Form.Input
            required
            name="password"
            label="Password:"
            placeholder="password..."
            type="password"
            onChange={onChangeHandler}
            error={errors && Object.keys(errors).includes("password")}
          />
          <Form.Input
            required
            name="confirmPassword"
            label="Confirm Password:"
            placeholder="confirm password..."
            type="password"
            onChange={onChangeHandler}
            error={errors && Object.keys(errors).includes("confirmPassword")}
          />
          <Form.Checkbox
            label="I agree to the Term and Conditions"
            name="terms"
          />
          <Message
            error
            header="Error!"
            list={errors && Object.values(errors)}
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
