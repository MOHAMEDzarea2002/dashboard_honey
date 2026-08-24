import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/products/productsSlice';
import orderReducer from '../features/orders/orderSlice';
import StatusReducer from '../features/dashboardStatus/statusSlice';
import CategoryReducer from '../features/category/categorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    orders: orderReducer,
    Status: StatusReducer,
    category: CategoryReducer
  },
});
