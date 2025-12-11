const ProductHero = ({ products, cartItems, onAddToCart }) => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-Rose-900">Desserts</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product) => {
          const existingCartItem = cartItems.find(
            (item) => item.product.name === product.name
          );

          return (
            <div key={product.category} className="relative">
              <img
                className="object-cover rounded-lg"
                src={product.image.desktop.replace("./assets/images/", "")}
                alt=""
              />

              {existingCartItem !== undefined ? (
                <div
                  className={`flex gap-2 items-center cursor-pointer w-full max-w-[150px]  border absolute rounded-3xl left-1/2 -translate-x-1/2 bottom-1/4 hover:border-Red text-Rose-50 transition-colors duration-150 ${
                    existingCartItem !== undefined
                      ? "bg-Red border-Red"
                      : "bg-Rose-50 border-Rose-900"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <button type="button" className="p-3 cursor-pointer">
                      <img src="icon-increment-quantity.svg" alt="" />
                    </button>
                    <p></p>
                    <button type="button" className="p-3 cursor-pointer">
                      <img src="icon-decrement-quantity.svg" alt="" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="flex gap-2 items-center cursor-pointer w-full max-w-[150px] border-Rose-900 border absolute bg-Rose-50 rounded-3xl px-3 py-2 left-1/2 -translate-x-1/2 bottom-1/4 hover:border-Red hover:*:text-Red transition-colors duration-150"
                >
                  <img src="icon-add-to-cart.svg" alt="" />
                  <p className="text-Rose-900 font-semibold">Add to Cart</p>
                </button>
              )}

              <p className="text-Rose-500 pt-6">{product.category}</p>
              <p>{product.name}</p>
              <p className="text-Red font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductHero;
