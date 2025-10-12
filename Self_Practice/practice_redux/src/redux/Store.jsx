import { configureStore } from '@reduxjs/toolkit'
import counterReducers from '../CounterSlice'


const store = configureStore(  {
    reducer : {
        counter : counterReducers
}})


export default store;