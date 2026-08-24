import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
} from 'flowbite-react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router'
export default function NavbarDash() {
  const {user} = useSelector((state) => state.auth);
console.log(user);
  return (
    <Navbar fluid rounded className="!bg-white mb-3 overflow-hidden">
      <div className="search">
        <input
          type="search"
          className="
        bg-gray-300
        h-8
        p-2
        rounded-lg
        border-2

        min-w-[200px]
        focus:outline-none

        focus:border-blue-500
        "
        />
      </div>
      <div className="flex  hover:cursor-pointer">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm"></span>
            <span className="block truncate text-sm font-medium">{user.user}</span>
          </DropdownHeader>
          <DropdownItem>
            <Link to="/" className=" w-full text-left">
              Dashboard
            </Link>
          </DropdownItem>
          <DropdownItem >
            <Link to="/Products" className=" w-full text-left">
              Products
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/Orders" className=" w-full text-left">
              Orders
            </Link>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem>
            <Link to="/sign-out"> Sign out</Link>
          </DropdownItem>
        </Dropdown>
      </div>
    </Navbar>
  );
}
