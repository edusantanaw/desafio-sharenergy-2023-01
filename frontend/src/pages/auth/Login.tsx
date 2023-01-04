import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { Label, Input } from "../../styles/Global";
import { Form, LoginContainer } from "./login.styles";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const rememberUser = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { auth } = useAuth();
  const navigate = useNavigate();

  function getData() {
    let username, password, remember;
    if (usernameRef.current) username = usernameRef.current.value;
    if (passwordRef.current) password = passwordRef.current.value;
    if (rememberUser.current) remember = rememberUser.current.checked;
    return { username, password, remember };
  }

  function validate(data: any) {
    if (!data.username)
      return { valid: false, validData: "O username é necessario!" };

    if (!data.password)
      return { valid: false, validData: "A senha é necessaria!" };

    if (!data.remember) data.remember = false;

    return { valid: true, validData: data };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = getData();
    const { validData, valid } = validate(data);
    if (!valid) {
      setError(validData as string);
      return;
    }
    const response = await auth(validData);
    if (!response.success) {
      setError(response.data);
      return;
    } else if (error) {
      setError(null);
    }
    navigate("/");
  }

  return (
    <LoginContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="credentials">
          <h2>Login</h2>
          <Label id="username">Username</Label>
          <Input
            type="text"
            id="username"
            width="100%"
            placeholder="edusantanaw"
            ref={usernameRef}
          />
        </div>
        <div className="credentials">
          <Label id="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="**********"
            width="100%"
            ref={passwordRef}
          />
        </div>
        <div className="remember">
          <input type="checkbox" id="remember" ref={rememberUser} />
          <Label id="remember" htmlFor="remember" size="1em">
            Remember me
          </Label>
        </div>
        {error && <span id="error">{error}</span>}
        <Input type="submit" width="100%" />
      </Form>
    </LoginContainer>
  );
};

export default Login;
