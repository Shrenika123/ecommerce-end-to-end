import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'



function Order({ order }) {
    return (
        <div className="order" >
            <h2>Order</h2>
            {console.log(order)}
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item) => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.productImg}
                    hiddenButton
                />
            ))}
            <CurrencyFormat
                renderText={value => (
                    <h3 className="order__total">Order Total:{value}</h3>
                )}

                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"} />
        </div>
    )
}

export default Order
