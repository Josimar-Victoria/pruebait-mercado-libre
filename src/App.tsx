// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/searchResults/SearchResults";
import SearchBox from "./components/SearchBox/SearchBox";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer";
import "./App.css";
import FlashDeals from "./components/flashCard/FlashDeals";
import Discount from "./components/discount/Discount";

const App: React.FC = () => {
  return (
    <Router>
      <SearchBox />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />{" "}
        {/* Ruta para los resultados de búsqueda */}
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Ruta para la página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FlashDeals />
      <Discount />
      <Footer />
    </Router>
  );
};

export default App;
