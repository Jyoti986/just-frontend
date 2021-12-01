import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    
    const [isProfile, setIsProfile] = useState(true);

    const { getProfile, profile , getPost, userposts } = useForm();

    // console.log(profile);

    useEffect(() => {
        getProfile();
        getPost();
    }, [getProfile, getPost]);

    // console.log(profile.posts);

    return (
        <div className={styles.profile_container}>
            <div>
                <Sidebar isProfile={isProfile} />
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
                    <Link to='/editProfile'><button>Edit Profile</button></Link>
                </div>

                {/* Posts */}

                <div className={styles.posts}>
                    <h4><span className={styles.icon}>{feed}</span>POSTS</h4>
                    <div className={styles.post_container}>
                        {profile.posts.length !== 0 && userposts.map((post) => {
                            return (
                                <div className={styles.card} key={post._id}>
                                    <img src={post.image} alt="" />
                                </div>
                            )
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
