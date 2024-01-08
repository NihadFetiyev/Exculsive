import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./assets/scss/main.scss";
import MainLayout from './layouts/mainLayout';
import About from './pages/about';
import Checkout from "./pages/checkout";
import Contact from './pages/contact';
import Detail from "./pages/details";
import Error from './pages/error';
import Home from './pages/home';
import Login from "./pages/login";
import ShopPage from "./pages/shop";
import Signup from './pages/signup';
import UserPage from "./pages/userpage";
import WishList from "./pages/wishlist";
import PrivateRoute from "./routes/privateRoute";
import Admin from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route element={<PrivateRoute role={["user", "Admin"]} />}>
            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="/user" element={<UserPage />}></Route>
          </Route>
          <Route element={<PrivateRoute role={["Admin"]} />} >
            <Route path="admin" element={<Admin />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
