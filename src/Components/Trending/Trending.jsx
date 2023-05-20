import React, { useEffect } from "react";
import './Trending.css'

//Imported icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

//Import Images
import car1 from '../../Assets/city.png'
import car2 from '../../Assets/crv.png'
import car3 from '../../Assets/accord.png'


//Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Trending = () => {

    //Lets initialise Aos and set the default animation duration
    useEffect(() => {
        Aos.init (
            {
                duration:2000
            }
        )
    },[])

    return (
        <div className="trending section">
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Trending Near You
                    </h3>

                    <div className="navBtns flex">
                    <BsArrowLeftShort className="icon leftIcon"/>
                    <BsArrowRightShort className="icon right"/>
                    </div>
                </div>

                <div className="carContainer grid">
                    {/*Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car1} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used 2022 Honda City RS
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์ใหม่ 1.0 ลิตร VTEC TURBO 
                        </span>
                        <div className="price_seller flex">
                            <span className="price">
                                739,000 bath
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>
                    {/*Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car2} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used 2022 Honda CRV e:HEV RS 4WD
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์ขนาด 1.5 ลิตร VTEC TURBO 
                        </span>
                        <div className="price_seller flex">
                            <span className="price">
                                1,729,000 bath
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>
                    {/*Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car3} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used 2022 Honda Accord e:HEV TECH
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์เบนซิน 2.0 ลิตร 4 สูบ 16 วาล์ว i-VTEC 
                        </span>
                        <div className="price_seller flex">
                            <span className="price">
                                1,799,000 bath
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending