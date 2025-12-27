import { formatCurrency } from "../utility/utility";

const CartItem = ({ item, onRemove, variant = "cart" }) => {
  const { product, amount } = item;
  const subtotal = product.price * amount;

  return (
    <div className="flex justify-between items-center py-2 w-full">
      <div className="flex gap-x-2">
        {variant === "order" && (
          <img
            className="object-cover max-w-12 h-12 rounded-md"
            src={product.image.thumbnail.replace("./assets/images/", "")}
            alt={product.name}
          />
        )}
        <div>
          <p className="text-Rose-900 font-medium">{product.name}</p>
          <div className="flex gap-x-4">
            <span className="text-Red font-medium">{amount}x</span>
            <span className="text-Rose-400">
              @{formatCurrency(product.price)}
            </span>
            {variant === "cart" && (
              <span className="text-Rose-500 font-medium">
                {formatCurrency(subtotal)}
              </span>
            )}
          </div>
        </div>
      </div>

      {variant === "cart" ? (
        <button onClick={onRemove}>
          <img src="icon-remove-item.svg" alt="" />
        </button>
      ) : (
        <span className="text-Rose-500 font-medium">
          {formatCurrency(subtotal)}
        </span>
      )}
    </div>
  );
};

export default CartItem;
