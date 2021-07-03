export const orderCategories = (categories) => {
  let newCategories = categories.sort((a, b) => {
    return a.order - b.order;
  });
  return newCategories;
};

export const LINKS = ["Home", "Products"];

export const validation = (values) => {
  let errors = {};

  if (!values.fName) {
    errors.fName = "First Name is required";
  }
  if (!values.lName) {
    errors.lName = "Last Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is Invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password should at least 6 characters";
  } else if (!/^[a-zA-Z0-9]\S*$/.test(values.email)) {
    errors.password = "Space is not allowed in password";
  }

  if (!values.cnfPassword) {
    errors.cnfPassword = "Password is required";
  } else if (values.password !== values.cnfPassword) {
    errors.cnfPassword = "Passwords Mismatch";
  }

  return errors;
};
