import { configureStore, createSlice } from '@reduxjs/toolkit'

let person = createSlice({
    name: 'person',
    initialState: '2DC'
})

export default configureStore({
    reducer: {
        person: person.reducer
    }
})