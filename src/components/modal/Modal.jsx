import React, { useEffect, useRef } from 'react';
import reactDom from 'react-dom';

import useForm from '../form/useForm';

import styles from './modal.module.css';

const Modal = ({ show, setShow }) => {

    const { profile, getProfile } = useForm();
    const imageRef = useRef();

    useEffect(() => {
        getProfile();
    }, [getProfile])

    if (!show) {
        return null
    }

    return reactDom.createPortal(
        <>
            <div className={styles.backdrop} onClick={() => setShow(false)}></div>
            <div className={styles.modal}>
                {imageRef.current !== undefined && <div className={styles.picDisplay}>
                    {/* <img src={imageRef.current.value} alt="" /> */}
                </div>}
                <form>
                    <input type="file" name="post" id="post" ref={imageRef} />
                    {/* {console.log(imageRef.current.value)} */}
                    <input type="text" placeholder="Enter Caption" />
                    <button>Upload</button>
                </form>
            </div>
        </>,
        document.getElementById("modal")
    )
}

export default Modal
