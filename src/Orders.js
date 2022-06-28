import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./Stateprovider";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const colRef = collection(db, "users");
  const [orders, setOrders] = useState([]);
  let orderInfo = [];
  useEffect(() => {
    if (orderInfo.length > 0) {
      orderInfo = [];
    }
    if (user) {
      console.log(`Aaron ${orderInfo}`);
      getDocs(colRef)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            orderInfo.push({ ...doc.data(), id: doc.id });
          });
          setOrders(orderInfo);
          console.log(orderInfo);
        })
        .catch((error) => {
          console.log(error.message);
        });
      //   db.collection("users")
      //     .doc(user?.uid)
      //     .collection("orders")
      //     .orderBy("created", "desc")
      //     .onSnapshot((snapshot) =>
      //       setOrders(
      //         snapshot.docs.map((doc) => ({
      //           id: doc.id,
      //           data: doc.data(),
      //         }))
      //       )
      //     );
    } else {
      setOrders([]);
    }
  }, [setOrders]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orderInfo?.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
