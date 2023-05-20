import React, { useEffect } from "react";
import './Auction.css'

//Imported icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

//Import Images
import car1 from '../../Assets/car1.webp'
import car2 from '../../Assets/car2.png'
import car3 from '../../Assets/car3.webp'
import car4 from '../../Assets/car4.webp'
import car5 from '../../Assets/car5.png'
import car6 from '../../Assets/car6.webp'

//Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Auction = () => {
    //Lets initialise Aos and set the default animation duration
    useEffect(() => {
        Aos.init (
            {
                duration:2000
            }
        )
    },[])

    return (
        <div className="auction section">
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Active Auctions
                    </h3>

                    <div className="navBtns flex">
                    <BsArrowLeftShort className="icon leftIcon"/>
                    <BsArrowRightShort className="icon right"/>
                    </div>
                </div>

                <div className="carContainer grid">
                    {/*Single Car Div */}
                    <div className="singleCar grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car1} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used BMW I8
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์เบนซิน B38K15 BMW TwinPower Turbo 3 สูบ ขนาด 1.5 ลิตร 1,499 ซีซี. กำลังสูงสุด 231 แรงม้า
                        </span>
                        <div className="price_buyBtn flex">
                            <span className="price">
                                11,799,000 bath
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/*Single Car Div */}
                    <div className="singleCar grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car2} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Mercedes-AMG G 63
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์เบนซิน รหัส M177 V8 สูบ 4.0 ลิตร 3,982 ซีซี. Bi-Turbo กำลังสูงสุด 585 แรงม้า 
                        </span>
                        <div className="price_buyBtn flex">
                            <span className="price">
                                17,920,000.00 bath
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/*Single Car Div */}
                    <div className="singleCar grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car3} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Audi R8
                        </h5>
                        <span className="AWD">
                        เคลื่อนด้วยเครื่องยนต์ V10 ขนาด 5.2 ลิตร ที่ให้กำลัง 620 แรงม้า
                        </span>
                        <div className="price_buyBtn flex">
                            <span className="price">
                                18,999,000 bath
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/*Single Car Div */}
                    <div className="singleCar grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car4} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Lamborghini Aventador LP700-4
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์ V12 สูบบล๊อคล่าสุด ความจุ 6.5 ลิตร ผลิตกำลังได้สูงถึง 700 แรงม้า 
                        </span>
                        <div className="price_buyBtn flex">
                            <span className="price">
                                38,500,000 bath
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/*Single Car Div */}
                    <div className="singleCar grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car5} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Hyundai Staria PREMIUM 2.2 8AT
                        </h5>
                        <span className="AWD">
                        เครื่องยนต์รหัส D4HB ดีเซล 4 สูบ แถวเรียง DOHC 16 วาล์ว 2.2 ลิตร 2,199 ซีซี กำลังสูงสุด 177 แรงม้า
                        </span>
                        <div className="price_buyBtn flex">
                            <span className="price">
                                2,249,000 bath
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/*Single Car Div */}
                    <div className="singleCar grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car6} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Tesla Model 3 Performance
                        </h5>
                        <span className="AWD">
                        มอเตอร์ไฟฟ้า พละกำลังสูงสุด 283 แรงม้า แรงบิดสูงสุด 420 นิวตันเมตร ขับเคลื่อนล้อหลัง แบตเตอรี่ Lithium-ion LFP 57.5 kWh 
                        </span>
                        <div className="price_buyBtn flex">
                            <span className="price">
                                4,290,000 bath
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Auction