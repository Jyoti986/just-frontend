import React, { useEffect, useState } from 'react';
import useForm from '../../components/form/useForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTh,
    faEdit,
    faCamera
} from "@fortawesome/free-solid-svg-icons";

import no_dp from '../../images/no_dp.jpg';

import styles from './profilePage.module.css';

const feed = <FontAwesomeIcon icon={faTh} />;
const camera = <FontAwesomeIcon icon={faCamera} />;
const editIcon = <FontAwesomeIcon icon={faEdit} />;

const ProfilePage = () => {

    const { getProfile, profile } = useForm();
    const [userposts, setUserPosts] = useState([]);

    useEffect(() => {
        getProfile();
        getPost();
        // eslint-disable-next-line
    }, []);

    // console.log(profile.posts);

    const getPost = async (url) => {
        const userpost = await fetch("http://localhost:5000/api/posts/fetchallposts", {
            method: 'GET',
            headers: {
                "auth-token": localStorage.getItem("token")
            }
        })

        const json = await userpost.json();

        // console.log(json.posts);
        setUserPosts(json.posts);
    }

    return (
        <div className={styles.profile_container}>
            <div>
                <Sidebar />
            </div>
            <div className={styles.profile_data}>

                {/* Profile Image */}
                <div className={styles.profile}>
                    <div className={styles.profile_img}>
                        {profile.profilePic !== undefined ? <img src={profile.profilePic} alt="" /> : <img src={no_dp} alt="" />}
                    </div>
                    <div className={styles.name}>
                        <h1>{profile.name}</h1>
                    </div>
                    <span>@{profile.username}</span>
                </div>

                {/* About */}
                <div className={styles.about}>
                    <div className={styles.box}>
                        <h3>{profile.posts.length}</h3>
                        <span>Posts</span>
                    </div>
                    <div className={styles.box}>
                        <h3>{profile.followers.length}</h3>
                        <span>Followers</span>
                    </div>
                    <div className={styles.box}>
                        <h3>{profile.following.length}</h3>
                        <span>Following</span>
                    </div>
                </div>

                {/* Edit Profile */}
                <div className={styles.editProfile}>
                    <button>Edit Profile</button>
                </div>

                {/* Posts */}

                <div className={styles.posts}>
                    <h4><span className={styles.icon}>{feed}</span>POSTS</h4>
                    <div className={styles.post_container}>
                        {profile.posts.length !== 0 && userposts.map((post) => {
                            return (
                                <>
                                    <div className={styles.card}>
                                        <img src={post.image} alt="" />
                                    </div>
                                </>)
                        })}
                    </div>
                    {profile.posts.length === 0 && <div className={styles.no_post_container}>
                        <div className={styles.camera_container}><span className={styles.icon1}>{camera}</span></div>
                        <p className={styles.no_post}>No Posts Yet</p>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default ProfilePage
