import { useState } from "react";

const ProductHero = ({ products, cartItems, onAddToCart }) => {
  const [amount, setAmount] = useState(0);
  console.log(cartItems);
  return (
    <section>
      <h1 className="text-3xl font-bold text-Rose-900">Desserts</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.name}>
            <img
              src={product.image.desktop.replace("./assets/images/", "")}
              alt=""
            />
            <p>{product.category}</p>
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product, amount)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHero;
