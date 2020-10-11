import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../util/stateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct'
import './Payment.css'
import { Checkbox } from '@material-ui/core'
import FlipMove from 'react-flip-move'
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { subTotal } from '../../util/reducer'
import CurrencyFormat from 'react-currency-format'
// import axios from '../../util/axios'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
// import { db } from '../../firebase'
import {db} from '../../firebase'
import 'firebase/firestore'



const Payment = () => {
    const history=useHistory()
    const [{ basket, user }, dispatch] = useStateValue()
    // const stripe = useStripe()
    const stripe = useStripe();

    const elements = useElements()
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing,setProcessing]=useState("")
    const [succeeded,setSucceeded]=useState(false)
    const [clientSecret,setClientSecret]=useState(true)

    // useEffect(()=>{
    //     const getClientSecet=async ()=>{
    //         const response=await axios({
    //             method:'post',
    //             url:`/payment/create?total=${subTotal(basket)*100}`
    //         })
    //         setClientSecret(response.data.clientSecret)
    //         console.log(response)

    //     }
    //     getClientSecet()

    // },[basket])


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `https://check-app-deploy.herokuapp.com/payments/create?total=${subTotal(basket) * 100}`,
                // baseUrl:'http://localhost:5001/ecommerce-d8c84/us-central1/api',

            });
            setClientSecret(response.data.clientSecret)

        }


        getClientSecret();
    }, [basket])

    console.log("secret is :",clientSecret)
    console.log(user)
    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
        
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        setProcessing(true)
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })
            setSucceeded(true)
        setError(null)
        setProcessing(false)
        dispatch({type:'EMPTY_BASKET'})
        history.replace('/orders')
        }).catch(e)
    }

    return (
        <div className="payment">
            <div className="checkout_count">
                <h1>Checkout {basket?.length}</h1>
            </div>
            <div className="delivery_address">
                <p>Rajajinagar,Bangalore</p>
            </div>
            {basket?.length > 0 && <div className="review">
                {/* <FlipMove> */}
                {basket?.map((item,i) => <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.productImg}
                />)

                }
                {/* </FlipMove> */}
            </div>}
            <div className="review">
                <h5 >Payment</h5>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />
                    {/* <Checkbox></Checkbox> */}
                    <div>
                        <CurrencyFormat
                            renderText={value => <><p>
                            Subtotal ({basket?.length} items ) :<strong>{value}</strong>
                            </p></>}
                            decimalScale={2}
                            value={subTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"} />
                    </div>
                    <button disabled={processing || disabled ||succeeded} >
                            <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Payment