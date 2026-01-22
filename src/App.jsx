import Header from "./Components/Templates/Header/Header";
import Footer from "./Components/Templates/Footer/Footer";
import { CartProvider } from "./Components/Context/CartContext";

export default function App() {
  return (
    <div>
      <CartProvider>
        <Header />
      </CartProvider>
      <Footer />
    </div>
  );
}
