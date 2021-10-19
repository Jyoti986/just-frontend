import React from 'react'
import Register from '../../components/form/Register'
import "./RegisterPage.css"

const RegisterPage = ()=>{
    return (
        <>
            <section className="container">
                <div className="maincontainer">
                    <div className="half left">
                        {/* <img src="/images/loginSign.jpg" alt="login-bg" className="image" /> */}
                    </div>
                    <div className="half right">
                        <Register />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterPage