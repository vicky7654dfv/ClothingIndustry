import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./components/ThemeContext/ThemeContext";
import Home from "./pages/Home/Home";
import { SearchProvider } from "./components/SearchContext/SearchContext";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./components/CartContext/CartContext";
import Error from "./pages/Error/Error";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Home2 from "./pages/Home2/Home2";
import FAQ from "./pages/FAQ/FAQ";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: true, // animate only once per element
      easing: "ease-in-out", 
    });
  }, []);
  return (
    <>
      <HashRouter>
        <ThemeProvider>
          <CartProvider>
          <SearchProvider>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/FAQ" element={<FAQ />}/>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/HomePage2" element={<Home2 />} />
            <Route path="/DashBoard" element={<DashBoard />} />
          </Routes>
          </SearchProvider>
          </CartProvider>
          <Footer />
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
