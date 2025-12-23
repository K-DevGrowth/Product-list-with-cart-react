import { useState } from "react";

const ProductHero = ({
  products,
  cartItems,
  onAddToCart,
  onIcrementAmount,
  onDecrementAmount,
}) => {
  const [amount, setAmount] = useState(1);

  const handleAddToCart = (product) => {
    onAddToCart(product, amount);
  };

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

            {cartItems.find((item) => item.product.name === product.name)
              ?.amount > 0 ? (
              <div className="w-full flex justify-between text-Rose-50 bg-Red rounded-lg">
                <button
                  type="button"
                  className="px-3 py-2"
                  onClick={() => onIcrementAmount(product)}
                >
                  <img src="icon-increment-quantity.svg" alt="" />
                </button>
                <span>
                  {cartItems.find((item) => item.product.name === product.name)
                    ?.amount ?? 0}
                </span>

                <button
                  type="button"
                  className="px-3 py-2"
                  onClick={() => onDecrementAmount(product)}
                >
                  <img src="icon-decrement-quantity.svg" alt="" />
                </button>
              </div>
            ) : (
              <button type="button" onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHero;
