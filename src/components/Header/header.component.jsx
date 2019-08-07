import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
//import './header.style.scss';

class Header extends React.Component{

    render(){
        return (
            <header className="header">
                <div className="header__text">
                    <ul className="list">
                        <li className="list__item"><Link to="/" className="list--link">
                            Home
                        </Link></li>
                        {
                            this.props.currentUser 
                                ?   <li className="list__item"><div onClick={()=> auth.signOut()} className="list--link">
                                        Sign Out
                                    </div></li>
                                :   <li className="list__item"><Link to="/signin" className="list--link">
                                        Sign In
                                    </Link></li>
                                
                        }
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

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);