import React from "react";
import { SignUpForm } from "../components/SignUpForm";

const formStyle = {
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const SignUp: React.FC = () => {
  return (
    <div style={formStyle}>
      <SignUpForm />
    </div>
  );
};
