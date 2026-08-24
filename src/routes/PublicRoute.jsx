
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export default function PublicRoute() {

  const { isAuthenticated } = useSelector((state) => state.auth);



  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
