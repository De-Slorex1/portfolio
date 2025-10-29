import React from 'react';
import '../styles/Footer.css'
import '../styles/social.css'


const Footer = () => {
        return (
                <footer className='Footer'>
                        <div className='heading-secondary' style={{ fontSize: '1.75em'}}>Feel free to connect </div>
                        
                        <div className="hero">
                                <div className="social-links">
                                        <a href="mailto:jacobsamson2000@gmail.com" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a>
                                        <a href="https://www.instagram.com/big_dev01/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                        <a href="#twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="https://github.com/De-Slorex1" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                                </div>
                        </div>
                </footer>
        )
}

export default Footer;