import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment__container'>
            <h1>
                Checkout (<Link to = "/checkout">{basket?.length} items </Link>)
            </h1>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p> {user?.email} </p>
                <p>3, Obiwale Olusola Close</p>
                <p>Lagos Nigeria</p>
            </div>
        </div>
        {/* Payment section : Review Items */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3> Review Items and delivery </h3>
            </div>
            <div className='payment__items'>
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

           {/* Payment section : Payment method*/}
           <div className='payment__section'>
                <div className='payment__title'>
                    <h3> Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* Stripe margics */ }
                </div>
           </div>
      </div>
    </div>
  )
}

export default Payment
