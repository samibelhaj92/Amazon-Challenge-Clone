import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
                className='checkout__ad'
                src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'
                alt='amazon ad zone'
            />
            
            <div>
                <h2 className='checkout__title'>
                    Your shopping Basket
                </h2>

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  );
}

export default Checkout;