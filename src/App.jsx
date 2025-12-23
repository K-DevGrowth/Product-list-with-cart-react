import { useState } from "react";
import data from "./data.json";
import ProductHero from "./components/ProductHero";
import ProductCart from "./components/ProductCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState(data);
  // console.log(products);

  const handleAddToCart = (product, amount) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (item) => item.product.name === product.name
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.product.name === product.name
            ? { ...item, amount: item.amount + amount }
            : item
        );
      }

      return [...prev, { product: product, amount: 1 }];
    });
  };

  const handleRemoveFromCart = () => {};

  return (
    <main className="min-h-screen relative">
      <div className="grid grid-cols-[2fr_1fr] p-10 gap-x-4">
        <ProductHero
          products={products}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
        />
        <ProductCart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </main>
  );
};

export default App;
