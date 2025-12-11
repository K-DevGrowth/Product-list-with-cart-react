import ProductCartItem from "./ProductCartItem";

const ProductCart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Your Cart(0)</h2>

      {cartItems.length == 0 && (
        <>
          <img src="public\illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </>
      )}

      {cartItems.map((item) => (
        <ProductCartItem
          key={item.product.name}
          onRemoveFromCart={onRemoveFromCart}
          {...item.product}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default ProductCart;
