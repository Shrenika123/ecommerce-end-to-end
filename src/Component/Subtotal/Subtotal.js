import React from 'react'
import './Subtotal.css'
import {useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../util/stateProvider'

// const Subtotal=({total,len})=>{
//     const history=useHistory()
//     const makePayment=()=>{
//         history.push("/payment")
//     }

//     return(
//         <div className="subtotal">
//             <strong>items({len})=${total}</strong>
//             <button onClick={makePayment}>checkout</button>
//         </div>
//     )
// }

const Subtotal=({total,len})=>{
    const [{user}]=useStateValue()
    const history=useHistory()
    const makePayment=()=>{
        if(!user)
        history.push("/login")
        else
        history.push("/payment")
    }
   return( <div className="subtotal"> <CurrencyFormat
   renderText={value => <><p>
        Subtotal ({len} items ) :<strong>{value}</strong>
        </p></>}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}/>
        <button onClick={makePayment}>checkout</button>
        </div>
   )
}

export default Subtotal