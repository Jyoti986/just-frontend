import React, { useEffect, useRef, useState } from 'react';
import reactDom from 'react-dom';

import { useHistory } from 'react-router';
import useForm from '../form/useForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt,faTimes} from "@fortawesome/free-solid-svg-icons";
import styles from './modal.module.css';

const cloud = <FontAwesomeIcon icon={faCloudUploadAlt} />
const close = <FontAwesomeIcon icon={faTimes} />

const Modal = ({ show, setShow }) => {
    const history = useHistory()
    const [image, setImage] = useState("")
    const [cap,setCap] = useState("")
    const [url,setUrl] = useState("")
    const { profile, getProfile } = useForm();
    const imageRef = useRef();

    useEffect(() => {
        getProfile();
    }, [getProfile])

    if (!show) {
        return null
    }

    const getImagePreview = (event)=>{
        var image = URL.createObjectURL(event.target.files[0])
        setImage(event.target.files[0])
        // console.log(image)
        // var cancel_btn = document.querySelector('cancel_btn')
        var imagediv = document.querySelector('#image')
        var newimg = document.createElement("img")
        imagediv.innerHTML=''
        newimg.src = image
        imagediv.appendChild(newimg)
        // cancel_btn.style.display = "block"
    }

    const postDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","just-social-media")
        data.append("cloud_name","trilochansahoo")
        fetch("https://api.cloudinary.com/v1_1/trilochansahoo/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            console.log(data.url)
            setShow(false)
        })
        .catch(err=>{
            console.log(err)
        })

        // fetch("/addpost",{
        //     method:"post",
        //     header:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         image:url,
        //         caption:cap
        //     })
        // }).then(res=>res.json())
        // .then(data=>{
        //     if(data.error){
        //         console.log("error")
        //     }else{
        //         console.log("success")
        //         history.push("/")
        //     }
        // }).catch(err=>{
        //     console.log(err)
        // })
    }

    return reactDom.createPortal(
        <>
            <div className={styles.backdrop} onClick={() => setShow(false)}></div>
            <div className={styles.modal}>
                <div className={styles.wrapper}>
                    <div className={styles.image} id="image">
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={styles.content}>
                        <div className={styles.icon}>
                            {cloud}
                        </div>
                        <div className={styles.text}>
                            No file Chosen
                        </div>
                    </div>
                    {/* <div className={styles.cancel_btn}>
                        {close}
                        <div className={styles.file_name}>File Name</div>
                    </div> */}

                </div>
                {imageRef.current !== undefined && <div className={styles.picDisplay}>
                    {/* <img src={imageRef.current.value} alt="" /> */}
                </div>}
                <input type="file" name="post" className={styles.default_btn} id="upload_file" onChange={getImagePreview} ref={imageRef} />
                {/* <button className={styles.custom_btn} hidden>Choose a Pic</button> */}
                    {/* {console.log(imageRef.current.value)} */}
                <input type="text" className={styles.caption} placeholder="Enter Caption" onChange={(e)=>{setCap(e.target.value)}}/>
                <button className={styles.upload_btn} onClick={()=>{postDetails()}}>Upload</button>
                
            </div>
        </>,
        document.getElementById("modal")
    )
}

export default Modal
