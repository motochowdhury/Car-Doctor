import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Checkout = () => {
  const { data } = useLoaderData();
  const { user } = useContext(AuthContext);
  const placeOrder = (e) => {
    e.preventDefault();
    const order = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      msg: e.target.msg.value,
      email: user?.email,
    };

    fetch("http://localhost:5000/orderplace", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        e.target.reset();
        return res.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="space-y-5">
        <h1 className="text-5xl font-bold text-center text-primary py-5">
          {data.name}
        </h1>
      </div>
      <div className="">
        <form onSubmit={placeOrder}>
          <div className="flex flex-col w-5/12 mx-auto space-y-4">
            <input
              className="border"
              type="text"
              name="name"
              placeholder="enter your name"
              required
            />
            <input
              className="border"
              type="text"
              name="phone"
              placeholder="enter your phone number"
              required
            />
            <textarea
              placeholder="write your msg"
              className="border"
              name="msg"
              id=""
              cols="30"
              rows="10"></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
