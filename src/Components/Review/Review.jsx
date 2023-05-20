import React, { useEffect } from "react";
import './Review.css'

// Import Icons
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

// Import Images
import car1 from '../../Assets/image1.jpg'
import car2 from '../../Assets/image2.jpg'
import car3 from '../../Assets/image3.jpg'
import user1 from '../../Assets/user1.webp'
import user2 from '../../Assets/user2.webp'
import user3 from '../../Assets/user3.jpg'

//Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {
    //Lets initialise Aos and set the default animation duration
    useEffect(() => {
        Aos.init (
            {
                duration:2000
            }
        )
    },[])

    return (
        <div className="review section">
            <div className="secContainer container">

                <div data-aos='fade-up'  className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className="icon leftIcon"/>
                        <BsArrowRightShort className="icon rightIcon"/>
                    </div>
                </div>

                {/* review container */}
                <div className="reviewContainer grid">
                    {/* single review */}
                    <div className="singleReview grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="reviewTitle">
                            BYD ATTO 3
                        </h5>
                        <span className="desc">
                        เป็นรถยนต์ไฟฟ้าที่คุ้มค่าราคาค่าตัวมากอีกรุ่นหนึ่งในเมืองไทยตอนนี้ หากใครที่กำลังมองหารถยนต์ไฟฟ้าประเภท SUV ขนาดเล็กยอดนิยม ราคาจับต้องได้
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user1} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Stephen Curry
                                    </span>
                                    <p>CEO</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className="icon"/>
                                <blockquote>4.5</blockquote>
                            </div>
                        </div>
                    </div>

                    {/* single review */}
                    <div className="singleReview grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car2} alt="Car Image" />
                        </div>
                        <h5 className="reviewTitle">
                            ORA Good CAT
                        </h5>
                        <span className="desc">
                        รถไฟฟ้าแมวเหมียว EV 100% คันนี้ไปไม่ได้ ด้วยกระแสที่ได้รับการพูดถึงมาโดยตลอดตั้งแต่ช่วงที่เพิ่งเปิดตัวเข้ามาในตลาดรถบ้านเรา 
                        </span>
                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user2} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Lebron James
                                    </span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className="icon"/>
                                <blockquote>4.3</blockquote>
                            </div>
                        </div>
                    </div>

                    {/* single review */}
                    <div className="singleReview grid"data-aos='fade-up' >
                        <div className="imgDiv">
                            <img src={car3} alt="Car Image" />
                        </div>
                        <h5 className="reviewTitle">
                            Tesla Model 3
                        </h5>
                        <span className="desc">
                        Model 3 โดดเด่นด้วยความเป็นรถยนต์นั่งตัวถังแบบซีดาน 4 ประตู ที่มีขนาดกระทัดรัดมากกว่ารุ่นพี่ และที่สำคัญเลยคือราคาที่ถูกกว่ารุ่นพี่กว่าเท่าตัว ทำให้มันเป็นรถที่มีราคาเข้าถึงได้ง่ายขึ้น โดยในประเทศสหรัฐอเมริกา
                        </span>
                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user3} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Lamelo Ball
                                    </span>
                                    <p>Manager</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className="icon"/>
                                <blockquote>4.7</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review