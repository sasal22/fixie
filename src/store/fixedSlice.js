import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    data:[],
    error:"",
    loading:"",
    filter:{}
    
}
export const fixedSlice = createSlice({
    name:"fixed-gear",
    initialState,
    reducers:{
        getAllFixed:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {getAllFixed} = fixedSlice.actions
export default fixedSlice.reducer