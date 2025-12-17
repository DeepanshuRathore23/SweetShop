import { signOut, auth } from "@/auth";

export default async function page() {
    const role = "admin"
//   const session = await auth();
//   const orders = await fetchOrdersByUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow p-5 mb-8">
        <h1 className="text-2xl font-bold text-rose-600">
          {/* Welcome {session?.user?.name} (Admin) */}
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

      {/* ADMIN DASHBOARD */}
      {/* {role === "admin" && ( */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-700">
              Sweets Inventory
            </h2>

            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              {/* <FaPlus /> */}
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
              {/* {sweets.map((sweet) => (
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
              ))} */}
            </tbody>
          </table>
        </div>
      {/* )} */}
    </div>
  );
}
