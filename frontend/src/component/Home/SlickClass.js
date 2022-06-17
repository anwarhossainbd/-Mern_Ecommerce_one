import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import PicOne from "./Images/cat1.jpg"
import PicTwo from "./Images/grid_1.jpg"
import PicThree from "./Images/grid_2.jpg"
import PicFour from "./Images/grid_3.jpg"
import PicFive from "./Images/grid_4.jpg"

import {Carousel, Col, Container,Row} from "react-bootstrap"

import "./SlickClass.css"

class componentName extends Component {


    render() {

        return (

            <Fragment>
               
                <Carousel>
                    <Carousel.Item>
                       <img
                        className="d-block w-100"
                        src={PicOne}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PicTwo}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PicThree}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PicFour}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PicFive}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
                    
                    
                   
              
                    
            </Fragment>
            
        );
    }
}

export default componentName;