import React from 'react'
import Register from '../../components/form/Register'
import "./RegisterPage.css"

const RegisterPage = ()=>{
    return (
        <>
            <section className="container">
                <div className="mainRegisterContainer">
                    <div className="half left">
                        <Register />
                    </div>
                    <div className="half right">
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterPage