import React from 'react'
import '../styles/header.css'
// import '../styles/bg_anime.css'

const Header = () => {
        return (
                
        <header className="header">

                <div className="header__text-box">

                        {/***
                
                        <ul className="floatingBoxes">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                
                        */}

                        <h1 className="heading-primary">
                                <span className="heading-primary--main">✨Jacob Samson</span>
                                <span className="heading-primary--sub styling_head" style={{fontWeight: '900'}}>WEB FULL-STACK DEVELOPER</span>
                        </h1>

                        <a href="https://netorgft16459046-my.sharepoint.com/:w:/g/personal/onlineclasses_itssng_com/EXqtovWQeK9AqTa5NpPgpFMBvIY4HSt-pBzjIwtu-7NeRQ?e=CKyLQh" target="_blank" rel="noreferrer" className="resume_button btn btn--animated ">DOWNLOAD MY RESUME</a>
                </div>
        </header>

        )
}


export default Header;
