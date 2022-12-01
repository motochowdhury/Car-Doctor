import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { RiFacebookLine, RiLinkedinFill, RiGoogleLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { googleLogin, user, userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const loginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    userLogin(email, pass)
      .then((result) => {
        const user = {
          email: result.user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-types": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("accessToken", data.token));

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const signinGoole = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-around items-center">
      <div>
        <img src={loginImg} alt="" className="w-2/3" />
      </div>
      <div className="border w-96 h-full p-10 space-y-4">
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <form
          onSubmit={loginUser}
          className="flex flex-col w-4/5 mx-auto space-y-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
          <button className="btn btn-primary">Login</button>
        </form>
        <div className="space-y-4">
          <p className="text-center">Or signin with</p>
          <div className="flex justify-center space-x-2">
            <RiFacebookLine className="text-blue-500 bg-slate-300 rounded-full w-8 h-8 p-1" />
            <RiLinkedinFill className="text-blue-500 bg-slate-300 rounded-full w-8 h-8 p-1" />
            <RiGoogleLine
              onClick={signinGoole}
              className="text-blue-500 bg-slate-300 rounded-full w-8 h-8 p-1"
            />
          </div>
          <p className="text-center">
            have an account?{" "}
            <Link className="text-primary font-semibold " to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
