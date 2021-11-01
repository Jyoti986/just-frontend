import React from "react";
import { useHistory } from "react-router-dom";
import Register from "../../components/form/Register";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {

  const history = useHistory();

  if(localStorage.getItem("token")) {
    history.push('/');
  }

  return (
    <>
      <div className={css.register_bg}>
        <section className={css.container}>
          <div className={css.mainRegisterContainer}>
            <div className={`${css.half} ${css.left}`}>
              <Register />
            </div>
            <div className={`${css.half} ${css.right}`}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPage;
