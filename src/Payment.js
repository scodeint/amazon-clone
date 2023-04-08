import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeede, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
        //Generate the special stripe secret which allows us to change a customer
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                // stripe expect the total in a currencies subunits
                url: `/payment/create?total = ${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        // Do all the stripe fancy stuffs here..
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            // paymentIntent = paymentConfirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate.replace('/orders');
        })
    }

    const handleChange = event =>{
        // Listen for changes on the card elements
        // and display any error as the cutomer type their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "") ;
    }

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

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payment__priceContainer'>
                        <CurrencyFormat 
                            renderText={(value) =>(
                                <h3>Order Total: {value} </h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />

                        <button disabled={processing || disabled || succeede}>
                            <span> {processing ? <p>Processing</p> : "Buy now.."}</span>
                        </button>
                        </div>
                        {/* Error */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Payment
