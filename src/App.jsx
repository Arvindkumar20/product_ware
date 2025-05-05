import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/sections/Footer";
import React, { Suspense, lazy } from "react";
import FAQ from "./pages/FAQ";
import TipDetails from "./pages/beautyTips/TipDetails";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Scan = lazy(() => import("./pages/Scan"));
const Admin = lazy(() => import("./pages/Admin"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductListPage = lazy(() => import("./pages/products/ProductListPage"));
const ProductDetail = lazy(() => import("./pages/products/ProductDetail"));
const BeautyTips = lazy(() => import("./pages/beautyTips/BeautyTips"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Optional: loader component
const Loader = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <Navbar />
          <Toaster position="top-center" reverseOrder={false} />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/products" element={<ProductListPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/beauty-tips" element={<BeautyTips />} />
              <Route path="/beauty-tips/:title" element={<TipDetails />} />
              <Route
                path="/terms-and-condition"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route
                path="/scan"
                element={
                  // <ProtectedRoute>
                  <Scan />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminRequired>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}
