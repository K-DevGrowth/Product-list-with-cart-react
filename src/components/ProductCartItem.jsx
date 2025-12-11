const ProductCartItem = ({ name, price, amount, onRemoveFromCart }) => {
  return (
    <div className="flex justify-between items-center py-2 max-w-2xs">
      <div>
        <p>{name}</p>
        <div className="flex gap-x-4">
          <span className="text-Red font-medium">{amount}x</span>
          <span className="text-Rose-400">@${price.toFixed(2)}</span>
          <span className="text-Rose-500 font-medium">
            ${(price * amount).toFixed(2)}
          </span>
        </div>
      </div>
      <button onClick={onRemoveFromCart}>
        <img src="icon-remove-item.svg" alt="" />
      </button>
    </div>
  );
};

export default ProductCartItem;
