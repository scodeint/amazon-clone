import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad'
                  src='#https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jovjd+f9L._SX3000_.jpg' alt='' />

            <div>
                <h3>Hello, {user ? "Gues" : user?.email}</h3>
                <h2 className='checkout__title'>Your shopping Basket</h2>
                {basket.map(item =>(
                       <CheckoutProduct
                       id ={item.id}
                       title = {item.titlr}
                       image = {item.image}
                       price =  {item.price}
                       rating = {item.rating}
                       />
                ))}
            </div>
        </div>
        <div className='checkout__right'>
           <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
