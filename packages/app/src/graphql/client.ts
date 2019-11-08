import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:4000",
  credentials: "include",
});
