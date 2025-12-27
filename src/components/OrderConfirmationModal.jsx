import { formatCurrency } from "../utility/utility";
import CartItem from "./CartItem";

const OrderConfirmationModal = ({
  cartItems,
  totalPrice,
  onClose,
  onStartNew,
}) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>

      <div className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-50 bg-Rose-50 p-6 rounded-lg max-w-md w-full">
        <img src="icon-order-confirmed.svg" alt="" />

        <h2 className="font-bold text-xl">Order Confirmed</h2>
        <p className="text-Rose-500">We hope you enjoy yout food!</p>

        {cartItems.map((item) => (
          <CartItem key={item.product.name} item={item} variant="order" />
        ))}

        <div className="flex justify-between items-center py-4">
          <span>Order Total</span>
          <span className="font-bold">{formatCurrency(totalPrice)}</span>
        </div>

        <button
          type="button"
          onClick={onStartNew}
          className="w-full bg-Red rounded-2xl font-medium text-Rose-50 px-3 py-2 cursor-pointer"
        >
          Start new order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
