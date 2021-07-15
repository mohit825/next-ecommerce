import { FlatButton } from "../../atoms/Button/ButtonStyle";
import { useState } from "react";
import { validation } from "../../../utils/helperFunctions";
import router from "next/router";
const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  const [formError, setFormError] = useState({
    fName: null,
    lName: null,
    email: null,
    password: null,
    cnfPassword: null,
  });

  // const validate = () =>{
  //   if(fName === "" || )
  // }
  const onChangeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    // console.log("Register", fName, lName, email, password, cnfPassword);
    const formErrors = validation(formValues);
    setFormError(formErrors);
    if (Object.keys(formErrors).length === 0) {
      clearForm();
      router.push("/");
    }
  };
  const clearForm = () => {
    setFormValues({
      fName: "",
      lName: "",
      email: "",
      password: "",
      cnfPassword: "",
    });
  };
  return (
    <form className="login-form" onSubmit={onClickHandler}>
      <div className="p-20">
        <label htmlFor="fname"></label>
        <input
          type="text"
          id="fname"
          name="fName"
          placeholder="First Name"
          value={formValues.fName}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      {formError.fName && <div className="error">{formError.fName}</div>}
      <div className="p-20">
        <label htmlFor="lname"></label>
        <input
          type="text"
          id="lname"
          name="lName"
          placeholder="Last Name"
          value={formValues.lName}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      {formError.lName && <div className="error">{formError.lName}</div>}
      <div className="p-20">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      {formError.email && <div className="error">{formError.email}</div>}
      <div className="p-20">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={onChangeHandler}
        />
      </div>
      {formError.password && <div className="error">{formError.password}</div>}
      <div className="p-20">
        <label htmlFor="cnfpassword"></label>
        <input
          type="password"
          id="cnfpassword"
          name="cnfPassword"
          placeholder="Confirm Password"
          value={formValues.cnfPassword}
          onChange={onChangeHandler}
        />
      </div>
      {formError.cnfPassword && (
        <div className="error">{formError.cnfPassword}</div>
      )}
      <div className="p-20">
        <FlatButton type="longBtn">Register</FlatButton>
      </div>
    </form>
  );
};

export default RegisterForm;
