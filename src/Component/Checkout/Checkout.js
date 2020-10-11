// import React from 'react'
// import {useStateValue} from '../../util/stateProvider'
// import './checkout.css'

// const checkOut=()=>{
//     const [{basket}] =useStateValue
//     return(
//         <div className="checkout">
            // <img className="checkout_banner" alt="Gaming with Prime" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gaming/GW/3000x1200-NP._CB432269252_.jpg" height="600px" width="1500px" ></img>
            // {
            //     basket?.length===0?<h2>Basket is empty</h2>:
            //     <h2>wow</h2>
            // }




//         </div>
//     )

// }



import React from 'react';
import {useStateValue} from '../../util/stateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import {subTotal} from '../../util/reducer'

function Checkout() {
    const [{basket,user},dispatch]=useStateValue()
    return (

        <div className="checkOut">
            <div className="cart_left">
            <img className="checkout_banner" alt="Gaming with Prime" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gaming/GW/3000x1200-NP._CB432269252_.jpg"></img>
            {
                basket?.length===0?(<div><h2>Basket is empty</h2></div>):(
                    <div>
                        <h2 className="checkout_title">Hi,{user?.email}   Your Shopping Basket</h2>
               { basket?.map((item,i)=>(
                    <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.productImg}
                    />
                ))}
                </div>
                )
            }
            </div>
                {basket.length>0 && (<Subtotal 
                total={subTotal(basket)}
                len={basket?.length}
                />
                    )}
            
        </div>
    )
}

export default Checkout


