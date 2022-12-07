import { configureStore, createSlice } from '@reduxjs/toolkit'

let number = createSlice({
    name: 'number',
    initialState: 0,
    reducers: {
        countUp(state) {
            return state + 1
        },
        countDown(state) {
            return state - 1
        }
    }
})

export const { countUp, countDown } = number.actions

export default configureStore({
    reducer: {
        number: number.reducer
    }
})