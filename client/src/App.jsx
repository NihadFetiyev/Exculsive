import "../node_modules/bootstrap/scss/bootstrap.scss";
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/mainLayout';
import Signup from './pages/signup';
import Contact from './pages/contact';
import About from './pages/about';
import Error from './pages/error';
import "./assets/scss/main.scss"
import BasketProvider from "./context/BasketContext";

function App() {
  return (
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketProvider>
  );
}


export default App;
