import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

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
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: values.email,
        password: values.password,
      });

      console.log(res);

      if(res.data.success) {
        window.localStorage.setItem("token", res.data.authToken);
        history.push('/');
        // window.localStorage.setItem(
        //   "userdata",
        //   `${res.data.userID} ${res.data.userName} ${res.data.authToken}`
        // );
      }

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
      const res = await axios.post("https://localhost:5000/api/auth/register", {
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
