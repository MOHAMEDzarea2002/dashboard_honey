import { Link } from 'react-router';
// React Icons
import { MdOutlineDashboard } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { VscOpenInProduct } from 'react-icons/vsc';
import { CiLogout } from 'react-icons/ci';

// Hooks React
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../services/authServices';
export default function Sidebar({ onToggle, showSidebar }) {
  const [activeLink, setActiveLink] = useState(1);
  const dispatch = useDispatch();
  const Links = [
    { id: 1, to: '/', name: 'Dashboard', icon: <MdOutlineDashboard /> },
    { id: 2, to: '/products', name: 'Products', icon: <VscOpenInProduct /> },
    { id: 3, to: '/orders', name: 'Orders', icon: <IoCartOutline /> },
  ];
  // Handel Sidebar
  // const HandelSidebarHidingAndShow = () => {
  //   setShowSidebar(!showSidebar);
  // };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div
      className=" h-full w-full shadow-[0_80px_20px_rgba(0,0,0,0.25)] border-r-2 border-amber-400
      p-2
  bg-white
  "
    >
      {/* icons  show hiding sidebar  */}
      <div className="relative">
        <div
          className="absolute   bg-amber-400 h-8 w-8 -right-8 rounded-full cursor-pointer
          flex justify-center items-center
          z-50
          "
          onClick={onToggle}
        >
          <FaArrowRight
            className={`   transition-all duration-600 delay-100 ${showSidebar ? 'rotate-180 ' : 'rotate-0'}`}
          />
        </div>
      </div>
      {/* content */}
      <div className="flex justify-between flex-col h-full">
        <ul className="overflow-hidden">
          {Links?.map((link, index) => (
            <div key={index}>
              <Link to={link.to}>
                <li
                  id={link.id}
                  className={`li-links p-2  rounded-md
                     my-2 hover:bg-gray-200 ${activeLink == link.id ? 'bg-amber-600 font-semibold ' : ''}`}
                  onClick={() => setActiveLink(link.id)}
                >
                  {showSidebar ? (
                    <span className="text-2xl flex justify-center">{link.icon}</span>
                  ) : (
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{link.icon}</span>
                      <span>{link.name}</span>
                    </div>
                  )}
                </li>
              </Link>
            </div>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className={` p-2  rounded-md
                     my-2 hover:bg-gray-200  bg-gray-300 font-semibold  `}
        >
          {showSidebar ? (
            <span className="text-2xl flex justify-center">
              <CiLogout />
            </span>
          ) : (
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">
                <CiLogout />
              </span>
              <span>Logout</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
