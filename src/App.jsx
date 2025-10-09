import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./components/ThemeContext/ThemeContext";
import Home from "./pages/Home/Home";
import { SearchProvider } from "./components/SearchContext/SearchContext";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUpPage/SignUpPage";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./components/CartContext/CartContext";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <CartProvider>
          <SearchProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Error" element={<Error />} />
          </Routes>
          </SearchProvider>
          </CartProvider>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
