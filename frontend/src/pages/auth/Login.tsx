import React, { useRef } from "react";
import { useAuth } from "../../context/auth/authContext";
import { Form, Input, Label, LoginContainer } from "./login.styles";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const rememberUser = useRef<HTMLInputElement | null>(null);
  const { auth } = useAuth();

  function getData() {
    let username, password, remember;
    if (usernameRef.current) username = usernameRef.current.value;
    if (passwordRef.current) password = passwordRef.current.value;
    if (rememberUser.current) remember = rememberUser.current.checked;
    return { username, password, remember };
  }

  function validate(data: any) {
    if (!data.username) {
      return { valid: false, data: {} };
    }
    if (!data.password) {
      return { valid: false, data: {} };
    }
    if (!data.remember) {
      data.remember = false;
    }
    return { valid: true, validData: data };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = getData();
    const { validData, valid } = validate(data);
    if (!valid || !validData) return;
    const response = await auth(validData);
    console.log(response);
  }

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="credentials">
          <Label id="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="example: edusantanaw"
            ref={usernameRef}
          />
        </div>
        <div className="credentials">
          <Label id="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="**********"
            ref={passwordRef}
          />
        </div>
        <div className="remember">
          <Input type="checkbox" id="remember" ref={rememberUser} />
          <Label id="remember">Remember me</Label>
        </div>
        <Input type="submit" />
      </Form>
    </LoginContainer>
  );
};

export default Login;
