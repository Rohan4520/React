import {configureStore } from '@reduxjs/toolkit';
import ProductCartSlice from './Slices/ProductCartSlice';

const Store = configureStore({
    reducer : {
        allCart : ProductCartSlice
    }
})

export default Store