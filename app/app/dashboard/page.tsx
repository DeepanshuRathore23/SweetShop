"use client"
import { useState } from "react";
import { FaSignOutAlt, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export default function Dashboard() {
  // Change role to "admin" or "customer"
  const [role] = useState("customer");

  const orders = [
    { id: 1, sweet: "Gulab Jamun", qty: 2, price: 100, status: "Delivered" },
    { id: 2, sweet: "Chocolate Cake", qty: 1, price: 200, status: "Pending" },
  ];

  const sweets = [
    { id: 1, name: "Gulab Jamun", stock: 50, price: 50 },
    { id: 2, name: "Rasgulla", stock: 30, price: 60 },
    { id: 3, name: "Cupcake", stock: 20, price: 80 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow p-5 mb-8">
        <h1 className="text-2xl font-bold text-rose-600">
          Dashboard ({role === "admin" ? "Admin" : "User"})
        </h1>

        <button className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition">
          <FaSignOutAlt />
          Sign Out
        </button>
      </div>

      {/* CUSTOMER DASHBOARD */}
      {role === "customer" && (
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Orders Placed
          </h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="p-3">Sweet</th>
                <th className="p-3">Qty</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{order.sweet}</td>
                  <td className="p-3">{order.qty}</td>
                  <td className="p-3">₹{order.price}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ADMIN DASHBOARD */}
      {role === "admin" && (
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-700">
              Sweets Inventory
            </h2>

            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              <FaPlus />
              Add Sweet
            </button>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="p-3">Sweet Name</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sweets.map((sweet) => (
                <tr key={sweet.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{sweet.name}</td>
                  <td className="p-3">{sweet.stock}</td>
                  <td className="p-3">₹{sweet.price}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
                      <FaEdit />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-100 rounded">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
