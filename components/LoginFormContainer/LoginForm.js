import { FlatButton } from "../../styles/styled-component/ButtonStyle";
import { useState } from "react";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("Logged in", email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <form className="login-form" onSubmit={onClickHandler}>
      <div className="p-20">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="p-20">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChangeHandler}
        />
      </div>
      <div className="p-20">
        <FlatButton type="longBtn">Login</FlatButton>
      </div>
    </form>
  );
};

export default LoginForm;
