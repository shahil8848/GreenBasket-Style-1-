'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
  const { currency, getToken, user } = useAppContext();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerOrders = async () => {
    try {
      const token = await getToken();

      const { data } = await axios.get("/api/order/seller-orders", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setOrders(data.orders);
        setLoading(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchSellerOrders();
    }
  }, [user]);

  return (
    <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm">
      {loading ? (
        <Loading />
      ) : (
        <div className="md:p-10 p-4 space-y-5">
          <h2 className="text-lg font-medium">Orders</h2>
          <div className="max-w-4xl rounded-md">
            {orders.map((order, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-5 justify-between p-5 border-t border-gray-300"
              >
                {/* Product Images and Info */}
                <div className="flex-1 flex gap-5 max-w-80">
                  <div className="flex gap-2 flex-wrap max-w-40">
                    {order.items.map((item, i) =>
                      item.product.image && item.product.image.length > 0 ? (
                        <Image
                          key={i}
                          src={item.product.image[0]}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded"
                          width={80}
                          height={80}
                        />
                      ) : (
                        <div
                          key={i}
                          className="w-20 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded"
                          title="No image available"
                          aria-label="No product image available"
                        >
                          No Image
                        </div>
                      )
                    )}
                  </div>
                  <p className="flex flex-col gap-3">
                    <span className="font-medium">
                      {order.items
                        .map((item) => item.product.name + ` x ${item.quantity}`)
                        .join(", ")}
                    </span>
                    <span>Items : {order.items.length}</span>
                  </p>
                </div>

                {/* Shipping Address */}
                <div>
                  <p>
                    <span className="font-medium">{order.address.fullName}</span>
                    <br />
                    <span>{order.address.area}</span>
                    <br />
                    <span>{`${order.address.city}, ${order.address.state}`}</span>
                    <br />
                    <span>{order.address.phoneNumber}</span>
                  </p>
                </div>

                {/* Total Price */}
                <p className="font-medium my-auto">
                  {currency}
                  {order.amount}
                </p>

                {/* Order Info */}
                <div>
                  <p className="flex flex-col">
                    <span>Method : COD</span>
                    <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                    <span>Payment : Pending</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Orders;
