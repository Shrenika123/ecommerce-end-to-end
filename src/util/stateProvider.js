import React,{createContext,useContext,useReducer} from 'react'


//build datalayer
export const StateContext=createContext()


//build provider
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </StateContext.Provider>
//   );

//how you use inside a component
export const useStateValue=()=>useContext(StateContext)



