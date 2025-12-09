const ProductHero = ({ products, onAddToCart }) => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-Rose-900">Desserts</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.category} className="relative">
            <img
              className="object-cover rounded-lg"
              src={product.image.desktop.replace("./assets/images/", "")}
              alt=""
            />
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="flex gap-2 items-center cursor-pointer w-full max-w-[140px] border-Rose-900 border absolute bg-Rose-50 rounded-3xl px-3 py-2 left-1/2 -translate-x-1/2 bottom-1/4"
            >
              <img src="icon-add-to-cart.svg" alt="" />
              <p>Add to Cart</p>
            </button>

            <p className="text-Rose-500 pt-6">{product.category}</p>
            <p>{product.name}</p>
            <p className="text-Red font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHero;
