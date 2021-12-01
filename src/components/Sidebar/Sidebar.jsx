import React, { useEffect } from "react";
import { Link, useHistory, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faSearch,
  faPlus,
  faUser,
  faBell,
  faPaperPlane,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import css from "./Sidebar.module.css";
import useForm from "../form/useForm";

import no_dp from '../../images/no_dp.jpg';
const feed = <FontAwesomeIcon icon={faTh} />;
const explore = <FontAwesomeIcon icon={faSearch} />;
const addPost = <FontAwesomeIcon icon={faPlus} />;
const profileIcon = <FontAwesomeIcon icon={faUser} />;
const notification = <FontAwesomeIcon icon={faBell} />;
const message = <FontAwesomeIcon icon={faPaperPlane} />;
const logout = <FontAwesomeIcon icon={faSignOutAlt} />;

const Sidebar = ({setShow, isProfile}) => {

  const history = useHistory();
  const location = useLocation();
  const { getProfile, profile } = useForm();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getProfile();
  }, [getProfile])

  const onLogout = () => {
    localStorage.removeItem("token");
    history.push('/login');
  }

  return (
    <>
      <div className={css.sidebar}>
        <div className={css.logo}>
          <h1>Just</h1>
        </div>
        {/* profile img  */}
        <div className={css.profile}>
          <div className={css.profile_img}>
            {profile.profilePic !== undefined ? <img src={profile.profilePic} alt="" /> : <img src={no_dp} alt="" />}
          </div>
          <div className={css.name}>
            <h1>{profile.name}</h1>
          </div>
          <span>@{profile.username}</span>
        </div>
        {/* about */}
        <div className={css.about}>
          <div className={css.box}>
            <h3>{profile.posts.length}</h3>
            <span>Posts</span>
          </div>
          <div className={css.box}>
            <h3>{profile.followers.length}</h3>
            <span>Followers</span>
          </div>
          <div className={css.box}>
            <h3>{profile.following.length}</h3>
            <span>Following</span>
          </div>
        </div>
        {/* menu */}
        <div className={css.menu}>
          <Link to="/" className={ location.pathname === "/" ? css.active : ""}>
            <span className={css.icon}>{feed}</span>
            Feed
          </Link>
          {/* <Link to="/">
            <span className={css.icon}>{explore}</span>
            Explore
          </Link> */}
          <Link to='/profile' className={ location.pathname === "/profile" || location.pathname === "/editProfile" ? css.active : ""}>
            <span className={css.icon}>{profileIcon}</span>
            Profile
          </Link>
          {!isProfile && <Link to={location.pathname} onClick={()=> setShow(true)}>
            <span className={css.icon}>{addPost}</span>
            Add Post
          </Link>}
          <Link to="/">
            <span className={css.icon}>{notification}</span>
            Notification
          </Link>
          <Link to="/">
            <span className={css.icon}>{message}</span>
            Message
          </Link>
          <a href="" onClick={onLogout}>
            <span className={css.icon}>{logout}</span>
            Log Out
          </a>
          {/* {!token && <div className={css.links}>
            <Link to="/login">
              Log In
            </Link>
            <Link to="/register">
              Register
            </Link>
          </div>} */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
