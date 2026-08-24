import { BrowserRouter, Routes, Route } from 'react-router';

import Login from '../page/auth/login';
import Register from '../page/auth/register';

import DashboardLayout from '../Layout/DashboardLayout';
import Products from '../page/product/Products';
import Orders from '../page/orders/Orders';
import Dashboard from '../page/dashboard/Dashboard';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
