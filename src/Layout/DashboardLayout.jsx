// react Router
import { Outlet } from 'react-router';
// components
import Sidebar from '../components/layout/Sidebar';
import NavbarDash from '../components/layout/NavbarDash';
// Hooks React
import { useState } from 'react';



export default function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar((prv) => !prv);



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
