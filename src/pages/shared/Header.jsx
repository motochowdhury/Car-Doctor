import React, { useContext } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/brandLogo.svg";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navItems = (
    <li className="space-x-2">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <button onClick={() => logout()}>Logout</button>
          <Link to="/orders">Orders</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </li>
  );
  return (
    <div className="navbar bg-base-100 pt-12 mb-11">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <img src={brandLogo} className="w-16" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold text-dark">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-outline btn-primary w-40 border-1">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
