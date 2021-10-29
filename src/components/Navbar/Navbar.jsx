import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

const search = <FontAwesomeIcon icon={faSearch} />;
const add = <FontAwesomeIcon icon={faPlus} />;

const Navbar = () => {
  return (
    <>
      <nav className={css.main_nav}>
        <div className={css.logo}>
          <h2>Logo</h2>
        </div>
        <div className={css.search_bar}>
          <input
            className={css.search_text}
            type="text"
            name=""
            id=""
            placeholder="Enter search item"
          />
          <a className={css.search_btn} href="http://localhost:3000/">
            {search}
          </a>
        </div>
        <div className={css.create}>
          <button className={css.create_btn}>{add} Create New Post</button>
        </div>
        <div className={css.message}>
          <ul>
            <li>
              <Link to="/login" className={css.temp}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={css.temp}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
