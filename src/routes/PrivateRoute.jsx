import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
export default function PrivateRoute() {
  const { isAuthenticated, authLoading } = useSelector((state) => state.auth);

  if (authLoading) {
    return <div>loading</div>;
  }

    return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />
  }
