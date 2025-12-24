import { useState } from "react";
import data from "../data.json";

const ProductHero = ({
  cartItems,
  onAddToCart,
  onIcrementAmount,
  onDecrementAmount,
}) => {
  const [products] = useState(data);

  return (
    <section>
      <h1 className="text-3xl font-bold text-Rose-900">Desserts</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.name} className="relative">
            <img
              src={product.image.desktop.replace("./assets/images/", "")}
              alt=""
            />
            <p className="pt-6 text-Rose-500">{product.category}</p>
            <p className="font-semibold text-Rose-900 text-[14px]">
              {product.name}
            </p>
            <p className="text-Red font-medium">${product.price.toFixed(2)}</p>

            {cartItems.find((item) => item.product.name === product.name)
              ?.amount > 0 ? (
              <div className="w-full flex justify-between items-center text-Rose-50 bg-Red rounded-2xl absolute z-40 top-4/7 left-1/2 -translate-x-1/2 max-w-[80%]">
                <button
                  type="button"
                  className="px-3 py-2"
                  onClick={() => onDecrementAmount(product)}
                >
                  <img src="icon-decrement-quantity.svg" alt="" />
                </button>

                <span>
                  {cartItems.find((item) => item.product.name === product.name)
                    ?.amount ?? 0}
                </span>

                <button
                  type="button"
                  className="px-4 py-4"
                  onClick={() => onIcrementAmount(product)}
                >
                  <img src="icon-increment-quantity.svg" alt="" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onAddToCart(product, 1)}
                className="absolute z-40 top-4/7 left-1/2 -translate-x-1/2 font-semibold border border-Red bg-Rose-50 rounded-2xl px-3 py-2 w-full max-w-[80%]"
              >
                <img
                  className="inline-block pr-1"
                  src="icon-add-to-cart.svg"
                  alt=""
                />
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
