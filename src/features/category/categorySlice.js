import {createSlice} from '@reduxjs/toolkit'
import { fetchCategoryAsync } from './categoryThunk'
const initialState = {
  category:[],
  loading:false,
  error: null
}

const categorySlice = createSlice({
  name:'category',
initialState
,
extraReducers: (build) =>{
  build.addCase(fetchCategoryAsync.pending,(state)=>{
    state.loading  = true
    state.error = null
  }).addCase(fetchCategoryAsync.fulfilled, (state,action)=>{
    state.loading = false
    state.category = action.payload.category
  }).addCase(fetchCategoryAsync.rejected,(state,action)=>{
    state.loading = false
    state.error = action.error
  })
}
})
export default categorySlice.reducer
