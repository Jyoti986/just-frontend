import React from 'react';

const Navbar = ()=>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="search_bar">
                    <input type="text" name="" id="" />
                    <button>search</button>
                </div>
                <button className="create">create</button>
                <div className="message">message</div>
            </nav>
        </>
    )
}

export default Navbar