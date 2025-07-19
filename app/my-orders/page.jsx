'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const OrderItemImages = ({ items }) => (
  <div className="flex gap-2 flex-wrap">
    {items.map((item, i) =>
      item.product.image && item.product.image.length > 0 ? (
        <Image
          key={i}
          src={item.product.image[0]}
          alt={item.product.name ?? `Product image ${i + 1}`}
          className="w-12 h-12 object-cover rounded"
          width={48}
          height={48}
          priority={i < 3} // prioritize first few images for better UX
        />
      ) : (
        <div
          key={i}
          className="w-12 h-12 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded"
          title="No image available"
          aria-label="No product image available"
        >
          No Image
        </div>
      )
    )}
  </div>
);

const MyOrders = () => {
  const { currency, getToken, user } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/order/list", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setOrders(data.orders.reverse());
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="flex justify-center items-center min-h-screen">
          <Loading />
        </main>
        <Footer />
      </>
    );
  }

  if (!orders.length) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 py-12">
          <h2 className="text-xl font-semibold mb-4">My Orders</h2>
          <p className="text-gray-600">You have no orders yet.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

        <section className="max-w-5xl border-t border-gray-300 text-sm space-y-6">
          {orders.map((order, index) => (
            <article
              key={order._id ?? index}
              className="flex flex-col md:flex-row gap-6 justify-between p-6 border-b border-gray-300 rounded-md shadow-sm"
            >
              {/* Product Images + Info */}
              <div className="flex-1 flex flex-col md:flex-row gap-4 max-w-80">
                <OrderItemImages items={order.items} />

                <div className="flex flex-col justify-center gap-2 mt-2 md:mt-0">
                  <p className="font-medium text-base leading-snug">
                    {order.items
                      .map((item) => `${item.product.name} x ${item.quantity}`)
                      .join(", ")}
                  </p>
                  <p className="text-gray-600">Total items: {order.items.length}</p>
                </div>
              </div>

              {/* Shipping Address */}
              <address className="not-italic text-gray-700">
                <p className="font-semibold">{order.address.fullName}</p>
                <p>{order.address.area}</p>
                <p>
                  {order.address.city}, {order.address.state}
                </p>
                <p>{order.address.phoneNumber}</p>
              </address>

              {/* Total Price */}
              <div className="flex items-center font-semibold text-lg whitespace-nowrap">
                {currency}
                {order.amount.toFixed(2)}
              </div>

              {/* Order Info */}
              <div className="flex flex-col text-gray-600 whitespace-nowrap">
                <span>Payment Method: COD</span>
                <span>
                  Date:{" "}
                  {new Date(order.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>Payment Status: Pending</span>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MyOrders;
