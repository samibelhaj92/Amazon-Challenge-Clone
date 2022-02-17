import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
                className='home__image'
                src='https://i0.wp.com/hanancom.com/wp-content/uploads/2020/10/amazon.png?fit=1200%2C537&ssl=1' 
                alt='amazon banner'
            />

            <div className='home__row'>
                <Product
                    id='123' 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful" 
                    price={29.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg' 
                    rating={5}
                />
                <Product
                    id='321' 
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black' 
                    price={239.0} 
                    image='https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX450_.jpg' 
                    rating={4}    
                />
            </div>

            <div className='home__row'>
                <Product 
                id='456' 
                title='Echo Dot (3ème génération), Enceinte connectée avec Alexa, Tissu anthracite' 
                price={98.99} 
                image='https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg' 
                rating={4} 
                />
                <Product 
                id='654' 
                title='2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray' 
                price={598.99} 
                image='https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg' 
                rating={4} 
                />
                <Product 
                id='789' 
                title='Crayola Ultra Clean Washable Markers, Broad Line, Classic Colors, 10 Count' 
                price={3.97} 
                image='https://m.media-amazon.com/images/I/91DO3gK0KsL._AC_SL1500_.jpg' 
                rating={4} 
                />
            </div>

            <div className='home__row'>
                <Product 
                id='987' 
                title='Samsung C49RG90, Ecran PC Gaming incurvé, Format Ultra-Large, Dalle VA 49", Résolution 5K (5120 x 1440), 120 Hz, 4ms, HDR 1000, QLED, AMD Freesync, Noir' 
                price={199.99} 
                image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg' 
                rating={3} 
                />
            </div>
            
        </div>
    </div>
  )
}

export default Home