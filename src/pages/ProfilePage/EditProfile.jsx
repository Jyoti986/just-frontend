import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

import styles from './editProfile.module.css';

const EditProfile = () => {
    return (
        <div className={styles.editProfile_container}>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default EditProfile
