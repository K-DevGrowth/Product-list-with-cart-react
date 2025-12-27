import { formatCurrency } from "../utility/utility";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, onRemove, totalPrice, totalItems, onConfirm }) => {
  return (
    <div className="pt-10">
      <h2 className="text-Red text-xl font-bold">Your Cart ({totalItems})</h2>

      {cartItems.map((item) => (
        <CartItem
          key={item.product.name}
          item={item}
          onRemove={() => onRemove(item.product)}
          variant="cart"
        />
      ))}

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex justify-between items-center py-4">
            <span>Order Total</span>
            <strong className="font-bold">{formatCurrency(totalPrice)}</strong>
          </div>
          <div className="flex items-center justify-center py-4">
            <img src="icon-carbon-neutral.svg" alt="" />
            <span className="text-gray-700">
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>
          <button
            type="button"
            onClick={onConfirm}
            className="w-full bg-Red rounded-2xl font-medium text-Rose-50 px-3 py-2 cursor-pointer"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
