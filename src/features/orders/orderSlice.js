import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders, fetchOrderById, fetchUpdateStatusOrder, DeleteOrder } from './orderThunk';

const initialState = {
  //storing fetch orders
  orders: [],
  // Storing the order that is to be modified
  currentOrder: null,
  // Status loading
  loading: false, // fetch data
  update: false, //update status
  deleting: false, //deleting

  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      // fetchOrders
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null
      }).addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload
      }).addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
      // fetchOrderById
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentOrder = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
      // updateStatusOrder
      .addCase(fetchUpdateStatusOrder.pending, (state) => {
        state.update = true;
        state.error = null
      })
      .addCase(fetchUpdateStatusOrder.fulfilled, (state, action) => {
        state.update = false;
        // state.orders = action.payload;
        const updateInitialState = state.orders.findIndex((order) => order.id === action.payload.id)
        if (updateInitialState != -1) {
          state.order[updateInitialState] = action.payload
        }
        if (state.currentOrder.id === action.payload.id) {
          state.currentOrder = action.payload
        }
      }).addCase(fetchUpdateStatusOrder.rejected, (state, action) => {
        state.update = false
        state.error = action.error.message
      })
      //deleted Order
      .addCase(DeleteOrder.pending, (state) => {
        state.deleting = true
        state.error = null
      }).addCase(DeleteOrder.fulfilled, (state, action) => {
        state.loading = false
        state.orders = state.orders.filter((order) => order.id !== action.payload.id)
        if (state.currentOrder.id === action.payload) {
          state.currentOrder = null;
        }
      }).addCase(DeleteOrder.rejected, (state, action) => {
        state.deleting = false
        state.error = action.error.message
      })

  },
});

export default ordersSlice.reducer;
