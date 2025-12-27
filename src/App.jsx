import { useState } from "react";
import ProductHero from "./components/ProductHero";
import ProductCart from "./components/ProductCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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

  const handleIncrementAmount = (product) => {
    setCartItems((prev) => {
      return prev.map((item) =>
        item.product.name === product.name
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    });
  };

  const handleDecrementAmount = (product) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.amount === 1) {
          return item;
        }
        return item.product.name === product.name
          ? { ...item, amount: item.amount - 1 }
          : item;
      });
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.name !== product.name)
    );
  };

  const totalCartItems = () => {
    const total = cartItems.reduce((total, item) => {
      return total + item.product.price * item.amount;
    }, 0);

    return total.toLocaleString("en-EN", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <main className="h-dvh relative w-screen overflow-x-hidden scroll-smooth">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] p-6 gap-x-4">
        <ProductHero
          cartItems={cartItems}
          onIcrementAmount={handleIncrementAmount}
          onDecrementAmount={handleDecrementAmount}
          onAddToCart={handleAddToCart}
        />
        <ProductCart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          totalCartItems={totalCartItems}
          setCartItems={setCartItems}
        />
      </div>
    </main>
  );
};

export default App;
