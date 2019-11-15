import React, { useState } from "react";
import {
  Button,
  Form,
  Segment,
  Input,
  InputOnChangeData,
} from "semantic-ui-react";

const h1Style = {
  fontFamily: "Permanent Marker",
  fontSize: 54,
  color: "#ff6d6d",
  textShadow: "2px 2px 2px #aaa",
};

const h2Style = {
  fontFamily: "Permanent Marker",
  fontSize: 42,
  color: "#ff6d6d",
  textShadow: "2px 2px 2px #aaa",
};

const formStyle = {
  height: "30%",
  width: "30%",
};

const centered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const SignUpForm: React.FC = () => {
  const [fields, setFields] = useState({
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    const val = e.target.value;
    setFields(prevState => {
      return { ...prevState, [data.name]: val };
    });
  };

  return (
    <div style={formStyle}>
      <div style={centered}>
        <h1 style={h1Style}>Bridge</h1>
      </div>
      <div style={centered}>
        <h3 style={h2Style}>Sign up</h3>
      </div>

      <Segment raised padded>
        <Form size="large">
          <Form.Field value={fields.username} className="username">
            <label>Username</label>
            <Input
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="username"
              onChange={updateField}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone Number</label>
            <Input
              icon="phone"
              iconPosition="left"
              type="tel"
              name="phoneNumber"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="xxxxxxxxxx"
              onChange={updateField}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              icon="keyboard outline"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={updateField}
            />
          </Form.Field>

          <Form.Field>
            <label>Confirm Password</label>
            <Input
              icon="keyboard outline"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={updateField}
            />
          </Form.Field>
          <div style={centered}>
            <Button
              color="google plus"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                content: "Sign up",
              }}
            />
          </div>
        </Form>
      </Segment>
    </div>
  );
};
