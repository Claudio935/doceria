import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cart'
import { alertReducer } from './alert'







export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert: alertReducer
  }
})

