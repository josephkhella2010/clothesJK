import LoadingPage from "../LoadingPage/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "../ProductsPage/ProductsPage";
import SingleProductPage from "../SingleProductPage/SingleProductPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../Home/HomePage";

import NavigationContainer from "../navigation/NavigationContainer";
import AddCartPage from "../addCartPage/AddCartPage";
import AboutUSPage from "../AboutUsPage/AboutUSPage";
import ContactUsPage from "../ContactUsPage/ContactUsPage";

export default function PageRoutes() {
  return (
    <Router>
      <NavigationContainer />
      <Routes>
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addCart" element={<AddCartPage />} />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
        <Route path="/aboutUs" element={<AboutUSPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}
