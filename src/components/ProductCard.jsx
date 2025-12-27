import { formatCurrency } from "../utility/utility";
import AddToCartButton from "./AddToCartButton";
import QuantityButton from "./QuantityButton";

const ProductCard = ({ product, quantity, onAddToCart, onUpdateQuantity }) => {
  const hasItemInCart = quantity > 0;
  return (
    <div className="relative group">
      <div className="relative">
        <img
          src={product.image.desktop.replace("./assets/images/", "")}
          alt=""
          className={`${hasItemInCart && "border-2 rounded-lg border-Red"}`}
        />
        <p className="pt-6 text-Rose-500">{product.category}</p>
        <p className="font-semibold text-Rose-900 text-[14px]">
          {product.name}
        </p>
        <p className="text-Red font-medium">{formatCurrency(product.price)}</p>
      </div>

      {hasItemInCart ? (
        <QuantityButton
          quantity={quantity}
          onIncrement={() => onUpdateQuantity(product, 1)}
          onDecrement={() => onUpdateQuantity(product, -1)}
        />
      ) : (
        <AddToCartButton onAdd={() => onAddToCart(product, 1)} />
      )}
    </div>
  );
};

export default ProductCard;
