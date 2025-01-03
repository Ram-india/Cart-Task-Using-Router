import React from "react";

const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
  return (
    <>
      <div className="cart-item ">
        <div className="grid grid-cols-4 gap-2 border-b-2">
          {/* ----- Product image starts ----- */}
          <div className="flex items-center justify-center mb-1 rounded-md">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 mx-auto md:h-20mb-3 p-1 "
            />
          </div>
          {/* ----- Product image end ----- */}

          <div className=" mb-1 p-2 col-span-2 ">
            <div className="text-sm font-semibold text-left mb-4 p-2">
              {item.title}
            </div>
            <p className="text-sm  text-left  p-1">
              <span className="font-semibold">Category : </span> {item.category}
            </p>
            <p className="text-sm  text-left mb-4 p-2">
              <span className="font-semibold">Description :</span>{" "}
              {item.description.substring(0, 110)}...
            </p>

            {/* ----- quantity-controls-starts ----- */}

            <div>
              <span className="border-yellow-400 border-4 p-2 rounded-3xl">
                <button
                  className=" p-1 "
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                {/*--- product-count --- */}
                <span className="p-3 font-bold ">{item.quantity}</span>
                {/* Increment Button Starts */}
                <button
                  className=" p-1 "
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                {/* Increment Button ends */}
              </span>

              {/* Delete Button starts  */}
              <button
                className="bg-red-600 text-white ml-2 py-2 px-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              {/* Delete-Button-ends  */}
            </div>
            {/* quantity-controls-ends */}
          </div>

          {/* ----- Price-details-starts-here ------ */}
          <div className="p-2 mb-1 flex flex-col  items-center justify-start gap-3">
            <p className="font-bold">Price: &#8377; {item.price}</p>
          </div>
          {/* ----- Price-details-ends-here ------ */}
        </div>
      </div>
    </>
  );
};

export default CartItem;
