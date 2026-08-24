import {createAsyncThunk} from '@reduxjs/toolkit'
import { getCategory } from '../../services/categoryServices'
export const fetchCategoryAsync = createAsyncThunk(
  'category/fetchCategory',
  async (_,thunkAPI)=>{
    try{
      const response = await getCategory()
      return response
    }catch(error){

      console.log(thunkAPI.rejectWithValue(error))
      return thunkAPI.rejectWithValue(error)
    }
  }
)
