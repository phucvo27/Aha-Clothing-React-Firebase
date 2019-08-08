import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart-Icon/cart-icon.component'
//import './navigation.style.scss';

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar">
                <div className="navbar__functionality">
                    <div className="navbar__functionality__searchbox">
                        <form action="" className="form">
                            <input type="text" name="" id="" placeholder="Search for product..."/>
                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="navbar__functionality__logo">
                        <img src="img/logo_dark.png" alt="" />
                    </div>
                    <div className="navbar__functionality__cart">
                        <span>Cart </span>
                        <span className="line-skew"></span>
                        <span id="total">$0.00</span>
                        <span>
                            <CartIcon />
                        </span>
                    </div>
                </div>
                <div className="navbar__navigation">
                    <ul className="navigation">
                        <li className="navigation__item"><Link to="#1" className="navigation--link">
                            Home
                        </Link></li>
                        
                        <li className="navigation__item">
                            <span>Categories</span>
                            <span>
                                <i className="fa fa-chevron-down"></i>
                            </span>

                            <ul className="dropdown">
                                <li><Link to="#1" className="navigation--link">Men</Link></li>
                                <li><Link to="#1" className="navigation--link">Women</Link></li>
                                <li><Link to="#1" className="navigation--link">Jacket</Link></li>
                                <li><Link to="#1" className="navigation--link">Hat</Link></li>
                                <li><Link to="#1" className="navigation--link">Sneaker</Link></li>
                            </ul>
                        </li>
                        <li className="navigation__item">
                            <span>Products</span>
                            <span>
                                <i className="fa fa-chevron-down"></i>
                            </span>
                            <ul className="dropdown">
                                <li><Link to="#1" className="navigation--link">Product Standard</Link></li>
                                <li><Link to="#1" className="navigation--link">Product Sale </Link></li>
                                <li><Link to="#1" className="navigation--link">Product Out Of Stock </Link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;