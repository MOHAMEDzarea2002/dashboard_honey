// react router
import { Link } from 'react-router';
// Hooks React
import { useState } from 'react';
// Hooks Redux
import { useDispatch } from 'react-redux';
// flowbite
import { Alert } from 'flowbite-react';
// react Icons
import { HiInformationCircle } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';

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
      <div className="bg-white py-2 px-2 rounded-lg w-[350px] md:min-w-[350px] shadow-md">
        {Message ? (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">تنبيه !</span> {Message}
          </Alert>
        ) : null}

        <div
          className=" text-center   relative

        "
        >
          <span className="absolute -top-17 left-1/2 -translate-x-1/2 text-5xl bg-blue-500 p-3  rounded-full text-white ">
            <FaUserAlt />
          </span>
          <p className="text-md p-2 ">Admin Log In</p>
        </div>
        {/* Form input */}
        <form className="flex flex-col text-left" onSubmit={HandelLogin}>
          <label className="mb-2 font-semibold">Email</label>
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

          <div className="my-3 w-fit mx-auto">
            <button
              type="submit"
              className="  cursor-pointer bg-blue-700 text-white px-3 py-1.5 rounded-sm "
            >
              Login
            </button>
          </div>
          {/* <p className="text-gray-600 p-1">
            Don't have an account?
            <Link to={'/register'} className="mx-2 text-blue-500">
              Register hear
            </Link>
          </p> */}
        </form>
      </div>

  );
}
