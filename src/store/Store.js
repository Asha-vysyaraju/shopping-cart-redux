import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "../redux/CartSlice"
export const Store=configureStore({
    //reducers
    reducer:{
        //reducerName
        CartReducer
    }
});