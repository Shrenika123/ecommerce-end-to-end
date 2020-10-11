// import { StateContext } from "./stateProvider"

export const subTotal=(basket)=>{
return basket?.reduce((sum,item)=> sum+item.price,0)
}

export const initialState = {
    basket: [],
    user:null
}

const cartReducer = (state, action) => {
    // console.log(action)
    // console.log(state)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // return {
            //     ...state,basket:[...state.basket,action.item],sum:state.sum+action.item.price}
                return {
                    ...state,basket:[...state.basket,action.item]}
        case 'REMOVE_FROM_BASKET':
            // return {
            //     ...state,basket:[...state.basket.filter((item)=>item.id!==action.id )]
            //     }
            let newObject=[...state.basket]
            let index=newObject.findIndex((item)=>item.id===action.id)
            if(index>=0)
            newObject.splice(index,1)
            else{
                console.warn(`cant remove ${action.id}`)
            }
            return {...state,basket:newObject}
            // return {...state,basket:newObject,sum:state.sum-(action.price)}
        case 'EMPTY_BASKET':
            return{...state,basket:[]}
        case 'SET_USER':
            return{...state,user:action.authUser}
            
        default: return state
    }

}

export default cartReducer