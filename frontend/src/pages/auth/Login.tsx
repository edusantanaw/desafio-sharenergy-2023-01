import React, { useRef } from "react";
import { useAuth } from "../../context/auth/authContext";
import { Form, Input, Label, LoginContainer } from "./login.styles";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const rememberUser = useRef<HTMLInputElement | null>(null);
  const { auth } = useAuth();
  function getData() {
    const data = {
      username: "",
      password: "",
      remember: false,
    };
    if (usernameRef.current) data.username = usernameRef.current.value;
    if (passwordRef.current) data.password = passwordRef.current.value;
    if (rememberUser.current) data.remember = rememberUser.current.checked;
    return data;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = getData();
    const response = await auth(data);
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
