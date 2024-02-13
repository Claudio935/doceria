import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

import { CartState } from '../pages/menu/types/types'





const initialState: CartState = {
  cart: {

  }
}

interface ProductPayload {

  category: string,
  content: {
    id: string,
    titleProduct: string,
    price: number,
    quantify: number,
    favorite: number,
  }


}
interface ProductIdPayload {
  id: string
  category: string
}
type ActionAddCart = PayloadAction<ProductPayload>
type incremnetQuantify = PayloadAction<ProductIdPayload>

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: {
      reducer(state, action: ActionAddCart) {
        const { cart } = state
        console.log(action.payload)
        if (cart[action.payload.category]?.length) {
          cart[action.payload.category]?.push(action.payload.content)
          return
        }

        cart[action.payload.category] = [action.payload.content]

      }
      ,
      prepare(category, content) {
        return {
          payload: {
            category,
            content

          }
        }
      }
    },
    incrementQuantify: {
      reducer(state, action: incremnetQuantify) {
        const { cart } = state
        const { payload: { id, category } } = action

        cart[category].forEach((product) => {
          if (product.id === id) {
            const newProduct = { ...product, quantify: product.quantify + 1 }
            const index = cart[category].indexOf(product)
            cart[category].splice(index, 1, newProduct)
          }
        })
      }
      ,
      prepare(id, category) {
        return {
          payload: {
            id,
            category

          }
        }
      }
    },
    decrementQuantify: {
      reducer(state, action: incremnetQuantify) {
        const { cart } = state
        const { payload: { id, category } } = action

        cart[category].forEach((product) => {
          if (product.id === id) {
            const newProduct = { ...product, quantify: product.quantify - 1 }
            const index = cart[category].indexOf(product)
            cart[category].splice(index, 1, newProduct)
          }
        })

      }
      ,
      prepare(id, category) {
        return {
          payload: {
            id,
            category

          }
        }
      }
    },
    deleteProduct: {
      reducer(state, action: incremnetQuantify) {
        const { cart } = state
        const { payload: { category, id } } = action
        if (cart[category]?.length === 1) {
          delete cart[category]
          return
        }
        cart[category].forEach((product, index) => {
          if (product.id === id) {
            index = cart[category].indexOf(product)
            cart[category].splice(index, 1)
          }
        })

      }
      ,
      prepare(id, category) {
        return {
          payload: {
            id,
            category

          }
        }
      }
    }
  }
})

export const { addCart, incrementQuantify, decrementQuantify, deleteProduct } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})

