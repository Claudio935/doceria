import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface Alert {
    message: string,
    open: boolean
}

const initialState: Alert = {
    message: '',
    open: false
}
type PayloadProps = {
    message: string
}
type ActionAlert = PayloadAction<PayloadProps>

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openModal: {
            reducer(state, action: ActionAlert) {
                const { payload: { message } } = action
                state.message = message
                state.open = true
            },
            prepare(message) {
                return {
                    payload: {

                        message

                    }
                }
            }
        },
        closeModal: {
            reducer(state) {
                state.message = ''
                state.open = false
            },
            prepare() {
                return {
                    payload: {}
                }
            }
        },
    }
})

export const { openModal, closeModal } = alertSlice.actions
export const alertReducer = alertSlice.reducer