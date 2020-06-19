import gql from "graphql-tag";

export const User = {
  CREATE_USER_MUTATION: gql`
    mutation createUser(
      $fullName: String!
      $email: String!
      $password: String!
      $confirmPassword: String!
    ) {
      createUser(
        inputUser: {
          fullName: $fullName
          email: $email
          password: $password
          confirmPassword: $confirmPassword
        }
      ) {
        token
      }
    }
  `
};
