import { FlatButton } from "../../atoms/Button/ButtonStyle";
import { useState } from "react";
import { useRouter } from "next/router";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const onChangeHandler = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    let valid = validate();
    if (valid) {
      clearForm();
      router.push("/");
    }
  };
  const clearForm = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const validate = () => {
    if (email === "") {
      setEmailError("Please Enter Email");
      return false;
    }
    if (!email.includes("@")) {
      setEmailError("Please Enter Correct Email");
      return false;
    }
    if (password === "") {
      setPasswordError("Please Enter Password");
      return false;
    }
    return true;
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
      <div className="error">{emailError}</div>
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
      <div className="error">{passwordError}</div>
      <div className="p-20">
        <FlatButton type="longBtn">Login</FlatButton>
      </div>
    </form>
  );
};

export default LoginForm;
