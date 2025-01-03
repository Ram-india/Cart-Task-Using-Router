import React from "react";

const ProductCard = ({ product, addToCart, inCart }) => {

  //============ Function to generate star rating Starts
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 !== 0; // Half star condition
    const emptyStars = 5 - Math.ceil(rating); // Remaining stars

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };
  // ============= Function to generate star rating end

  return (
    <div
      key={product.id}
      className="border border-gray-100 p-4 rounded-md shadow bg-white flex-col justify-center items-center  "
    >
      {/* ======Product Image======== */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto mb-3 p-2 md:h-25 "
      />
      {/* ======= Product Titile ======== */}
      <h2 className="text-sm text-center font-semibold text-gray-600 min-h-20 mb-2">
        {product.title}
      </h2>
      {/* ====== Product descriptiiion ======== */}
      <p>{product.description.substring(0, 100)}...</p>
      {/* ======= Product Start rating ====== */}
      <div className="text-blue-400 text-center font-thin">
        {renderStars(product.rating.rate)}{" "}
        <span className="text-blue-600 font-"> {product.rating.rate}</span>{" "}
      </div>
      {/* ========= Product Price =========== */}
      <p className="text-black font-black text-center mb-2">
        &#8377;  {product.price}{" "}
      </p>
      <div className="flex justify-center items-center ">
        <button
          onClick={() => addToCart(product)}
          
          className= { inCart ? "bg-red-400 px-4 py-2 rounded-full hover:bg-red-500 " :"bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 "}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
