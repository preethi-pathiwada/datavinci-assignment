import './index.css'

import hamburger from "../../assets/hamburger.svg"
import logo from "../../assets/logo.svg"
import profile from "../../assets/profile.svg"
import search from "../../assets/search.svg"
import bag from "../../assets/bag.svg"
import prevBtn from "../../assets/prevButton.svg"
import nextBtn from "../../assets/nextButton.svg"
import honey from "../../assets/honey.svg"
import detail from "../../assets/detail.svg"
import like from "../../assets/like.svg"
import logo1 from "../../assets/logo1.svg"
import logo2 from "../../assets/logo2.svg"
import logo3 from "../../assets/logo3.svg"
import logo4 from "../../assets/logo4.svg"
import logo5 from "../../assets/logo5.svg"
import logo6 from "../../assets/logo6.svg"
import bottle1 from "../../assets/bottle1.svg"
import bottle2 from "../../assets/bottle2.svg"
import bottle3 from "../../assets/bottle3.svg"
import bottle4 from "../../assets/bottle4.svg"
import bottle5 from "../../assets/bottle5.svg"
import bottle6 from "../../assets/bottle6.svg"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.svg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import img6 from "../../assets/img6.svg"
import img7 from "../../assets/img7.svg"
import restart from "../../assets/restart.svg"

const Header = () => {
    return (
        <div className='bg'>
            <div className='navbar'>
                <img src={hamburger} alt="menu" className='hamburger'/>
                <img src={logo} alt="logo" className='logo'/>
                <div className='nav-items-container'>
                    <button className='nav-btn'><img src={profile} alt="profile" className='nav-item'/></button>
                    <button className='nav-btn'><img src={search} alt="search" className='nav-item'/></button>
                    <button className='nav-btn'>
                        <img src={bag} alt="bag" className='nav-item'/>
                        <div className='cart-count-container'>
                            <p className='count'>0</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className='product-section-container'>
                <div>
                    <div className='container'>
                <button className='slide-btn'><img src={prevBtn} alt='prevBtn'/></button>
                <div className='product-container'>
                <img src={honey} alt="honey" className='img'/>
                </div>
                <button className='slide-btn'><img src={nextBtn} alt='nextBtn'/></button>
            </div>
            <ul className='desktop-image-list-container'>
                <li className='image-list-item'><img src={img1} className='list-image' alt="img1"/></li>
                <li className='image-list-item'><img src={img2} className='list-image' alt="img2"/></li>
                <li className='image-list-item'><img src={img3} className='list-image' alt="img3"/></li>
                <li className='image-list-item'><img src={img4} className='list-image' alt="img4"/></li>
                <li className='image-list-item'><img src={img5} className='list-image' alt="img5"/></li>
                <li className='image-list-item'><img src={img6} className='list-image' alt="img6"/></li>
                <li className='image-list-item'><img src={img7} className='list-image' alt="img7"/></li>
            </ul>
                </div>
                <div className='description-container'>
                <h1 className="heading">Manuka Honey UMF TM 24+ MGO 1122+</h1>
                <div className='detail-container'>
                    <button className='nav-btn'><img src={detail} alt="detail" className='detail-icon'/></button>
                    <p className='detail'>What is UMF and MGO?</p>
                </div>
                <div className='heading-container'>
                    <h1 className='optimiser-heading'>The Optimiser</h1>
                    <div className='review-container'>
                        <div className='review-container'>
                            <img src={like} alt="like" className='like-icon'/>
                            <img src={like} alt="like" className='like-icon'/>
                            <img src={like} alt="like" className='like-icon'/>
                            <img src={like} alt="like" className='like-icon'/>
                        </div>
                        <p className='review'>825 REVIEWS</p>
                    </div>
                </div>
                <p>For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                    Honey is powerfully active, sourced from wild and rugged locations around
                    Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                    flavour and your body will love you for it.
                </p>
                <ul className='desktop-logos-container'>
                    <li><img src={logo1} alt="logo1"/></li>
                    <li><img src={logo2} alt="logo2"/></li>
                    <li><img src={logo3} alt="logo3"/></li>
                    <li><img src={logo4} alt="logo4"/></li>
                    <li><img src={logo5} alt="logo5"/></li>
                    <li><img src={logo6} alt="logo6"/></li>
                </ul>
                <p className=''>SIZE (SELECT ONE)</p>
                <p>Variant: 125g | 4.4oz</p>
                <ul className='list-container'>
                    <li><button className='bottle-btn'><img src={bottle1} alt="bottle1" className='bottle-img'/></button></li>
                    <li><button className='bottle-btn'><img src={bottle2} alt="bottle2" className='bottle-img'/></button></li>
                    <li><button className='bottle-btn'><img src={bottle3} alt="bottle3" className='bottle-img'/></button></li>
                    <li><button className='bottle-btn'><img src={bottle4} alt="bottle4" className='bottle-img'/></button></li>
                    <li><button className='bottle-btn'><img src={bottle5} alt="bottle5" className='bottle-img'/></button></li>
                    <li><button className='bottle-btn'><img src={bottle6} alt="bottle6" className='bottle-img'/></button></li>
                </ul>
                <p className=''>PAYMENT OPTIONS (SELECT ONE)</p>
                <div className='payment-option-container'>
                    <button className='payment-btn-dark'><p>One-time purchase</p><p>$55.88 USD</p></button>
                    <button className='payment-btn-light'><p>Subscribe & save 20% </p><p>$44.70 USD</p></button>
                    <div className='subscription-container'>
                        <img src={restart} className='restart-icon' alt="restart-icon"/>
                        <p>What is a Subscription?</p>
                    </div>
                </div>
                <p>SELECT QUANTITY</p>

            </div>
            </div>
            
        </div>
    )
}

export default Header

