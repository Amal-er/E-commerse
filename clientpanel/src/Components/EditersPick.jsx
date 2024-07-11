// src/components/JustArrived.jsx
import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function FeaturedProducts({ products }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <hr className="border-t-2 border-gray-100 w-[80%]  " />
      </div>
      <div className="py-8 md:px-12 md:py-14">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[22px] font-bold text-center tracking-wide">
            EDITORS' PICKS
          </h2>
          <p className="text-xs text-gray-500 md:py-3">
            Magnis de darturien eros laciniados de cosmopolis dinterdum
          </p>
        </div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
          >
            &gt;
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative text-center p-4 transition-all transform hover:scale-105 hover:shadow-xl w-48 sm:w-64 h-96 flex-shrink-0 hover:h-[calc(24rem+20px)] group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-32 h-32 mx-auto transition-transform transform ${
                    hoveredProduct === product.id
                      ? "scale-110 transition-transform duration-900"
                      : "scale-100"
                  }`}
                />
                <p className="text-[12px] font-bold leading-[26px] tracking-wide mt-4">
                  {product.name}
                </p>
                <p className="special-element text-[12px] tracking-wider leading-[20px] text-gray-900 mt-4 hover:text-red-600 hover:underline">
                  {product.description}
                </p>
                <p className="special-element text-[14px] leading-[25px] font-bold mt-2">
                  {product.price}
                </p>
                <button
                  className="md:hidden w-full h-11 bg-black text-white hover:bg-red-600"
                  onClick={() => handleCart(product)}
                >
                  Add To Cart
                </button>
                <button
                  className="absolute bottom-4 left-10 w-3/4 h-11 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                  onClick={() => handleCart(product)}
                >
                  Add To Cart
                </button>
                <button
                  className="absolute top-14 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                  onClick={() => handleQuickView(product.id)}
                >
                  Quick view
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
