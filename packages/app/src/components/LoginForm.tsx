import React from "react";
import { Button, Form, Segment, Input } from "semantic-ui-react";

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

export const LoginForm: React.FC = () => {
  return (
    <div style={formStyle}>
      <div style={centered}>
        <h1 style={h1Style}>Bridge</h1>
      </div>
      <div style={centered}>
        <h3 style={h2Style}>Sign in</h3>
      </div>

      <Segment raised padded>
        <Form size="large">
          <Form.Field>
            <label>Phone Number</label>
            <Input
              icon="phone"
              iconPosition="left"
              type="tel"
              name="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="xxxxxxxxxx"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              icon="keyboard outline"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
          </Form.Field>
          <div style={centered}>
            <Button
              color="google plus"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                content: "Sign in",
              }}
            />
          </div>
        </Form>
      </Segment>
    </div>
  );
};
