import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartState } from '../../pages/menu/types/types'





const initialState: CartState = {

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

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: {
            reducer(state, action: ActionAddCart) {


                if (state[action.payload.category]?.length) {
                    state[action.payload.category]?.push(action.payload.content)
                    return
                }

                state[action.payload.category] = [action.payload.content]

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

                const { payload: { id, category } } = action

                state[category].forEach((product) => {
                    if (product.id === id) {
                        const newProduct = { ...product, quantify: product.quantify + 1 }
                        const index = state[category].indexOf(product)
                        state[category].splice(index, 1, newProduct)
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

                const { payload: { id, category } } = action

                state[category].forEach((product) => {
                    if (product.id === id) {
                        const newProduct = { ...product, quantify: product.quantify - 1 }
                        const index = state[category].indexOf(product)
                        state[category].splice(index, 1, newProduct)
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

                const { payload: { category, id } } = action
                if (state[category]?.length === 1) {
                    delete state[category]
                    return
                }
                state[category].forEach((product, index) => {
                    if (product.id === id) {
                        index = state[category].indexOf(product)
                        state[category].splice(index, 1)
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

export const { addCart, incrementQuantify, decrementQuantify, deleteProduct } = cartSlice.actions

export const cartReducer = cartSlice.reducer
