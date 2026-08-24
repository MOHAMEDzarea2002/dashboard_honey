// react router
import { Link } from 'react-router';
// Hooks React
import { useState } from 'react';
// Hooks Redux
import { useDispatch } from 'react-redux';
// flowbite
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
// react Icons
import { HiInformationCircle } from 'react-icons/hi';
// authThunk
import { authLogin } from '../../features/auth/authTThunk';
export default function LoginFrom() {
  const dispatch = useDispatch();
  // state form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Message, setMessage] = useState("");
  // Handel Form
  const HandelLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(authLogin({ email: email, password: password }));
    } catch (error) {
      console.log(error);
      setMessage('برجاء التأكيد من  الاميل وباسورد');
    }
  };

  return (
    <div>
      {/* Head */}
      <div className="text-center text-3xl font-bold text-white">Welcome Back</div>
      {/* container */}
      <div className="bg-white px-3 p-2 rounded-lg w-[400px] rtl">
        {Message ? (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">تنبيه !</span> {Message}
          </Alert>
        ) : null}

        <div className="my-3 font-bold text-center text-4xl">Login</div>
        {/* Form input */}
        <form className="flex flex-col text-left" onSubmit={HandelLogin}>
          <label className="my-2 font-semibold">Email</label>
          {/* input Email */}
          <input
            className="text-gray-500 p-2 border-2 rounded-lg border-gray-200 pl-3"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="my-2 font-semibold">Password</label>
          {/*  input pass */}
          <input
            className="text-gray-500 p-2 border-2 rounded-lg border-gray-200 pl-3"
            type="Password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* button submit  */}
          <div className="my-3 ">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </div>
          <p className="text-gray-600 p-1">
            Don't have an account?
            <Link to={'/register'} className="mx-2 text-blue-500">
              Register hear
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
