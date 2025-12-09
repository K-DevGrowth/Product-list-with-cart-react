const ProductCart = ({ cartItems, onRemoveFromCart }) => {
  console.log(cartItems);
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
        <div key={item.name}>
          <p>{item.name}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
