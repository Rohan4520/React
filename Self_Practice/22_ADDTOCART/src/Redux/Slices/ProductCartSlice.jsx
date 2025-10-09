import { createSlice } from "@reduxjs/toolkit";

const ProductCartSlice = createSlice({
    name : "Cart",
    initialState : {
        data : [] ,
        searchData : []
    },
    reducers : {
        addToCart : (statem,action)=> {

        },
        removeToCart : (statem,action)=> {

        },
        oneRemoveCart : (statem,action)=> {

        },
        serchItemData : (state ,action)=> {

        }

    }
});

export default ProductCartSlice.reducer;
export const{addToCart,removeToCart,oneRemoveCart ,serchItemData} = ProductCartSlice.actions