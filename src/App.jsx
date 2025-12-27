import { useState } from "react";
import MOCK_DATA from "./data.json";
import useCart from "./hook/useCart";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { getCartItemQuantity } from "./utility/utility";
import OrderConfirmationModal from "./components/OrderConfirmationModal";

const App = () => {
  const [products] = useState(MOCK_DATA);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const handleConfirmOrder = () => {
    setShowConfirmation(true);
  };

  const handleStartNewOrder = () => {
    setShowConfirmation(false);
    clearCart();
  };

  return (
    <main className="h-dvh relative w-screen overflow-x-hidden scroll-smooth">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] p-6 gap-x-4">
        <section>
          <h1 className="text-3xl font-bold text-Rose-900">Desserts</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                quantity={getCartItemQuantity(cartItems, product.name)}
                onAddToCart={addToCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>
        </section>

        <aside>
          <Cart
            cartItems={cartItems}
            onRemove={removeFromCart}
            totalPrice={totalPrice}
            totalItems={totalItems}
            onConfirm={handleConfirmOrder}
          />
        </aside>
      </div>

      {showConfirmation && (
        <OrderConfirmationModal
          cartItems={cartItems}
          totalPrice={totalPrice}
          onClose={() => setShowConfirmation(false)}
          onStartNew={handleStartNewOrder}
        />
      )}
    </main>
  );
};

export default App;
