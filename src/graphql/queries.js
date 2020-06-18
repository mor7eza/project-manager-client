import gql from "graphql-tag";

export const User = {
  LOGIN_QUERY: gql`
    query login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `
};
