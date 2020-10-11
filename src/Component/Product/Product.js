import React from 'react'
import './Product.css'
import { useStateValue } from '../../util/stateProvider'
import PropTypes from 'prop-types';    
import Button from '@material-ui/core/Button';



const Product = ({ id, rating, title, productImg, price }) => {
    const [{ basket }, dispatch] = useStateValue()

    const addToCart = () => {
        dispatch(
            {
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    price: price,
                    rating: rating,
                    productImg: productImg
                }
            }
        )
    }
    return (
        <div className="product">

            <div className="product_info">
                <strong className="title">{title}</strong>
                <p className="product_price">
                    <strong>₹{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) => (<p key={i} >⭐</p>))}
                </div>

                {/* <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.3 out of 5 stars</span></i> */}
            </div>
            <img className="img" src={productImg} />
            <Button variant="contained" color="primary" text-transform="none"  onClick={addToCart}>Add to cart</Button>

        </div>)
}

Product.prototype={
    title:PropTypes.string.isRequired
}

export default Product