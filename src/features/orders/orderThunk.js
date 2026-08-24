import {
  getOrders,
  getOrderByID,
  updateStatusOrder,
  deleteOrder,
} from '../../services/orderServices';
import { createAsyncThunk } from '@reduxjs/toolkit';
//
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
  try {
    const response = await getOrders();
    return response.orders;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});
//
export const fetchOrderById = createAsyncThunk(
  'orders/fetchOrderById',
  async (idOrder, thunkAPI) => {
    try {
      const order = await getOrderByID(idOrder);
      return order;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const fetchUpdateStatusOrder = createAsyncThunk(
  'orders/fetchUpdateStatusOrder',
  async ({ id, orderData }, thunkAPI) => {
    try {
      const order = await updateStatusOrder(id, orderData);
      return order;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const DeleteOrder = createAsyncThunk(
  'order/fetchDeleteOrder',

  async (id, thunkAPI) => {
    try {
      const order = await deleteOrder(id);
      return order;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
