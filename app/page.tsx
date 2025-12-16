"use client"
import { useState, useEffect } from "react";
import {FaSearch } from "react-icons/fa";

// type Products = {
//   name: string,
//   price: number,
//   in_stock: number,
//   category: string
// }

export default function Home() {
  // const [products, setProducts] = useState<Products[]>([])
  // useEffect(() => {
  //   async function getProducts(){
  //     const res = await fetch('/api/fetchProducts');
  //     const data = await res.json()
  //     setProducts(data);
  //   }

  //   getProducts();
  // }, [])

  // const [search, setSearch] = useState("");
  // const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);


  // const filteredSweets = products.filter((sweet) => {
  //   const name = sweet.name?.toLowerCase() || "";
  //   const category = sweet.category?.toLowerCase() || "";
  //   const searchText = search.toLowerCase();
  
  //   return (
  //     (name.includes(searchText) || category.includes(searchText)) &&
  //     (maxPrice === undefined || sweet.price <= maxPrice)
  //   );
  // });
  

  return (
    <div className="min-h-screen bg-blue-200">
      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-1">
        <div className="bg-white/80 text-black  rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4">
          
          <div className="flex items-center gap-3 flex-1 border rounded-xl px-4 py-2">
            {/* <FaSearch className="" />
            <input
              type="text"
              placeholder="Search sweets by name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none"
            /> */}
          </div>

          {/* <input
            type="number"
            placeholder="Max ₹"
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            className="md:w-40 border rounded-xl px-4 py-2 outline-none"
          /> */}
        </div>
      </div>

      {/* Sweets Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Available Sweets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* {filteredSweets.map((sweet, index) => ( */}
            <div
              // key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gradient-to-r from-rose-200 to-pink-200 rounded-t-2xl flex items-center justify-center text-4xl">
                <img src="https://imgs.search.brave.com/9VYPFvWZWuCVbvFYfq9M0NBvEO1xuE_n-eSRcWWQS18/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vNTY1MzYz/OC8xMTQ1MC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzExNDUwOTgx/MC1zdG9jay1waG90/by1pbmRpYW4tc3dl/ZXRzLWJ1bmRpLWxh/ZGR1LW9yLmpwZw" alt="" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {/* {sweet.name} */}
                </h3>
                <p className="text-sm text-gray-500">
                  {/* {sweet.category} */}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-rose-600">
                    {/* ₹{sweet.price} */}
                  </span>
                  <button className="bg-rose-500 text-white px-4 py-1.5 rounded-full hover:bg-rose-600 transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>

        {/* {filteredSweets.length === 0 && ( */}
          <p className="text-center text-gray-500 mt-10">
            No sweets found 🍭
          </p>
        {/* )} */}
      </div>
    </div>
  );
}
