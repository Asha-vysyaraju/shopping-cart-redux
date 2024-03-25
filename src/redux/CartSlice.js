import {createSlice} from "@reduxjs/toolkit"



const CartSlice=createSlice({
    name:"cartItems",
    initialState:{
    cart:[],
    },
    reducers:{
        //actions
        ADD_TO_CART(state,action){
            
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }

        },
         REMOVE_FROM_CART:(state,action)=>{
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
         },

         CHANGE_CART_QTY:(state,action)=>{
            console.log(action.payload.qty)
            const updatedItems = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      const filteredItems = updatedItems.filter((item) => item.qty > 0);
   
      return {
        ...state,
        cart: filteredItems,
      };
           
         }
    },
})

export const{
    ADD_TO_CART,REMOVE_FROM_CART,CHANGE_CART_QTY
}=CartSlice.actions;

export default CartSlice.reducer;