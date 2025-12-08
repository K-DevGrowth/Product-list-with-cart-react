import { useState } from "react";
import data from "./data.json";
import ProductHero from "./components/ProductHero";
import ProductCart from "./components/ProductCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState(data);

  const handleAddToCart = () => {};

  const handleRemoveFromCart = () => {};

  return (
    <main className="min-h-screen relative">
      <div className="grid grid-cols-[2fr_1fr] p-10">
        <ProductHero products={products} onAddToCart={handleAddToCart} />
        <ProductCart onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </main>
  );
};

export default App;
