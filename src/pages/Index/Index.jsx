import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Container";
import css from "./index.module.css";

const Index = () => {
  return (
    <>
      <div className={css.index_container}>
        {/* <Navbar /> */}
        <div className={css.sidebar}>
          <Sidebar />
        </div>
        <div className={css.feed}>
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Index;
