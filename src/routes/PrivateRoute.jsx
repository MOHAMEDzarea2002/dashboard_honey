import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
export default function PrivateRoute() {
  const { isAuthenticated, authLoading } = useSelector((state) => state.auth);

  if (authLoading) {
    return <div className=" flex justify-center items-center bg-black h-screen text-4xl animate-pulse text-white">loading..</div>;
  }

    return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />
  }
