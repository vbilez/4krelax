import React from 'react'
import './header.css'
import logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
        <img src={logo} alt="logo" width={260} />
                <nav >
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Explore</li>
                    </ul>
                </nav>
                    
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>

                <div className="login-box">
                    <a>START FREE TRIAL!</a>
                    <a >LOG IN</a>
                </div>
            </div>
        </div>
    )
}

export default Header;