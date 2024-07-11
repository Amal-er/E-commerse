import React from "react";

function AllProducts() {
  return (
    <div className="w-full h-full bg-[#f3f3f8]  ">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>All Products</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full p-4 flex-col justify-center">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 w-72 h-48  border rounded shadow-sm"
            >
              <h2 className="text-lg font-semibold">Product {index + 1}</h2>
              <p className="text-sm">Product details here...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
