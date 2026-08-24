import { Button } from 'flowbite-react';
import { registerUser } from '../../services/authServices';
import { useState  } from 'react';
import { useNavigate, Link } from 'react-router';

export default function RegisterFrom() {
  const [email , setEmail] = useState()
  const [password, setPassword] = useState();
  const Navigate = useNavigate()
  const handleRegister = async (e) => {
  e.preventDefault()
  try {
    const user = await registerUser(email, password);
    console.log(user);
   Navigate('/login')

  } catch (error) {
    console.log(error.message);
  }
};
  return (
    <div className="   ">

      <div className="bg-white px-3 p-2 rounded-lg w-[400px] ">
        <div className="my-3 font-bold text-center text-4xl">Sign Up</div>
        <form onSubmit={handleRegister} className="flex flex-col text-left">
          <label className="my-2 font-semibold">Email</label>
          <input
            className="text-gray-500 p-2 border-2 rounded-lg border-gray-200 pl-3"
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="my-2 font-semibold">Password</label>
          <input
            className="text-gray-500 p-2 border-2 rounded-lg border-gray-200 pl-3"
            type="Password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="my-3 ">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
            <p className="text-gray-600 p-1">
              have an account?
              <Link to={'/login'} className="mx-2 text-blue-500">
                Login hear
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
