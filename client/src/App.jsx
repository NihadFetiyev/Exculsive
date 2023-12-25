import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./assets/scss/main.scss";
import BasketProvider from "./context/BasketContext";
import WishlistProvider from "./context/WishlistContext";
import MainLayout from './layouts/mainLayout';
import About from './pages/about';
import Contact from './pages/contact';
import Detail from "./pages/details";
import Error from './pages/error';
import Home from './pages/home';
import Login from "./pages/login";
import Signup from './pages/signup';
import WishList from "./pages/wishlist";
import PrivateRoute from "./routes/privateRoute";
import UserPage from "./pages/userpage";
import UserProvider from "./context/userContext";

function App() {

  return (
    <UserProvider>
      <WishlistProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Error />}></Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/wishlist" element={<WishList />}></Route>
                  <Route path="/user" element={<UserPage />}></Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </WishlistProvider>
    </UserProvider>
  );
}


export default App;
