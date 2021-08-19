import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import BackToTop from 'react-back-to-top-button'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className = 'footer'>
            <div className ='footer__backToTop'>
                <a onClick = {scrollToTop}>Back to top</a>
            </div>

            <div className = 'footer__container'>
                {/* Footer title 1 */}
                <div className = 'footer__nav'>
                    <h3>Get to Know Us</h3>
                    <a active href = 'http://www.amazon.jobs'>Careers</a>
                    <a href = 'https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer'>Blog</a>
                    <a href = 'https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer'>About Amazon</a>
                </div>

                {/* Footer Title 2 */}
                <div className = 'footer__nav'>
                    <h3>Make Money with Us</h3>
                    <a>Sell Products on Amazon</a>
                    <a>Sell on Amazon Bussiness</a>
                    <a>Sell apps on Amazon</a>
                    <a>Become an Affiliate</a>
                    <a>Advertise Your Products</a>
                    <a>Self-Publish with Us</a>
                    <a>Host an Amazon Hub</a>

                </div>

                {/* Footer Title 3 */}
                <div className = 'footer__nav'>
                    <h3>Amazon Payment Products</h3>
                    <a>Amazon Business Card</a>
                    <a>Shop with Points</a>
                    <a>Reload Your Balance</a>
                    <a>Amazon Currency Converter</a>
                </div>

                {/* Footer Title 4 */}
                <div className = 'footer__nav'>
                    <h3>Let Us Help You</h3>
                    <a>Amazon and COVID-19</a>
                    <Link to = '/login'>
                        <a>Your Account</a>
                    </Link>
                    <Link to = '/orders'>
                        <a>Your Order</a>
                    </Link>
                    <a>Shipping Rates & Policies</a>
                    <a>Return and Replacement</a>
                    <a>Manage Your Content and Devices</a>
                    <a>Amazon Assistant</a>
                    <a>Help</a>
                </div>
            </div>

            <div className = 'footer__bottom'>
                <img 
                    className = 'footer__logo'
                    src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                />

            </div>
        </div>
    )
}

export default Footer
