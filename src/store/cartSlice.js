import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}
export const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let idx = state.cart.findIndex((el)=>{
                return el.id === action.payload.id
            })
            if (idx>=0){
                state.cart = state.cart.map((el)=>{
                    return {...el,count:el.count+1}
                })
            }
                else{
                    state.cart = [...state.cart,action.payload]
                }
            
        }
    }
})
export default cartSlice.reducer
export const {addToCart}= cartSlice.actions

