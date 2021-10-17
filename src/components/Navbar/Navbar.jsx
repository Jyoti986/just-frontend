import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

const search = <FontAwesomeIcon icon={faSearch} />
const add = <FontAwesomeIcon icon={faPlus} />

const Navbar = ()=>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="search_bar">
                    <input className="search_text" type="text" name="" id="" placeholder="Enter search item"/>
                    <a className="search_btn" href="http://localhost:3000/">
                        {search}
                    </a>
                </div>
                <div className="create">
                    <button className="create_btn">
                        {add} Create New Post
                    </button>
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