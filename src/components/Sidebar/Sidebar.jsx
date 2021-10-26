import React from "react"
import css from "./Sidebar.module.css"

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
        </div>
        </>
    )
}

export default Sidebar