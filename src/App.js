import "./App.css";
import { CartContextProvider } from "./context/cartContext";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <div className="w-full h-screen py-8 px-4">
        <div className="grid grid-cols-6 gap-8">
          <Product />
          <Cart />
        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
