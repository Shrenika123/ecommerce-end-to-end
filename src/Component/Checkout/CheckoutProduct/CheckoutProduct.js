import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../../../util/stateProvider'

function CheckoutProduct({id,price,title,rating,image,hiddenButton}) {
const [{basket},dispatch]=useStateValue()

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
            price:price
        })
    }

    return (
        <div className="productCheckout">
            <img src={image} className="checkOutproductImg" alt=""/>
            <div>
                <h2>{title}</h2>
                <p className="checkOutproduct_price">
                    <strong>₹{price}</strong>
                </p>
                <div className="checkPotproduct_rating">
                    {Array(rating).fill().map((_,i) => (<p key={i}>⭐</p>))}
                </div>
                {!hiddenButton?
            <button className="checkOurButton" onClick={removeFromBasket}>remove from basket</button>   :null     }
            </div>
        </div>
    )
}

export default CheckoutProduct
