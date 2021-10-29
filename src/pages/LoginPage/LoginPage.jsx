import React from "react";
import css from "./login.module.css";
import Loginform from "../../components/form/Login";

const LoginPage = () => {
  return (
    <>
      <div className={css.login_bg}>
        <section className={css.container}>
          <section className={css.maincontainer}>
            <div className={`${css.half} ${css.left}`}></div>
            <div className={`${css.half} ${css.right}`}>
              <Loginform />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
