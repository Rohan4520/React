import { configureStore } from "@reduxjs/toolkit";
import  CurdSlice  from "./CURDSlice/CurdSlice";


const Store = configureStore({
    reducer : {
        allCurdData : CurdSlice
    }
});
export default Store;