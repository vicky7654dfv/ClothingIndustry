import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./components/ThemeContext/ThemeContext";
import Home from "./pages/Home/Home";
import { SearchProvider } from "./components/SearchContext/SearchContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <SearchProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/About/:id?" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} /> */}
          </Routes>
          </SearchProvider>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
