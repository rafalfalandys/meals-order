import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Description from "./components/Main/Description";
import Meals from "./components/Main/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Description />
      <Meals />
      <Cart />
    </CartProvider>
  );
}

export default App;
