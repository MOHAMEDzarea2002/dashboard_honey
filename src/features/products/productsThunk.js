import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, createProduct, deletedProduct, updateProduct } from '../../services/productServices';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ limit, cursor }, thunkAPI) => {


    try {
      const response = await getProducts({ limit, cursor })
      return response.products
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
  })

export const createProductAsync = createAsyncThunk(
  "product/createProductAsync"
  ,
  async (data, thunkAPI) => {
    try {
      const response = await createProduct(data)

      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
export const deletedProductAsync = createAsyncThunk(
  'product/deletedProduct',
  async (id, thunkAPI) => {
    try {
      await deletedProduct(id)

      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateProductAsync = createAsyncThunk(
  "products/updateProductAsync"
  ,
  async ({ id, product }, thunkAPI) => {
    try {

      const response = await updateProduct(id, product)

      return response.updatedProduct
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
