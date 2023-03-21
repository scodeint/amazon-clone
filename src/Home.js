import React from 'react'
import './Home.css'; 
import Product from './Product';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
            src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71tIrZqybrL._SX3000_.jpg' alt='' />
            <div className='home__row' >
               
                <Product 
                 id="4903850"
                title='Apple iPhone XR, 64GB, Black - Unlocked (Renewed)'  
                price={233.80}
                rating={3}
                 image='https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_SX679_.jpg'
                />

                <Product 
                 id="4903850"
                title='Apple iPhone XR, 64GB, Black - Unlocked (Renewed)' 
                 price={233.80}
                 rating={3}
                 image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/615YbdQPI5L._AC_UY327_FMwebp_QL65_.jpg'
              
                 />
            </div>

            <div className='home__row' >
                <Product 
                      id="4903850"
                      title='Spigen Ultra Hybrid [Anti-Yellowing PC Back] [Military Grade] Designed for iPhone XR' 
                       price={233.80}
                       rating={5}
                      image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51fVheU6APL._AC_SX679_.jpg' 
                />
              <Product 
                      id="4903850"
                      title='Spigen Ultra Hybrid [Anti-Yellowing PC Back] [Military Grade] Designed for iPhone XR' 
                       price={233.80}
                       rating={5}
                      image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71FuI8YvCNL._AC_SY400_.jpg' 
                />

                 <Product 
                      id="4903850"
                      title='Spigen Ultra Hybrid [Anti-Yellowing PC Back] [Military Grade] Designed for iPhone XR' 
                       price={233.80}
                       rating={5}
                      image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71LL6eI2c6L._AC_SX679_.jpg' 
                />
                
            </div>

            <div className='home__row' >
            
            <Product 
                      id="4903850"
                      title='Popular Gifts in Baby Shop now under $10' 
                       price={10.80}
                       rating={5}
                      image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/812qc9alfeL._AC_SY400_.jpg' 
                />
            </div>
        </div>
    </div>
  )
}

export default Home
