import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { Categorys, ListCategory, listCategory } from '../utils/data'
import { CartState, Product } from '../pages/menu/types/types'

type InitialValue = Product[] | null
const getLocalStorage = (key: string) => {
  const saved = localStorage.getItem(key);
  const initialValue: InitialValue = saved ? JSON.parse(saved) : null;
  return !initialValue ? [] : initialValue
}

const initialState: CartState = {
  cart: {
    caseirinhos: getLocalStorage('caseirinhos'),
    brigadeiros: getLocalStorage('brigadeiros'),
    paes: getLocalStorage('paes'),
    sobremesas: getLocalStorage('sobremesas')
  }
}

interface ProductPayload {

  title: Categorys,
  content: {
    id: number,
    titleProduct: ListCategory,
    price: number,
    quantify: number,
  }


}
interface ProductIdPayload {
  id: number;
  category: ListCategory;
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

        listCategory.forEach((category) => {
          if (category === action.payload.title) {
            cart[category]?.push(action.payload.content)
          }


        })

      }
      ,
      prepare(title, content) {
        return {
          payload: {
            title,
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
    deleteProduct: {
      reducer(state, action: incremnetQuantify) {
        const { cart } = state
        const { payload: { category, id } } = action
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

