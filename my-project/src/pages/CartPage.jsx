import React from "react";
import CartItem from "../components/CartItem";

const CartPage = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <>
      <h2 className="text-3xl p-3 text-center mb-3 font-bold"> Shopping cart</h2>
      <div className="grid   ">
        {cartItems.length === 0 ? (
          <p>Your cart is empty..</p>
        ) : (
          <>
            <div className="container mx-auto p-1 ">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            {/* ----- cart-summary-starts ---- */}
            <div className="flex items-center justify-center p-4">
              <div className=" grid grid-cols-2 ">
                {/* Description */}
                <div className="">
                  <div className="text-xl p-1">Total</div>
                  <div className="text-xl p-1">Discount (10%)</div>
                  <div className="text-xl font-bold p-1">Final Price:</div>
                </div>
                {/* Price Details */}
                <div>
                  <div className="text-xl p-1  ">: &#8377; {total.toFixed(2)}</div>
                  <div className="text-xl p-1 ">: &#8377;  {discount.toFixed(2)}</div>
                  <div className="text-xl p-1 font-bold ">:  &#8377; {finalPrice.toFixed(2)}</div>
                </div>
              </div>
            </div>

            {/* ----- cart-summary-ends ----- */}
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
