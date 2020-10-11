import React,{useState,useEffect} from 'react'
import { db } from '../../firebase'
import {useStateValue} from '../../util/stateProvider'
import Order from '../Order/Order'
import './Orders.css'

function Orders() {
    const [{user,basket}]=useStateValue()
    const [orders,setOrders]=useState([])
 useEffect(()=>{
     console.log(user)
     if(user)
     {
         console.log(db.collection('users'))
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created','desc')
    .onSnapshot(snapshot=>(
        setOrders(snapshot.docs.map(doc=>(
            {
                id:doc.id,
                data:doc.data()
            }
        )))
    ))
    }
        else{
            setOrders([])
        }
    
 },[user])

    return (
        
        <div className="orders">
            <h2>Your Orders</h2>
            {/* {console.log({orders})} */}

            <div >
                {orders?.map((order)=>(
                    <Order order={order} />
                )
                )}
            </div>
        </div>
    )
}

export default Orders
