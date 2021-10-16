import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

const element = <FontAwesomeIcon icon={faSearch} />

const Navbar = ()=>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="search_bar">
                    <input className="search_text" type="text" name="" id="" placeholder="Enter search item"/>
                    <a className="search_btn" href="#">
                        {element}
                    </a>
                </div>
                <div className="create">
                    <button className="create_btn">create</button>
                </div>
                <div className="message">
                    <ul>
                        <li>list1</li>
                        <li>list1</li>
                        <li>list1</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar