const ProductCartItem = ({
  name,
  price,
  amount,
  onRemoveFromCart,
  variant,
  image,
}) => {
  return (
    <div className="flex justify-between items-center py-2  w-full">
      <div className="flex gap-x-2">
        {variant === "order" && (
          <img
            className="object-cover max-w-12 h-12 rounded-md"
            src={image.thumbnail.replace("./assets/images/", "")}
            alt=""
          />
        )}
        <div>
          <p className="text-Rose-900 font-medium">{name}</p>
          <div className="flex gap-x-4">
            <span className="text-Red font-medium">{amount}x</span>
            <span className="text-Rose-400">@${price.toFixed(2)}</span>
            {variant === "cart" && (
              <span className="text-Rose-500 font-medium">
                ${(price * amount).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>

      {variant === "cart" ? (
        <button onClick={onRemoveFromCart}>
          <img src="icon-remove-item.svg" alt="" />
        </button>
      ) : (
        <span className="text-Rose-500 font-medium">
          ${(price * amount).toFixed(2)}
        </span>
      )}
    </div>
  );
};

export default ProductCartItem;
