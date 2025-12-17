import { signOut, auth } from "@/auth";
import { fetchOrdersByUser } from "@/app/lib/data";
import { FaSignOutAlt, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export default async function Dashboard() {
    let role = "customer"
  const session = await auth();
  const orders = await fetchOrdersByUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow p-5 mb-8">
        <h1 className="text-2xl font-bold text-rose-600">
          Welcome {session?.user?.name}
        </h1>

        <form action={async () => {
                  'use server'
                  await signOut({redirectTo: '/'});
              }}>
                  <button
                      className="text-sm text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-50"
                      >
                      Sign Out
                  </button>
        </form>
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
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-black">
                  <td className="p-3">{order.product_name}</td>
                  {/* <td className="p-3">{order.}</td> */}
                  {/* <td className="p-3">₹{order.price}</td> */}
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      {/* {order.status} */}
                    </span>
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
