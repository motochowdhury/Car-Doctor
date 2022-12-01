import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Orders = () => {
  const { user, logout } = useContext(AuthContext);
  const [orderCart, setOrderCart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        setOrderCart(data);
      });
  });
  return (
    <div>
      <h1>You have : {orderCart?.length}</h1>
    </div>
  );
};

export default Orders;
