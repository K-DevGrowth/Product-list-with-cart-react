import { useState } from "react";
import ProductCartItem from "./ProductCartItem";

const ProductCart = ({
  cartItems,
  onRemoveFromCart,
  totalCartItems,
  setCartItems,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    setIsConfirmed(!isConfirmed);
  };

  const handleStartNewOrder = () => {
    setIsConfirmed(false);
    setCartItems([]);
  };

  return (
    <div className="pt-10">
      <h2 className="text-Red text-xl font-bold">
        Your Cart (
        {cartItems
          .map((item) => item.amount)
          .reduce((prev, next) => prev + next, 0)}
        )
      </h2>

      {cartItems.map((item) => (
        <ProductCartItem
          variant="cart"
          key={item.product.name}
          onRemoveFromCart={() => onRemoveFromCart(item.product)}
          {...item.product}
          amount={item.amount}
        />
      ))}

      {cartItems.length === 0 ? (
        <>
          <img
            className="object-cover mx-auto"
            src="illustration-empty-cart.svg"
            alt=""
          />
          <p className="text-center text-Rose-400">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center py-4">
            <p>Order Total</p>
            <p className="font-bold">{totalCartItems()}</p>
          </div>
          <button
            type="button"
            onClick={handleConfirmOrder}
            className="w-full bg-Red rounded-2xl font-medium text-Rose-50 px-3 py-2 cursor-pointer"
          >
            Confirm Order
          </button>
        </>
      )}

      {isConfirmed && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsConfirmed(false)}
          ></div>

          <div className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-50 bg-Rose-50 p-6 rounded-lg max-w-md w-full">
            <img src="icon-order-confirmed.svg" alt="" />
            <p className="font-bold text-xl">Order Confirmed</p>
            <p className="text-Rose-500">We hope you enjoy yout food!</p>
            {cartItems.map((item) => (
              <div
                key={item.product.name}
                className="flex items-center gap-x-4 bg-Rose-100/40 p-2"
              >
                <ProductCartItem
                  variant="order"
                  key={item.product.name}
                  onRemoveFromCart={() => onRemoveFromCart(item.product)}
                  {...item.product}
                  amount={item.amount}
                />
              </div>
            ))}
            <div className="flex justify-between items-center py-4">
              <p>Order Total</p>
              <p className="font-bold">{totalCartItems()}</p>
            </div>
            <button
              type="button"
              onClick={handleStartNewOrder}
              className="w-full bg-Red rounded-2xl font-medium text-Rose-50 px-3 py-2 cursor-pointer"
            >
              Start new order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCart;
