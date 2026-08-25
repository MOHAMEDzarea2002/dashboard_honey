// react Router
import { Outlet } from 'react-router';
// components
import Sidebar from '../components/layout/Sidebar';
import NavbarDash from '../components/layout/NavbarDash';
// Hooks React
import { useState, useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// fetch
import { fetchOrders } from '../features/orders/orderThunk';

export default function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const { orders } = useSelector((state) => state.orders);
    const toggleSidebar = ()=> setShowSidebar((prv) => !prv)
  const dispatch = useDispatch();

  // Convert the object to an array so we can determine the length.
  const lengthOrders = Object.keys(orders || {}).length;
  useEffect(() => {
    // the condition is to verify that here is nothing in OrdersStatus
    // Why? To avoid fetching data from the server every time the page is revisited.
    if (!lengthOrders) {
      dispatch(fetchOrders());
    }
  }, [dispatch, lengthOrders]);

  return (
    <section
      className="grid min-h-screen transition-[grid-template-columns] duration-300 ease-in-out"
      style={{
        gridTemplateColumns: showSidebar ? '80px 1fr' : '250px 1fr',
      }}
    >
      <aside className="sticky top-0 h-screen  border-l">
        <Sidebar onToggle={toggleSidebar} showSidebar={showSidebar} />
      </aside>
      <main className="min-w-0 overflow-y-auto ">
        <NavbarDash />

        <Outlet />
      </main>
    </section>
  );
}
