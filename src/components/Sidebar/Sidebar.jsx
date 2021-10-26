import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faSearch, faPlus, faBell, faPaperPlane, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import css from "./Sidebar.module.css"

const feed = <FontAwesomeIcon icon={faTh}/>
const explore = <FontAwesomeIcon icon={faSearch} />;
const addPost = <FontAwesomeIcon icon={faPlus} />;
const notification = <FontAwesomeIcon icon={faBell}/>
const message = <FontAwesomeIcon icon = {faPaperPlane}/>
const logout = <FontAwesomeIcon icon = {faSignOutAlt}/>

const Sidebar = ()=>{
    return (
        <>
        <div className={css.sidebar}>
            {/* profile img  */}
            <div className={css.profile}>
                <div className={css.profile_img}>
                    <img src="../../images/loginSign.jpg" alt="" />
                </div>
                <div className={css.name}>
                    <h1>HaHA</h1>
                </div>
                <span>@HAHA</span>
            </div>
            {/* about */}
            <div className={css.about}>
                <div className={css.box}>
                    <h3>34</h3>
                    <span>Posts</span>
                </div>
                <div className={css.box}>
                    <h3>34</h3>
                    <span>Followers</span>
                </div>
                <div className={css.box}>
                    <h3>34</h3>
                    <span>Following</span>
                </div>
            </div>
            {/* menu */}
            <div className={css.menu}>
                <a href="/" className={css.active}>
                    <span className={css.icon}>
                        {feed}
                    </span>
                    Feed
                </a>
                <a href="/">
                    <span className={css.icon}>
                        {explore}
                    </span>
                    Explore
                </a>
                <a href="/">
                    <span className={css.icon}>
                        {addPost}
                    </span>
                    Add Post
                </a>
                <a href="/">
                    <span className={css.icon}>
                        {notification}
                    </span>
                    Notification
                </a>
                <a href="/">
                    <span className={css.icon}>
                        {message}
                    </span>
                    Message
                </a>
                <a href="/">
                    <span className={css.icon}>
                        {logout}
                    </span>
                    Log Out
                </a>
            </div>
        </div>
        </>
    )
}

export default Sidebar