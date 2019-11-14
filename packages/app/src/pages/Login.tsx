import React from "react";
import { LoginForm } from "../components/LoginForm";

const formStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Login: React.FC = () => {
  return (
    <div style={formStyle}>
      <LoginForm />
    </div>
  );
};
