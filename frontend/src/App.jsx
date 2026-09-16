// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import { ToastContainer } from "react-toastify";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Loader } from "lucide-react";

// // Layout Components
// import Navbar from "./components/Layout/Navbar";
// import Sidebar from "./components/Layout/Sidebar";
// import SearchOverlay from "./components/Layout/SearchOverlay";
// import CartSidebar from "./components/Layout/CartSidebar";
// import ProfilePanel from "./components/Layout/ProfilePanel";
// import LoginModal from "./components/Layout/LoginModal";
// import Footer from "./components/Layout/Footer";

// // Pages
// import Index from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Payment from "./pages/Payment";
// import About from "./pages/About";
// import FAQ from "./pages/FAQ";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";



// const App = () => {

//   // const { authUser, isCheckingAuth } = useSelector(
//   //   (state) => state.auth
//   // );

//   // if (isCheckingAuth && !authUser) {
//   //   return (
//   //     <div className="flex items-center justify-center h-screen">
//   //       <Loader className="size-10 animate-spin" />
//   //     </div>
//   //   );
//   // }

//   // Redux Popup State
//   const {
//     isSidebarOpen,
//     isSearchBarOpen,
//     isCartOpen,
//     isAuthPopupOpen,
//   } = useSelector((state) => state.popup);

//   return (
//     <ThemeProvider>
//       <BrowserRouter>
//         <div className="min-h-screen bg-background">
//           {/* Navbar */}
//           <Navbar />

//           {/* Popup Components */}
//           {isSidebarOpen && <Sidebar />}

//           {isSearchBarOpen && <SearchOverlay />}

//           {isCartOpen && <CartSidebar />}

//           {isAuthPopupOpen && <LoginModal />}

//           {/* Agar ProfilePanel hamesha dikhna chahiye to ise aise hi rakho */}
//           <ProfilePanel />

//           {/* Routes */}
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/password/reset/:token" element={<Index />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/payment" element={<Payment />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>

//           <Footer />
//         </div>

//         <ToastContainer />
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import { ToastContainer } from "react-toastify";

import { useSelector } from "react-redux";

import Navbar from "./components/Layout/Navbar";

import Sidebar from "./components/Layout/Sidebar";

import SearchOverlay from "./components/Layout/SearchOverlay";

import CartSidebar from "./components/Layout/CartSidebar";

import ProfilePanel from "./components/Layout/ProfilePanel";

import LoginModal from "./components/Layout/LoginModal";

import Footer from "./components/Layout/Footer";

// Pages
import Index from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  // Redux Popup State
  const {
    isSidebarOpen,
    isSearchBarOpen,
    isCartOpen,
    isAuthPopupOpen,
  } = useSelector((state) => state.popup);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">

          {/* Navbar */}
          <Navbar />

          {/* Popup Components */}
          {isSidebarOpen && <Sidebar />}

          {isSearchBarOpen && <SearchOverlay />}

          {isCartOpen && <CartSidebar />}

          {isAuthPopupOpen && <LoginModal />}

          {/* Profile Panel */}
          <ProfilePanel />

          {/* Routes */}
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Index />}
            />

            {/* Password Reset */}
            <Route
              path="/password/reset/:token"
              element={<Index />}
            />

            {/* Products / Shop */}
            <Route
              path="/products"
              element={<Products />}
            />

            {/* Product Details */}
            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />

            {/* Cart */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* Orders */}
            <Route
              path="/orders"
              element={<Orders />}
            />

            {/* Payment */}
            <Route
              path="/payment"
              element={<Payment />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* FAQ */}
            <Route
              path="/faq"
              element={<FAQ />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

          {/* Footer */}
          <Footer />

        </div>

        <ToastContainer />

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

