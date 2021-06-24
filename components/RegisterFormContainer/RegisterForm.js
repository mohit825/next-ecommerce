import { FlatButton } from "../../styles/styled-component/ButtonStyle";
import { useState } from "react";
const RegisterForm = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfpassword] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "fname") {
      setFname(e.target.value);
    } else if (e.target.id === "lname") {
      setLname(e.target.value);
    } else if (e.target.id === "cnfpassword") {
      setCnfpassword(e.target.value);
    }
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("Register", fName, lName, email, password, cnfPassword);
    setFname("");
    setFname("");
    setEmail("");
    setPassword("");
    setCnfpassword("");
  };
  return (
    <form className="login-form" onSubmit={onClickHandler}>
      <div className="p-20">
        <label htmlFor="fname"></label>
        <input
          type="text"
          id="fname"
          placeholder="First Name"
          value={fName}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="p-20">
        <label htmlFor="lname"></label>
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          value={lName}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="p-20">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChangeHandler}
          autoComplete="off"
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
        <label htmlFor="cnfpassword"></label>
        <input
          type="password"
          id="cnfpassword"
          placeholder="Confirm Password"
          value={cnfPassword}
          onChange={onChangeHandler}
        />
      </div>
      <div className="p-20">
        <FlatButton type="longBtn">Register</FlatButton>
      </div>
    </form>
  );
};

export default RegisterForm;
