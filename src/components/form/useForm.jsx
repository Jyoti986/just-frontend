import { useState } from "react";
import axios from "axios";

const useForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [rvalues, setRvalues] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailValues, setEmailValues] = useState({
    email: "",
  });

  const [passwordValues, setPasswordValue] = useState({
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    setEmailValues({
      ...emailValues,
      [name]: value,
    });

    setPasswordValue({
      ...passwordValues,
      [name]: value,
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;

    setRvalues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: values.email,
        password: values.password,
      });

      window.localStorage.setItem("authorization", res.data.token);
      window.localStorage.setItem(
        "userdata",
        `${res.data.userID} ${res.data.userName} ${res.data.token}`
      );

      setValues({
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    //TODO: validation for password and confiirmPassword
    //TODO: encrypt pass and confirmPass
    const erpassword = "Encrypt the password";
    try {
      const res = await axios.post("https://localhost:5000/api/register", {
        username: rvalues.username,
        email: rvalues.email,
        mobile: rvalues.mobile,
        password: erpassword,
        confirmPassword: erpassword,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    handleChange,
    handleRegisterChange,
    handleLogin,
    handleRegister,
    values,
    rvalues,
    emailValues,
    errors,
    passwordValues,
  };
};

export default useForm;
