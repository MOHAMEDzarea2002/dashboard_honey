import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts, createProductAsync, deletedProductAsync, updateProductAsync } from './productsThunk'

const initialState = {
  products: [],
  loading: false,
  limit:10,
  error: null,
  nextCursor:'',
  historyCursor:[],
  hasMore:false,
  // Improvements will be made to product storage.
  updateProduct:null,
  // state Show Form Edit
  isEditModalOpen:false
}
const ProductsSlice = createSlice(
  {
    name: "products",
    initialState,
    reducers: {

      openModelEdit(state,action){
        state.isEditModalOpen = action.payload
      },
      closeModelEdit(state,action){
        state.isEditModalOpen = action.payload
      },
      setProductFormEdit(state,action){
        state.updateProduct = action.payload
      },
      setHistoryCursor(state,action){
        state.historyCursor.push(action.payload)


      }
    }
    , extraReducers: (builder) => {
      // getall Products
      builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = false
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.products
        state.nextCursor = action.payload.nextCursor
        state.hasMore = action.payload.hasMore
        state.error = null

      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message

      })
        // create Product
        .addCase(createProductAsync.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(createProductAsync.fulfilled, (state, action) => {
          state.loading = false
          state.products.push(action.payload.product)
        }).addCase(createProductAsync.rejected, (state, action) => {
          state.loading = false
          state.error = action.error
        })
        // Delete Product
        .addCase(deletedProductAsync.pending ,(state)=>{
          state.loading = true
          state.error = null
        }).addCase(deletedProductAsync.fulfilled, (state,action)=>{
          state.loading = false
          state.products = state.products.filter((prod)=> prod.id !== action.payload)
          state.error = null

        }).addCase(deletedProductAsync.rejected, (state,action)=>{
          state.loading = false
          state.error = action.error
        })
        // update Product
      .addCase(updateProductAsync.pending,(state)=>{
        state.pending = true
        state.error = null
      }).addCase(updateProductAsync.fulfilled, (state, action)=>{
        state.loading= false
        const updateProduct = state.products.findIndex((prod) => prod.id === action.payload.id)

        if(updateProduct != -1 ){
          state.products[updateProduct] = action.payload
         }

      }).addCase(updateProductAsync.rejected ,(state,action)=>{
        state.loading = false
        state.error = action.error.message
      })
    }


  }
)

export const {
  openModelEdit,
  closeModelEdit,
  setProductFormEdit,
  setHistoryCursor
} = ProductsSlice.actions;
export default ProductsSlice.reducer
