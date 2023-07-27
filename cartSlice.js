import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart (state,action){ 
            const item = action.payload;
            const existingItem = state.items.find(itm => itm.id === item.id);
            if(!existingItem){
                state.items.push({
                    id: item.id,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    name: item.title
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + item.price;
            }
        },
        removeItemFromCart (state, action){

        }
    }
})