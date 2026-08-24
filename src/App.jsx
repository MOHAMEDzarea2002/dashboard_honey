// Routes
import AppRoutes from './routes/AppRoutes';

import { useDispatch} from 'react-redux'
import { useEffect } from 'react';
//Auth Service
import { listenToAuthState } from './services/authServices';
// state auth Slice
import { setUser, clearUser } from './features/auth/authSlice';
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userSubscribe = listenToAuthState((user) => {
      if (user) {
        dispatch(setUser({ user: user.email , uid:user.uid }));
      } else {
        dispatch(clearUser());
      }
    });
    return ()=> userSubscribe()
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>

  );
}

export default App;
