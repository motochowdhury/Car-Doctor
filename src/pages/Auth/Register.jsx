import React, { useContext } from "react";
import { RiFacebookLine, RiGoogleLine, RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const userCreateEmailPass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

    createUser(email, pass)
      .then(() => {
        updateUser(name)
          .then()
          .catch((err) => console.log(err));
        alert("User Successfully created");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-around items-center">
      <div>
        <img src={loginImg} alt="" className="w-2/3" />
      </div>
      <div className="border w-96 h-full p-10 space-y-4">
        <h1 className="text-4xl font-semibold text-center">Register</h1>
        <form
          onSubmit={userCreateEmailPass}
          className="flex flex-col w-4/5 mx-auto space-y-4">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            className="border p-2"
            name="name"
            placeholder="Your Email"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border p-2"
            name="email"
            placeholder="Your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="border p-2"
            name="password"
            placeholder="Your Password"
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <div className="space-y-4">
          <p className="text-center">Or signUp with</p>
          <div className="flex justify-center space-x-2">
            <RiFacebookLine className="text-blue-500 bg-slate-300 rounded-full w-8 h-8 p-1" />
            <RiLinkedinFill className="text-blue-500 bg-slate-300 rounded-full w-8 h-8 p-1" />
            <RiGoogleLine className="text-blue-500 bg-slate-300 rounded-full w-8 h-8 p-1" />
          </div>
          <p className="text-center">
            already have an account?{" "}
            <Link className="text-primary font-semibold " to="/login">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
