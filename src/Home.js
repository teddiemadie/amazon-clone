import React from 'react'
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className = 'home'>
            <div className = 'home__container'>
                <img className = 'home__image' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg'>
                </img>

                <div className = 'home__row'>
                    <Product 
                    title = 'The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                    price = {19.99} 
                    image = 'https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg'
                    rating = {5}/>
                    <Product 
                    title = 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price = {239} 
                    image = 'https://item-shopping.c.yimg.jp/i/n/birmingham-ex_birmxxamb071ws2lp6'
                    rating = {4}/>
                    
                </div>

                <div className = 'home__row'>
                    <Product 
                    title = 'SteelSeries Apex 3 RGB Gaming Keyboard' 
                    price = {49.99}
                    rating = {5}
                    image = 'https://m.media-amazon.com/images/I/81L8fk7SGQL._AC_UY218_.jpg' />
                    <Product 
                    title = 'Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric'
                    price = {98.99}
                    rating = {4}
                    image = 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347261_sd.jpg' />
                    <Product 
                    title = 'New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                    price = {598.99}
                    rating = {5}
                    image = 'https://m.media-amazon.com/images/I/816ctt5WV5L._AC_SL1500_.jpg'
                     />
                </div>

                <div className = 'home__row'>
                    <Product 
                    title = 'SamSung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'
                    price = {999.99}
                    rating = {5}
                    image = 'https://cdn11.bigcommerce.com/s-iayjykjdh8/images/stencil/1280x1280/products/1931/13552/LC49HG90DMNXZA-1__18463.1595043609.jpg?c=2' />

                </div>

            </div>
        </div>
    )
}

export default Home
