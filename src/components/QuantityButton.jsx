const QuantityButton = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="w-full flex justify-between items-center text-Rose-50 bg-Red rounded-2xl absolute z-40 top-4/7 left-1/2 -translate-x-1/2 max-w-[80%]">
      <button
        type="button"
        className="p-4 cursor-pointer"
        onClick={onDecrement}
        aria-label="Decrease quantity"
      >
        <img src="icon-decrement-quantity.svg" alt="" />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        className="p-4 cursor-pointer"
        onClick={onIncrement}
        aria-label="Increase quantity"
      >
        <img src="icon-increment-quantity.svg" alt="" />
      </button>
    </div>
  );
};

export default QuantityButton;
