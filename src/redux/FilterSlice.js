import { createSlice } from '@reduxjs/toolkit'

export const FilterSlice = createSlice({
    name: 'Filter',
    initialState: {
        filter: '',
         },
        reducers: {
            FilterContact(state, action) {
                return (state = action.payload)
            }
    }    
})

export const {FilterContact} = FilterSlice.actions