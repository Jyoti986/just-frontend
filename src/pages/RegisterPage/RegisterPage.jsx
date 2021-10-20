import React from "react";
import Register from "../../components/form/Register";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
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
