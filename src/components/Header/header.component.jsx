import React from 'react';
import { Link } from 'react-router-dom';
//import './header.style.scss';

class Header extends React.Component{

    render(){
        return (
            <header className="header">
                <div className="header__text">
                    <ul className="list">
                        <li className="list__item"><Link to="/signin" className="list--link">
                            Sign In
                        </Link></li>
                        <li className="list__item"><Link to="#1" className="list--link">
                            About Us
                        </Link></li>
                        <li className="list__item"><Link to="#1" className="list--link">
                            Contact us :  <b>0907 798 795</b>
                        </Link></li>
                    </ul>
                </div>
                <div className="header__social">
                    <i className="fa fa-facebook-f icon-social"></i>
                    <i className="fa fa-google icon-social"></i>
                    <i className="fa fa-tumblr icon-social"></i>
                </div>
            </header>
        )
    }
}

export default Header;