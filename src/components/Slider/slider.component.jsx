import React from 'react';
import { Link } from 'react-router-dom';
//import './slider.style.scss';
class Slider extends React.Component{

    constructor(){
        super();
        this.state = {
            currentImage: '1'
        }
    }

    render(){
        return (
            <section className="slider">
                <ul className="slide">
                    <li className="slide__item">
                        <div className="slide__item__content">
                            <div className="line"></div>
                            <div className="slide__item__content--text">
                                <h2 className="title">Collection 2017</h2>
                                <p className="subtitle">HOT AND FRESH TRENDS OF THIS YEAR</p>
                            </div>
                            <div className="line"></div>
                            <Link to="#1" className="btn btn--white">Shop Now</Link>
                        </div>
                        
                    </li>
                </ul>
            </section>
        )
    }
}

export default Slider;